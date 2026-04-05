import { ScanHistory } from "../models/scanHistory.model.js";
import { HealthData } from "../models/healthdata.model.js";
import { herbDrugInteractions, conditionContraindications, plantMedicinalInfo, plantNamesMap } from "../data/herbDrugInteractions.js";

const CONDITION_SYNONYMS = {
    Pregnancy: ["pregnan", "expecting", "conceiv", "fertility"],
    Diabetes: ["diabet", "blood sugar", "sugar", "insulin", "glucose"],
    "Blood pressure": ["blood pressure", "hypertension", "high bp", "bp", "hypotension", "low bp"],
    "Heart condition": ["heart", "cardiac", "arrhythm", "palpitation", "angina", "coronary"],
    "Bleeding disorder": ["bleed", "warfarin", "anticoagul", "blood thinner", "clot"],
    "Kidney disease": ["kidney", "renal", "ckd", "neph"],
    "Autoimmune disease": ["autoimmune", "lupus", "arthritis", "ms", "crohn", "ulcerative colitis", "hashimoto"],
    "Thyroid disorder": ["thyroid", "hyperthy", "hypothy", "tsh"],
    "Liver disease": ["liver", "hepatic", "cirrhos", "hepatitis", "fatty liver"],
    "Hormone-sensitive condition": ["pcos", "estrogen", "oestrogen", "hormone", "fibroid", "endometriosis"],
    "Seizure disorder": ["seizure", "epilep", "convulsion"],
    "Low blood pressure": ["low blood pressure", "hypotension", "low bp"]
};

const textHasAny = (text, needles) => needles.some((needle) => text.includes(needle));

const parseBloodPressure = (bloodPressure) => {
    if (!bloodPressure) return { systolic: null, diastolic: null };
    const parts = String(bloodPressure).match(/\d+/g)?.map(Number) || [];
    if (parts.length >= 2) return { systolic: parts[0], diastolic: parts[1] };
    if (parts.length === 1) return { systolic: parts[0], diastolic: null };
    return { systolic: null, diastolic: null };
};

const getProfileSignals = (familyMember) => {
    const conditionText = String(familyMember.anyOtherCondition || "").toLowerCase();
    const conditionTags = new Set();

    for (const [label, synonyms] of Object.entries(CONDITION_SYNONYMS)) {
        if (textHasAny(conditionText, synonyms)) {
            conditionTags.add(label);
        }
    }

    const { systolic, diastolic } = parseBloodPressure(familyMember.bloodPressure);
    const heartRate = Number(familyMember.heartRate);
    const weight = Number(familyMember.weight);
    const heightCm = Number(familyMember.height);
    const heightM = heightCm > 0 ? heightCm / 100 : null;
    const bmi = weight > 0 && heightM ? Number((weight / (heightM * heightM)).toFixed(1)) : null;

    return {
        conditionTags,
        conditionText,
        systolic,
        diastolic,
        heartRate: Number.isFinite(heartRate) ? heartRate : null,
        bmi,
        highBloodPressure:
            (systolic != null && systolic >= 140) ||
            (diastolic != null && diastolic >= 90) ||
            conditionTags.has("Blood pressure"),
        lowBloodPressure:
            (systolic != null && systolic < 90) ||
            (diastolic != null && diastolic < 60) ||
            conditionTags.has("Low blood pressure"),
        bradycardia: Number.isFinite(heartRate) && heartRate < 60,
        tachycardia: Number.isFinite(heartRate) && heartRate > 100,
        underweight: bmi != null && bmi < 18.5,
        obesity: bmi != null && bmi >= 30
    };
};

const addUnique = (arr, message) => {
    if (!arr.includes(message)) arr.push(message);
};

// Cross-check saved medications against plant's known interactions
const checkMedicationInteractions = (savedMedications, plantInteractions) => {
    const matched = [];
    const unmatched = [];

    for (const interaction of (plantInteractions || [])) {
        const interactionLower = interaction.toLowerCase();
        let found = false;

        for (const med of (savedMedications || [])) {
            const medName = (med.name || "").toLowerCase().trim();
            if (medName && interactionLower.includes(medName)) {
                matched.push({ medication: med.name, detail: interaction });
                found = true;
                break;
            }
        }

        if (!found) unmatched.push(interaction);
    }

    return { matched, unmatched };
};

const normalizeLocation = (location) => {
    const lat = Number(location?.lat);
    const lng = Number(location?.lng);
    return Number.isFinite(lat) && Number.isFinite(lng)
        ? { lat, lng }
        : { lat: null, lng: null };
};

// Helper function to check if plant name matches any in our database
// Matches by: common name (key), scientific name, or alternative common names
const findPlantInDatabase = (plantName) => {
    const normalizedName = plantName.toLowerCase().trim();

    // 1. Exact match on common name (key)
    for (const [key, value] of Object.entries(herbDrugInteractions)) {
        if (key.toLowerCase() === normalizedName) {
            return { name: key, data: value };
        }
    }

    // 2. Exact match on scientific name
    for (const [key, nameInfo] of Object.entries(plantNamesMap)) {
        if (nameInfo.scientificName.toLowerCase() === normalizedName) {
            return { name: key, data: herbDrugInteractions[key] };
        }
    }

    // 3. Exact match on any alternative common name
    for (const [key, nameInfo] of Object.entries(plantNamesMap)) {
        if (nameInfo.commonNames.some(cn => cn.toLowerCase() === normalizedName)) {
            return { name: key, data: herbDrugInteractions[key] };
        }
    }

    // 4. Partial match on common name (key)
    for (const [key, value] of Object.entries(herbDrugInteractions)) {
        if (normalizedName.includes(key.toLowerCase()) || key.toLowerCase().includes(normalizedName)) {
            return { name: key, data: value };
        }
    }

    // 5. Partial match on scientific name
    for (const [key, nameInfo] of Object.entries(plantNamesMap)) {
        if (normalizedName.includes(nameInfo.scientificName.toLowerCase()) ||
            nameInfo.scientificName.toLowerCase().includes(normalizedName)) {
            return { name: key, data: herbDrugInteractions[key] };
        }
    }

    // 6. Partial match on any alternative common name
    for (const [key, nameInfo] of Object.entries(plantNamesMap)) {
        if (nameInfo.commonNames.some(cn =>
            normalizedName.includes(cn.toLowerCase()) || cn.toLowerCase().includes(normalizedName)
        )) {
            return { name: key, data: herbDrugInteractions[key] };
        }
    }

    return null;
};

// Helper function to check safety based on health conditions
const checkConditionSafety = (plantName, profileSignals) => {
    const warnings = [];

    for (const [condition, plants] of Object.entries(conditionContraindications)) {
        const isMatched =
            profileSignals.conditionTags.has(condition) ||
            profileSignals.conditionText.includes(condition.toLowerCase());

        if (isMatched && plants.includes(plantName)) {
            warnings.push(`⚠️ Avoid: ${plantName} is not recommended for people with ${condition}`);
        }
    }

    return warnings;
};

const checkVitalSafety = (plantName, data, familyMember) => {
    const warnings = [];
    const recommendations = [];
    const profileSignals = getProfileSignals(familyMember);
    const profileText = [
        ...(data.interactions || []),
        ...(data.contraindications || []),
        ...(data.warnings || [])
    ].join(" ").toLowerCase();

    if (profileSignals.highBloodPressure && textHasAny(profileText, ["blood pressure", "heart", "cardiac", "stimulant", "caffeine"])) {
        addUnique(warnings, `⚠️ Caution: ${plantName} may need extra caution because this profile shows elevated blood-pressure risk.`);
    }

    if (profileSignals.lowBloodPressure && textHasAny(profileText, ["low blood pressure", "hypotension", "blood pressure"])) {
        addUnique(warnings, `⚠️ Caution: ${plantName} may lower blood pressure further for this family member.`);
    }

    if (profileSignals.bradycardia && textHasAny(profileText, ["bradycardia", "slow heart rate", "heart", "sedative"])) {
        addUnique(warnings, `⚠️ Caution: ${plantName} may not be ideal when heart rate is already on the lower side.`);
    }

    if (profileSignals.tachycardia && textHasAny(profileText, ["stimulant", "caffeine", "rapid heartbeat", "heart"])) {
        addUnique(warnings, `⚠️ Caution: ${plantName} may aggravate a fast heart rate or palpitations.`);
    }

    if (profileSignals.underweight && textHasAny(profileText, ["laxative", "diarrhoea", "dehydration", "diuretic"])) {
        addUnique(warnings, `⚠️ Caution: ${plantName} has dehydrating or bowel-moving effects that may be too strong for a lower-weight profile.`);
    }

    if (profileSignals.bmi != null) {
        if (profileSignals.underweight) {
            addUnique(recommendations, `📏 BMI check: ${familyMember.name}'s BMI is about ${profileSignals.bmi}. Start at the lowest suggested dose and avoid dehydrating preparations unless advised.`);
        } else if (profileSignals.obesity) {
            addUnique(recommendations, `📏 BMI check: ${familyMember.name}'s BMI is about ${profileSignals.bmi}. Monitor blood pressure and blood sugar response closely with medicinal herbs.`);
        }
    }

    if (profileSignals.systolic != null || profileSignals.diastolic != null) {
        addUnique(recommendations, `🩺 Blood pressure considered: ${familyMember.bloodPressure || "recorded"} was checked as part of this safety review.`);
    }

    if (profileSignals.heartRate != null) {
        addUnique(recommendations, `❤️ Heart rate considered: ${familyMember.heartRate} bpm was included in the safety review.`);
    }

    return { warnings, recommendations, profileSignals };
};

// Main safety check function
export const checkPlantSafety = async (req, res) => {
    try {
        const { plantName, probability, familyMemberId, lat, lng, plantCommonNames } = req.body;
        const userId = req.user?.id;

        if (!plantName || !familyMemberId) {
            return res.status(400).json({
                success: false,
                message: "Plant name and family member ID are required"
            });
        }

        // Get family member health data
        const familyMember = await HealthData.findOne({
            _id: familyMemberId,
            user: userId
        });

        if (!familyMember) {
            return res.status(404).json({
                success: false,
                message: "Family member not found"
            });
        }

        // Find plant in our database
        const plantData = findPlantInDatabase(plantName);

        let safetyRating = "SAFE";
        let warnings = [];
        let recommendations = [];
        let medicinalUses = [];
        let preparationMethods = [];
        let scientificName = null;
        let commonNames = [];

        if (plantData) {
            const { name: matchedPlantName, data } = plantData;

            // Enrich with scientific name and common names
            const nameInfo = plantNamesMap[matchedPlantName];
            if (nameInfo) {
                scientificName = nameInfo.scientificName;
                commonNames = nameInfo.commonNames;
            }
            
            // Check for contraindications based on health conditions
            const profileSignals = getProfileSignals(familyMember);
            const conditionWarnings = checkConditionSafety(matchedPlantName, profileSignals);
            warnings.push(...conditionWarnings);

            const vitalAssessment = checkVitalSafety(matchedPlantName, data, familyMember);
            warnings.push(...vitalAssessment.warnings);
            recommendations.push(...vitalAssessment.recommendations);
            
            // Check herb-drug interactions — personalised against saved medications
            const { matched: matchedMeds, unmatched: unmatchedInteractions } =
                checkMedicationInteractions(familyMember.medications, data.interactions);

            // Personalised: flag interactions with medications this person actually takes
            for (const { medication, detail } of matchedMeds) {
                addUnique(warnings, `💊 Medication alert: ${familyMember.name} takes ${medication} — ${detail}`);
            }

            // Generic: if no personal medications saved, show full list; otherwise show remainder as info
            if (data.interactions && data.interactions.length > 0) {
                if (matchedMeds.length === 0) {
                    // No personal meds to match against — show generic list
                    warnings.push(`💊 Drug Interactions: ${data.interactions.join(", ")}`);
                } else if (unmatchedInteractions.length > 0) {
                    // Show other known interactions as informational
                    recommendations.push(`ℹ️ Other known interactions (not specific to saved medications): ${unmatchedInteractions.join(", ")}`);
                }
            }
            
            // Check contraindications
            if (data.contraindications && data.contraindications.length > 0) {
                warnings.push(`🚫 Contraindications: ${data.contraindications.join(", ")}`);
            }
            
            // Add general warnings
            if (data.warnings && data.warnings.length > 0) {
                warnings.push(...data.warnings.map(w => `⚡ ${w}`));
            }
            
            // Determine safety rating
            if (warnings.some(w => w.includes("Avoid") || w.includes("not recommended"))) {
                safetyRating = "AVOID";
            } else if (warnings.length > 0) {
                safetyRating = "CAUTION";
            }
            
            // Get medicinal info
            const medInfo = plantMedicinalInfo[matchedPlantName];
            if (medInfo) {
                medicinalUses = medInfo.uses || [];
                preparationMethods = medInfo.preparation || [];
                
                // Add dosage recommendation
                if (medInfo.dosage) {
                    recommendations.push(`📏 Dosage: ${medInfo.dosage}`);
                }
            }
        } else {
            // Plant not in our database
            recommendations.push("ℹ️ This plant is not in our medicinal database. Please consult a healthcare professional before use.");
            warnings.push("⚠️ Unknown plant - safety information unavailable");
            safetyRating = "CAUTION";
        }
        
        // Add general recommendations based on safety rating
        if (safetyRating === "SAFE") {
            recommendations.unshift("✅ This plant is generally safe for use based on the profile provided.");
        } else if (safetyRating === "CAUTION") {
            recommendations.unshift("⚠️ Consult a healthcare provider before using this plant, especially if you have existing health conditions or take medications.");
        } else if (safetyRating === "AVOID") {
            recommendations.unshift("❌ Avoid using this plant. It may be harmful based on the health profile provided.");
        }

        // Merge common names: Plant.id names + DB names (deduplicated)
        const mergedCommonNames = [
            ...(Array.isArray(plantCommonNames) ? plantCommonNames : []),
            ...commonNames
        ].filter((v, i, a) => v && a.findIndex(x => x.toLowerCase() === v.toLowerCase()) === i);

        // Save to scan history
        const scanHistory = new ScanHistory({
            user: userId,
            familyMemberId,
            familyMemberName: familyMember.name,
            plantName: plantData ? plantData.name : plantName,
            scientificName,
            commonNames: mergedCommonNames,
            probability: probability || 0,
            safetyRating,
            warnings,
            recommendations,
            medicinalUses,
            preparationMethods,
            location: (lat != null && lng != null) ? { lat, lng } : { lat: null, lng: null }
        });
        await scanHistory.save();

        res.status(200).json({
            success: true,
            data: {
                plantName: plantData ? plantData.name : plantName,
                scientificName,
                commonNames,
                familyMemberName: familyMember.name,
                probability,
                safetyRating,
                warnings,
                recommendations,
                medicinalUses,
                preparationMethods,
                scannedAt: scanHistory.createdAt
            }
        });

    } catch (error) {
        console.error("Safety check error:", error);
        res.status(500).json({
            success: false,
            message: error.message || "Failed to check plant safety"
        });
    }
};

// Get scan history for a user
export const getScanHistory = async (req, res) => {
    try {
        const userId = req.user?.id;
        const { familyMemberId } = req.query;

        const query = { user: userId };
        if (familyMemberId) {
            query.familyMemberId = familyMemberId;
        }

        const history = await ScanHistory.find(query)
            .sort({ createdAt: -1 })
            .limit(50);

        res.status(200).json({
            success: true,
            data: history.map((scan) => ({
                ...scan.toObject(),
                location: normalizeLocation(scan.location)
            }))
        });

    } catch (error) {
        console.error("Get scan history error:", error);
        res.status(500).json({
            success: false,
            message: error.message || "Failed to get scan history"
        });
    }
};

// Get community plant sightings (anonymised — plant name + location only)
export const getCommunitySightings = async (req, res) => {
    try {
        const sightings = await ScanHistory.find({
            "location.lat": { $ne: null },
            "location.lng": { $ne: null }
        })
        .select("plantName location safetyRating createdAt -_id")
        .sort({ createdAt: -1 })
        .limit(200);

        res.status(200).json({
            success: true,
            data: sightings
                .map((sighting) => ({
                    ...sighting.toObject(),
                    location: normalizeLocation(sighting.location)
                }))
                .filter((sighting) => sighting.location.lat != null && sighting.location.lng != null)
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Search plants in database
export const searchPlants = async (req, res) => {
    try {
        const { q } = req.query;
        if (!q || q.trim().length < 2) {
            return res.status(400).json({ success: false, message: "Search query must be at least 2 characters" });
        }

        const query = q.toLowerCase().trim();
        const results = [];

        for (const [name, data] of Object.entries(herbDrugInteractions)) {
            const nameInfo = plantNamesMap[name] || {};
            const allNames = [name, nameInfo.scientificName || "", ...(nameInfo.commonNames || [])];
            const matches = allNames.some(n => n.toLowerCase().includes(query));

            if (matches) {
                const medInfo = plantMedicinalInfo[name] || {};
                results.push({
                    name,
                    scientificName: nameInfo.scientificName || null,
                    commonNames: nameInfo.commonNames || [],
                    interactions: data.interactions || [],
                    contraindications: data.contraindications || [],
                    warnings: data.warnings || [],
                    medicinalUses: medInfo.uses || [],
                    preparationMethods: medInfo.preparation || [],
                    dosage: medInfo.dosage || null,
                });
            }
        }

        res.status(200).json({ success: true, data: results });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Get all plants (for Plant of the Day, comparison, etc.)
export const getAllPlants = async (req, res) => {
    try {
        const plants = Object.entries(herbDrugInteractions).map(([name, data]) => {
            const nameInfo = plantNamesMap[name] || {};
            const medInfo = plantMedicinalInfo[name] || {};
            return {
                name,
                scientificName: nameInfo.scientificName || null,
                commonNames: nameInfo.commonNames || [],
                interactionCount: (data.interactions || []).length,
                contraindications: data.contraindications || [],
                warnings: data.warnings || [],
                medicinalUses: medInfo.uses || [],
                preparationMethods: medInfo.preparation || [],
                dosage: medInfo.dosage || null,
            };
        });
        res.status(200).json({ success: true, data: plants });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Get scan history by ID
export const getScanById = async (req, res) => {
    try {
        const { id } = req.params;
        const userId = req.user?.id;

        const scan = await ScanHistory.findOne({ _id: id, user: userId });

        if (!scan) {
            return res.status(404).json({
                success: false,
                message: "Scan not found"
            });
        }

        res.status(200).json({
            success: true,
            data: scan
        });

    } catch (error) {
        console.error("Get scan error:", error);
        res.status(500).json({
            success: false,
            message: error.message || "Failed to get scan"
        });
    }
};
