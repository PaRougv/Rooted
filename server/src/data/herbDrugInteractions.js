// Herb-Drug Interactions Database
// This is a simplified version - in production, this would be a comprehensive database

export const herbDrugInteractions = {
    // Common medicinal plants and their interactions
    "Aloe Vera": {
        interactions: ["Diabetes medications", "Laxatives", "Heart medications"],
        contraindications: ["Pregnancy", "Kidney disease"],
        warnings: ["May lower blood sugar", "Can cause electrolyte imbalance"]
    },
    "Turmeric": {
        interactions: ["Blood thinners (Warfarin)", "Diabetes medications", "Antacids"],
        contraindications: ["Gallbladder disease", "Bleeding disorders"],
        warnings: ["May increase bleeding risk", "Can worsen gallbladder problems"]
    },
    "Ginger": {
        interactions: ["Blood thinners", "Diabetes medications", "High blood pressure medications"],
        contraindications: ["Bleeding disorders", "Heart conditions"],
        warnings: ["May increase bleeding risk at high doses"]
    },
    "Garlic": {
        interactions: ["Blood thinners", "HIV medications", "Birth control pills"],
        contraindications: ["Bleeding disorders", "Upcoming surgery"],
        warnings: ["May increase bleeding risk", "Strong blood thinner effect"]
    },
    "Tulsi": {
        interactions: ["Blood thinners", "Diabetes medications"],
        contraindications: ["Pregnancy", "Trying to conceive"],
        warnings: ["May affect fertility", "Can lower blood sugar"]
    },
    "Neem": {
        interactions: ["Diabetes medications", "Immunosuppressants"],
        contraindications: ["Pregnancy", "Autoimmune diseases", "Infertility"],
        warnings: ["May lower blood sugar significantly", "Can affect fertility"]
    },
    "Ashwagandha": {
        interactions: ["Sedatives", "Thyroid medications", "Immunosuppressants"],
        contraindications: ["Pregnancy", "Autoimmune diseases", "Thyroid disorders"],
        warnings: ["May cause drowsiness", "Can affect thyroid hormone levels"]
    },
    "Peppermint": {
        interactions: ["Acid reflux medications", "Blood pressure medications"],
        contraindications: ["Hiatal hernia", "Gallstones"],
        warnings: ["May worsen acid reflux in some people"]
    },
    "Chamomile": {
        interactions: ["Blood thinners", "Sedatives"],
        contraindications: ["Pregnancy", "Allergies to ragweed/daisies"],
        warnings: ["May cause allergic reactions", "Can increase sedation"]
    },
    "Lavender": {
        interactions: ["Sedatives", "Blood pressure medications"],
        contraindications: ["Hormone-sensitive conditions"],
        warnings: ["May cause drowsiness", "Hormonal effects"]
    },
    "Eucalyptus": {
        interactions: ["Diabetes medications"],
        contraindications: ["Pregnancy", "Young children", "Seizure disorders"],
        warnings: ["Toxic if ingested - external use only", "Can affect blood sugar"]
    },
    "Basil": {
        interactions: ["Blood thinners"],
        contraindications: ["Bleeding disorders"],
        warnings: ["Generally safe in culinary amounts"]
    }
};

// Common conditions and plants to avoid
export const conditionContraindications = {
    "Pregnancy": ["Aloe Vera", "Tulsi", "Neem", "Ashwagandha", "Chamomile", "Eucalyptus"],
    "Diabetes": ["Aloe Vera", "Turmeric", "Ginger", "Garlic", "Tulsi", "Neem", "Eucalyptus"],
    "Blood pressure": ["Ginger", "Lavender"],
    "Heart condition": ["Ginger", "Garlic", "Lavender"],
    "Bleeding disorder": ["Turmeric", "Ginger", "Garlic", "Tulsi", "Chamomile", "Basil"],
    "Kidney disease": ["Aloe Vera"],
    "Autoimmune disease": ["Neem", "Ashwagandha"],
    "Thyroid disorder": ["Ashwagandha"]
};

// Plant medicinal uses database
export const plantMedicinalInfo = {
    "Aloe Vera": {
        uses: ["Skin healing", "Burns and sunburn", "Constipation", "Wound healing"],
        preparation: ["Apply gel to skin", "Drink juice diluted with water"],
        dosage: "Topical: As needed. Oral: 1-2 tablespoons of juice"
    },
    "Turmeric": {
        uses: ["Anti-inflammatory", "Antioxidant", "Joint pain", "Digestive aid"],
        preparation: ["Golden milk (with milk and honey)", "Add to food", "Turmeric tea"],
        dosage: "500-2000mg per day"
    },
    "Ginger": {
        uses: ["Nausea relief", "Digestive aid", "Anti-inflammatory", "Cold remedy"],
        preparation: ["Ginger tea", "Add to food", "Chew fresh ginger"],
        dosage: "1-3 grams per day"
    },
    "Garlic": {
        uses: ["Immune support", "Heart health", "Antimicrobial", "Blood pressure"],
        preparation: ["Eat raw", "Add to food", "Garlic tea"],
        dosage: "1-2 cloves per day"
    },
    "Tulsi": {
        uses: ["Stress relief", "Immune support", "Respiratory health", "Anti-inflammatory"],
        preparation: ["Tulsi tea", "Chew fresh leaves", "Add to food"],
        dosage: "2-3 cups of tea per day"
    },
    "Neem": {
        uses: ["Skin health", "Blood purification", "Antimicrobial", "Dental health"],
        preparation: ["Neem tea", "Apply oil to skin", "Neem leaf paste"],
        dosage: "Consult healthcare provider"
    },
    "Ashwagandha": {
        uses: ["Stress relief", "Energy booster", "Sleep aid", "Immune support"],
        preparation: ["Mix powder with milk", "Ashwagandha tea", "Capsules"],
        dosage: "300-500mg twice daily"
    },
    "Peppermint": {
        uses: ["Digestive aid", "Headache relief", "Respiratory health", "Stress relief"],
        preparation: ["Peppermint tea", "Essential oil (external)", "Add to food"],
        dosage: "1-2 cups of tea per day"
    },
    "Chamomile": {
        uses: ["Sleep aid", "Anxiety relief", "Digestive aid", "Skin soothing"],
        preparation: ["Chamomile tea", "Essential oil (external)", "Bath soak"],
        dosage: "1-3 cups of tea per day"
    },
    "Lavender": {
        uses: ["Stress relief", "Sleep aid", "Headache relief", "Skin healing"],
        preparation: ["Essential oil (aromatherapy)", "Lavender tea", "Bath soak"],
        dosage: "Aromatherapy or 1-2 cups of tea"
    },
    "Eucalyptus": {
        uses: ["Respiratory health", "Congestion relief", "Antimicrobial"],
        preparation: ["Steam inhalation", "Essential oil (external only)", "Eucalyptus tea"],
        dosage: "External use only unless under supervision"
    },
    "Basil": {
        uses: ["Stress relief", "Anti-inflammatory", "Digestive aid", "Immune support"],
        preparation: ["Basil tea", "Add to food", "Chew fresh leaves"],
        dosage: "Culinary amounts are safe"
    }
};
