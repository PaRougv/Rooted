import { ScanHistory } from "../models/scanHistory.model.js";
import { HealthData } from "../models/healthdata.model.js";
import { herbDrugInteractions, conditionContraindications, plantMedicinalInfo } from "../data/herbDrugInteractions.js";

// Helper function to check if plant name matches any in our database
const findPlantInDatabase = (plantName) => {
    const normalizedName = plantName.toLowerCase();
    
    // Check for exact match first
    for (const [key, value] of Object.entries(herbDrugInteractions)) {
        if (key.toLowerCase() === normalizedName) {
            return { name: key, data: value };
        }
    }
    
    // Check for partial match
    for (const [key, value] of Object.entries(herbDrugInteractions)) {
        if (normalizedName.includes(key.toLowerCase()) || 
            key.toLowerCase().includes(normalizedName)) {
            return { name: key, data: value };
        }
    }
    
    return null;
};

// Helper function to check safety based on health conditions
const checkConditionSafety = (plantName, conditions) => {
    const warnings = [];
    
    if (!conditions) return warnings;
    
    const normalizedConditions = conditions.toLowerCase();
    
    for (const [condition, plants] of Object.entries(conditionContraindications)) {
        if (normalizedConditions.includes(condition.toLowerCase())) {
            if (plants.includes(plantName)) {
                warnings.push(`⚠️ Avoid: ${plantName} is not recommended for people with ${condition}`);
            }
        }
    }
    
    return warnings;
};

// Main safety check function
export const checkPlantSafety = async (req, res) => {
    try {
        const { plantName, probability, familyMemberId } = req.body;
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

        if (plantData) {
            const { name: matchedPlantName, data } = plantData;
            
            // Check for contraindications based on health conditions
            const conditionWarnings = checkConditionSafety(matchedPlantName, familyMember.anyOtherCondition);
            warnings.push(...conditionWarnings);
            
            // Check herb-drug interactions
            if (data.interactions && data.interactions.length > 0) {
                warnings.push(`💊 Drug Interactions: ${data.interactions.join(", ")}`);
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

        // Save to scan history
        const scanHistory = new ScanHistory({
            user: userId,
            familyMemberId,
            familyMemberName: familyMember.name,
            plantName,
            probability: probability || 0,
            safetyRating,
            warnings,
            recommendations,
            medicinalUses,
            preparationMethods
        });
        await scanHistory.save();

        res.status(200).json({
            success: true,
            data: {
                plantName,
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
            data: history
        });

    } catch (error) {
        console.error("Get scan history error:", error);
        res.status(500).json({
            success: false,
            message: error.message || "Failed to get scan history"
        });
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
