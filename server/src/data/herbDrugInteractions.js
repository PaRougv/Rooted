// Herb-Drug Interactions & Medicinal Plant Safety Database
// Covers 80+ common medicinal plants with interactions, contraindications, and uses

export const herbDrugInteractions = {

    // ── Core kitchen & Ayurvedic herbs ───────────────────────────────────────

    "Aloe Vera": {
        interactions: ["Warfarin (increased bleeding risk)", "Metformin / Glipizide (additive hypoglycaemia)", "Furosemide / Hydrochlorothiazide (potassium loss)", "Digoxin (hypokalaemia increases toxicity)", "Sevoflurane (excessive bleeding during anaesthesia)"],
        contraindications: ["Pregnancy (oral use — uterotonic)", "Kidney disease", "Crohn's disease", "Ulcerative colitis", "Children under 12 (oral latex)"],
        warnings: ["Oral aloe latex is a powerful stimulant laxative — not the same as gel", "Can cause dangerous hypokalaemia with long-term oral use", "May lower blood glucose — monitor levels if diabetic"]
    },
    "Turmeric": {
        interactions: ["Warfarin / Clopidogrel / Aspirin (additive antiplatelet effect)", "Metformin / Insulin (additive hypoglycaemia)", "Omeprazole / Ranitidine (curcumin reduces acid secretion)", "Paclitaxel / Doxorubicin (may reduce chemo efficacy in some studies)", "Iron supplements (curcumin chelates iron)"],
        contraindications: ["Gallbladder obstruction or bile-duct stones", "Active bleeding disorders", "Iron-deficiency anaemia"],
        warnings: ["High-dose supplements (>2 g/day) significantly increase bleeding risk", "Curcumin bioavailability is low — piperine (black pepper) enhances absorption but also raises drug plasma levels", "Avoid 2 weeks before surgery"]
    },
    "Ginger": {
        interactions: ["Warfarin / Aspirin / Clopidogrel (additive anticoagulant effect)", "Metformin / Glibenclamide (additive hypoglycaemia)", "Amlodipine / Atenolol (additive hypotension)", "Phenprocoumon (increased INR reported)"],
        contraindications: ["Active bleeding disorders", "Severe heart disease", "Gallstones (stimulates bile flow)"],
        warnings: ["Limit to <4 g/day during pregnancy — higher doses stimulate uterus", "Avoid 1 week before surgery", "May cause heartburn in sensitive individuals"]
    },
    "Garlic": {
        interactions: ["Warfarin / Aspirin (additive anticoagulant — INR increase documented)", "Saquinavir (reduces plasma levels by ~50%)", "Ritonavir / other HIV PIs (similar CYP3A4 induction)", "Isoniazid (reduces absorption)", "Combined oral contraceptives (theoretical interaction)"],
        contraindications: ["Bleeding disorders", "Scheduled surgery within 7 days"],
        warnings: ["Raw garlic supplements have stronger blood-thinning effects than cooked garlic", "Discontinue 7–10 days before surgery", "Can cause GI irritation — take with food"]
    },
    "Tulsi": {
        interactions: ["Warfarin / Aspirin (mild antiplatelet effect)", "Metformin / Glipizide (additive hypoglycaemia)", "Diazepam / Lorazepam (additive sedation)", "Phenobarbitone (may alter metabolism)"],
        contraindications: ["Pregnancy (uterotonic at high doses)", "Couples trying to conceive (reduces sperm motility in animal studies)"],
        warnings: ["May lower blood glucose — monitor if diabetic", "Euganol in tulsi has mild anticoagulant properties", "Generally safe in culinary leaf amounts"]
    },
    "Neem": {
        interactions: ["Metformin / Insulin (significant additive hypoglycaemia)", "Ciclosporin / Tacrolimus (antagonises immunosuppression)", "Lithium (may alter plasma levels)"],
        contraindications: ["Pregnancy (abortifacient at high doses)", "Autoimmune diseases (immune stimulation)", "Children under 12 (toxic — never give internally)", "Couples trying to conceive"],
        warnings: ["Neem oil is toxic if ingested — external use only", "Leaf extracts can lower blood sugar dramatically", "Do not use internally in children — risk of Reye-like syndrome"]
    },
    "Ashwagandha": {
        interactions: ["Benzodiazepines / Zolpidem (additive CNS depression)", "Levothyroxine (may increase T4/T3 — monitor TSH)", "Ciclosporin / Tacrolimus (immune stimulation counteracts)", "Prednisolone / Methylprednisolone (may enhance or oppose immune effects)"],
        contraindications: ["Pregnancy (uterotonic)", "Hyperthyroidism / Graves' disease", "Active autoimmune conditions (RA, lupus, MS)"],
        warnings: ["Can raise thyroid hormone levels — recheck TSH after 4 weeks", "May cause excessive drowsiness when combined with sedatives", "Avoid in hormone-sensitive cancers (androgenic activity)"]
    },
    "Peppermint": {
        interactions: ["Omeprazole / Esomeprazole (enteric coating of peppermint oil capsules dissolved prematurely)", "Amlodipine / Felodipine (menthol inhibits CYP3A4)", "Ciclosporin (CYP3A4 inhibition raises plasma levels)"],
        contraindications: ["Hiatal hernia (relaxes lower oesophageal sphincter)", "Gallstones (stimulates bile)", "Infants and young children — menthol causes respiratory arrest"],
        warnings: ["Never apply menthol or peppermint oil near a child's face or nostrils", "May worsen GERD — use enteric-coated capsules for IBS", "Avoid applying undiluted essential oil to skin"]
    },
    "Chamomile": {
        interactions: ["Warfarin (coumarin content — increased INR)", "Diazepam / Alprazolam (additive sedation)", "Ciclosporin (possible CYP3A4 interaction)", "Tamoxifen (phytoestrogenic — theoretical antagonism)"],
        contraindications: ["Pregnancy (uterotonic at medicinal doses)", "Asteraceae allergy (ragweed, chrysanthemum, daisy cross-reactivity)"],
        warnings: ["Anaphylaxis reported in people with ragweed allergy", "Additive sedation with sleep medications or alcohol", "Safe in moderate tea amounts — supplements are higher dose"]
    },
    "Lavender": {
        interactions: ["Lorazepam / Diazepam / Clonazepam (additive CNS depression)", "Amlodipine / Propranolol (mild additive hypotension)", "Chlorpromazine / Haloperidol (additive sedation)"],
        contraindications: ["Prepubescent boys (topical lavender/tea tree — gynaecomastia reported)", "Hormone-sensitive cancers (weak oestrogenic activity)"],
        warnings: ["Oral lavender supplements (Silexan) interact with CNS depressants", "Do not ingest essential oil — hepatotoxic in large amounts", "May cause skin sensitisation with prolonged topical use"]
    },
    "Eucalyptus": {
        interactions: ["Metformin / Glibenclamide (additive hypoglycaemia)", "Drugs metabolised by CYP1A2 / CYP2C9 / CYP3A4 (1,8-cineole induction — reduces plasma levels of many drugs)", "Phenobarbitone / Phenytoin (additive CYP induction)"],
        contraindications: ["Pregnancy and breastfeeding", "Children under 6 (internal — fatal toxicity risk)", "Epilepsy", "Severe liver or kidney disease"],
        warnings: ["Even small oral doses of eucalyptus oil can be fatal in children", "Use only as steam inhalation or diluted topically", "Can reduce efficacy of medications metabolised by the liver"]
    },
    "Basil": {
        interactions: ["Warfarin / Aspirin (eugenol has antiplatelet activity)", "Insulin / Oral hypoglycaemics (mild additive effect)"],
        contraindications: ["Active bleeding disorders (high-dose supplements)"],
        warnings: ["Culinary amounts are safe", "High-dose basil supplements (>5 g eugenol) may affect blood clotting", "Holy basil (Tulsi) has stronger pharmacological effects than sweet basil"]
    },

    // ── Spices & common kitchen plants ───────────────────────────────────────

    "Cinnamon": {
        interactions: ["Metformin / Glipizide / Insulin (additive hypoglycaemia — significant)", "Warfarin (coumarin content increases INR)", "Rifampicin / Isoniazid (CYP induction)", "Tetracycline antibiotics (may reduce absorption)"],
        contraindications: ["Hepatic impairment (Cassia cinnamon coumarin is hepatotoxic)", "Pregnancy in large amounts"],
        warnings: ["Cassia cinnamon (common variety) contains hepatotoxic coumarin — use Ceylon cinnamon for supplements", "Can cause significant blood glucose lowering — monitor levels", "Safe in normal cooking quantities"]
    },
    "Moringa": {
        interactions: ["Levothyroxine (may alter T3/T4 levels)", "Metformin / Insulin (additive blood sugar lowering)", "Atenolol / Lisinopril (additive antihypertensive effect)"],
        contraindications: ["Pregnancy (root, bark, and flowers are uterotonic — leaves safer)", "Breastfeeding (bark/root)", "Hypothyroidism"],
        warnings: ["Root and bark should never be used during pregnancy", "Moringa leaves are nutritionally safe in food amounts", "May enhance effects of antihypertensive and antidiabetic drugs"]
    },
    "Brahmi": {
        interactions: ["Phenytoin / Carbamazepine (increases seizure-medication plasma levels)", "Levothyroxine (may raise T4 — monitor TSH)", "Rivastigmine / Donepezil (additive acetylcholinesterase inhibition)", "Diazepam / Alprazolam (additive sedation)", "Atropine / Hyoscine (pharmacological antagonism)"],
        contraindications: ["Hyperthyroidism", "Bradycardia (slows heart rate via cholinergic activity)", "Pregnancy", "Active peptic ulcer"],
        warnings: ["Takes 8–12 weeks for cognitive effects — do not discontinue prematurely", "May increase bradycardia risk — check pulse regularly", "Always take with food to prevent nausea"]
    },
    "Shatavari": {
        interactions: ["Furosemide / Spironolactone (additive diuretic — may cause dehydration)", "Lithium (diuretic effect increases lithium toxicity risk)", "Tamoxifen / Anastrozole (phytoestrogen antagonism)"],
        contraindications: ["Oestrogen-receptor-positive breast, ovarian, or uterine cancer", "Kidney disease", "Oedema of unknown origin"],
        warnings: ["Acts as a phytoestrogen — discuss with oncologist if history of hormone-sensitive cancer", "High doses may cause fluid retention", "Avoid with oestrogen-containing contraceptives or HRT"]
    },
    "Amla": {
        interactions: ["Warfarin / Aspirin (additive anticoagulant effect)", "Metformin / Insulin (additive hypoglycaemia)", "Aluminium-containing antacids (Vitamin C increases aluminium absorption)"],
        contraindications: ["Active bleeding disorders", "Hypoglycaemia", "Surgery within 1 week"],
        warnings: ["Extremely high Vitamin C content (600–900 mg/100 g) enhances iron absorption — beneficial in anaemia but may cause GI upset", "May lower blood sugar significantly in diabetics", "Can cause constipation in some and diarrhoea in others depending on dose"]
    },
    "Fenugreek": {
        interactions: ["Metformin / Glibenclamide / Insulin (significant additive hypoglycaemia)", "Warfarin (anticoagulant effect)", "Levothyroxine (may impair absorption — space by 4 hours)", "Combined oral contraceptives (phytoestrogenic effects)"],
        contraindications: ["Pregnancy in large medicinal doses (oxytocic)", "Peanut / chickpea allergy (cross-reactivity)", "Hormone-sensitive conditions"],
        warnings: ["Can cause blood glucose to drop sharply — monitor closely", "Seeds cause maple-syrup odour in sweat/urine — benign but notable", "Stimulates uterine contractions — use culinary amounts only during pregnancy"]
    },
    "Lemongrass": {
        interactions: ["Furosemide / Hydrochlorothiazide (additive diuresis and potassium loss)", "Amlodipine / Losartan (additive antihypertensive effect)", "Metformin (mild additive blood sugar lowering)"],
        contraindications: ["Pregnancy (medicinal doses)", "Kidney disease"],
        warnings: ["Diuretic effect may worsen dehydration in hot climates or athletes", "Never ingest essential oil — GI toxicity", "Safe in tea or culinary amounts"]
    },
    "Rosemary": {
        interactions: ["Warfarin (anticoagulant effect)", "Ramipril / Captopril (ACE inhibitors — additive BP lowering)", "Furosemide (additive diuresis)", "Lithium (diuresis increases lithium levels)"],
        contraindications: ["Epilepsy (high-dose rosemary oil lowers seizure threshold)", "Pregnancy in large amounts (stimulates uterus)", "Active bleeding disorders"],
        warnings: ["Large oral doses of rosemary essential oil can trigger seizures", "May raise blood pressure with very high doses despite ACE interaction", "Safe in culinary and tea amounts"]
    },
    "Sage": {
        interactions: ["Phenytoin / Valproate (thujone may reduce seizure threshold)", "Diazepam / Clonazepam (additive CNS depression)", "Metformin (mild hypoglycaemia)", "Tamoxifen / Oestradiol (oestrogenic activity)"],
        contraindications: ["Hormone-sensitive conditions", "Pregnancy (emmenagogue)", "Breastfeeding (anti-galactagogue)", "Epilepsy"],
        warnings: ["Contains thujone — toxic in large doses (causes convulsions)", "Reduces breast milk supply — avoid if breastfeeding", "Medicinal use: 1–3 cups/day maximum, cycle off every 2 weeks"]
    },
    "Thyme": {
        interactions: ["Warfarin / Aspirin (thymol has antiplatelet activity)", "Combined oral contraceptives (phytoestrogenic activity)"],
        contraindications: ["Hormone-sensitive conditions (oestrogenic)", "Active bleeding disorders"],
        warnings: ["Culinary use is entirely safe", "High-dose thyme oil has antimicrobial and antiplatelet properties", "May mildly affect oestrogen levels — relevant in hormone-sensitive conditions"]
    },
    "Echinacea": {
        interactions: ["Ciclosporin / Tacrolimus / Azathioprine (immunostimulation counteracts immunosuppression)", "Caffeine (CYP1A2 inhibition raises caffeine levels)", "Midazolam (weak CYP3A4 inhibition)", "Hepatotoxic drugs (additive liver risk with prolonged use)"],
        contraindications: ["Autoimmune diseases (SLE, RA, MS)", "HIV/AIDS (immune dysregulation)", "Tuberculosis", "Asteraceae allergy"],
        warnings: ["Not for long-term use — cycle 2 weeks on, 2 weeks off", "Should not be combined with immunosuppressant drugs", "Injectable preparations have higher allergy risk than oral"]
    },
    "Valerian": {
        interactions: ["Diazepam / Zolpidem / Alprazolam (additive CNS depression — risk of over-sedation)", "Alcohol (enhanced sedation)", "Paracetamol / Statins (rare hepatotoxic interaction with high doses)", "Phenobarbitone (additive CNS depression)"],
        contraindications: ["Hepatic impairment (isovaleric acid metabolites)", "Pregnancy", "Breastfeeding"],
        warnings: ["Strong sedative — do not drive or operate machinery", "Abrupt discontinuation after long-term use may cause withdrawal", "Rare cases of liver toxicity — use for <4 weeks and avoid with other liver stressors"]
    },
    "Milk Thistle": {
        interactions: ["Metformin / Glipizide (additive hypoglycaemia)", "Drugs metabolised by CYP3A4 (silymarin inhibition)", "Tamoxifen / Raloxifene (phytoestrogenic activity)", "Haloperidol / Olanzapine (silymarin alters plasma levels)"],
        contraindications: ["Hormone-sensitive cancers (mild phytoestrogenic effect)", "Ragweed / Asteraceae allergy"],
        warnings: ["Silymarin can reduce the clearance of some medications — review current drug list", "May lower blood glucose — relevant in diabetes", "Generally very well tolerated; occasional GI upset"]
    },
    "St. John's Wort": {
        interactions: ["SSRIs / SNRIs (serotonin syndrome — serious)", "Combined oral contraceptives (CYP3A4 induction — contraceptive failure)", "HIV antiretrovirals: Indinavir / Efavirenz (reduces efficacy >50%)", "Warfarin / Phenprocoumon (reduces INR — loss of anticoagulation)", "Ciclosporin / Tacrolimus (organ rejection risk)", "Digoxin (reduced plasma levels)", "Phenytoin / Carbamazepine (altered levels)", "Irinotecan / Imatinib (reduced chemo efficacy)"],
        contraindications: ["Bipolar disorder (may precipitate mania)", "Pregnancy", "Schizophrenia", "Severe depression (use prescription antidepressants)"],
        warnings: ["Interacts with MORE drugs than almost any other herb — always check drug list before use", "Causes photosensitivity — avoid strong sunlight or UV exposure", "May make contraceptives fail — use barrier contraception concurrently"]
    },
    "Ginseng": {
        interactions: ["Warfarin (increased or decreased INR — unpredictable)", "Metformin / Glipizide (additive hypoglycaemia)", "Phenelzine / Moclobemide (MAO inhibitors — manic episodes, headache, insomnia)", "Stimulants / Caffeine (additive tachycardia)", "Digoxin (may falsely elevate digoxin levels in tests)"],
        contraindications: ["Hormone-sensitive conditions (oestrogenic)", "Active autoimmune diseases", "Bleeding disorders", "Insomnia (stimulant effect)"],
        warnings: ["Ginsenoside content varies widely between products — standardise by label", "May cause insomnia, headache, or palpitations at high doses", "Avoid with stimulants or caffeine — risk of tachycardia"]
    },
    "Green Tea": {
        interactions: ["Warfarin (Vitamin K and EGCG interact — variable INR)", "Non-haem iron supplements (tannins reduce absorption by 25–65%)", "Stimulants / Ephedrine (additive caffeine-mediated effects)", "Statins (EGCG inhibits hepatic drug transport)", "Adenosine / Regadenoson (caffeine antagonises adenosine receptors)", "Bortezomib (EGCG reduces efficacy in vitro)"],
        contraindications: ["Iron-deficiency anaemia (impairs iron absorption)", "Anxiety disorders / Panic disorder (caffeine)", "Pregnancy >3 cups/day (folate depletion)", "Acute liver disease"],
        warnings: ["High-dose green tea extract (>800 mg EGCG) has caused hepatotoxicity", "Separate from iron supplements or iron-rich meals by 2+ hours", "Caffeinated — may worsen insomnia, anxiety, or palpitations"]
    },
    "Bitter Melon": {
        interactions: ["Metformin / Glibenclamide / Insulin (dramatic additive hypoglycaemia — may require dose reduction)", "Cyclophosphamide / Vincristine (in vitro interaction — avoid in oncology without guidance)"],
        contraindications: ["Pregnancy (abortifacient momorcharin content)", "Hepatic disease", "G6PD deficiency (favism-like haemolysis)"],
        warnings: ["Can reduce blood glucose by 15–25% — hypoglycaemia risk is real", "Seeds and extract are more potent than food preparations", "Toxic in children — keep away from young children"]
    },
    "Giloy": {
        interactions: ["Ciclosporin / Tacrolimus (immune stimulation antagonises)", "Metformin / Glipizide (additive hypoglycaemia)", "NSAIDs / Prednisolone (additive anti-inflammatory effects)"],
        contraindications: ["Active autoimmune diseases (SLE, RA, Crohn's)", "Pregnancy"],
        warnings: ["Immune stimulation may worsen autoimmune flares", "Several case reports of liver injury with Giloy — use cautiously with other hepatotoxic agents", "Monitor blood glucose closely if on antidiabetics"]
    },
    "Arjuna": {
        interactions: ["Digoxin (additive cardiac glycoside activity — serious toxicity risk)", "Beta-blockers: Atenolol / Metoprolol (additive bradycardia and hypotension)", "Warfarin (antiplatelet properties)", "Amlodipine / Losartan (additive antihypertensive)"],
        contraindications: ["Hypotension (may worsen)", "Pre-operative period"],
        warnings: ["Contains cardiac glycosides — do NOT combine with Digoxin without medical supervision", "Can cause significant slowing of heart rate", "Use only under supervision in diagnosed heart conditions"]
    },
    "Licorice Root": {
        interactions: ["Antihypertensives: Amlodipine / Ramipril (glycyrrhizin raises BP — counteracts treatment)", "Digoxin (hypokalaemia from glycyrrhizin increases Digoxin toxicity)", "Corticosteroids: Prednisolone / Hydrocortisone (enhanced cortisol-like effects)", "Spironolactone (pharmacological antagonism)", "Oral contraceptives (water retention worsens)"],
        contraindications: ["Hypertension", "Hypokalaemia", "Kidney or liver disease", "Oestrogen-sensitive conditions", "Pregnancy", "Heart failure"],
        warnings: ["Glycyrrhizin causes pseudohyperaldosteronism — sodium retention, potassium loss, hypertension", "Limit regular use to <4 weeks", "DGL (deglycyrrhizinated licorice) preparations lack these risks"]
    },
    "Curry Leaf": {
        interactions: ["Metformin / Glipizide (additive hypoglycaemia)"],
        contraindications: [],
        warnings: ["Safe in food amounts — used daily in Indian cooking", "May lower blood glucose — monitor if diabetic on medication", "High in carbazole alkaloids which have antioxidant and hypoglycaemic properties"]
    },
    "Guava Leaf": {
        interactions: ["Metformin / Insulin (additive blood sugar lowering)", "Loperamide / Diphenoxylate (additive antidiarrhoeal — risk of constipation/obstruction)"],
        contraindications: ["Pregnancy (large medicinal doses)", "Constipation"],
        warnings: ["Can lower blood sugar by up to 20% — significant for diabetics on medication", "Tannin content is constipating in large amounts", "Leaf tea is safer than concentrated extract"]
    },
    "Papaya Leaf": {
        interactions: ["Warfarin / Aspirin (antiplatelet effect)", "Metformin / Insulin (additive hypoglycaemia)", "Thrombopoiesis-stimulating drugs (additive platelet effects — potential benefit in dengue but requires monitoring)"],
        contraindications: ["Pregnancy (latex contains papain — uterotonic)", "Hepatic impairment"],
        warnings: ["Widely used in dengue fever to raise platelets — use only under medical supervision", "Papaya latex is an abortifacient — strictly avoid in pregnancy", "Self-dosing for dengue is dangerous — requires CBC monitoring"]
    },
    "Elderberry": {
        interactions: ["Ciclosporin / Tacrolimus / Azathioprine (immunostimulation antagonises)", "Furosemide / Hydrochlorothiazide (additive diuresis)", "Laxatives (combined laxative effect)", "Chemotherapy (possible interaction — avoid during active treatment)"],
        contraindications: ["Autoimmune diseases (immune stimulation)"],
        warnings: ["Raw elderberries, bark, leaves, and unripe berries contain cyanogenic glycosides — toxic", "Only commercially prepared or cooked elderberry products are safe", "Immunostimulation may worsen autoimmune conditions"]
    },
    "Dandelion": {
        interactions: ["Furosemide / Spironolactone (additive diuresis and electrolyte loss)", "Metformin / Glipizide (additive hypoglycaemia)", "Lithium (diuresis concentrates lithium — toxicity risk)", "Ciprofloxacin (tannins reduce antibiotic absorption — space by 2 hours)"],
        contraindications: ["Kidney disease (high potassium)", "Asteraceae allergy", "Bile-duct obstruction or gallstones"],
        warnings: ["Strong diuretic effect — risk of dehydration and electrolyte imbalance", "May cause contact dermatitis in Asteraceae-sensitive individuals", "Contains oxalates — caution with kidney stones"]
    },
    "Nettle": {
        interactions: ["Warfarin (Vitamin K in leaves — may reduce INR)", "Furosemide / Hydrochlorothiazide (additive diuresis)", "Amlodipine / Ramipril (additive antihypertensive)", "Metformin (mild blood sugar lowering)", "NSAIDs (additive anti-inflammatory — may reduce NSAID dose needed)"],
        contraindications: ["Kidney disease (high potassium and diuretic effect)", "Pregnancy"],
        warnings: ["Fresh nettle plant causes severe stinging skin rash — always cook or freeze before use", "Diuretic effect may interact with antihypertensives causing hypotension", "Root and leaf have different pharmacological profiles — specify product type"]
    },
    "Passionflower": {
        interactions: ["Zolpidem / Benzodiazepines (additive CNS depression — may cause over-sedation)", "Alcohol (enhanced sedation)", "Warfarin (coumarin derivatives in plant — possible additive effect)", "Phenelzine / Tranylcypromine (MAO inhibitors — theoretical tyramine interaction)"],
        contraindications: ["Pregnancy", "Breastfeeding"],
        warnings: ["Strong sedative — avoid driving or operating machinery", "Do not combine with sleep medications without medical advice", "May cause dizziness or ataxia at high doses"]
    },
    "Hawthorn": {
        interactions: ["Digoxin (additive positive inotropic and negative chronotropic effects — serious overdose risk)", "Amlodipine / Atenolol / Bisoprolol (additive bradycardia and hypotension)", "Nitrates / Sildenafil / Tadalafil (additive vasodilation — severe hypotension)", "Warfarin (mild anticoagulant activity)"],
        contraindications: ["Heart failure without medical supervision", "Pregnancy"],
        warnings: ["Do NOT self-medicate heart failure or arrhythmia with hawthorn", "Significant cardiovascular activity — any combination with cardiac drugs requires cardiologist approval", "Therapeutic onset takes 6–8 weeks — do not discontinue abruptly"]
    },
    "Senna": {
        interactions: ["Furosemide / Hydrochlorothiazide (additive potassium loss — hypokalaemia)", "Digoxin (hypokalaemia dramatically increases Digoxin toxicity)", "Combined oral contraceptives (may reduce absorption if taken simultaneously)", "Warfarin (chronic use alters Vitamin K absorption)"],
        contraindications: ["Pregnancy", "Breastfeeding (sennosides in breast milk)", "Intestinal obstruction", "IBD (Crohn's, UC)", "Appendicitis"],
        warnings: ["Habit-forming stimulant laxative — do not use for more than 1 week without medical guidance", "Chronic use causes 'cathartic colon' (atonic bowel)", "Causes significant potassium depletion — dangerous with heart medications"]
    },
    "Black Pepper": {
        interactions: ["Phenytoin (piperine increases plasma levels — dose adjustment needed)", "Propranolol / Metoprolol (increased bioavailability)", "Rifampicin / Isoniazid (piperine improves absorption)", "Theophylline (increased plasma levels — monitor for toxicity)", "Curcumin / many drugs (piperine is a broad-spectrum bioavailability enhancer)"],
        contraindications: [],
        warnings: ["Piperine inhibits CYP3A4 and P-glycoprotein — can dramatically increase plasma levels of many drugs", "This effect is intentionally used with turmeric (curcumin) but can cause unintended drug overdose with medications", "Safe in normal culinary amounts; piperine supplements (5–20 mg) have significant drug interaction potential"]
    },
    "Cardamom": {
        interactions: ["Warfarin / Aspirin (mild antiplatelet — eugenol derivatives)", "Anticoagulants (additive effect)"],
        contraindications: ["Gallstones (may trigger biliary colic)"],
        warnings: ["Safe in normal cooking amounts", "High-dose cardamom oil may trigger gallstone pain", "Chewing the seeds freshens breath and may have gastroprotective effects"]
    },
    "Clove": {
        interactions: ["Warfarin / Clopidogrel (eugenol significantly inhibits platelet aggregation)", "NSAIDs like Ibuprofen / Naproxen (additive antiplatelet effect)", "Heparin (additive anticoagulant)"],
        contraindications: ["Bleeding disorders", "Pre-operative period (stop 1 week before)"],
        warnings: ["Eugenol in clove oil is a potent antiplatelet agent — relevant at supplement doses", "Undiluted clove oil causes chemical burns to mucous membranes — always dilute 1:10 in carrier oil", "Safe in culinary amounts"]
    },
    "Coriander": {
        interactions: ["Metformin / Glipizide (additive hypoglycaemia)", "Warfarin (mild anticoagulant — Vitamin K and coumarins)"],
        contraindications: ["Active bleeding disorders"],
        warnings: ["May lower blood sugar — relevant if on antidiabetic medication", "Coriander allergy is possible — related to celery and parsley cross-reactivity", "Generally very safe in culinary and tea amounts"]
    },
    "Hibiscus": {
        interactions: ["Amlodipine / Enalapril / Hydrochlorothiazide (additive antihypertensive — significant BP lowering)", "Metformin / Glipizide (additive hypoglycaemia)", "Aspirin / Paracetamol (organic anion pathway alteration)", "Chloroquine / Hydroxychloroquine (hibiscus reduces antimalarial efficacy)"],
        contraindications: ["Pregnancy (oestrogenic and emmenagogic effects)", "Hormone-sensitive cancers", "Hypotension"],
        warnings: ["Can lower systolic BP by 7–10 mmHg — monitor if on antihypertensive drugs", "Contains anthocyanins with significant antioxidant activity", "Avoid with chloroquine or antimalarials — documented pharmacokinetic interaction"]
    },
    "Fennel": {
        interactions: ["Ciprofloxacin / Norfloxacin (coumarins reduce antibiotic absorption — space by 2 hours)", "Tamoxifen / Anastrozole (phytoestrogen activity may antagonise)", "Combined oral contraceptives (additive oestrogenic effect)", "Warfarin (coumarin content — variable INR)"],
        contraindications: ["Oestrogen-receptor-positive cancers", "Pregnancy in large medicinal amounts", "Oestrogen-sensitive conditions"],
        warnings: ["Phytoestrogenic — discuss with oncologist if history of hormone-sensitive cancer", "Safe in food amounts and for bloating relief", "Fennel seed tea is safer than concentrated supplements"]
    },
    "Triphala": {
        interactions: ["Warfarin / Aspirin (anticoagulant activity from gallic acid)", "Metformin / Insulin (additive hypoglycaemia)", "Bleomycin / Cyclophosphamide (antioxidant may reduce chemo efficacy)"],
        contraindications: ["Pregnancy", "Breastfeeding", "Active diarrhoea or dysentery"],
        warnings: ["Laxative effect — start with low doses at night", "Anticoagulant activity — stop 1 week before surgery", "Long-term use is generally considered safe in Ayurveda but monitor electrolytes"]
    },
    "Jiaogulan": {
        interactions: ["Warfarin / Clopidogrel (antiplatelet activity)", "Ciclosporin / Tacrolimus (immune stimulation)", "Stimulants (adaptogenic stimulant effect)"],
        contraindications: ["Active autoimmune diseases", "Active bleeding disorders"],
        warnings: ["Adaptogen with both immune-stimulating and antiplatelet properties", "May cause nausea at high doses", "Less studied than Ashwagandha or Ginseng — use cautiously"]
    },
    "Oregano": {
        interactions: ["Warfarin / Aspirin (antiplatelet carvacrol and thymol)", "Metformin (mild blood sugar lowering)", "Furosemide (mild diuretic additive)"],
        contraindications: ["Active bleeding disorders", "Oregano / Lamiaceae allergy"],
        warnings: ["Safe in culinary use", "Oil of oregano (concentrated) has significant antimicrobial activity but also drug interaction potential", "May cause GI irritation at high doses"]
    },
    "Spearmint": {
        interactions: ["Iron supplements (tannins reduce absorption — space by 2 hours)", "Testosterone-therapy / Anabolic steroids (anti-androgenic effect may oppose)", "Combined oral contraceptives / Oestradiol (mild oestrogenic synergy)"],
        contraindications: ["Hormone-sensitive conditions (anti-androgenic, mild oestrogenic)", "Kidney disease"],
        warnings: ["Anti-androgenic: reduces testosterone — therapeutically used in PCOS and hirsutism", "2 cups/day of spearmint tea shown to reduce free testosterone by ~30% — relevant for men and PCOS", "Safe in food amounts"]
    },
    "Lemon Balm": {
        interactions: ["Levothyroxine (rosmarinic acid inhibits TSH binding — reduces thyroid hormone production)", "Zolpidem / Benzodiazepines (additive CNS depression)", "Indinavir / other HIV antivirals (inhibits viral attachment — theoretical beneficial but unstudied interaction)"],
        contraindications: ["Hypothyroidism (reduces thyroid hormone)", "Pregnancy in large doses"],
        warnings: ["May worsen hypothyroidism — check TSH before regular use", "Sedative properties — avoid before driving", "Topical cream is safe for cold sores (Herpes simplex)"]
    },
    "Boswellia": {
        interactions: ["NSAIDs: Ibuprofen / Diclofenac (additive anti-inflammatory — may allow dose reduction)", "Methotrexate / Biologics for RA (additive but unstudied interaction)", "Warfarin (possible antiplatelet activity of AKBA)"],
        contraindications: ["Pregnancy"],
        warnings: ["May cause GI upset — take with food", "Acetyl-11-keto-beta-boswellic acid (AKBA) is the active anti-inflammatory component — look for standardised extract", "Well-tolerated; one of the safest anti-inflammatory herbs for long-term use"]
    },
    "Andrographis": {
        interactions: ["Ciclosporin / Tacrolimus (immunostimulation antagonises)", "Warfarin / Aspirin (antiplatelet andrographolide)", "Amlodipine / Captopril (additive antihypertensive)"],
        contraindications: ["Active autoimmune diseases", "Pregnancy (antifertility effects in animal studies)", "Male fertility concerns"],
        warnings: ["Andrographolide has documented antifertility effects in animal studies — caution if trying to conceive", "Stimulates immune function — avoid with immunosuppressant drugs", "Extremely bitter — encapsulated form better tolerated"]
    },
    "Bacopa": {
        interactions: ["Levothyroxine (increases T4 production — monitor TSH)", "Rivastigmine / Donepezil / Galantamine (additive cholinesterase inhibition)", "Diazepam / Alprazolam (additive sedation)", "Amlodipine (calcium channel blocker interaction — reduces Ca2+ transport)", "Atropine / Hyoscine (pharmacological antagonism)"],
        contraindications: ["Hyperthyroidism", "Bradycardia (slows HR via cholinergic activity)", "Pregnancy", "Active peptic ulcer (increases GI secretions)"],
        warnings: ["Always take Bacopa with food — causes nausea and cramping when taken fasted", "Effects on memory take 8–12 weeks to manifest", "May raise thyroid hormone levels — check TSH after 8 weeks"]
    },
    "Punarnava": {
        interactions: ["Furosemide / Hydrochlorothiazide (additive diuresis — potassium depletion)", "Lithium (diuretic effect increases plasma lithium to toxic levels)", "Amlodipine / Atenolol (additive antihypertensive)"],
        contraindications: ["Pregnancy", "Severe kidney disease"],
        warnings: ["Strong diuretic — ensure adequate fluid intake", "Avoid combining with other diuretics without medical supervision", "Traditional use for nephrotic syndrome — requires monitoring"]
    },
    "Kalanchoe": {
        interactions: ["Digoxin (bufadienolide cardiac glycosides — additive toxicity — potentially fatal)", "Beta-blockers (additive bradycardia)"],
        contraindications: ["Any cardiac condition requiring medication", "Pregnancy"],
        warnings: ["Contains bufadienolides (cardiac glycosides) — interacts dangerously with Digoxin", "Toxic to livestock and pets — keep away from animals", "Internal use should ONLY be under direct medical supervision"]
    },
    "Guduchi": {
        interactions: ["Ciclosporin / Tacrolimus (immune stimulation antagonises)", "Metformin / Glibenclamide (additive blood sugar lowering)"],
        contraindications: ["Active autoimmune diseases", "Pregnancy"],
        warnings: ["Several clinical case reports of Guduchi hepatotoxicity — monitor liver enzymes with prolonged use", "Lowers blood sugar — monitor closely on antidiabetics", "Quality control is important — adulteration with Tinospora crispa (nephrotoxic) has been reported"]
    },
    "Shankhpushpi": {
        interactions: ["Phenytoin (Shankhpushpi syrup significantly reduces Phenytoin plasma levels — documented interaction)", "Levothyroxine (may alter thyroid hormone metabolism)", "Diazepam / Barbiturates (additive CNS depression)"],
        contraindications: ["Epilepsy currently treated with Phenytoin (reduces drug efficacy)", "Pregnancy"],
        warnings: ["One of the few herb-drug interactions formally documented in pharmacovigilance: reduces Phenytoin effectiveness", "Sedative properties — do not drive after use", "Different preparations (syrup vs. powder) have different potencies"]
    },

    // ── Newly added plants ────────────────────────────────────────────────────

    "Coconut": {
        interactions: ["Warfarin (medium-chain fatty acids and Vitamin K in coconut products — variable effect on INR)", "Statins: Atorvastatin / Rosuvastatin (high saturated fat content may offset statin benefits on LDL)"],
        contraindications: ["Tree-nut allergy (coconut is botanically a fruit but FDA classifies as tree nut)", "Dyslipidaemia with elevated LDL (virgin coconut oil is ~90% saturated fat)"],
        warnings: ["Virgin coconut oil is high in lauric acid — raises both HDL and LDL; unclear net cardiovascular effect", "Coconut water is rich in potassium — caution in kidney disease or with ACE inhibitors / ARBs", "Safe in moderate food amounts"]
    },
    "Noni": {
        interactions: ["Warfarin (Vitamin K content — reduces anticoagulant effect)", "ACE inhibitors / ARBs (high potassium content of noni juice may cause hyperkalaemia)", "Hepatotoxic drugs (additive liver risk)", "Alcohol (additive hepatotoxicity)"],
        contraindications: ["Kidney disease (high potassium, analgesic nephropathy risk)", "Liver disease", "Pregnancy (traditional abortifacient use)"],
        warnings: ["Multiple case reports of acute hepatotoxicity linked to noni juice — avoid if liver disease present", "High potassium content is dangerous in kidney failure", "Not regulated as a drug — quality of commercial products varies widely"]
    },
    "Wheatgrass": {
        interactions: ["Warfarin (very high Vitamin K1 — antagonises anticoagulant effect)", "Methotrexate (may interfere with folate metabolism)", "Iron supplements (chlorophyll competitively inhibits non-haem iron absorption)"],
        contraindications: ["Coeliac disease (gluten cross-contamination risk)", "Wheat allergy"],
        warnings: ["Very high Vitamin K — must space from Warfarin or adjust INR monitoring", "Can cause nausea and headache when starting — begin with small doses", "Freshly juiced is microbiologically safer than supplements; avoid if immunocompromised"]
    },
    "Spirulina": {
        interactions: ["Warfarin (antiplatelet and anticoagulant effects)", "Ciclosporin / Tacrolimus (immune modulation)", "Iron supplements (contains non-haem iron; synergistic)", "Thyroid medications (phenylalanine and iodine content)"],
        contraindications: ["Autoimmune conditions (immune stimulation)", "PKU / Phenylketonuria (phenylalanine content)", "Heavy metal contamination concerns — source carefully"],
        warnings: ["Some spirulina products are contaminated with heavy metals (lead, mercury, arsenic) or microcystins — buy only from certified sources", "Stimulates immune system — avoid with autoimmune conditions or immunosuppressants", "Contains Vitamin B12 analogues that may not be bioactive — do not rely on as sole B12 source"]
    },
    "Flaxseed": {
        interactions: ["Warfarin / Aspirin / Clopidogrel (omega-3 ALA and SDG lignans — additive antiplatelet/anticoagulant)", "Metformin / Insulin (additive blood sugar lowering)", "Tamoxifen / Anastrozole (SDG lignans are phytoestrogens — complex interaction)", "Oral drugs generally (high mucilage slows gastric emptying — space medications by 2 hours)"],
        contraindications: ["Bowel obstruction (mucilage bulk)", "Hormone-sensitive cancers (phytoestrogenic — discuss with oncologist)", "Pregnancy in large amounts"],
        warnings: ["Always take with plenty of water — dry seeds can swell and cause intestinal obstruction", "Phytoestrogenic SDG lignans: in breast cancer, dietary flaxseed may be safe but supplements are uncertain", "Ground flaxseed is more bioavailable than whole seeds"]
    },
    "Beetroot": {
        interactions: ["Antihypertensives: Amlodipine / Losartan (additive BP lowering from dietary nitrates)", "Sildenafil / Tadalafil (additive vasodilation via NO pathway — hypotension risk)", "Iron supplements (oxalate binds iron — separate by 2 hours)", "Metformin (mild additive glycaemic effect)"],
        contraindications: ["Kidney stones (high oxalate)", "Haemochromatosis (high iron content)", "Low blood pressure"],
        warnings: ["Beeturia (red urine/stool) is harmless but may alarm patients", "High dietary nitrate lowers blood pressure — caution with antihypertensives and erectile dysfunction drugs", "Raw juice is more potent than cooked beetroot"]
    },
    "Onion": {
        interactions: ["Warfarin (quercetin and allicin — additive antiplatelet effect)", "Metformin / Insulin (additive hypoglycaemia from chromium and quercetin)", "Aspirin (additive antiplatelet)"],
        contraindications: ["Active bleeding disorders (high quercetin dose)"],
        warnings: ["Culinary onion is very safe — supplements are more concentrated and carry more interaction risk", "Raw onion has stronger antiplatelet effects than cooked onion", "May cause GERD or reflux in sensitive individuals"]
    },
    "Calendula": {
        interactions: ["Sedatives / CNS depressants (mild additive sedation)", "Blood pressure medications (mild antihypertensive alkaloids)"],
        contraindications: ["Asteraceae allergy (cross-reactivity with ragweed, daisy, chrysanthemum)", "Pregnancy (emmenagogue — stimulates uterine contractions)"],
        warnings: ["Topical use is very safe and well evidenced for wound healing and dermatitis", "Oral use in pregnancy is contraindicated — uterotonic", "Allergy testing recommended before topical use in sensitive individuals"]
    },
    "Yarrow": {
        interactions: ["Warfarin / Heparin (additive anticoagulant — achilline content)", "Antihypertensives (mild hypotensive alkaloids)", "Barbiturates / Sedatives (additive CNS depression)", "Diuretics (additive effect)"],
        contraindications: ["Pregnancy (emmenagogue and potential abortifacient)", "Asteraceae allergy", "Active bleeding"],
        warnings: ["Can cause photosensitivity — avoid strong sunlight after topical application", "Emmenagogue: stimulates menstruation — never use during pregnancy", "Allergic contact dermatitis reported"]
    },
    "Red Clover": {
        interactions: ["Warfarin (isoflavones and coumestans — additive anticoagulant)", "Tamoxifen / Anastrozole (isoflavone phytoestrogens antagonise)", "Combined oral contraceptives (additive oestrogenic activity)", "Methotrexate (formononetin may affect folate metabolism)"],
        contraindications: ["Oestrogen-receptor-positive cancers (breast, uterine, ovarian)", "Hormone-sensitive conditions", "Pregnancy"],
        warnings: ["Contains potent isoflavones (biochanin A, formononetin) — stronger than soy isoflavones", "Clinical use for menopausal symptoms — requires medical oversight in cancer survivors", "Contraceptive failure possible if combined with oral contraceptives"]
    },
    "Alfalfa": {
        interactions: ["Warfarin (very high Vitamin K1 content — significantly reduces INR)", "Immunosuppressants (immune stimulation)", "Oestrogen therapies (phytoestrogenic activity)"],
        contraindications: ["SLE / Lupus (L-canavanine in seeds may exacerbate lupus flares)", "Oestrogen-sensitive conditions", "Pregnancy"],
        warnings: ["High Vitamin K — must avoid or carefully monitor Warfarin dose", "L-canavanine in alfalfa seeds specifically linked to lupus reactivation — avoid in autoimmune conditions", "Sprouts may carry Salmonella — immunocompromised should avoid raw sprouts"]
    },
    "Rhodiola": {
        interactions: ["MAO inhibitors: Phenelzine / Moclobemide (additive effect — risk of hypertension or serotonin syndrome)", "SSRIs / Venlafaxine (possible serotonin syndrome — use with caution)", "CNS stimulants / Caffeine (additive stimulant)", "Antihypertensives (may potentiate or sometimes raise BP — variable)"],
        contraindications: ["Bipolar disorder (stimulant effect may trigger mania)", "Pregnancy"],
        warnings: ["Adaptogen and mild CNS stimulant — take in the morning to avoid insomnia", "Rosavins and salidroside vary widely between products — standardise", "May initially cause agitation or palpitations — start at low dose"]
    },
    "Maca": {
        interactions: ["Hormonal therapies: Oestradiol / Testosterone / Tamoxifen (glucosinolate metabolites modulate hormone levels)", "Antihypertensives (possible interaction through androgenic effects)"],
        contraindications: ["Hormone-sensitive cancers (influences oestrogen/androgen balance)", "Thyroid disorders (goitrogenic glucosinolates — cook before use)"],
        warnings: ["Raw maca contains goitrogens — always use gelatinised (cooked) maca to reduce thyroid risk", "Marketed as a libido and fertility enhancer — limited clinical evidence", "Influences hormone levels subtly — caution with established hormone therapies"]
    },
    "Mucuna Pruriens": {
        interactions: ["Levodopa / Carbidopa (contains L-DOPA — additive effect, may require dose reduction)", "MAO inhibitors (risk of hypertensive crisis)", "Antipsychotics: Haloperidol / Risperidone (pharmacological antagonism — reduces dopamine blockade)", "Iron supplements (chelates iron — reduce absorption)"],
        contraindications: ["Schizophrenia or psychosis (dopaminergic)", "Melanoma (L-DOPA may stimulate melanocyte activity)", "Pregnancy"],
        warnings: ["Contains significant L-DOPA — affects dopaminergic function; do NOT combine with Levodopa without neurologist input", "Can cause nausea, vomiting, and insomnia at high doses", "Seed hairs cause severe itching — only use processed preparations"]
    },
    "Bhringraj": {
        interactions: ["Antihypertensives (documented antihypertensive ecliptine alkaloids)", "Anticoagulants (mild coumarin derivatives)", "Sedatives (mild CNS depressant activity)"],
        contraindications: ["Pregnancy (emmenagogue)", "Hypotension"],
        warnings: ["Primarily used topically for hair growth — well established in Ayurveda", "Internal use in high doses may lower blood pressure", "Ecliptine and wedelolactone have hepatoprotective properties"]
    },
    "Nutmeg": {
        interactions: ["CNS depressants / Alcohol (myristicin potentiates CNS effects)", "MAO inhibitors (myristicin is a monoamine oxidase inhibitor — additive)", "Anticholinergic drugs (additive anticholinergic effect)"],
        contraindications: ["Pregnancy (uterotonic and possible abortifacient)", "Mental health conditions (psychoactive at high doses)", "Children"],
        warnings: ["Toxic in high doses — 5–15 g raw nutmeg can cause hallucinations, tachycardia, and anticholinergic syndrome", "Myristicin is psychoactive and hepatotoxic in excess", "Safe in normal culinary amounts (0.1–0.5 g per dish)"]
    },
    "Star Anise": {
        interactions: ["Hormonal contraceptives / HRT (anethole has strong oestrogenic activity)", "Tamoxifen (oestrogenic antagonism)", "Anticoagulants (mild antiplatelet effect)"],
        contraindications: ["Hormone-sensitive cancers", "Pregnancy in large amounts", "Infants (Japanese star anise is toxic — even trace contamination is fatal)"],
        warnings: ["True Chinese star anise (Illicium verum) is safe; Japanese star anise (Illicium anisatum) is a neurotoxin", "Infant deaths reported from contaminated star anise teas — NEVER give to infants", "Potent phytoestrogen activity"]
    },
    "Mustard Seed": {
        interactions: ["Warfarin (allyl isothiocyanate has mild antiplatelet activity)", "Thyroid medications (isothiocyanates are goitrogenic — impair thyroid iodine uptake)", "Diuretics (mild diuretic effect)"],
        contraindications: ["Hypothyroidism (goitrogenic)", "Kidney disease (irritant — internal use)", "GI ulcers (topical mustard paste causes blistering if left on skin too long)"],
        warnings: ["Topical mustard plasters can cause second-degree burns if left on longer than 10–15 minutes", "Goitrogenic isothiocyanates are destroyed by cooking — cook mustard seeds for thyroid safety", "Mustard allergy is a major allergen in Europe — label required"]
    },
    "Sesame": {
        interactions: ["Warfarin (sesamol and sesamin — moderate antiplatelet activity)", "Antihypertensives (mild antihypertensive sesamin)", "Iron supplements (oxalates in sesame bind iron — separate by 2 hours)"],
        contraindications: ["Sesame allergy (major allergen — anaphylaxis risk)", "Diverticulitis (small seeds)", "Kidney stones (oxalate content)"],
        warnings: ["Sesame is among the top 9 food allergens — serious anaphylaxis risk in sensitive individuals", "Sesame oil (cold-pressed) may be safer than whole seeds for allergy-prone individuals", "Tahini and sesame paste contain concentrated oxalates — caution with calcium-oxalate kidney stones"]
    },
    "Pomegranate": {
        interactions: ["Warfarin (punicalagins inhibit CYP2C9 — raises INR significantly)", "Statins: Atorvastatin / Simvastatin (CYP3A4 inhibition — raises statin levels)", "Antihypertensives (polyphenols lower BP — additive)", "ACE inhibitors / ARBs (additive antihypertensive — hypotension risk)"],
        contraindications: ["Active hypotension", "Allergy to pomegranate (rare but documented)"],
        warnings: ["Pomegranate juice has moderate CYP inhibition — less than grapefruit but can raise plasma levels of some drugs", "Daily pomegranate juice intake can lower systolic BP by 5–12 mmHg — monitor if on antihypertensives", "Rich in polyphenols — generally very beneficial but drug interactions require attention"]
    },
    "Mango Leaf": {
        interactions: ["Metformin / Insulin (additive blood sugar lowering from mangiferin)", "Antihypertensives (mild BP lowering)"],
        contraindications: ["Mango / Anacardiaceae allergy (cross-reactivity with poison ivy)", "Pregnancy (large doses — emmenagogue)"],
        warnings: ["Mango leaf tea is traditionally used to manage blood sugar in type 2 diabetes — significant additive effect", "Mango skin/sap contains urushiol — may cause contact dermatitis in sensitive individuals", "Leaf extract more pharmacologically active than eating fruit"]
    },
    "Betel Leaf": {
        interactions: ["CNS stimulants / Phenylephrine (phenyl propenoids stimulate CNS)", "MAO inhibitors (arecoline in betel nut component)", "Antidiabetics (mild blood sugar effect)", "Antibiotics (eugenol in betel leaf has antimicrobial properties — may interfere with gut flora restoration)"],
        contraindications: ["Pregnancy (uterotonic)", "Oral cancer history (betel with areca nut is carcinogenic — leaf alone is safer)", "Asthma (bronchospasm reported)"],
        warnings: ["Betel leaf alone (without areca nut/tobacco) has lower risk profile but still has pharmacological activity", "Chewing betel leaf habitually may cause oral submucosal fibrosis over years", "Eugenol and hydroxychavicol have antibacterial and antifungal activity"]
    },
    "Sarpagandha": {
        interactions: ["ALL antihypertensive medications (potent additive BP lowering — hypotension risk)", "CNS depressants / Sedatives (reserpine depletes CNS neurotransmitters)", "Tricyclic antidepressants / SSRIs (reserpine causes neurotransmitter depletion — severe depression risk)", "Levodopa / Dopaminergic drugs (reserpine depletes dopamine — Parkinsonism exacerbation)", "Digitalis / Beta-blockers (additive bradycardia)"],
        contraindications: ["Depression or history of depression (reserpine causes severe depression)", "Parkinson's disease", "Peptic ulcer", "Pregnancy", "Breastfeeding"],
        warnings: ["Contains reserpine — first isolated antihypertensive used in modern medicine — POTENT drug interactions", "Reserpine causes serious psychiatric adverse effects including depression and suicidal ideation", "Do NOT use without cardiologist supervision — blood pressure lowering can be profound"]
    },
    "Ashoka": {
        interactions: ["Hormonal contraceptives / HRT (oestrogenic activity from ketosteroids)", "Tamoxifen / Anastrozole (oestrogenic antagonism)", "Oxytocin (additive uterotonic — obstetric risk)"],
        contraindications: ["Pregnancy (uterotonic bark — strictly avoid)", "Oestrogen-sensitive conditions"],
        warnings: ["Ashoka bark is a uterotonic — absolutely contraindicated in pregnancy at any dose", "Clinically used in Ayurveda for menorrhagia and dysmenorrhoea — requires proper dosing", "Oestrogenic activity may be beneficial for perimenopausal symptoms but requires oncological clearance in cancer history"]
    },
    "Kutki": {
        interactions: ["Immunosuppressants: Ciclosporin / Azathioprine (immune modulation)", "Hepatotoxic drugs (additive in high doses — paradoxical: hepatoprotective at low doses, hepatotoxic at high doses)", "Metformin / Insulin (blood sugar lowering)"],
        contraindications: ["Pregnancy", "Autoimmune diseases"],
        warnings: ["Dose-dependent hepatotoxicity — very low doses are hepatoprotective, high doses are toxic to the liver", "Quality and adulteration are significant concerns — source from reputable Ayurvedic pharmacies", "Picroside I and II are the active hepatoprotective iridoid glycosides — standardised extracts preferred"]
    },

    // ── Toxic / Dangerous Plants ──────────────────────────────────────────────

    "Oleander": {
        interactions: ["Digoxin / Digitoxin (oleandrin is a cardiac glycoside — additive and potentially fatal toxicity)", "Beta-blockers: Atenolol / Metoprolol (additive bradycardia and AV block)", "Calcium channel blockers: Amlodipine / Verapamil (additive cardiac depression)", "Quinidine / Amiodarone (additive arrhythmia risk)", "Diuretics (hypokalaemia increases oleandrin toxicity)"],
        contraindications: ["ANY cardiac condition", "All internal use — this plant is lethal", "Children and pets — extremely toxic"],
        warnings: ["EXTREMELY TOXIC — ALL PARTS including leaves, flowers, bark, and sap are poisonous", "Even burning oleander wood and inhaling smoke is toxic", "A single leaf can be fatal to a child; lethal to adults at higher doses", "Contains oleandrin, neriine, and other cardiac glycosides — causes fatal arrhythmia", "Contact with sap can cause severe skin and eye irritation", "NEVER use medicinally without clinical supervision — no safe home use exists"]
    },
    "Foxglove": {
        interactions: ["Digoxin (Digitalis lanata is the source of pharmaceutical digoxin — additive and unpredictable toxicity)", "Beta-blockers (additive bradycardia and AV nodal block)", "Calcium channel blockers (additive cardiac depression)", "Thiazide / Loop diuretics (hypokalaemia amplifies digitalis toxicity)", "Amiodarone / Quinidine (increases digitalis plasma levels)"],
        contraindications: ["All forms of self-medication — this plant is a prescription-level cardiac drug", "Hypokalaemia", "Wolff-Parkinson-White syndrome"],
        warnings: ["HIGHLY TOXIC — digitalis glycosides in ALL parts of the plant can cause fatal cardiac arrhythmia", "Symptoms of poisoning: nausea, visual disturbances (yellow-green halos), bradycardia, and ventricular fibrillation", "Pharmaceutical digoxin is derived from this plant — do NOT use plant form as substitute", "No safe home use — any suspected ingestion requires immediate emergency treatment"]
    },
    "Datura": {
        interactions: ["Anticholinergic drugs: Atropine / Hyoscine / Oxybutynin (additive anticholinergic toxidrome — potentially fatal)", "Antihistamines: Diphenhydramine / Chlorphenamine (additive anticholinergic effects)", "Antipsychotics: Chlorpromazine / Clozapine (additive anticholinergic)", "Tricyclic antidepressants: Amitriptyline / Imipramine (additive anticholinergic and cardiac effects)", "CNS depressants (unpredictable interaction with hyoscine and scopolamine)"],
        contraindications: ["ALL forms of recreational or medicinal self-use", "Glaucoma (closed-angle)", "Urinary retention", "GI motility disorders", "Tachycardia / cardiac arrhythmia"],
        warnings: ["DEADLY TOXIC — contains atropine, scopolamine, and hyoscyamine (tropane alkaloids) in ALL parts", "Causes anticholinergic syndrome: dry mouth, urinary retention, hyperthermia, delirium, seizures, coma, and death", "Seeds are especially toxic — fewer than 10 seeds can be fatal in children", "Traditional use as intoxicant is extremely dangerous — variable alkaloid content makes every dose unpredictable", "Also known as Jimsonweed, Devil's Trumpet, Thorn Apple (Dhatura in Hindi)", "Any ingestion is a MEDICAL EMERGENCY — call poison control immediately"]
    },
    "Hemlock": {
        interactions: ["CNS depressants (additive CNS and respiratory depression)", "Neuromuscular blocking agents: Succinylcholine / Vecuronium (additive neuromuscular paralysis)", "Anticholinesterases: Neostigmine (conflicting pharmacology)"],
        contraindications: ["ALL internal use — this plant is fatal at small doses"],
        warnings: ["FATAL POISON — coniine and gamma-coniceine cause ascending paralysis and respiratory arrest", "Poison hemlock (Conium maculatum) was used to execute Socrates", "Resembles edible plants like wild carrot, parsley, and fennel — fatal misidentification risk", "Even contact with sap can cause dermatitis", "No medicinal use is safe — zero therapeutic window", "Any suspected ingestion: emergency services immediately"]
    },
    "Ricinus": {
        interactions: ["Anticoagulants (castor oil has mild anticoagulant properties)", "Laxatives (additive purgative effect — dehydration and electrolyte loss)"],
        contraindications: ["ALL internal use of unprocessed seeds (ricin is one of the most toxic natural substances)", "Pregnancy (abortifacient)", "GI obstruction"],
        warnings: ["EXTREMELY DANGEROUS — Ricinus communis seeds contain ricin, a biological toxin with no antidote", "1–2 seeds can be fatal to a child; 4–8 seeds potentially fatal to adults", "Ricin inhibits protein synthesis at cellular level — causes multi-organ failure", "Commercial castor oil (cold-pressed) does NOT contain ricin and is generally safe — the toxin is in the seed meal", "Contact with plant parts can cause severe dermatitis and eye damage", "Ricin is classified as a potential bioterrorism agent — handling castor beans is regulated in many countries"]
    },
    "Aconite": {
        interactions: ["ALL cardiac medications — additive and fatal (Digoxin, beta-blockers, antiarrhythmics)", "Any drug that lowers heart rate or BP (profound bradycardia and hypotension)", "Calcium channel blockers (additive cardiac arrest risk)"],
        contraindications: ["ALL internal use without pharmaceutical processing and TCM physician supervision", "Heart disease", "Pregnancy"],
        warnings: ["EXTREMELY TOXIC — aconitine causes severe and rapid cardiac arrhythmia and ventricular fibrillation", "Also known as Monkshood, Wolfsbane, Meetha Vish, Vatsanabha (Sanskrit)", "Used in processed form in TCM (Fu Zi) — raw aconite is lethal; processing reduces but does not eliminate toxicity", "Onset of toxicity within 10–20 minutes of ingestion — tingling, numbness, vomiting, cardiac arrest", "No safe home use — any suspected poisoning is an immediate medical emergency", "Skin absorption of aconitine from handling plant has caused poisoning"]
    },
    "Belladonna": {
        interactions: ["ALL anticholinergic drugs (additive anticholinergic toxidrome — severe)", "Antihistamines / TCAs / Antipsychotics (additive anticholinergic)", "MAO inhibitors (dangerous interaction)", "Digoxin (tachycardia from atropine increases Digoxin toxicity)"],
        contraindications: ["Glaucoma (closed-angle)", "Urinary retention / BPH", "Tachycardia / atrial fibrillation", "GI motility disorders", "All recreational use"],
        warnings: ["HIGHLY TOXIC — Atropa belladonna contains atropine, scopolamine, and hyoscyamine in ALL parts", "Berries look attractive but 3–5 berries can kill a child", "Pharmaceutical atropine is derived from belladonna — do NOT use herbal form as substitute", "Anticholinergic toxidrome: dry skin, hyperthermia, urinary retention, delirium, seizures, death", "Historically used as poison and in eye drops (cosmetic pupil dilation) — both dangerous"]
    },
    "Yew": {
        interactions: ["Paclitaxel / Docetaxel (taxol is derived from yew — additive toxicity)", "ALL cardiac drugs (cardiac toxicity from taxine alkaloids)", "CNS depressants (additive)"],
        contraindications: ["ALL internal use — lethal at small doses", "Pregnancy"],
        warnings: ["DEADLY TOXIC — ALL parts of Taxus baccata are poisonous EXCEPT the red fleshy aril (seed itself is toxic)", "Taxine alkaloids cause rapid cardiac arrest with no specific antidote", "As little as 50 g of leaves can be fatal to an adult", "Pharmaceutical paclitaxel (Taxol) is derived from Pacific yew — never substitute with plant material", "One of the most common causes of fatal plant poisoning in the UK and Europe", "Any ingestion: emergency services immediately"]
    },
    "Water Hemlock": {
        interactions: ["CNS stimulants (additive seizure risk)", "Antiepileptics (cicutoxin may overcome antiepileptic effect)"],
        contraindications: ["ALL internal use — considered the most violently toxic plant in North America"],
        warnings: ["MOST VIOLENTLY TOXIC — Cicuta maculata/virosa causes uncontrollable violent seizures and death", "Cicutoxin acts on GABA-A receptors causing status epilepticus — death from respiratory failure", "Resembles edible wild parsnip, celery, or water parsley — extremely dangerous misidentification", "Root is especially concentrated — ingestion of a walnut-sized piece of root has killed adults", "No antidote — treatment is only supportive seizure management", "Any suspected ingestion is an immediate life-threatening emergency"]
    },
    "Lantana": {
        interactions: ["Digoxin (lantadene compounds affect cardiac function)", "Hepatotoxic drugs (additive liver toxicity)"],
        contraindications: ["ALL internal use — toxic to humans and animals", "Children — attractive berries are poisonous", "Pregnancy"],
        warnings: ["TOXIC — especially unripe green berries which are highly toxic; ripe black berries less so but still hazardous", "Lantadene A and B cause photosensitivity hepatitis and biliary stasis", "Causes GI distress, weakness, and hepatotoxicity", "Extremely toxic to livestock — also common garden ornamental", "Also known as Lantana camera, Tickberry, Putus, Raimuniya", "Contact with plant can cause contact dermatitis in sensitive individuals"]
    },
    "Nux Vomica": {
        interactions: ["ALL CNS stimulants (strychnine and brucine — additive fatal convulsions)", "ALL anticholinergics (additive excitatory toxicity)", "Antiepileptic drugs (strychnine overwhelms anticonvulsants)", "Alcohol (additive CNS excitation)"],
        contraindications: ["All self-medication — therapeutic window is extremely narrow", "Epilepsy", "Tetanus", "Liver disease", "Pregnancy"],
        warnings: ["HIGHLY TOXIC — strychnine from Strychnos nux-vomica causes severe painful convulsions and death by respiratory failure", "Used in highly diluted homeopathic form (safe) and in some traditional formulations (Ayurvedic Kuchla — processed to reduce toxicity)", "Raw seeds are lethal — processing in Ayurvedic shodhana procedure is mandatory", "Strychnine poisoning: muscle spasms, opisthotonos (arched back), and asphyxiation", "Never use unprocessed Nux Vomica seeds for any purpose"]
    },
    "Calotropis": {
        interactions: ["Digoxin / Digitoxin (calotropin and uscharin are cardiac glycosides — potentially fatal additive toxicity)", "Antiarrhythmics: Amiodarone / Quinidine (additive cardiac risk)", "Diuretics (hypokalaemia increases cardiac glycoside toxicity)"],
        contraindications: ["ALL internal use without direct physician supervision", "Heart disease", "Pregnancy (abortifacient)", "Children"],
        warnings: ["TOXIC — Calotropis gigantea and C. procera contain cardiac glycosides and cytotoxic calactin", "Milky latex is highly caustic — causes severe eye injury (calotropis latex keratitis) and skin burns", "Used in traditional medicine (Akanda/Aak in Hindi) — only highly processed preparations under expert supervision", "Can cause cardiac arrest, pulmonary oedema, and death in overdose", "Traditional use as arrow poison and for veterinary sterilisation in folk practice"]
    },
    "Abrus Precatorius": {
        interactions: ["Immunosuppressants (abrin further compromises immune function)", "ANY other hepatotoxic drugs"],
        contraindications: ["ALL internal use — seeds are among the most toxic known substances", "Any handling of broken or damaged seeds"],
        warnings: ["EXTREMELY DEADLY — seeds (Rosary Peas / Gunchi / Jequirity beans) contain abrin, a toxin comparable to ricin", "A single seed, if chewed, can be fatal — intact seeds may pass through gut without harm", "Abrin inhibits protein synthesis causing multi-organ failure — no antidote", "Attractive red and black seeds used in jewellery — children should not handle them", "Case reports of death from seed needle-pricks (used in traditional criminal poisoning)", "Emergency medical treatment required immediately for any suspected ingestion"]
    },

    // ── More Indian Ayurvedic / Siddha / Unani Plants ─────────────────────────

    "Triphala Guggul": {
        interactions: ["Anticoagulants: Warfarin / Aspirin (guggulsterone affects platelet function)", "Statins: Atorvastatin / Simvastatin (guggul reduces LDL — additive but may affect CYP metabolism)", "Thyroid medications: Levothyroxine (guggul may stimulate thyroid function)", "Diltiazem / Propranolol (reduced bioavailability reported)"],
        contraindications: ["Pregnancy (uterotonic)", "Active liver disease", "Thyroid disorders (stimulates thyroid)"],
        warnings: ["Guggul resin stimulates thyroid — check TSH if using long-term", "Can cause GI irritation — take with food", "Antiplatelet properties — stop 1 week before surgery"]
    },
    "Guggul": {
        interactions: ["Warfarin / Aspirin (antiplatelet guggulsterones)", "Diltiazem / Propranolol (reduces bioavailability by ~40%)", "Levothyroxine (may increase T3/T4)", "Statins (additive lipid-lowering but CYP interaction possible)"],
        contraindications: ["Pregnancy", "Active liver or kidney disease", "Hyperthyroidism", "Active bleeding"],
        warnings: ["Stimulates thyroid hormone production — monitor thyroid if using for more than 4 weeks", "Drug interaction with common heart medications is well documented", "Standardised extract (guggulsterone content) preferred over crude resin", "Skin rash and GI upset are the most common side effects"]
    },
    "Triphala": {
        interactions: ["Warfarin / Aspirin (anticoagulant activity from gallic acid)", "Metformin / Insulin (additive hypoglycaemia)", "Bleomycin / Cyclophosphamide (antioxidant may reduce chemo efficacy)"],
        contraindications: ["Pregnancy", "Breastfeeding", "Active diarrhoea or dysentery"],
        warnings: ["Laxative effect — start with low doses at night", "Anticoagulant activity — stop 1 week before surgery", "Long-term use is generally considered safe in Ayurveda but monitor electrolytes"]
    },
    "Shilajit": {
        interactions: ["Metformin / Insulin (additive hypoglycaemia from fulvic acid and mineral content)", "Iron supplements (high iron content in some preparations — avoid with haemochromatosis)", "Antihypertensives (mild antihypertensive properties)", "Levothyroxine (fulvic acid may affect thyroid)"],
        contraindications: ["Haemochromatosis (excess iron)", "Sickle cell anaemia", "Thalassaemia", "Gout (high uric acid-related compounds)", "Pregnancy — insufficient safety data"],
        warnings: ["Raw or unprocessed shilajit may contain heavy metals (arsenic, lead) and mycotoxins — only use processed, tested preparations", "Authentic shilajit is a mountain resin — most commercial products are adulterated", "Fulvic acid content may interact with drug bioavailability", "Promotes testosterone and may affect hormone-sensitive conditions"]
    },
    "Haritaki": {
        interactions: ["Warfarin / Aspirin (tannic acid and chebulinic acid — anticoagulant)", "Metformin / Glibenclamide (additive blood sugar lowering)", "Oral drugs generally (tannin content may impair absorption — space by 2 hours)"],
        contraindications: ["Pregnancy (laxative and possible emmenagogue)", "Severe dehydration", "Diarrhoea"],
        warnings: ["One of the three fruits in Triphala — can be used individually", "Strong laxative effect — start with small doses", "Tannins may chelate iron and zinc — take separately from mineral supplements"]
    },
    "Bibhitaki": {
        interactions: ["Metformin (mild additive hypoglycaemia)", "Warfarin (mild anticoagulant from tannins)", "Antihypertensives (mild additive BP lowering)"],
        contraindications: ["Pregnancy (stimulates GI tract)", "Diarrhoea"],
        warnings: ["One of the three fruits in Triphala", "Gallic acid and chebulagic acid are the main active compounds", "Stronger astringent effect than Haritaki or Amla — useful for respiratory mucus and diarrhoea"]
    },
    "Vidanga": {
        interactions: ["Anthelmintic drugs: Albendazole / Mebendazole (additive antiparasitic effect)", "Anticoagulants (embelin has mild anticoagulant properties)"],
        contraindications: ["Pregnancy (emmenagogue and abortifacient)", "Breastfeeding"],
        warnings: ["Used primarily as antiparasitic (roundworms, tapeworms) in Ayurveda", "Embelin is the active anthelmintic component", "Do not use in high doses during pregnancy — abortifacient risk"]
    },
    "Chitraka": {
        interactions: ["Metformin / Insulin (significant additive hypoglycaemia)", "Anticoagulants (mild)", "NSAIDs (additive GI irritant — use with caution)"],
        contraindications: ["Pregnancy (strong uterine stimulant — abortifacient)", "Active peptic ulcer (GI irritant)", "Children"],
        warnings: ["Also known as Plumbago / Leadwort (Chita in Hindi)", "Plumbagin, the active compound, causes GI irritation — always take with food", "Traditional use for digestive fire (agni) and obesity — requires practitioner guidance"]
    },
    "Pippali": {
        interactions: ["Piperine-containing drugs (additive bioavailability enhancement — may raise plasma levels of many drugs)", "Phenytoin / Theophylline (piperine increases plasma levels)", "Rifampicin / Isoniazid (piperine improves TB drug absorption)", "NSAIDs (GI irritation additive)"],
        contraindications: ["Active peptic ulcer", "Pregnancy in large medicinal doses"],
        warnings: ["Long Pepper contains piperine (also in black pepper) — same CYP and P-gp inhibition warnings apply", "Used in Trikatu formulation with ginger and black pepper in Ayurveda", "Piperine enhances absorption of curcumin, selenium, and many drugs — both beneficial and hazardous"]
    },
    "Karpura Valli": {
        uses: ["Cough and respiratory congestion", "Fever management", "Antimicrobial (topical)", "Digestive aid"],
        preparation: ["Leaf juice for cough", "Tea from fresh leaves", "Topical poultice for headache"],
        dosage: "2–3 tsp leaf juice in honey for cough; topical as needed"
    },
    "Punarnava Root": {
        interactions: ["Furosemide / Hydrochlorothiazide (additive diuresis — potassium depletion)", "Lithium (diuretic effect increases plasma lithium to toxic levels)", "Amlodipine / Atenolol (additive antihypertensive)"],
        contraindications: ["Pregnancy", "Severe kidney disease"],
        warnings: ["Strong diuretic — ensure adequate fluid intake", "Avoid combining with other diuretics without medical supervision", "Traditional use for nephrotic syndrome — requires monitoring"]
    },
    "Vacha": {
        interactions: ["Phenytoin / Carbamazepine (beta-asarone may lower seizure threshold at high doses)", "CNS depressants (mild additive sedation at low dose — stimulant at high dose)", "Anticholinergic drugs (asarone modulates cholinergic activity)"],
        contraindications: ["Pregnancy (uterotonic)", "Epilepsy", "Liver disease (beta-asarone is hepatotoxic in large doses)"],
        warnings: ["Also known as Sweet Flag / Calamus / Bach (Hindi)", "Beta-asarone is potentially carcinogenic — processed forms with low asarone content are preferred (Indian variety A. calamus is tetraploid and higher in asarone)", "Used for cognitive enhancement in Ayurveda — only in small doses under practitioner guidance", "Acorus calamus var. americanus (diploid) is asarone-free and safer"]
    },
    "Jatropha": {
        interactions: ["All drugs metabolised by liver (jatrophin — hepatotoxic)", "Laxatives (additive purgative — severe dehydration risk)"],
        contraindications: ["ALL internal use without medical supervision", "Children (toxic)", "Pregnancy (abortifacient)"],
        warnings: ["TOXIC — seeds cause severe vomiting, diarrhoea, dehydration, and can be fatal", "Widely used as biofuel plant — seeds look like edible nuts but are poisonous", "Latex causes severe skin and eye irritation", "2–3 seeds can be toxic to children — keep away from children"]
    },
    "Tagetes": {
        interactions: ["Warfarin (antiplatelet flavonoids)", "Iron supplements (tannins reduce iron absorption)", "Antidiabetics (mild blood sugar lowering)"],
        contraindications: ["Asteraceae allergy", "Pregnancy (emmenagogue — stimulates uterus)"],
        warnings: ["Marigold (Genda Phool) — different from Calendula (pot marigold)", "Traditionally used in Indian medicine for fever, digestive issues, and topical wound care", "Tagetes lucida (Mexican tarragon) has different pharmacology from common marigold", "Generally safe in food/flavouring amounts; medicinal extracts have interaction potential"]
    },
    "Kalonji": {
        interactions: ["Metformin / Glipizide (additive blood sugar lowering from thymoquinone)", "Warfarin / Aspirin (antiplatelet thymoquinone)", "Ciclosporin (thymoquinone may modulate immune function)", "Phenobarbitone / Phenytoin (possible CYP interaction)"],
        contraindications: ["Pregnancy (uterotonic at large doses)", "Bleeding disorders"],
        warnings: ["Black seed / Nigella sativa — widely used in Unani and Islamic medicine", "Thymoquinone has significant pharmacological activity — not just a food spice at medicinal doses", "Strong antioxidant and immunomodulatory activity", "Safe in culinary amounts (1/4–1/2 tsp/day); medicinal doses require monitoring"]
    },
    "Henna": {
        interactions: ["Anticoagulants (mild — lawsone has some coagulation activity)", "G6PD-sensitive medications: Primaquine / Dapsone / Sulphonamides (lawsone causes haemolysis in G6PD deficiency)"],
        contraindications: ["G6PD deficiency (haemolytic anaemia risk — especially infants)", "Pregnancy (topical in small amounts is likely safe, internal is not)", "Open wounds or broken skin (lawsone absorption)"],
        warnings: ["Natural henna (Lawsonia inermis) topical use is generally safe but can cause allergy", "'Black henna' contains PPD (para-phenylenediamine) — causes severe allergic reactions and permanent sensitisation", "Internal use of henna is not recommended — lawsone causes haemolysis in susceptible individuals", "Mehndi for skin decoration: patch test first, never apply to broken skin"]
    },
    "Alstonia": {
        interactions: ["Antihypertensives (ditamine and echitamine lower BP — additive)", "Antimalaria drugs (additive)", "CNS depressants (additive sedation)"],
        contraindications: ["Pregnancy", "Breastfeeding", "Liver disease"],
        warnings: ["Alstonia scholaris (Saptaparni / Chatian) — used in traditional Indian medicine for malaria and skin disease", "Contains several alkaloids — narrow therapeutic window", "Should not be used without physician guidance", "Bark preparations used in Ayurveda and Siddha — significant pharmacological activity"]
    },
    "Wrightia Tinctoria": {
        uses: ["Psoriasis and skin conditions (topical)", "Hair fall treatment", "Dandruff", "Antifungal (topical)"],
        preparation: ["Leaf paste applied topically", "Wrightia oil preparations", "Decoction for scalp use"],
        dosage: "Topical application as needed; internal use only under Ayurvedic supervision"
    },
    "Bael": {
        interactions: ["Metformin / Insulin (additive blood sugar lowering)", "Thyroid medications (marmelosin may affect thyroid function)", "Tetracycline / Fluoroquinolone antibiotics (tannins may reduce absorption — space by 2 hours)"],
        contraindications: ["Thyroid disorders", "Pregnancy in large medicinal doses"],
        warnings: ["Aegle marmelos (Bel/Bilva) — sacred in Hinduism, widely used for GI health", "Unripe bael fruit is more medicinal; ripe fruit is a nutritious food", "Excessive use may cause constipation (dried fruit) or diarrhoea (fresh fruit juice)", "Marmelosin can affect thyroid function — monitor TSH with long-term use"]
    },
    "Patala": {
        uses: ["Respiratory health (Stereospermum chelonoides)", "Digestive disorders", "Fever management", "Anti-inflammatory"],
        preparation: ["Decoction of root bark", "Traditional Dashamool formulation (combined with 9 other roots)"],
        dosage: "Only as part of Dashamool formulation under Ayurvedic guidance"
    },
    "Manjistha": {
        interactions: ["Anticoagulants: Warfarin / Aspirin (rubia cordifolia — mild antiplatelet)", "Antihypertensives (mild ACE-inhibitory activity)", "Metformin (mild blood sugar lowering)"],
        contraindications: ["Pregnancy (emmenagogue)", "Active bleeding"],
        warnings: ["Indian Madder / Rubia cordifolia — used as blood purifier in Ayurveda", "Anthraquinone content may cause reddish urine — benign but notable", "Has mild estrogenic activity — caution in hormone-sensitive conditions"]
    },
    "Lodhra": {
        interactions: ["Anticoagulants (loturine and colloturine have astringent, haemostatic properties — may reduce anticoagulant effect)", "Oestrogen therapies (mild oestrogenic / anti-oestrogenic effects)", "Antidiabetics (mild blood sugar lowering)"],
        contraindications: ["Pregnancy (strong uterine astringent)", "Constipation"],
        warnings: ["Symplocos racemosa — used in Ayurveda for vaginal discharge and menorrhagia", "Primary use is gynaecological — strong astringent properties", "Loturine reduces blood glucose — monitor if diabetic"]
    },
    "Gokshura": {
        interactions: ["Metformin / Insulin (mild additive blood sugar lowering)", "Cyclosporin / Tacrolimus (mild immune modulation)", "Testosterone replacement therapy (saponins may modulate androgen)", "Antihypertensives (mild diuretic and ACE-inhibitory activity)"],
        contraindications: ["Pregnancy", "Dehydration", "Kidney stones (may worsen oxalate stones)"],
        warnings: ["Tribulus terrestris / Gokhru — commonly used for urinary health and testosterone support", "Evidence for testosterone boosting in healthy humans is weak", "Saponins may cause GI upset and liver stress at high doses — case reports of hepatotoxicity from Tribulus products", "Diuretic effect — adequate hydration important"]
    },
    "Yashtimadhu": {
        interactions: ["Antihypertensives: Amlodipine / Ramipril (glycyrrhizin raises BP — counteracts treatment)", "Digoxin (hypokalaemia from glycyrrhizin increases Digoxin toxicity)", "Corticosteroids: Prednisolone / Hydrocortisone (enhanced cortisol-like effects)", "Spironolactone (pharmacological antagonism)"],
        contraindications: ["Hypertension", "Hypokalaemia", "Kidney or liver disease", "Pregnancy"],
        warnings: ["Glycyrrhiza glabra — same as Licorice Root, the Sanskrit Ayurvedic name", "DGL (deglycyrrhizinated licorice) preparations are safer for GI use", "Limit regular use to <4 weeks; monitor BP and potassium"]
    },
    "Kutaja": {
        interactions: ["Antidiarrhoeal drugs: Loperamide / Diphenoxylate (additive — may cause excessive constipation)", "Digitalis (conessine alkaloid has some cardiac activity)"],
        contraindications: ["Constipation", "Pregnancy"],
        warnings: ["Holarrhena antidysenterica (Indrajav / Kurchi) — specific use for amoebic dysentery in Ayurveda", "Conessine alkaloid is pharmacologically active — monitor closely", "Conessine has anticholinergic activity — caution in prostatic hypertrophy and glaucoma"]
    },
    "Daruharidra": {
        interactions: ["Metformin / Glipizide (additive blood sugar lowering from berberine)", "Cyclosporin / Tacrolimus (berberine inhibits CYP3A4 — raises immunosuppressant levels)", "Warfarin (berberine antiplatelet activity)", "Metformin (berberine may increase metformin plasma levels via P-glycoprotein inhibition)"],
        contraindications: ["Pregnancy (berberine is a uterotonic and has embryotoxic effects)", "Breastfeeding (berberine crosses into breast milk — toxic to newborns)", "Newborns and infants (risk of neonatal jaundice)"],
        warnings: ["Berberis aristata / Tree Turmeric — berberine is the primary active alkaloid", "Berberine has significant and well-documented drug interactions — treat as a pharmacological agent, not just an herb", "Very similar interaction profile to Berberine supplements (see separate entry)", "Do NOT use in pregnancy or breastfeeding — this is a serious contraindication"]
    },
    "Berberine": {
        interactions: ["Metformin (synergistic blood sugar lowering — hypoglycaemia risk)", "Cyclosporin / Tacrolimus / Sirolimus (CYP3A4 inhibition — significantly raises immunosuppressant levels)", "Warfarin / Clopidogrel (antiplatelet activity)", "Doxycycline (berberine reduces bioavailability)", "Azithromycin / Clarithromycin (combined cardiac QT prolongation risk)"],
        contraindications: ["Pregnancy (embryotoxic and neonatal jaundice risk)", "Breastfeeding", "Newborns and infants", "Low blood pressure"],
        warnings: ["Berberine is found in barberry, goldenseal, Oregon grape, and Tree Turmeric", "Drug interaction potential is high — comparable to pharmaceutical agents", "Can lower blood sugar significantly — monitor closely if on antidiabetics", "May prolong cardiac QT interval — caution with other QT-prolonging drugs"]
    },
    "Shatapushpa": {
        interactions: ["Tamoxifen / Anastrozole (phytoestrogenic anethole may oppose)", "Oral contraceptives (additive oestrogenic activity)", "Anticoagulants (mild)"],
        contraindications: ["Oestrogen-sensitive cancers", "Pregnancy in medicinal doses (emmenagogue)"],
        warnings: ["Anethum graveolens (Dill seed) — culinary use is completely safe", "At medicinal doses (supplements), phytoestrogenic activity becomes relevant", "Galactagogue — stimulates milk production in breastfeeding women (safe at food amounts)"]
    },
    "Khadira": {
        interactions: ["Antibiotics (catechins may have synergistic antimicrobial activity)", "Metformin (mild blood sugar lowering)", "Anticoagulants (mild)"],
        contraindications: ["Pregnancy", "Active liver disease"],
        warnings: ["Acacia catechu / Cutch Tree (Kath in Hindi) — astringent heartwood resin", "Contains catechins and quercetin — antioxidant and anti-inflammatory", "Used for oral health, skin conditions, and as a dysentery remedy in Ayurveda"]
    },

    // ── Traditional Chinese Medicine Herbs ────────────────────────────────────

    "Astragalus": {
        interactions: ["Ciclosporin / Tacrolimus (immune stimulation antagonises)", "Lithium (diuretic effect increases lithium levels)", "Cyclophosphamide / Azathioprine (immune stimulation counteracts)", "Warfarin (mild anticoagulant polysaccharides)", "Antihypertensives (mild additive BP lowering)"],
        contraindications: ["Active autoimmune diseases (SLE, RA, MS)", "Transplant recipients on immunosuppressants", "Pregnancy — insufficient data"],
        warnings: ["Astragalus membranaceus (Huang Qi) — widely used in TCM for immune support and fatigue", "Immune stimulation may exacerbate autoimmune conditions", "Do not use during acute infections — reserved for prevention and recovery", "Telomere-extending properties claimed — limited human clinical evidence"]
    },
    "Dong Quai": {
        interactions: ["Warfarin (coumarin derivatives — significant increase in INR documented)", "Tamoxifen / Anastrozole (phytoestrogenic activity may oppose cancer treatment)", "Combined oral contraceptives (additive oestrogenic effect)", "Aspirin / Clopidogrel (additive antiplatelet)"],
        contraindications: ["Oestrogen-receptor-positive cancers", "Pregnancy (uterotonic — stimulates contractions)", "Bleeding disorders", "Fibroids or endometriosis (phytoestrogenic stimulation)"],
        warnings: ["Angelica sinensis (Chinese angelica / female ginseng) — one of the most prescribed herbs in TCM", "Phytoestrogenic activity is significant — discuss with oncologist in cancer history", "Can cause photosensitivity — avoid UV exposure during use", "One of the most important herbs for female reproductive health in TCM but requires careful monitoring"]
    },
    "Bupleurum": {
        interactions: ["Ciclosporin / Steroids (immune modulation)", "Sedatives / CNS depressants (additive with saikosaponin sedative effect)", "Interferon (synergistic antiviral — but not a substitute)", "Hepatotoxic drugs (paradoxical — hepatoprotective at low doses, hepatotoxic at high doses)"],
        contraindications: ["Pregnancy", "Active bleeding", "Patients on immunosuppressants"],
        warnings: ["Bupleurum falcatum / Chai Hu — cornerstone of many TCM formulas (Xiao Chai Hu Tang)", "Case reports of serious pneumonitis with Japanese Sho-saiko-to (a Bupleurum formula) — contraindicated with interferon-alpha", "Rare but serious interstitial pneumonitis reported — report any new respiratory symptoms", "Should be used as part of TCM formula under practitioner guidance — not as a standalone supplement"]
    },
    "Schisandra": {
        interactions: ["Warfarin (CYP2C9 and CYP3A4 induction — reduces anticoagulant effect)", "Tacrolimus / Cyclosporin (significantly raises plasma levels via P-gp and CYP inhibition — toxicity risk)", "Midazolam / Alprazolam (CYP3A4 inhibition — raises benzodiazepine levels)", "Paclitaxel / Docetaxel (CYP and P-gp interaction — alters chemotherapy levels)", "Hepatoprotective drugs (additive)"],
        contraindications: ["Pregnancy (stimulates uterus)", "Epilepsy", "Severe liver disease (paradoxical at high doses)", "Peptic ulcer"],
        warnings: ["Schisandra chinensis (Wu Wei Zi / Five-Flavour Berry) — adaptogen and hepatoprotective herb", "CYP and P-glycoprotein interactions are significant — major drug interaction potential", "Immunosuppressant drug levels can be dramatically altered — transplant patients must avoid", "May cause CNS stimulation or sedation depending on dose"]
    },
    "Codonopsis": {
        interactions: ["CNS depressants (additive sedative effect)", "Metformin (mild blood sugar lowering)", "Ciclosporin (immune modulation)"],
        contraindications: ["Active infections with fever", "Active autoimmune flares"],
        warnings: ["Codonopsis pilosula (Dang Shen / Poor Man's Ginseng) — milder adaptogen alternative to true ginseng", "Generally very well tolerated with a wide safety margin", "Immunomodulatory — avoid during acute illness; use for prevention and recovery"]
    },
    "Rehmannia": {
        interactions: ["Metformin / Insulin (iridoid glycosides lower blood sugar — additive)", "Warfarin (mild anticoagulant)", "Antihypertensives (mild BP lowering)", "Iron supplements (may impair iron absorption)"],
        contraindications: ["Digestive weakness (prepared — Shu Di Huang — is cloying and heavy)", "Pregnancy — insufficient safety data", "Diarrhoea"],
        warnings: ["Rehmannia glutinosa — fundamental yin tonic in TCM (Sheng Di Huang raw, Shu Di Huang prepared)", "Prepared form (steamed in wine) is less cooling but more tonifying", "Can cause GI upset — combine with digestive herbs (Chen Pi / tangerine peel) as in traditional formulas", "Raw form has stronger blood sugar lowering effect than prepared form"]
    },
    "Cornus": {
        interactions: ["Antidiabetics (cornuside and morroniside lower blood glucose — additive)", "Antihypertensives (mild BP lowering)"],
        contraindications: ["Dysuria / difficult urination (astringent may worsen)"],
        warnings: ["Cornus officinalis (Shan Zhu Yu / Cornelian Cherry) — kidney and liver yin tonic in TCM", "Used in the classic formula Liu Wei Di Huang Wan (Six-Ingredient Rehmannia Pill)", "Generally very safe — one of the more gentle TCM herbs", "Strong astringent — useful for excessive sweating, seminal emission, and urinary incontinence"]
    },
    "Poria": {
        uses: ["Anxiety and insomnia (calming CNS)", "Digestive health (strengthens Spleen in TCM)", "Immune modulation", "Oedema (mild diuretic)"],
        preparation: ["Traditionally decocted in soups and formulas", "Poria mushroom powder in warm water", "Poria extract capsules"],
        dosage: "6–15 g dried mushroom in decoction; 500–1000 mg extract/day"
    },
    "Jujube": {
        interactions: ["Sedatives / CNS depressants (saponins in jujube have mild sedative effect — additive)", "Immunosuppressants (polysaccharide immune stimulation)", "Antidiabetics (mild blood sugar lowering)"],
        contraindications: ["Phlegm retention / damp conditions in TCM (sweet nature)", "Abdominal bloating"],
        warnings: ["Ziziphus jujuba (Da Zao / Red Date) — nourishing and calming TCM herb used in many formulas", "Extremely safe as food; concentrated extracts have mild pharmacological effects", "Contains cyclopeptide alkaloids with sedative properties — small additive effect with sleep medications"]
    },
    "Chrysanthemum": {
        interactions: ["Anticoagulants (mild — flavonoids have some antiplatelet activity)", "Sedatives (mild CNS depressant activity)"],
        contraindications: ["Asteraceae allergy (cross-reactivity with ragweed, chamomile, daisy)", "Cold conditions (chrysanthemum is cooling — avoid in those with cold constitution in TCM"],
        warnings: ["Chrysanthemum morifolium (Ju Hua) — cooling and liver-calming herb in TCM", "Used for eye strain, headache, hypertension, and early-stage fevers", "Allergy risk in Asteraceae-sensitive individuals", "Very safe at normal tea amounts (1–3 cups/day)"]
    },
    "Eucommia": {
        interactions: ["Antihypertensives (additive BP lowering from chlorogenic acid)", "Anticoagulants (mild)"],
        contraindications: ["Pregnancy — insufficient data", "Heat conditions in TCM (Eucommia is warming)"],
        warnings: ["Eucommia ulmoides (Du Zhong / Hardy Rubber Tree) — kidney-yang tonic in TCM", "Used for lower back pain, hypertension, and osteoporosis support", "Generally very safe; long history of use as tonic herb", "Mild antihypertensive effect — monitor if on medication"]
    },
    "Ligustrum": {
        interactions: ["Ciclosporin / Tacrolimus (immune modulation)", "Chemotherapy drugs (may mitigate bone marrow suppression — clinical data limited)", "Antidiabetics (mild blood sugar lowering)"],
        contraindications: ["Diarrhoea", "Deficiency cold conditions in TCM"],
        warnings: ["Ligustrum lucidum (Nu Zhen Zi / Chinese Privet) — liver and kidney yin tonic in TCM", "Used with Eclipta prostrata (Han Lian Cao) in the formula Er Zhi Wan for kidney-yin deficiency", "Case reports of liver injury — use caution with long-term high-dose consumption", "Generally safe at standard doses; monitor liver enzymes with prolonged use"]
    },
    "Magnolia Bark": {
        interactions: ["Benzodiazepines / Zolpidem (additive CNS depression from honokiol and magnolol)", "Warfarin (antiplatelet activity)", "Anticholinergic drugs (magnolol has anticholinergic-like activity)", "Amlodipine (calcium channel inhibition)"],
        contraindications: ["Pregnancy (muscle-relaxing effect on uterus)", "Breastfeeding"],
        warnings: ["Magnolia officinalis (Hou Po) — used in TCM for anxiety, depression, and digestive issues", "Honokiol and magnolol have potent CNS-sedating and anxiolytic properties", "Do not use with benzodiazepines or sleep medications without medical advice", "Anti-obesity potential studied in clinical trials"]
    },
    "Coptis": {
        interactions: ["Metformin (berberine in coptis has additive blood sugar lowering)", "Cyclosporin / Tacrolimus (CYP3A4 inhibition from berberine — raises drug levels)", "Warfarin (antiplatelet berberine)", "Antibiotics (synergistic antimicrobial — but may also affect gut microbiome)", "QT-prolonging drugs: Azithromycin / Clarithromycin (additive QT prolongation risk)"],
        contraindications: ["Pregnancy (berberine — embryotoxic)", "Breastfeeding (berberine in breast milk)", "Newborns and infants"],
        warnings: ["Coptis chinensis (Huang Lian) — the highest natural source of berberine in TCM", "Very bitter — typically used in small doses in formulas", "Berberine drug interactions are significant — see Berberine entry", "Used clinically for type 2 diabetes in China — effective but requires monitoring"]
    },
    "Pueraria": {
        interactions: ["Methotrexate (puerarin may affect methotrexate transport)", "Antidiabetics (puerarin lowers blood glucose — additive)", "Anticoagulants (mild antiplatelet)", "Alcohol (kudzu extracts used to reduce alcohol craving — daidzin inhibits aldehyde dehydrogenase)", "Tamoxifen (isoflavone phytoestrogen — possible antagonism)"],
        contraindications: ["Oestrogen-sensitive conditions (isoflavone content)", "Pregnancy — insufficient data"],
        warnings: ["Pueraria montana var. lobata (Ge Gen / Kudzu) — used in TCM for stiff neck, fever, and alcoholism", "Kudzu extract used in clinical trials for alcohol use disorder", "Phytoestrogenic isoflavones — discuss with oncologist in hormone-sensitive cancer history", "Generally well tolerated; liver safety confirmed in most trials"]
    },
    "Fritillaria": {
        interactions: ["Cardiac drugs: Digoxin / Beta-blockers (isosteroidal alkaloids — additive bradycardia)", "ACE inhibitors (additive cough side effect)", "Respiratory medications (additive antitussive — may over-suppress cough reflex)"],
        contraindications: ["Cold phlegm conditions in TCM", "Pregnancy"],
        warnings: ["Fritillaria cirrhosa (Chuan Bei Mu) and F. thunbergii (Zhe Bei Mu) — TCM herbs for cough", "Contains isosteroidal alkaloids (imperialine, verticinone) — cardiac and neuromuscular activity", "Primarily used for chronic cough and bronchitis — quite safe at therapeutic doses in TCM formulas", "Toxicity in overdose — adhere to recommended doses in classical formulas"]
    },
    "Acanthopanax": {
        interactions: ["Sedatives / CNS depressants (additive)", "Immunosuppressants (immune stimulation)", "Anticoagulants (mild antiplatelet)"],
        contraindications: ["Autoimmune diseases", "Pregnancy"],
        warnings: ["Eleutherococcus senticosus (Siberian Ginseng / Ci Wu Jia) — adaptogen widely used in TCM and Russia", "Often adulterated with Periploca sepium (silk vine) which has cardiac glycoside activity — source carefully", "Genuine Siberian ginseng is generally safe; adulterated products are dangerous", "Mild stimulant effect — take in the morning to avoid insomnia"]
    },

    // ── African Traditional Medicine Plants ────────────────────────────────────

    "Devil's Claw": {
        interactions: ["Warfarin / Aspirin / Clopidogrel (harpagoside — significant anticoagulant and antiplatelet activity)", "Antacids / PPIs: Omeprazole / Pantoprazole (increased gastric acid — antagonises acid-reducing drugs)", "Antidiabetics (additive hypoglycaemia)", "Antiarrhythmics / Cardiac drugs (harpagoside affects heart rhythm at high doses)", "Antihypertensives (mild hypotensive activity)"],
        contraindications: ["Peptic ulcers and GERD (stimulates acid secretion)", "Pregnancy (uterotonic)", "Gallstones (bile stimulation)", "Active bleeding disorders"],
        warnings: ["Harpagophytum procumbens — used primarily for osteoarthritis and lower back pain (good clinical evidence)", "Harpagosides are the active anti-inflammatory compounds", "Do not take with blood thinners without monitoring INR", "One of the better-studied African medicinal plants with positive clinical trial data for OA"]
    },
    "Sutherlandia": {
        interactions: ["Antiretroviral drugs: Efavirenz / Nevirapine (CYP3A4 induction may reduce HIV drug levels — serious concern in Africa)", "Warfarin (GABA-like activity — possible interaction)", "Antidiabetics (canavanine and pinitol lower blood sugar)", "Immunosuppressants (immune stimulation antagonises)"],
        contraindications: ["HIV/AIDS patients on antiretroviral therapy (drug interaction documented)", "Pregnancy (L-canavanine — possible teratogen)", "Autoimmune conditions"],
        warnings: ["Sutherlandia frutescens (Cancer Bush / Kankerbos) — important traditional medicine in South Africa", "L-canavanine content may exacerbate SLE/autoimmune conditions (similar to alfalfa)", "Drug interaction with ARVs is clinically significant in sub-Saharan Africa", "Despite name, anticancer properties in humans are not clinically established"]
    },
    "Buchu": {
        interactions: ["Warfarin (diosphenol — volatile oil has anticoagulant activity)", "Furosemide / Hydrochlorothiazide (additive diuretic — electrolyte depletion)", "Lithium (diuresis increases plasma lithium)", "Antibiotics — UTI treatment (buchu may reduce efficacy of synthetic antibiotics if used as sole therapy)"],
        contraindications: ["Pregnancy (volatile oil — uterotonic)", "Kidney disease (volatile oil irritates inflamed kidneys)", "Active UTI with haematuria (haemorrhagic cystitis risk)"],
        warnings: ["Agathosma betulina — traditional Khoi and Cape Malay remedy for UTI and kidney health", "Diosphenol has antiseptic properties in the urinary tract", "Do not substitute buchu for antibiotics in established UTI — use as adjunct only", "Essential oil is very concentrated — internal use of oil (not tea) not recommended"]
    },
    "Pelargonium": {
        interactions: ["Warfarin (umckalin and coumarins — anticoagulant)", "Immunosuppressants (immune stimulation)", "Hepatotoxic drugs (rare but reported hepatotoxicity — additive risk)"],
        contraindications: ["Pregnancy and breastfeeding", "Liver disease", "Asteraceae allergy (some cross-reactivity)"],
        warnings: ["Pelargonium sidoides (Umckaloabo / EPs 7630) — South African plant used for acute bronchitis", "Good clinical evidence for acute respiratory tract infections — one of the few African herbs with robust trial data", "Post-marketing surveillance identified rare cases of hepatotoxicity and haematological effects", "EPs 7630 standardised extract is different from other Pelargonium species — ensure correct product"]
    },
    "African Wild Ginger": {
        uses: ["Respiratory infections and cough", "Anti-inflammatory", "Antibacterial", "Digestive disorders"],
        preparation: ["Root decoction", "Traditional steam inhalation", "Infusion of rhizome"],
        dosage: "Under traditional healer guidance; 1–2 cups decoction/day"
    },
    "Moringa": {
        interactions: ["Levothyroxine (may alter T3/T4 levels)", "Metformin / Insulin (additive blood sugar lowering)", "Atenolol / Lisinopril (additive antihypertensive effect)"],
        contraindications: ["Pregnancy (root, bark, and flowers are uterotonic — leaves safer)", "Breastfeeding (bark/root)", "Hypothyroidism"],
        warnings: ["Root and bark should never be used during pregnancy", "Moringa leaves are nutritionally safe in food amounts", "May enhance effects of antihypertensive and antidiabetic drugs"]
    },
    "Rooibos": {
        interactions: ["Warfarin (quercetin and rutin — mild anticoagulant)", "Iron supplements (tannins in fermented rooibos reduce iron absorption — but much lower than black tea)", "Antidiabetics (flavonoids may mildly lower blood sugar)", "Cyclosporin (aspalathin may modulate CYP3A4)"],
        contraindications: ["Oestrogen-sensitive conditions (weak phytoestrogenic activity)", "Kidney disease — insufficient data on high doses"],
        warnings: ["Aspalathus linearis — South African herbal tea, naturally caffeine-free", "Excellent antioxidant profile (aspalathin, nothofagin, rutin, quercetin)", "Green (unfermented) rooibos has stronger antioxidant activity than red (fermented)", "Generally extremely safe — one of the safest herbal teas with wide therapeutic range"]
    },
    "Hoodia": {
        interactions: ["Antidiabetics (appetite suppression may mask hypoglycaemia signs)", "Anticoagulants (uncertain — data limited)", "Cardiac medications — P57 (active compound) has uncertain cardiac effects"],
        contraindications: ["Pregnancy and breastfeeding", "Diabetes", "Cardiovascular disease", "Liver or kidney disease"],
        warnings: ["Hoodia gordonii — San Bushman appetite suppressant from Southern Africa", "P57 (oxypregnane steroidal glycoside) is the putative appetite-suppressing compound", "Most commercial 'hoodia' products contain little or no authentic Hoodia gordonii — widespread adulteration", "Limited clinical safety data — hepatotoxicity and cardiovascular effects documented in preclinical studies"]
    },
    "Pygeum": {
        interactions: ["Alpha-blockers: Tamsulosin / Alfuzosin (additive benefit for BPH but possible additive hypotension)", "5-alpha reductase inhibitors: Finasteride / Dutasteride (additive BPH benefit)", "Anticoagulants (moderate ferulic acid antiplatelet activity)"],
        contraindications: ["Prostate cancer (consult urologist before use)", "Pregnancy — N/A (male-specific use)", "Active bleeding disorders"],
        warnings: ["Prunus africana (Pygeum africanum) — African cherry bark for BPH (benign prostatic hyperplasia)", "Clinical trials support modest improvement in urinary flow and nocturia", "Over-harvested and now CITES-protected — source responsibly", "Should not replace standard BPH medications without urologist consultation"]
    },
    "African Potato": {
        interactions: ["Antiretroviral drugs: Efavirenz / Lopinavir (CYP3A4 induction — significantly reduces HIV drug plasma levels — serious)", "Warfarin (anticoagulant activity)", "Digoxin (cardiac sterols — possible additive effect)", "Immunosuppressants (sterols modulate immune function)"],
        contraindications: ["HIV/AIDS patients on antiretroviral therapy (serious interaction)", "Pregnancy", "Autoimmune conditions"],
        warnings: ["Hypoxis hemerocallidea — widely used in South Africa for immune support including HIV-related conditions", "Plant sterols (hypoxoside, rooperol) modulate immune function", "Serious pharmacokinetic interaction with ARVs documented — reduces efavirenz levels — threatens HIV treatment", "Patients with HIV on ARVs must avoid African potato"]
    },
    "Khat": {
        interactions: ["ALL stimulants: Ephedrine / Methylphenidate / Amphetamines (additive cardiovascular stimulation)", "MAO inhibitors (cathinone — serious hypertensive crisis risk)", "Antihypertensives (opposes BP control)", "Antidiabetics (raises blood glucose)", "Warfarin (increased metabolism — reduces anticoagulant effect)"],
        contraindications: ["Cardiovascular disease", "Hypertension", "Mental health conditions (psychosis risk)", "Pregnancy (vasoconstriction — foetal harm)", "Lactation"],
        warnings: ["Catha edulis — stimulant plant from East Africa and Arabian Peninsula", "Cathinone and cathine are amphetamine-like compounds — Schedule I or II controlled substance in many countries", "Long-term chewing causes significant psychiatric and cardiovascular effects", "Tolerance and dependence develop rapidly", "Legal status varies widely — illegal in most Western countries; traditional use in East Africa and Yemen"]
    },

    // ── Common Worldwide Medicinal Plants ─────────────────────────────────────

    "Turmeric": {
        interactions: ["Warfarin / Clopidogrel / Aspirin (additive antiplatelet effect)", "Metformin / Insulin (additive hypoglycaemia)", "Omeprazole / Ranitidine (curcumin reduces acid secretion)", "Paclitaxel / Doxorubicin (may reduce chemo efficacy in some studies)", "Iron supplements (curcumin chelates iron)"],
        contraindications: ["Gallbladder obstruction or bile-duct stones", "Active bleeding disorders", "Iron-deficiency anaemia"],
        warnings: ["High-dose supplements (>2 g/day) significantly increase bleeding risk", "Curcumin bioavailability is low — piperine (black pepper) enhances absorption but also raises drug plasma levels", "Avoid 2 weeks before surgery"]
    },
    "Grapefruit": {
        interactions: ["Statins: Simvastatin / Lovastatin / Atorvastatin (CYP3A4 inhibition — raises statin plasma levels dramatically — myopathy risk)", "Calcium channel blockers: Amlodipine / Felodipine / Nifedipine (CYP3A4 — raised plasma levels)", "Immunosuppressants: Cyclosporin / Tacrolimus / Sirolimus (CYP3A4 — significant toxicity risk)", "Benzodiazepines: Midazolam / Triazolam (CYP3A4 — raised sedation)", "HIV antiretrovirals: Saquinavir (CYP3A4 — raises plasma levels)", "Anticoagulants: Apixaban / Rivaroxaban (CYP3A4 and P-gp inhibition)", "Amiodarone (CYP3A4 — severe cardiac toxicity)"],
        contraindications: ["Used concurrently with any CYP3A4-metabolised medication unless dose-adjusted by physician"],
        warnings: ["Grapefruit juice is one of the most clinically significant food-drug interactions", "Furanocoumarins (bergamottin, DHB) are the interacting compounds — inhibit intestinal CYP3A4 permanently until new enzyme is synthesised (24–72 hours)", "Even one glass of grapefruit juice can double or triple plasma levels of certain drugs", "Seville oranges, pomelo, and tangelo have similar effects", "Many statin labels specifically warn against grapefruit consumption"]
    },
    "Cranberry": {
        interactions: ["Warfarin (CYP2C9 inhibition by proanthocyanidins — clinically significant INR increase)", "Tacrolimus / Ciclosporin (mild CYP3A4 inhibition)", "Antacids (ascorbic acid increases acidic drug absorption)", "Flurbiprofen (CYP2C9 — raises NSAID levels)"],
        contraindications: ["Kidney stones — calcium-oxalate type (high oxalate content)", "Aspirin allergy / Salicylate sensitivity (high salicylic acid in berries)"],
        warnings: ["Warfarin interaction is well-documented in case reports and pharmacokinetic studies — INR monitoring recommended", "For UTI prevention, the evidence is modest — proanthocyanidins prevent E. coli adhesion", "High oxalate content — caution in recurrent calcium-oxalate kidney stone formers", "Juice is high in sugar — relevant for diabetes"]
    },
    "Turmeric": {
        interactions: ["Warfarin / Clopidogrel / Aspirin (additive antiplatelet effect)", "Metformin / Insulin (additive hypoglycaemia)", "Iron supplements (curcumin chelates iron)"],
        contraindications: ["Gallbladder obstruction", "Active bleeding disorders"],
        warnings: ["High-dose supplements increase bleeding risk", "Avoid 2 weeks before surgery"]
    },
    "Cat's Claw": {
        interactions: ["Ciclosporin / Tacrolimus (immune stimulation antagonises immunosuppression)", "Warfarin / Aspirin (anticoagulant and antiplatelet oxindole alkaloids)", "Antihypertensives (mild BP lowering)", "Antiretroviral drugs (quinovic acid glycosides may inhibit viral replication — unstudied interaction)", "Cytochrome P450 substrates (alkaloids modulate CYP3A4)"],
        contraindications: ["Active autoimmune diseases (SLE, RA, MS)", "Pregnancy (uterotonic at high doses)", "Organ transplant recipients on immunosuppressants", "Coagulation disorders"],
        warnings: ["Uncaria tomentosa and U. guianensis — South American vine used for inflammation and immune support", "Immune stimulation is significant — use with extreme caution in autoimmune conditions", "Oxindole alkaloids are the primary active compounds — different chemotypes (tetracyclic vs pentacyclic) have different pharmacology", "Should not be used within 2 weeks of surgery"]
    },
    "Pau D'Arco": {
        interactions: ["Warfarin / Clopidogrel (lapachol — significant anticoagulant and antiplatelet activity)", "Chemotherapy (lapachol has anti-tumour activity but also increases bleeding risk in combination)", "Anticoagulants (additive — monitor INR)"],
        contraindications: ["Pregnancy (possible teratogen — animal studies)", "Bleeding disorders", "Pre-operative period"],
        warnings: ["Tabebuia impetiginosa (Lapacho / Taheebo) — South American bark used for infections and cancer support", "Lapachol at high doses causes haemolytic anaemia and anticoagulation", "Clinical evidence for anticancer or antifungal effects in humans is limited", "Avoid combining with blood thinners"]
    },
    "Arnica": {
        interactions: ["Warfarin / Aspirin / NSAIDs (helenalin — significant anticoagulant and antiplatelet — topical absorption is minimal but supplement form is significant)", "Antihypertensives (mild vasodilatory activity)"],
        contraindications: ["Internal use — toxic; topical use only (not on broken skin)", "Asteraceae allergy (ragweed cross-reactivity)", "Pregnancy"],
        warnings: ["Arnica montana — EXTERNAL USE ONLY for bruising, muscle pain, and arthritis", "Helenalin in arnica is toxic if ingested — oral use causes vomiting, arrhythmia, and death", "Homeopathic arnica (30C, 200C) contains negligible active compound — different safety profile", "Do not apply to broken skin, wounds, or mucous membranes", "Widely misused internally — the topical gel/cream is the safe form"]
    },
    "Kava Kava": {
        interactions: ["Benzodiazepines / Zolpidem / Alcohol (additive CNS depression — serious over-sedation)", "Levodopa / Dopaminergic agents (kavalactones interfere with dopamine — worsens Parkinson's symptoms)", "Hepatotoxic drugs (additive liver toxicity — major concern)", "Alprazolam — specific case report of coma from combination", "Warfarin (additive anticoagulant effect)"],
        contraindications: ["Liver disease (hepatotoxicity risk)", "Depression (may worsen)", "Pregnancy and breastfeeding", "Active alcohol use disorder", "Any concurrent hepatotoxic drug"],
        warnings: ["Piper methysticum — kava kava preparations are banned or restricted in several countries due to hepatotoxicity", "Causes a reversible, dose-dependent liver toxicity — 25+ cases of liver failure requiring transplant reported", "Do not use for more than 3 months; avoid with alcohol or other liver-stressing agents", "Traditional aqueous kava preparations may be safer than acetone/ethanol extracts — but evidence is inconclusive", "Dermopathy (scaly skin rash) with chronic heavy use"]
    },
    "Saw Palmetto": {
        interactions: ["Warfarin / Clopidogrel (fatty acid antiplatelet activity — modest)", "Finasteride / Dutasteride (additive 5-alpha-reductase inhibition — may be synergistic)", "Combined oral contraceptives / Testosterone replacement (hormonal modulation)", "Iron (may impair iron absorption)"],
        contraindications: ["Prostate cancer — do not use without urology clearance", "Pregnancy and breastfeeding (hormone-modulating)", "Bleeding disorders"],
        warnings: ["Serenoa repens — widely used for BPH (benign prostatic hyperplasia)", "Clinical evidence is mixed — some trials show improvement in urinary symptoms, others are negative", "Does not prevent prostate cancer and may mask PSA elevation — inform urologist", "Hormonal activity is mild but relevant in hormone-sensitive conditions"]
    },
    "Feverfew": {
        interactions: ["Warfarin / Aspirin / Clopidogrel (parthenolide — significant antiplatelet activity)", "NSAIDs: Ibuprofen / Naproxen (may reduce feverfew's antiplatelet activity — pharmacological antagonism)", "Triptans: Sumatriptan / Rizatriptan (additive serotonin-modulating activity)", "Corticosteroids (parthenolide inhibits NF-κB — possible interaction)"],
        contraindications: ["Pregnancy (parthenolide is uterotonic)", "Asteraceae allergy", "Active bleeding disorders"],
        warnings: ["Tanacetum parthenium — used for migraine prevention (modest clinical evidence)", "Abrupt discontinuation after prolonged use causes 'post-feverfew syndrome' — anxiety, insomnia, joint pain, rebound migraine", "Parthenolide inhibits platelet aggregation — stop 1–2 weeks before surgery", "Fresh leaf causes mouth ulcers in sensitive individuals — capsules preferred"]
    },
    "Willow Bark": {
        interactions: ["Warfarin / Aspirin / NSAIDs (salicin metabolises to salicylate — significant antiplatelet and anticoagulant additive effect)", "Methotrexate (salicylates reduce methotrexate excretion — toxicity risk)", "Antidiabetics (mild hypoglycaemia)", "Beta-blockers: Atenolol (salicylates may reduce antihypertensive efficacy)"],
        contraindications: ["Aspirin allergy or sensitivity (cross-reaction)", "Children and teenagers with viral infections (Reye syndrome risk)", "Peptic ulcer", "Pregnancy (high doses — Reye risk and antiplatelet)", "Bleeding disorders"],
        warnings: ["Salix alba / white willow bark — natural salicylate source (similar to aspirin but slower-onset)", "Contains salicin which is metabolised to salicylate — shares aspirin risks including GI irritation and bleeding", "Children with viral fever should NOT take willow bark (Reye syndrome risk, same as aspirin)", "Lower dose of salicylate than aspirin — less cardiovascular protective effect too"]
    },
    "Horse Chestnut": {
        interactions: ["Anticoagulants: Warfarin / Aspirin / Heparin (aescin — anticoagulant effect — additive bleeding risk)", "Antidiabetics (aescin may lower blood glucose)", "Antihypertensives (mild vasodilatory — additive)", "Lithium (diuretic effect — increases lithium levels)"],
        contraindications: ["Bleeding disorders", "Kidney disease", "Pregnancy and breastfeeding", "Liver disease"],
        warnings: ["Aesculus hippocastanum — primarily used for chronic venous insufficiency and varicose veins", "Aescin (escin) is the active compound — good clinical evidence for venous insufficiency", "Raw horse chestnut is TOXIC (aesculin — haemolytic glycoside) — only standardised, processed extract is safe", "Do not eat raw horse chestnut seeds — toxic symptoms include nausea, vomiting, haemolysis"]
    },
    "Ginkgo Biloba": {
        interactions: ["Warfarin / Aspirin / Clopidogrel (ginkgolides are platelet activating factor antagonists — significant anticoagulant risk)", "SSRIs / SNRIs: Fluoxetine / Venlafaxine (additive serotonin effects — serotonin syndrome reported)", "Trazodone (additive CNS effects — coma reported in combination)", "Antiepileptics: Phenytoin / Carbamazepine / Valproate (CYP induction — reduces drug levels)", "Cyclosporin (variable — may increase or decrease levels)", "Hypoglycaemic drugs (mild additive blood sugar lowering)"],
        contraindications: ["Bleeding disorders", "Pre-operative period (stop 2 weeks before surgery)", "Pregnancy (possible uterotonic)"],
        warnings: ["Significant and well-documented anticoagulant effect from ginkgolide B — serious bleeding risk with blood thinners", "Ginkgo nuts are toxic (4-methoxypyridoxine — causes seizures) — only leaf extracts are used medicinally", "Stop 2 weeks before surgery", "Contaminated or unextracted products may contain ginkgolic acids — allergenic and toxic"]
    },
    "Bilberry": {
        interactions: ["Warfarin / Aspirin / Clopidogrel (anthocyanins and quercetin — antiplatelet activity)", "Antidiabetics (additive blood sugar lowering)", "Antihypertensives (mild additive effect)", "Iron supplements (tannins may reduce absorption)"],
        contraindications: ["Bleeding disorders", "Surgery within 2 weeks", "Diabetes on antidiabetic medication (monitor glucose)"],
        warnings: ["Vaccinium myrtillus — European blueberry used for eye health, microcirculation, and blood sugar", "Anthocyanins are the primary active compounds — antioxidant and capillary-stabilising", "Clinical evidence for night vision improvement is weak despite popular belief", "Generally very safe as food; concentrated extracts have moderate interaction potential"]
    },
    "Ashwagandha": {
        interactions: ["Benzodiazepines / Zolpidem (additive CNS depression)", "Levothyroxine (may increase T4/T3 — monitor TSH)", "Ciclosporin / Tacrolimus (immune stimulation counteracts)", "Prednisolone / Methylprednisolone (may enhance or oppose immune effects)"],
        contraindications: ["Pregnancy (uterotonic)", "Hyperthyroidism / Graves' disease", "Active autoimmune conditions (RA, lupus, MS)"],
        warnings: ["Can raise thyroid hormone levels — recheck TSH after 4 weeks", "May cause excessive drowsiness when combined with sedatives", "Avoid in hormone-sensitive cancers (androgenic activity)"]
    },
    "Horsetail": {
        interactions: ["Diuretics: Furosemide / Hydrochlorothiazide (additive diuresis — dehydration and electrolyte loss)", "Lithium (diuretic effect concentrates lithium — toxicity risk)", "Thiamine / Vitamin B1 (equisetine is a thiamine antagonist — causes B1 deficiency with chronic use)", "Nicotine (contains nicotine — additive effects with nicotine patches/gums/vaping)"],
        contraindications: ["Thiamine deficiency / chronic alcohol use (thiaminase enzyme in fresh plant destroys B1)", "Pregnancy", "Heart disease (fluid and electrolyte changes)", "Kidney disease"],
        warnings: ["Equisetum arvense — used for urinary tract health, bone strength (high silica), and wound healing", "Contains thiaminase enzyme which destroys Vitamin B1 — do not use raw; drying/cooking inactivates it", "Nicotine content is pharmacologically relevant — additive with nicotine replacement therapies", "Good silica content supports nail, hair, and bone health — safe at standard doses"]
    },
    "Marshmallow Root": {
        interactions: ["Oral medications generally (mucilage forms a gel — delays absorption of all oral drugs — space by 2 hours)", "Metformin (mucilage may slow absorption)", "Lithium (possible enhanced lithium absorption)"],
        contraindications: ["Diabetes (mucilage may affect blood sugar regulation)", "Pregnancy — insufficient data on high doses"],
        warnings: ["Althaea officinalis — soothing mucilaginous herb for GI and respiratory tract", "Mucilage can coat the GI tract and slow or reduce absorption of ANY medication — always take drugs separately", "Generally very safe and well tolerated — excellent safety profile", "Used for sore throat, GERD, gastritis, dry cough, and UTI (soothes mucous membranes)"]
    },
    "Bladderwrack": {
        interactions: ["Levothyroxine / Carbimazole (high iodine — disrupts thyroid function — both hyper- and hypothyroidism)", "Anticoagulants: Warfarin / Heparin (fucoidans — significant anticoagulant activity)", "Antihypertensives (mild additive)", "Antidiabetics (mild blood sugar lowering)"],
        contraindications: ["Thyroid disorders (high iodine content)", "Pregnancy and breastfeeding (iodine excess and heavy metal contamination risk)", "Kidney disease", "Active bleeding disorders"],
        warnings: ["Fucus vesiculosus — brown seaweed used for thyroid support and weight management", "Very high iodine content — can cause or worsen both hypothyroidism (Wolff-Chaikoff effect) and hyperthyroidism (Jod-Basedow phenomenon)", "Marine algae accumulate heavy metals (arsenic, lead, mercury) — quality control essential", "Should NOT be used without thyroid function testing — iodine excess is as dangerous as deficiency"]
    },

    // ── More Indian Kitchen and Garden Plants ──────────────────────────────────

    "Curry Leaf": {
        interactions: ["Metformin / Glipizide (additive hypoglycaemia)"],
        contraindications: [],
        warnings: ["Safe in food amounts — used daily in Indian cooking", "May lower blood glucose — monitor if diabetic on medication", "High in carbazole alkaloids which have antioxidant and hypoglycaemic properties"]
    },
    "Drumstick Leaf": {
        uses: ["Iron and protein supplementation", "Blood sugar support", "Lactation enhancement", "Anti-inflammatory"],
        preparation: ["Cooked fresh leaves in dal or curry (Murungai keerai)", "Leaf powder in smoothies", "Drumstick vegetable (pods) in Sambhar"],
        dosage: "1–2 cups of cooked leaves per day; 2–4 g leaf powder"
    },
    "Brahmi Leaves": {
        uses: ["Cognitive enhancement", "Memory support", "Anxiety and stress", "Hair growth (topical oil)"],
        preparation: ["Fresh juice with honey", "Brahmi chutney (South Indian)", "Brahmi oil for scalp massage"],
        dosage: "30 ml fresh juice or 300–450 mg standardised extract/day"
    },
    "Curry Leaf Tree": {
        uses: ["Diabetes management", "Hair loss prevention", "Digestive health", "Antioxidant"],
        preparation: ["10 fresh leaves chewed on empty stomach (traditional diabetes remedy)", "Leaf paste for hair", "Add to tadka/tempering in cooking"],
        dosage: "8–10 fresh leaves/day medicinally; culinary use throughout day"
    },
    "Pudina": {
        uses: ["Digestive aid and bloating", "Nausea relief", "Headache (topical)", "Respiratory congestion"],
        preparation: ["Pudina chutney (ground with garlic and lemon)", "Pudina raita (yoghurt with mint)", "Fresh leaves in drinks", "Pudina tea"],
        dosage: "Culinary amounts; 1–2 cups mint tea for digestive relief"
    },
    "Dhania": {
        uses: ["Digestive bloating and gas", "Blood sugar support", "Anti-inflammatory", "Urinary tract health"],
        preparation: ["Coriander seed water (boil 1 tsp seeds, cool and drink)", "Fresh leaves in chutney and garnish", "Coriander powder in cooking"],
        dosage: "1 cup seed water/day for blood sugar; culinary leaf amounts"
    },
    "Jeera": {
        interactions: ["Metformin / Insulin (additive blood sugar lowering from thymoquinone and cuminaldehyde)", "Anticoagulants (mild — thymol derivatives)", "Iron supplements (cumin enhances non-haem iron absorption — synergistic)"],
        contraindications: ["Active bleeding disorders (high-dose supplements)"],
        warnings: ["Cuminum cyminum / cumin — common Indian kitchen spice with significant medicinal properties", "Cumin water (jeera pani) is a traditional digestive remedy — safe", "May lower blood sugar — relevant for diabetics on medication at supplement doses", "Enhances iron absorption from plant foods — beneficial in vegetarian diets"]
    },
    "Methi Leaf": {
        uses: ["Blood sugar management", "Lactation support", "Digestive health", "Cholesterol reduction"],
        preparation: ["Methi paratha (flatbread with fresh leaves)", "Methi dal", "Soaked seeds in water (drink first thing in morning)", "Methi tea"],
        dosage: "1 tsp soaked seeds in the morning; culinary leaf amounts"
    },
    "Ajwain": {
        interactions: ["Anticoagulants (thymol — mild antiplatelet)", "Antihypertensives (mild diuretic and vasodilatory)", "Antiepileptics (thymol may modulate GABA — uncertain interaction)"],
        contraindications: ["Pregnancy in large medicinal doses (uterotonic)", "Peptic ulcer (irritant)", "Liver disease (thymol metabolism)"],
        warnings: ["Trachyspermum ammi / Carom seeds / Bishop's weed — common in Indian cooking", "Thymol is the primary active compound — also present in thyme and oregano", "Used for digestive complaints, colic, and respiratory issues in India", "Safe in culinary amounts; medicinal doses (1–2 g thymol) have pharmacological effects"]
    },
    "Hing": {
        interactions: ["Anticoagulants: Warfarin (ferulic acid — antiplatelet activity)", "Antihypertensives (umbelliferone and ferulic acid lower BP — mild)", "Antidiabetics (mild blood sugar lowering)"],
        contraindications: ["Pregnancy (strong uterotonic — may cause miscarriage)", "Bleeding disorders", "Children under 5 (can cause haemolysis)"],
        warnings: ["Ferula assa-foetida (Asafoetida / Heeng) — pungent resin widely used in Indian cooking", "Strong antiflatulent and digestive stimulant — small amounts are safe and effective", "Large doses are uterotonic — absolutely avoid in pregnancy", "Anticoagulant activity is relevant at supplement/medicinal doses but negligible in cooking amounts"]
    },
    "Tejpat": {
        interactions: ["Metformin / Insulin (additive blood sugar lowering from cinnamon-related compounds)", "Warfarin (coumarin content — may alter INR)", "Anticoagulants (mild)"],
        contraindications: ["Pregnancy in large medicinal doses", "Liver disease (coumarin metabolism)"],
        warnings: ["Cinnamomum tamala / Indian Bay Leaf / Malabar Leaf — not to be confused with Mediterranean bay leaf (Laurus nobilis)", "Contains coumarin and cinnamate compounds similar to cinnamon — similar (though milder) interaction profile", "Widely used in biryani, pulao, and curries — safe in culinary amounts", "Leaf tea in Ayurveda used for diabetes and digestion — contains active blood sugar-lowering compounds"]
    },
    "Imli": {
        interactions: ["Aspirin / Ibuprofen (tamarind increases bioavailability of aspirin significantly)", "Metformin / Insulin (mild blood sugar lowering)", "Iron supplements (tartaric acid enhances non-haem iron absorption)", "Antibiotics: Ampicillin / Amoxicillin (increased bioavailability by enhanced GI absorption)"],
        contraindications: ["Aspirin allergy (enhanced aspirin absorption may cause toxicity)", "Active peptic ulcer (high acidity — tartaric and malic acid)"],
        warnings: ["Tamarindus indica / Imli / Puli — widely used in Indian and Southeast Asian cooking", "Tamarind significantly increases bioavailability of aspirin — relevant for high-dose aspirin users", "Very acidic — may worsen GERD or peptic ulcer", "Hypoglycaemic effect documented — monitor blood sugar if on antidiabetics"]
    },
    "Kadamba": {
        uses: ["Fever management (traditional)", "Wound healing (topical)", "Anti-inflammatory", "Respiratory infections"],
        preparation: ["Bark decoction for fever", "Leaf poultice for wounds", "Traditional Ayurvedic formulations"],
        dosage: "Under Ayurvedic practitioner guidance only"
    },
    "Sitaphal Leaf": {
        interactions: ["Antidiabetics (acetogenins — blood sugar lowering)", "Immunosuppressants (acetogenins modulate immunity)", "Chemotherapy — caution: acetogenins (annonacin) are mitochondrial complex I inhibitors"],
        contraindications: ["Pregnancy (seeds and leaves are abortifacient)", "Neurodegenerative disease — atypical Parkinson's concern"],
        warnings: ["Annona squamosa (Sugar apple / Custard apple leaf) — seeds, bark, and leaves used medicinally; fruit is safe food", "Acetogenins (including annonacin) in seeds and bark are potent mitochondrial toxins", "High consumption of soursop (Annona muricata) in some Caribbean populations is epidemiologically linked to atypical Parkinsonism", "Do not consume seeds or bark extracts — fruit pulp is safe to eat"]
    },
    "Baheda": {
        interactions: ["Warfarin / Anticoagulants (gallotannins — mild anticoagulant)", "Metformin (mild blood sugar lowering)", "Oral iron (tannins may reduce absorption — space by 2 hours)"],
        contraindications: ["Pregnancy (emmenagogue in large doses)", "Active diarrhoea"],
        warnings: ["Terminalia bellirica (Bibhitaki in Sanskrit) — one of the three fruits in Triphala", "Strong astringent and tonic properties — useful for respiratory, GI, and vision health in Ayurveda", "Tannins chelate iron and other minerals — space from mineral supplements"]
    },

    // ── Additional Indian Plants ──────────────────────────────────────────────

    "Jackfruit Leaf": {
        interactions: ["Metformin / Insulin (lectins and flavonoids — additive blood sugar lowering)", "Anticoagulants (mild antiplatelet flavonoids)"],
        contraindications: ["Birch pollen allergy (cross-reactivity possible)", "Latex allergy (jackfruit latex — cross-reactive with natural rubber latex)"],
        warnings: ["Artocarpus heterophyllus leaves traditionally used in India for diabetes management", "Leaf tea lowers blood glucose — monitor if on antidiabetics", "Latex from unripe fruit and stem can cause contact dermatitis in latex-sensitive individuals", "Fruit is a safe and nutritious food; leaves and bark have medicinal activity"]
    },
    "Teak": {
        interactions: ["Anticoagulants: Warfarin (lapachol-like quinones — mild anticoagulant activity)", "Antidiabetics (bark extract — mild blood sugar lowering)"],
        contraindications: ["Pregnancy (emmenagogue — stimulates uterine contractions)", "Kidney disease (oxalate content in heartwood)"],
        warnings: ["Tectona grandis (Sagwan) — heartwood, bark, and leaves used in Ayurveda and Siddha medicine", "Teak sawdust is a significant occupational allergen — causes rhinitis, asthma, and contact dermatitis in woodworkers", "Internal use of bark or leaf should only be under Ayurvedic supervision", "Traditionally used for hair loss, skin disorders, and as a tonic"]
    },
    "Silk Cotton Tree": {
        interactions: ["Antidiabetics (bark extract — additive blood sugar lowering)", "Anticoagulants (mild antiplatelet flavonoids in gum)"],
        contraindications: ["Pregnancy (root bark — uterotonic)", "Cotton fibre allergy (kapok — aerogenic allergen)"],
        warnings: ["Bombax ceiba (Semal / Shimul / Red Silk Cotton) — bark, roots, and gum used in Indian traditional medicine", "Kapok fibres from seed pods are an aerogenic allergen — respiratory sensitisation in occupational settings", "Root bark has uterotonic properties — strictly avoid in pregnancy", "Floral extracts used in Ayurveda as tonic; fruit and seeds used as topical anti-inflammatory"]
    },
    "Indian Laburnum": {
        interactions: ["Antidiabetics: Metformin (cassia glycosides — additive blood sugar lowering)", "Laxatives (additive purgative — severe dehydration risk)", "Cardiac drugs (oxalic acid derivatives — additive effects uncertain)"],
        contraindications: ["Pregnancy (strong purgative — risk of miscarriage)", "Children (all parts toxic — unripe pods especially dangerous)", "IBD / Crohn's disease"],
        warnings: ["Cassia fistula (Amaltas / Golden Shower / Kondrai) — bark, root, leaves, and unripe pods are toxic", "Ripe pulp of pods is used as a gentle laxative in Ayurveda — unripe pods contain toxic compounds", "Anthraquinone glycosides are the purgative constituents — never self-dose; use only ripe pod pulp under guidance", "Flowers are used in Kerala as a vegetable (Vishu Kani) — safe in small food amounts"]
    },
    "Jamun": {
        interactions: ["Metformin / Glibenclamide / Insulin (significant additive hypoglycaemia — jambolana glycoside)", "Antihypertensives (mild additive BP lowering from anthocyanins)", "Warfarin (mild antiplatelet — anthocyanins and ellagic acid)"],
        contraindications: ["Hypoglycaemia (risk of excessive glucose lowering)", "Post-operative period (antiplatelet activity)"],
        warnings: ["Syzygium cumini (Java Plum / Jamun / Naaval Pazham) — seeds, bark, and fruit all used in Ayurveda and Siddha", "Jamun seed powder is one of the most widely used traditional diabetes remedies in India — significant blood sugar lowering documented", "Eating unripe or excessive Jamun fruit may cause throat irritation and diarrhoea", "Seed powder can lower blood glucose by 20–30% — dangerous if combined with antidiabetic medication without monitoring"]
    },
    "Kathal": {
        uses: ["Digestive health (unripe fruit as vegetable)", "Blood sugar management (seed flour)", "Antioxidant (ripe fruit)", "Nutritional support (high potassium, B vitamins)"],
        preparation: ["Unripe jackfruit cooked as vegetable (Kathal sabji)", "Ripe fruit eaten fresh or dried", "Seed flour added to rotis and cooking"],
        dosage: "Culinary amounts; 1–2 g seed flour daily as supplement"
    },
    "Agathi": {
        interactions: ["Metformin / Insulin (additive blood sugar lowering)", "Anticoagulants (mild antiplatelet flavonoids)", "Iron supplements (oxalates — reduce absorption; space by 2 hours)"],
        contraindications: ["Pregnancy in large medicinal doses", "Active diarrhoea (mild laxative effect of leaves)", "Hypothyroidism (possible goitrogenic compounds)"],
        warnings: ["Sesbania grandiflora (August Tree / Agati / Agathi Keerai) — flowers, leaves, and bark used in South Indian and Southeast Asian medicine", "Leaves and flowers are consumed as vegetables in South India and Sri Lanka — safe in food amounts", "Medicinal doses of bark and seeds are stronger — use under guidance", "Rich in iron, calcium, and protein — beneficial as nutritional supplement especially for vegetarians"]
    },
    "Parijat": {
        interactions: ["Antidiabetics (iridoid glycosides — additive blood sugar lowering)", "Anticoagulants (mild antiplatelet oleanolic acid)", "NSAIDs (additive anti-inflammatory — allows dose reduction)", "Antipyretics (additive fever-lowering effect)"],
        contraindications: ["Pregnancy (emmenagogue — stimulates menstruation)", "Active diarrhoea (mild laxative)"],
        warnings: ["Nyctanthes arbor-tristis (Night Jasmine / Har Singar / Parijata) — leaves, flowers, and bark used in Ayurveda", "Strong anti-inflammatory and antipyretic activity — used in Ayurveda for dengue, malaria, and arthritis", "Iridoid glycosides (arbortristoside) are the active compounds — well-studied antimalarial activity", "Do not use as sole treatment for malaria — use as adjunct under medical supervision"]
    },
    "Bhui Amla": {
        interactions: ["Hepatotoxic drugs (hepatoprotective — reduces drug-induced liver injury — beneficial but may mask hepatotoxicity signals)", "Metformin (mild additive hypoglycaemia)", "Antiviral drugs (phyllanthin — documented anti-hepatitis-B activity — possible additive effect with antiviral medications)"],
        contraindications: ["Pregnancy (emmenagogue)", "Bleeding disorders (mild antiplatelet effect)"],
        warnings: ["Phyllanthus niruri (Stonebreaker / Bhumyamalaki / Keezhanelli) — significant hepatoprotective activity documented in clinical trials", "Used in Ayurveda and Siddha for liver disease, kidney stones, and urinary tract infections", "Anti-hepatitis-B virus (HBV) activity shown in human studies — use under physician supervision alongside conventional antiviral therapy", "May dissolve calcium oxalate kidney stones over time — adequate hydration essential during use"]
    },
    "Jatamansi": {
        interactions: ["CNS depressants: Diazepam / Zolpidem / Barbiturates (additive sedation — risk of over-sedation)", "MAO inhibitors (jatamansone — possible interaction)", "Levothyroxine (may modulate thyroid function — monitor TSH)", "Antihypertensives (mild additive hypotension)"],
        contraindications: ["Pregnancy (uterotonic at medicinal doses)", "Breastfeeding", "Epilepsy (may lower seizure threshold at high doses)"],
        warnings: ["Nardostachys jatamansi (Spikenard / Jatamansi) — used in Ayurveda for anxiety, insomnia, and epilepsy", "Jatamansone is the primary active compound — sedative and anxiolytic activity", "Do not drive or operate machinery after use — sedating", "CITES Appendix II-listed species — overharvested; ensure ethically sourced product"]
    },
    "Chirata": {
        interactions: ["Metformin / Glibenclamide (additive blood sugar lowering from amarogentin)", "Anticoagulants (mild antiplatelet)", "Antihypertensives (mild additive effect)"],
        contraindications: ["Pregnancy (bitter compounds — potential abortifacient at high doses)", "Peptic ulcer (bitter principles stimulate acid secretion)", "Hypoglycaemia"],
        warnings: ["Swertia chirayita (Chiretta / Indian Gentian / Chiraita) — intensely bitter Himalayan herb used in Ayurveda and Siddha", "One of the most bitter plants known — extremely small doses are medicinally active", "Amarogentin and swertianin are the primary active iridoids — anti-diabetic, anti-malarial, and hepatoprotective", "Adulteration with other Swertia species (S. angustifolia, S. bimaculata) is common — source from reputable supplier"]
    },

    // ── Additional TCM Plants ──────────────────────────────────────────────────

    "Goji Berry": {
        interactions: ["Warfarin (betaine and polysaccharides — significant increase in INR documented in case reports)", "Antidiabetics: Metformin / Insulin (additive blood sugar lowering from polysaccharides)", "Antihypertensives (mild additive BP lowering)"],
        contraindications: ["Active bleeding disorders", "Pregnancy — insufficient safety data on supplements (food amounts likely safe)", "Nightshade (Solanaceae) allergy — cross-reactivity possible"],
        warnings: ["Lycium barbarum and L. chinense (Wolfberry / Gou Qi Zi) — widely used in TCM as a tonic for eyes, liver, and kidneys", "Warfarin interaction is well-documented in case reports — INR monitoring essential for anticoagulated patients eating goji regularly", "Very high antioxidant content (zeaxanthin, betaine, polysaccharides) — generally safe as a food", "Supplement doses are much higher than food amounts and carry greater interaction risk"]
    },
    "Chinese Yam": {
        interactions: ["Oestrogen therapies / HRT (diosgenin — phytoestrogenic activity)", "Tamoxifen / Anastrozole (diosgenin may oppose anti-oestrogenic treatment)", "Antidiabetics (additive blood sugar lowering — allantoin)"],
        contraindications: ["Oestrogen-sensitive cancers (breast, uterine, ovarian)", "Hormone-sensitive conditions", "Allergy to yams or Dioscoreaceae family"],
        warnings: ["Dioscorea opposita / D. polystachya (Shan Yao / Nagaimo) — used in TCM as a spleen, lung, and kidney tonic", "Diosgenin is a steroidal saponin precursor — phytoestrogenic activity at supplement doses", "Do NOT use wild yam as a substitute for DHEA or progesterone — the body cannot convert plant diosgenin to human hormones", "Safe as a food in moderate culinary amounts; supplement concentrates have hormonal activity"]
    },
    "Angelica Dahurica": {
        interactions: ["Warfarin (furanocoumarin derivatives — significant anticoagulant effect)", "Antiplatelet drugs: Aspirin / Clopidogrel (additive)", "Photosensitising drugs: Tetracyclines / Fluoroquinolones (additive photosensitisation from psoralen and bergapten)"],
        contraindications: ["Pregnancy (emmenagogue and possible uterotonic)", "Photosensitive skin conditions", "Active bleeding disorders"],
        warnings: ["Angelica dahurica (Bai Zhi) — TCM herb used for headache, sinus pain, and toothache", "Furanocoumarins (psoralen, bergapten, byakangelicol) cause significant photosensitivity — avoid sun exposure during use", "Anticoagulant effect is more pronounced than most TCM herbs — stop 1 week before surgery", "Should be distinguished from Angelica sinensis (Dong Quai) — similar photosensitivity risk but different therapeutic uses"]
    },
    "White Peony": {
        interactions: ["Warfarin / Aspirin (paeoniflorin — moderate antiplatelet and anticoagulant activity)", "Metformin / Insulin (additive blood sugar lowering)", "Phenytoin / Carbamazepine (paeoniflorin may modulate seizure threshold — uncertain interaction)", "Oestrogen therapies (mild phytoestrogenic / anti-oestrogenic activity — complex)"],
        contraindications: ["Active bleeding disorders", "Pregnancy — emmenagogue at high doses", "Hypotension (mild vasodilatory effect)"],
        warnings: ["Paeonia lactiflora (Bai Shao / White Peony Root) — one of the most commonly prescribed herbs in TCM for blood nourishment", "Paeoniflorin is the primary active compound — anti-inflammatory, spasmolytic, and analgesic", "Used in the classic formula Gui Zhi Fu Ling Wan and Xiao Yao San for menstrual disorders", "Anticoagulant activity is clinically relevant at high doses — stop 1 week before surgery"]
    },

    // ── Additional Worldwide Medicinal Plants ─────────────────────────────────

    "Witch Hazel": {
        interactions: ["Warfarin / Aspirin (tannins — mild antiplatelet activity; oral use only)", "Iron supplements (tannins reduce non-haem iron absorption — space by 2 hours if taken orally)"],
        contraindications: ["Oral use not recommended (hepatotoxic pyrrolizidine alkaloids present in some preparations)", "Pregnant women (avoid oral use)", "Children — only external use"],
        warnings: ["Hamamelis virginiana — primarily used as a topical astringent for haemorrhoids, bruising, and skin inflammation", "Topical use is very safe and well evidenced — commercial witch hazel preparations (distilled) are widely used", "Oral witch hazel contains safrole and pyrrolizidine alkaloids — hepatotoxic and potentially carcinogenic; avoid internal use", "Topical preparation should NOT contain alcohol in concentrations >20% for prolonged skin application"]
    },
    "Slippery Elm": {
        interactions: ["Oral medications generally (mucilage delays gastric emptying and absorption of all drugs — space by 2 hours)", "Metformin (delayed absorption)", "Levothyroxine (delayed absorption — space by at least 4 hours)"],
        contraindications: ["Elm allergy (rare cross-reactivity)", "Pregnancy — mucilage preparations generally considered safe in food amounts but avoid concentrated supplements"],
        warnings: ["Ulmus rubra — inner bark used for soothing mucous membranes of GI and respiratory tracts", "Mucilage mechanism is the same as Marshmallow Root — coats the GI lining and can significantly slow oral drug absorption", "Generally very safe with an excellent safety profile — one of the most gentle herbal remedies", "Used for GERD, IBS, sore throat, and IBD flare symptom management"]
    },
    "Mullein": {
        interactions: ["Antidiabetics (mild blood sugar lowering from iridoid glycosides)", "Anticoagulants (mild coumarin derivatives — relevant at high doses only)", "Diuretics (mild additive diuretic effect)"],
        contraindications: ["Pregnancy — insufficient safety data at medicinal doses", "Verbascum (figwort) allergy"],
        warnings: ["Verbascum thapsus (Great Mullein / Aaron's Rod) — used for respiratory infections, coughs, and ear infections", "Leaf preparations for tea: strain carefully to remove fine hairs — can irritate mucous membranes and throat if not filtered", "Mullein ear oil is used for otitis media symptom relief — not a substitute for antibiotics in bacterial ear infection", "One of the safer herbal remedies for children's coughs when properly prepared as strained tea"]
    },
    "Comfrey": {
        interactions: ["Hepatotoxic drugs: Methotrexate / Statins / Paracetamol (additive liver toxicity from pyrrolizidine alkaloids — serious)", "Anticoagulants (allantoin and rosmarinic acid — mild antiplatelet)"],
        contraindications: ["Internal use — banned or restricted in many countries due to pyrrolizidine alkaloid hepatotoxicity", "Open wounds (topical — risk of systemic pyrrolizidine alkaloid absorption)", "Pregnancy and breastfeeding (even topical use is discouraged)", "Children under 12 (hepatotoxicity risk)"],
        warnings: ["Symphytum officinale (Knitbone / Boneset / Beinwell) — contains pyrrolizidine alkaloids (PAs) which cause hepatic veno-occlusive disease", "INTERNAL USE IS BANNED in many countries (UK, Germany, USA) — hepatotoxic, genotoxic, and potentially carcinogenic", "Topical use (creams, gels) for bruises and sprains is generally accepted but avoid broken skin", "Root contains 10× more PAs than leaves — root preparations are especially dangerous", "Allantoin provides the wound-healing benefit — safer alternatives without PAs are available"]
    },
    "Plantain Herb": {
        interactions: ["Warfarin (Vitamin K in leaves — may modestly reduce anticoagulant effect)", "Lithium (diuretic effect — may increase lithium levels)", "Antidiabetics (mild blood sugar lowering from aucubin iridoid)"],
        contraindications: ["Plantain / Psyllium allergy (Plantago genus cross-reactivity)", "Bowel obstruction (mucilage bulk — same as Psyllium)"],
        warnings: ["Plantago major / P. lanceolata (Greater Plantain / Narrowleaf Plantain / Isabgol relative) — common garden weed used medicinally worldwide", "Different from Plantain banana (Musa paradisiaca) — this is the herbaceous ground plant", "Leaves used topically for insect stings, minor cuts, and skin irritation — well-established traditional use", "Seeds contain psyllium-like mucilage — beneficial for bowel regularity but can obstruct if taken dry without water"]
    },
    "Black Cohosh": {
        interactions: ["Tamoxifen / Anastrozole (uncertain: may interfere with breast cancer treatment — conflicting evidence)", "Hepatotoxic drugs: Statins / Methotrexate (additive liver toxicity — rare but serious)", "Hormone replacement therapy / Combined oral contraceptives (possible additive oestrogenic effects)", "Antihypertensives (mild additive BP lowering from triterpene glycosides)"],
        contraindications: ["Oestrogen-receptor-positive breast cancer (uncertain risk — discuss with oncologist)", "Liver disease (hepatotoxicity risk)", "Pregnancy (uterotonic — historically used to induce labour)", "Buttercup (Ranunculaceae) allergy"],
        warnings: ["Actaea racemosa / Cimicifuga racemosa — most widely used Western herb for menopausal symptoms", "Rare but documented hepatotoxicity — several cases of liver failure requiring transplant have been reported", "Mechanism of action is NOT purely oestrogenic — does not stimulate ER-positive breast cells in most studies, but caution warranted", "Limit use to 6 months without a break; discontinue and seek medical attention if jaundice, dark urine, or liver-related symptoms appear"]
    },
    "Goldenseal": {
        interactions: ["Cyclosporin / Tacrolimus (berberine — CYP3A4 inhibition — raises immunosuppressant levels — serious)", "Warfarin / Clopidogrel (berberine — antiplatelet activity)", "Metformin (berberine — additive blood sugar lowering)", "Digoxin (berberine — increases digoxin levels via P-glycoprotein inhibition)", "QT-prolonging drugs: Azithromycin / Clarithromycin (additive QT prolongation risk from berberine)"],
        contraindications: ["Pregnancy (berberine — uterotonic and embryotoxic)", "Breastfeeding (berberine in breast milk — toxic to newborns)", "Neonates and infants (kernicterus / neonatal jaundice risk)", "Low blood pressure"],
        warnings: ["Hydrastis canadensis — primary source of berberine in North American herbal medicine", "Berberine drug interactions are extensive and clinically significant — see Berberine entry", "Severely overharvested — CITES-protected; use cultivated sources only", "Do NOT use during pregnancy under any circumstances — documented uterotonic and embryotoxic effects", "Antibacterial activity does NOT justify its use as a replacement for antibiotics — insufficient clinical evidence"]
    },
    "Oregon Grape": {
        interactions: ["Cyclosporin / Tacrolimus (berberine — CYP3A4 inhibition — raises immunosuppressant levels)", "Warfarin (berberine — antiplatelet and anticoagulant)", "Metformin (berberine — additive hypoglycaemia)", "QT-prolonging drugs (berberine — additive QT prolongation)"],
        contraindications: ["Pregnancy (berberine — uterotonic and embryotoxic)", "Breastfeeding", "Neonates"],
        warnings: ["Mahonia aquifolium — contains berberine (same as Goldenseal and Barberry) — identical pharmacological interaction profile", "Well-evidenced for topical use in psoriasis — oral use in psoriasis is less well studied", "Berberine drug interactions are clinically significant — review current medication list before use", "Generally better tolerated than Goldenseal with a slightly lower berberine content per dose"]
    },
    "Barberry": {
        interactions: ["Cyclosporin / Tacrolimus (berberine — CYP3A4 inhibition — raises immunosuppressant plasma levels — serious)", "Warfarin / Aspirin (berberine — antiplatelet and anticoagulant)", "Metformin / Insulin (berberine — significant additive blood sugar lowering)", "QT-prolonging drugs (berberine — additive QT prolongation)", "Doxycycline (berberine reduces bioavailability)"],
        contraindications: ["Pregnancy (berberine — uterotonic and embryotoxic)", "Breastfeeding", "Neonates (jaundice risk)", "Hypotension"],
        warnings: ["Berberis vulgaris (European Barberry) and B. aristata (Indian Barberry / Daruharidra) — both contain berberine as the primary active alkaloid", "Berberine interaction profile is identical to Goldenseal and Oregon Grape — all three herbs carry the same significant drug interactions", "Can lower blood glucose by up to 20–25% — dangerous hypoglycaemia risk if combined with antidiabetics without monitoring", "Berries are safe as food in moderate amounts; root and bark extracts are pharmacologically active and require monitoring"]
    },
    "Indian Cork Tree": {
        interactions: ["Antidiabetics (bacoside-like alkaloids — mild blood sugar lowering)", "Antihypertensives (mild vasodilatory activity from millingtonia alkaloids)"],
        contraindications: ["Pregnancy (insufficient safety data)", "Allergy to Bignoniaceae family"],
        warnings: ["Millingtonia hortensis (Tree Jasmine / Indian Cork Tree / Akash Neem) — bark, root, and flowers used in Indian traditional medicine", "Flowers used as a cheap substitute for cork — hence the common name", "Traditionally used in Ayurveda and Unani for respiratory disorders, asthma, and as a nasal decongestant", "Research is limited — use only under qualified practitioner guidance"]
    },
    "Bhringraj Oil": {
        uses: ["Hair growth stimulation (topical)", "Premature greying prevention", "Scalp health and dandruff", "Stress-related hair loss"],
        preparation: ["Bhringraj leaves boiled in sesame or coconut oil", "Commercial Bhringraj hair oil applied 2–3× per week", "Leave on scalp for 1–2 hours before washing"],
        dosage: "Topical scalp application 2–3 times per week; leave 30–60 min before washing"
    },
    "Neem Leaf": {
        uses: ["Blood sugar management", "Skin conditions (acne, eczema)", "Dental hygiene (neem twig chewing)", "Immune support"],
        preparation: ["10–15 fresh neem leaves chewed on empty stomach (traditional diabetes remedy)", "Neem leaf powder in capsules", "Neem leaf tea (very bitter)"],
        dosage: "500 mg leaf powder twice daily; 10–15 leaves/day for blood sugar — under supervision only"
    },
    "Gotu Kola": {
        interactions: ["Diazepam / Benzodiazepines (additive CNS sedation)", "Levothyroxine (may alter thyroid hormone metabolism)", "Hepatotoxic drugs (rare hepatotoxicity — additive risk with long-term high-dose use)", "Antidiabetics (mild blood sugar lowering from asiaticoside)", "Antihypertensives (mild additive effect)"],
        contraindications: ["Liver disease (hepatotoxicity risk with high doses)", "Pregnancy (emmenagogue)", "Breastfeeding"],
        warnings: ["Centella asiatica (Mandukaparni / Brahmi alternative / Brahma Manduki) — widely used in Ayurveda for wound healing, cognitive function, and anxiety", "Often confused with Brahmi (Bacopa monnieri) in common usage — different plant with distinct pharmacology", "Asiaticoside improves collagen synthesis — excellent clinical evidence for wound healing and varicose vein management", "Rare hepatotoxicity reported — limit use to 6 weeks without a break; avoid with other liver-stressors"]
    },
    "Kutki Root": {
        uses: ["Liver protection and regeneration (hepatoprotective)", "Immune modulation", "Fever management (antipyretic)", "Digestive health (bitter digestive stimulant)"],
        preparation: ["Kutki powder (100–200 mg) mixed with honey", "Decoction of dried root (1 g in 200 ml water)", "Standardised picroside extract capsules"],
        dosage: "100–400 mg root powder/day under Ayurvedic supervision; lower doses are hepatoprotective, higher doses hepatotoxic"
    },
    "Ashwagandha Root": {
        uses: ["Stress and anxiety reduction (adaptogen)", "Testosterone and fertility support", "Thyroid hormone balance", "Athletic endurance and recovery"],
        preparation: ["Root powder in warm milk with honey and ghee (traditional Ayurvedic formulation)", "KSM-66 or Sensoril standardised extract capsules", "Ashwagandha latte"],
        dosage: "300–600 mg standardised root extract daily; 3–5 g root powder with warm milk at bedtime"
    }
};

// Conditions and plants to avoid
export const conditionContraindications = {
    "Pregnancy": [
        "Aloe Vera", "Tulsi", "Neem", "Ashwagandha", "Chamomile", "Eucalyptus",
        "Rosemary", "Sage", "Valerian", "St. John's Wort", "Senna", "Fenugreek",
        "Passionflower", "Hawthorn", "Fennel", "Triphala", "Andrographis",
        "Moringa", "Lemongrass", "Licorice Root", "Papaya Leaf", "Guava Leaf",
        "Punarnava", "Kalanchoe", "Shankhpushpi", "Bacopa", "Giloy", "Shatavari",
        "Calendula", "Yarrow", "Red Clover", "Alfalfa", "Rhodiola", "Maca",
        "Mucuna Pruriens", "Bhringraj", "Nutmeg", "Star Anise", "Mango Leaf",
        "Betel Leaf", "Sarpagandha", "Ashoka", "Kutki"
    ],
    "Diabetes": [
        "Aloe Vera", "Turmeric", "Ginger", "Garlic", "Tulsi", "Neem", "Eucalyptus",
        "Cinnamon", "Fenugreek", "Bitter Melon", "Curry Leaf", "Guava Leaf",
        "Dandelion", "Nettle", "Coriander", "Hibiscus", "Moringa", "Guduchi",
        "Triphala", "Ginseng", "Green Tea", "Beetroot", "Onion", "Mango Leaf", "Kutki"
    ],
    "Blood pressure": [
        "Ginger", "Lavender", "Licorice Root", "Rosemary", "Hawthorn",
        "Hibiscus", "Dandelion", "Nettle", "Ginseng", "Beetroot",
        "Pomegranate", "Sarpagandha", "Ashoka"
    ],
    "Heart condition": [
        "Ginger", "Garlic", "Lavender", "Hawthorn", "Arjuna", "Licorice Root",
        "Kalanchoe", "St. John's Wort", "Ginseng", "Sarpagandha"
    ],
    "Bleeding disorder": [
        "Turmeric", "Ginger", "Garlic", "Tulsi", "Chamomile", "Basil",
        "Rosemary", "Amla", "Clove", "Cardamom", "Oregano", "Dandelion",
        "Nettle", "Papaya Leaf", "Elderberry", "Andrographis", "Triphala",
        "Jiaogulan", "Green Tea", "Ginseng", "Flaxseed", "Wheatgrass",
        "Red Clover", "Alfalfa", "Yarrow", "Calendula", "Onion"
    ],
    "Kidney disease": [
        "Aloe Vera", "Shatavari", "Dandelion", "Lemongrass", "Nettle",
        "Punarnava", "Licorice Root", "Noni", "Beetroot", "Sesame"
    ],
    "Autoimmune disease": [
        "Neem", "Ashwagandha", "Echinacea", "Giloy", "Andrographis",
        "Jiaogulan", "Elderberry", "Ginseng", "Spirulina", "Alfalfa",
        "Rhodiola", "Kutki"
    ],
    "Thyroid disorder": [
        "Ashwagandha", "Moringa", "Sage", "Lemon Balm", "Bacopa",
        "Brahmi", "Shankhpushpi", "Mustard Seed", "Maca"
    ],
    "Liver disease": [
        "Valerian", "Eucalyptus", "Sage", "Licorice Root", "Noni", "Guduchi"
    ],
    "Hormone-sensitive condition": [
        "Lavender", "Shatavari", "Sage", "Fennel", "Fenugreek",
        "Thyme", "Licorice Root", "Milk Thistle", "Ginseng", "Hibiscus",
        "Red Clover", "Alfalfa", "Ashoka", "Star Anise", "Flaxseed", "Maca"
    ],
    "Seizure disorder": [
        "Rosemary", "Eucalyptus", "Sage", "Shankhpushpi", "Nutmeg"
    ],
    "Low blood pressure": [
        "Hibiscus", "Hawthorn", "Garlic", "Ginger", "Lavender",
        "Beetroot", "Pomegranate", "Sarpagandha"
    ],
    "Depression": [
        "Sarpagandha", "Valerian", "St. John's Wort"
    ]
};

// Medicinal info: uses, preparation, dosage
export const plantMedicinalInfo = {
    "Aloe Vera": {
        uses: ["Skin healing", "Burns and sunburn", "Constipation (latex only — use cautiously)", "Wound healing"],
        preparation: ["Apply gel directly to skin", "Drink diluted leaf juice (not latex)"],
        dosage: "Topical: as needed. Oral: 1–2 tbsp gel juice (not latex)"
    },
    "Turmeric": {
        uses: ["Anti-inflammatory", "Antioxidant", "Joint pain and arthritis", "Digestive aid"],
        preparation: ["Golden milk (with milk, black pepper, and honey)", "Add to food", "Curcumin capsules with piperine"],
        dosage: "500–2000 mg curcumin/day; food-form: 1–3 tsp/day"
    },
    "Ginger": {
        uses: ["Nausea relief (chemotherapy, pregnancy, motion sickness)", "Digestive aid", "Anti-inflammatory", "Cold and flu remedy"],
        preparation: ["Ginger tea", "Add fresh or dried to food", "Capsules"],
        dosage: "1–3 g/day; for pregnancy nausea: 250 mg 4×/day"
    },
    "Garlic": {
        uses: ["Immune support", "Cardiovascular health", "Antimicrobial", "Blood pressure support"],
        preparation: ["Eat raw or cooked", "Garlic-infused oil (external)", "Allicin-standardised supplements"],
        dosage: "1–2 raw cloves/day or 600–1200 mg aged garlic extract"
    },
    "Tulsi": {
        uses: ["Stress and anxiety relief", "Immune support", "Respiratory health", "Adaptogen"],
        preparation: ["Tulsi tea", "Chew 5–10 fresh leaves", "Add to cooking"],
        dosage: "2–3 cups of tea/day or 500 mg extract twice daily"
    },
    "Neem": {
        uses: ["Skin conditions (acne, psoriasis)", "Dental health (neem twigs)", "Antimicrobial", "Blood purification"],
        preparation: ["Neem oil (diluted topical)", "Neem leaf paste for skin", "Neem twig for teeth"],
        dosage: "Topical only for home use; oral preparations require healthcare supervision"
    },
    "Ashwagandha": {
        uses: ["Stress and anxiety (adaptogen)", "Sleep quality", "Energy and stamina", "Thyroid support"],
        preparation: ["Mix root powder with warm milk and honey (Ashwagandha latte)", "Standardised extract capsules"],
        dosage: "300–600 mg KSM-66 or Sensoril extract daily"
    },
    "Peppermint": {
        uses: ["IBS and bloating", "Tension headache (topical)", "Respiratory congestion", "Nausea"],
        preparation: ["Peppermint tea", "Enteric-coated capsules for IBS", "Diluted essential oil on temples for headache"],
        dosage: "0.2–0.4 ml peppermint oil in enteric-coated caps 3×/day for IBS; 1–2 cups tea for general use"
    },
    "Chamomile": {
        uses: ["Sleep aid", "Anxiety relief", "Digestive cramping", "Skin inflammation (topical)"],
        preparation: ["Chamomile tea (steep 5 min covered)", "Topical cream for eczema", "Bath soak"],
        dosage: "1–4 cups of tea/day; 220–1110 mg extract for anxiety (clinical trials)"
    },
    "Lavender": {
        uses: ["Anxiety and stress", "Sleep quality", "Headache relief (topical)", "Minor burns and insect bites"],
        preparation: ["Aromatherapy diffusion", "Silexan capsules (oral)", "Diluted essential oil massage"],
        dosage: "80 mg Silexan (oral) for anxiety; aromatherapy as needed"
    },
    "Eucalyptus": {
        uses: ["Chest congestion and bronchitis", "Sinusitis", "Antimicrobial surface cleaning"],
        preparation: ["Steam inhalation (5–10 drops in hot water)", "Chest rub (diluted in carrier oil)", "Diffuser"],
        dosage: "Steam inhalation 2–3×/day; external use only"
    },
    "Basil": {
        uses: ["Digestive aid", "Anti-inflammatory", "Immune support", "Mental clarity"],
        preparation: ["Fresh leaves in food", "Basil tea", "Pesto"],
        dosage: "Culinary amounts are safe and effective"
    },
    "Cinnamon": {
        uses: ["Blood sugar management", "Digestive aid", "Antimicrobial", "Anti-inflammatory"],
        preparation: ["Ceylon cinnamon in tea or food", "Capsules (Ceylon variety only for supplements)"],
        dosage: "0.5–2 g/day Ceylon cinnamon; up to 6 g/day short-term"
    },
    "Moringa": {
        uses: ["Nutritional supplement (vitamins A, C, K)", "Blood sugar support", "Anti-inflammatory", "Milk supply support during breastfeeding"],
        preparation: ["Leaf powder in smoothies", "Moringa tea", "Cooked leaves in dishes"],
        dosage: "2–6 g leaf powder/day; 1–2 cups tea"
    },
    "Brahmi": {
        uses: ["Memory and cognitive function", "Anxiety and stress", "ADHD support", "Neuroprotection"],
        preparation: ["Brahmi powder with warm milk and ghee", "Standardised extract capsules"],
        dosage: "300–450 mg bacosides-standardised extract/day; takes 8–12 weeks for effect"
    },
    "Shatavari": {
        uses: ["Female reproductive health", "Lactation support", "Digestive health", "Menopausal symptoms"],
        preparation: ["Shatavari powder with warm milk", "Capsules"],
        dosage: "500 mg–1 g root powder twice daily"
    },
    "Amla": {
        uses: ["Immune system boost", "Hair and skin health", "Digestive health", "Antioxidant"],
        preparation: ["Fresh amla juice", "Dried amla candy", "Chyawanprash (traditional preparation)", "Powder in water"],
        dosage: "1–3 g powder or 1–2 tbsp fresh juice daily"
    },
    "Fenugreek": {
        uses: ["Blood sugar management", "Cholesterol support", "Lactation enhancement", "Digestive aid"],
        preparation: ["Soaked seeds overnight (eat in morning)", "Fenugreek tea", "Add powder to food"],
        dosage: "5–30 g whole seeds/day; 1.8–2.7 g extract/day"
    },
    "Lemongrass": {
        uses: ["Digestive relief", "Anxiety reduction", "Antimicrobial", "Fever management"],
        preparation: ["Lemongrass tea (fresh or dried stalks)", "Add to cooking and curries"],
        dosage: "1–2 cups of tea/day"
    },
    "Rosemary": {
        uses: ["Memory and cognitive support", "Hair growth (topical)", "Digestive aid", "Anti-inflammatory"],
        preparation: ["Rosemary tea", "Scalp oil massage (rosemary in jojoba oil)", "Culinary use"],
        dosage: "Culinary safe; 4–6 g in tea; scalp oil: 2–3 drops in carrier oil"
    },
    "Sage": {
        uses: ["Menopausal hot flushes", "Sore throat gargle", "Memory support", "Excessive sweating"],
        preparation: ["Sage tea", "Gargle for throat", "Add to food"],
        dosage: "1–3 cups/day; maximum 4 weeks continuous; sage extract 300 mg/day for hot flushes"
    },
    "Thyme": {
        uses: ["Productive cough and bronchitis", "Respiratory health", "Antimicrobial", "Digestive aid"],
        preparation: ["Thyme honey syrup (for cough)", "Thyme tea", "Add to food"],
        dosage: "1–2 cups of tea/day; thyme extract equivalent to 6 g dry herb for bronchitis"
    },
    "Echinacea": {
        uses: ["Cold and flu prevention and treatment", "Immune stimulation", "Wound healing (topical)"],
        preparation: ["Echinacea tea", "Standardised tincture", "Capsules"],
        dosage: "300–500 mg extract 3×/day; cycle on 2 weeks, off 2 weeks"
    },
    "Valerian": {
        uses: ["Sleep onset (insomnia)", "Anxiety", "Muscle relaxation", "Stress relief"],
        preparation: ["Valerian capsules (preferred — tea is extremely bitter)", "Tincture"],
        dosage: "300–600 mg standardised extract 30–60 min before bed"
    },
    "Milk Thistle": {
        uses: ["Liver protection and regeneration", "Antioxidant", "Alcohol-related liver damage support", "Cholesterol"],
        preparation: ["Silymarin-standardised capsules", "Milk thistle tea (less bioavailable)"],
        dosage: "140 mg silymarin 3×/day (70–80% standardised extract)"
    },
    "St. John's Wort": {
        uses: ["Mild to moderate depression", "Seasonal affective disorder", "Anxiety", "Wound healing (topical oil)"],
        preparation: ["Standardised capsules (0.3% hypericin / 5% hyperforin)", "Tea (weak effect)", "Topical red oil for wounds"],
        dosage: "300 mg 3×/day (standardised to 0.3% hypericin)"
    },
    "Ginseng": {
        uses: ["Energy and stamina", "Cognitive function", "Immune support", "Blood sugar management"],
        preparation: ["Ginseng tea", "Standardised extract capsules", "Liquid tincture"],
        dosage: "200–400 mg standardised extract/day; 1–2 g root/day"
    },
    "Green Tea": {
        uses: ["Antioxidant protection", "Weight management", "Heart health", "Cognitive function"],
        preparation: ["Brewed green tea (2–3 cups/day)", "Matcha in milk", "EGCG supplements"],
        dosage: "2–3 cups/day; 400–500 mg EGCG supplements"
    },
    "Bitter Melon": {
        uses: ["Type 2 diabetes blood sugar management", "Weight management", "Immune support"],
        preparation: ["Fresh juice (very bitter — mix with other juices)", "Stir-fried with spices", "Capsules"],
        dosage: "50–100 ml fresh juice/day; 500 mg standardised extract 2×/day"
    },
    "Giloy": {
        uses: ["Immunity enhancement", "Fever reduction (especially chronic/recurring fevers)", "Detoxification", "Arthritis"],
        preparation: ["Giloy stem juice", "Kadha (water decoction)", "Powder with honey"],
        dosage: "20–30 ml fresh juice 2×/day; 500 mg powder twice daily"
    },
    "Arjuna": {
        uses: ["Cardiac tonic", "Coronary artery disease support", "Blood pressure", "Cholesterol management"],
        preparation: ["Arjuna bark decoction (boil bark in milk or water)", "Standardised capsules"],
        dosage: "500 mg bark powder 2–3×/day — use under cardiologist supervision"
    },
    "Licorice Root": {
        uses: ["Sore throat and cough", "Gastric ulcer healing (DGL form)", "Adrenal fatigue", "Respiratory mucous membrane health"],
        preparation: ["DGL chewable tablets (for GI use)", "Licorice root tea (limit to 3 weeks)", "Lozenges"],
        dosage: "DGL: 380–1140 mg before meals; standard root: <4 weeks continuous use"
    },
    "Curry Leaf": {
        uses: ["Blood sugar regulation", "Digestive aid", "Hair health and growth", "Antioxidant"],
        preparation: ["Add fresh leaves to tempering in oil (traditional method)", "Curry leaf tea", "Blend into chutneys"],
        dosage: "8–10 fresh leaves/day; culinary amounts throughout meals"
    },
    "Guava Leaf": {
        uses: ["Blood sugar control", "Diarrhoea and gastroenteritis", "Dental health (anti-plaque)", "Wound healing"],
        preparation: ["Guava leaf tea (4–5 leaves in 1L water)", "Mouth rinse for dental health", "Topical poultice"],
        dosage: "1–2 cups of leaf tea/day"
    },
    "Papaya Leaf": {
        uses: ["Dengue fever platelet support", "Digestive enzyme (papain)", "Anti-inflammatory", "Immune support"],
        preparation: ["Leaf juice (bitter — take 2 tbsp twice daily)", "Standardised capsules", "Tea"],
        dosage: "Only under medical supervision; 25–50 ml juice 2×/day for dengue"
    },
    "Elderberry": {
        uses: ["Cold and influenza prevention and treatment", "Immune support", "Antiviral", "Antioxidant"],
        preparation: ["Commercially prepared elderberry syrup", "Standardised capsules", "Elderflower tea (dried flowers)"],
        dosage: "15 ml elderberry syrup 4×/day during acute illness; 5–7.5 ml for prevention"
    },
    "Dandelion": {
        uses: ["Liver and digestive support", "Gentle diuretic", "Prebiotic (inulin in root)", "Anti-inflammatory"],
        preparation: ["Dandelion root tea (roasted root as coffee substitute)", "Young leaf salad", "Tincture"],
        dosage: "1–3 cups of tea/day; 2–8 g dried root"
    },
    "Nettle": {
        uses: ["Seasonal allergy (freeze-dried)", "Joint pain and arthritis", "Benign prostatic hyperplasia", "Iron-rich nutritional supplement"],
        preparation: ["Nettle tea (cooked or dried — removes sting)", "Freeze-dried capsules for allergy", "Add cooked leaves to soup"],
        dosage: "300–360 mg freeze-dried leaf for allergy; 1–2 cups tea for general use"
    },
    "Passionflower": {
        uses: ["Anxiety and generalised anxiety disorder", "Sleep quality", "Nervous system calming"],
        preparation: ["Passionflower tea", "Standardised capsules", "Tincture"],
        dosage: "90 mg dried extract or 1–2 cups of tea 30–60 min before bed"
    },
    "Hawthorn": {
        uses: ["Mild heart failure (Class I–II)", "High blood pressure", "Anxiety (cardiovascular anxiety)", "Atherosclerosis"],
        preparation: ["Hawthorn berry and leaf tea", "Standardised extract capsules"],
        dosage: "160–1800 mg/day WS 1442 extract — under medical supervision for heart conditions"
    },
    "Senna": {
        uses: ["Acute constipation", "Bowel preparation before colonoscopy or surgery"],
        preparation: ["Senna tea", "Sennosides tablets (17.2 mg)"],
        dosage: "17.2 mg sennosides once daily at night; maximum 1 week"
    },
    "Black Pepper": {
        uses: ["Enhances nutrient and drug bioavailability", "Digestive stimulant", "Anti-inflammatory", "Antioxidant"],
        preparation: ["Freshly ground with food", "Always combine with turmeric in golden milk", "Piperine capsules"],
        dosage: "Culinary (0.5–2 g/day); piperine supplements 5–10 mg/day only"
    },
    "Cardamom": {
        uses: ["Digestive aid and bloating", "Breath freshener", "Respiratory health", "Antispasmodic"],
        preparation: ["Cardamom in chai or coffee", "Chew whole pods", "Add to rice and desserts"],
        dosage: "1–2 g/day as pods; cardamom tea 1–2 cups/day"
    },
    "Clove": {
        uses: ["Dental pain and toothache (topical)", "Digestive aid", "Antimicrobial mouthwash", "Anti-inflammatory"],
        preparation: ["Clove oil diluted in carrier oil (topical — 1:10 dilution)", "Clove tea", "Whole cloves in cooking"],
        dosage: "Topical clove oil: 0.5–1% concentration; 1–2 cloves/day in food"
    },
    "Coriander": {
        uses: ["Digestive bloating relief", "Blood sugar support", "Heavy metal chelation", "Anti-anxiety"],
        preparation: ["Coriander seed tea", "Coriander water (seeds soaked overnight)", "Fresh leaves in food"],
        dosage: "1 cup seed tea/day; culinary leaf amounts"
    },
    "Hibiscus": {
        uses: ["Blood pressure reduction", "Cholesterol management", "Antioxidant", "Liver protection"],
        preparation: ["Hibiscus tea (2–3 g dried calyces per cup)", "Cold hibiscus infusion", "Standardised extract"],
        dosage: "1.25–2.5 g dried flower calyces 2×/day; 2 cups of tea/day"
    },
    "Fennel": {
        uses: ["Bloating and flatulence", "Infant colic (diluted tea)", "Menstrual cramping", "Respiratory mucus clearance"],
        preparation: ["Fennel seed tea", "Chew seeds after meals", "Diluted fennel tea for infant colic"],
        dosage: "1–2 cups of tea/day; 1/2 tsp seeds chewed after meals"
    },
    "Triphala": {
        uses: ["Bowel regularity and constipation", "Digestive health", "Eye health (eyewash)", "Antioxidant"],
        preparation: ["Triphala powder in warm water at bedtime", "Tablets", "Diluted eyewash (specific preparation required)"],
        dosage: "500 mg–2 g powder in warm water before bed"
    },
    "Jiaogulan": {
        uses: ["Adaptogen and stress relief", "Cholesterol management", "Antioxidant", "Immune modulation"],
        preparation: ["Jiaogulan tea", "Standardised extract capsules"],
        dosage: "20–80 mg standardised extract or 2–3 cups of tea/day"
    },
    "Andrographis": {
        uses: ["Cold and flu treatment (shortens duration)", "Immune support", "Anti-inflammatory", "Liver protection"],
        preparation: ["Standardised capsules (very bitter — encapsulated preferred)", "Andrographis tea"],
        dosage: "400 mg 3×/day during acute illness for maximum 7 days"
    },
    "Bacopa": {
        uses: ["Long-term memory and learning", "Anxiety reduction", "ADHD cognitive support", "Neuroprotection"],
        preparation: ["Bacopa powder with ghee and warm milk (traditional)", "Standardised bacosides extract capsules"],
        dosage: "300–450 mg/day bacosides-standardised extract (taken with food)"
    },
    "Punarnava": {
        uses: ["Oedema and fluid retention", "Kidney and urinary tract health", "Liver support", "Anaemia (iron-rich)"],
        preparation: ["Punarnava root decoction", "Powder with water or honey", "Capsules"],
        dosage: "3–6 g powder/day or as directed by Ayurvedic practitioner"
    },
    "Kalanchoe": {
        uses: ["Wound healing (topical)", "Anti-inflammatory (topical)", "Antimicrobial skin conditions", "Insect bites"],
        preparation: ["Fresh leaf juice (topical only)", "Crushed leaf poultice", "Leaf cream preparations"],
        dosage: "Topical use preferred; internal use only under direct medical supervision"
    },
    "Guduchi": {
        uses: ["Immune system modulation", "Chronic fever management", "Liver protection", "Anti-arthritic"],
        preparation: ["Fresh Guduchi stem juice", "Guduchi kadha (decoction)", "Standardised extract capsules"],
        dosage: "500 mg extract twice daily; 20–30 ml fresh juice"
    },
    "Shankhpushpi": {
        uses: ["Memory and cognitive enhancement", "Stress and anxiety relief", "Sleep quality", "Nervous system tonic"],
        preparation: ["Shankhpushpi syrup (traditional formulation)", "Powder with warm milk"],
        dosage: "5–10 ml syrup twice daily; 3–6 g powder twice daily"
    },
    "Oregano": {
        uses: ["Antimicrobial (oil of oregano)", "Respiratory health", "Digestive aid", "Antioxidant"],
        preparation: ["Oregano tea", "Diluted oregano oil (1–2 drops in water or capsule)", "Culinary use"],
        dosage: "Culinary: unlimited; oil of oregano: 600 mg/day maximum 2 weeks"
    },
    "Spearmint": {
        uses: ["Digestive aid", "PCOS and hirsutism (anti-androgenic)", "Cognitive function", "Breath freshener"],
        preparation: ["Spearmint tea (2 cups/day for hormonal benefit)", "Fresh leaves in drinks and food"],
        dosage: "2 cups/day for hormonal effects (PCOS)"
    },
    "Lemon Balm": {
        uses: ["Anxiety and mild stress", "Sleep onset", "Cold sores — Herpes simplex (topical)", "Digestive cramping"],
        preparation: ["Lemon balm tea", "Standardised extract capsules", "Topical cream for cold sores"],
        dosage: "300–600 mg extract or 1–2 cups of tea; topical cream 1% as needed"
    },
    "Boswellia": {
        uses: ["Osteoarthritis joint pain", "Inflammatory bowel disease", "Asthma", "Gut inflammation"],
        preparation: ["Standardised AKBA extract capsules (always with food)", "Traditional resin (frankincense)"],
        dosage: "300–400 mg 3×/day of extract standardised to 30–40% AKBA"
    },
    // ── Newly added plants ────────────────────────────────────────────────────
    "Coconut": {
        uses: ["Electrolyte replenishment (coconut water)", "Skin and hair moisturiser", "Antimicrobial (lauric acid)", "Digestive health (MCT oil)"],
        preparation: ["Fresh coconut water as electrolyte drink", "Virgin coconut oil for cooking or skin", "Coconut milk in cooking"],
        dosage: "Coconut water: 1–2 cups/day; VCO: 1–2 tbsp/day"
    },
    "Noni": {
        uses: ["Traditional immune tonic", "Anti-inflammatory", "Pain relief (traditional)", "Antioxidant"],
        preparation: ["Commercially prepared noni juice", "Capsules (dried fruit powder)"],
        dosage: "30–60 ml noni juice/day — not more; consult provider for supplements"
    },
    "Wheatgrass": {
        uses: ["Nutritional supplement (vitamins, minerals, chlorophyll)", "Digestive health", "Detoxification", "Antioxidant"],
        preparation: ["Fresh juiced wheatgrass shots", "Powder in smoothies"],
        dosage: "30 ml fresh juice or 3–5 g powder/day"
    },
    "Spirulina": {
        uses: ["Protein and nutrient supplement", "Antioxidant", "Cholesterol support", "Iron supplementation"],
        preparation: ["Powder in smoothies or water", "Tablets"],
        dosage: "1–8 g/day; start with 1–2 g and increase gradually"
    },
    "Flaxseed": {
        uses: ["Digestive regularity (soluble and insoluble fibre)", "Omega-3 fatty acid source", "Menopausal symptom relief", "Cholesterol reduction"],
        preparation: ["Ground flaxseed in porridge, yoghurt, or smoothies", "Flaxseed oil (no cooking)", "Whole seeds with water"],
        dosage: "1–2 tbsp ground flaxseed/day; 1–2 tsp flaxseed oil"
    },
    "Beetroot": {
        uses: ["Athletic performance (dietary nitrates)", "Blood pressure reduction", "Liver health", "Antioxidant"],
        preparation: ["Fresh beetroot juice", "Cooked beetroot in salads", "Beetroot powder in smoothies"],
        dosage: "250–500 ml beetroot juice; 2–3 medium beetroots/day"
    },
    "Onion": {
        uses: ["Cardiovascular protection (quercetin)", "Anti-inflammatory", "Antimicrobial", "Blood sugar support"],
        preparation: ["Raw onion in salads", "Onion in cooked dishes", "Onion tea (for congestion)"],
        dosage: "1/2–1 medium onion/day (food amounts are effective)"
    },
    "Calendula": {
        uses: ["Wound and skin healing", "Dermatitis and eczema (topical)", "Antifungal (topical)", "Minor burns"],
        preparation: ["Calendula cream or ointment (topical)", "Calendula infused oil", "Calendula tea (anti-inflammatory)"],
        dosage: "Topical: as needed; oral: 1–2 cups of tea/day"
    },
    "Yarrow": {
        uses: ["Wound healing and bleeding control (topical)", "Fever management", "Digestive cramping", "Menstrual regulation"],
        preparation: ["Yarrow tea", "Poultice of fresh crushed leaves for wounds", "Tincture"],
        dosage: "2–4 g dried herb or 1–2 cups of tea/day"
    },
    "Red Clover": {
        uses: ["Menopausal symptoms (hot flushes)", "Cholesterol support", "Bone density (postmenopausal)", "Skin health"],
        preparation: ["Red clover isoflavone supplements", "Red clover blossom tea"],
        dosage: "40–160 mg isoflavones/day from standardised extract"
    },
    "Alfalfa": {
        uses: ["Nutritional supplement (minerals, vitamins K, C)", "Digestive health", "Cholesterol support", "Diuretic"],
        preparation: ["Alfalfa sprouts in salads", "Alfalfa leaf tea", "Tablets or capsules (leaf only — not seeds)"],
        dosage: "5–10 g dried leaf or 1–2 cups tea/day; avoid seeds"
    },
    "Rhodiola": {
        uses: ["Stress adaptation (adaptogen)", "Physical endurance", "Mental fatigue", "Mild depression"],
        preparation: ["Standardised rosavins extract capsules", "Rhodiola tea"],
        dosage: "200–600 mg standardised extract (3% rosavins, 1% salidroside)/day in the morning"
    },
    "Maca": {
        uses: ["Energy and stamina", "Libido and sexual function", "Menopausal symptom relief", "Fertility support"],
        preparation: ["Gelatinised maca powder in smoothies or porridge", "Maca capsules"],
        dosage: "1.5–3 g gelatinised maca powder/day"
    },
    "Mucuna Pruriens": {
        uses: ["Parkinson's disease L-DOPA supplement (under medical supervision)", "Male fertility and testosterone", "Mood and dopamine support", "Adaptogen"],
        preparation: ["Standardised L-DOPA extract capsules", "Traditional Ayurvedic preparation with warm milk"],
        dosage: "Only under neurologist or physician supervision — dose depends on L-DOPA content of preparation"
    },
    "Bhringraj": {
        uses: ["Hair growth stimulation (scalp oil)", "Premature greying prevention", "Liver protection", "Memory enhancement"],
        preparation: ["Bhringraj oil (infused in sesame or coconut oil) for scalp massage", "Powder with warm water or milk", "Capsules"],
        dosage: "Scalp: 2–3 ×/week; oral: 3–6 g powder/day"
    },
    "Nutmeg": {
        uses: ["Digestive aid (small amounts)", "Sleep aid (warm milk with pinch of nutmeg)", "Pain relief (topical nutmeg oil)", "Antibacterial (dental health)"],
        preparation: ["Pinch (100–200 mg) in warm milk for sleep", "Topical nutmeg oil diluted in carrier oil", "Culinary spice"],
        dosage: "Culinary: <500 mg/meal; medicinal sleep dose: 100–300 mg in milk (do NOT exceed)"
    },
    "Star Anise": {
        uses: ["Digestive bloating and gas", "Cough and respiratory aid", "Antimicrobial", "Source of shikimic acid (Tamiflu precursor)"],
        preparation: ["Star anise tea", "Add to cooking and spice blends", "Herbal cough syrups"],
        dosage: "1 star pod in tea; culinary amounts in cooking"
    },
    "Mustard Seed": {
        uses: ["Topical analgesic (mustard plaster for muscle pain)", "Digestive stimulant", "Expectorant (respiratory)", "Antimicrobial"],
        preparation: ["Crushed seeds in cooking", "Mustard plaster (1:4 with flour) for short-duration topical use", "Mustard oil (topical massage — diluted)"],
        dosage: "Culinary safe; plaster max 10–15 minutes; oral supplements: 1–2 tsp seeds/day"
    },
    "Sesame": {
        uses: ["Bone health (calcium-rich)", "Cardiovascular health (sesamin)", "Skin health (topical oil)", "Antioxidant"],
        preparation: ["Add seeds to food (salads, bread)", "Tahini paste", "Cold-pressed sesame oil for cooking or skin"],
        dosage: "1–3 tbsp seeds or tahini/day; topical sesame oil as needed"
    },
    "Pomegranate": {
        uses: ["Cardiovascular protection", "Anti-inflammatory (joint health)", "Antioxidant (punicalagins)", "Prostate health (PSA support)"],
        preparation: ["Fresh pomegranate juice (250 ml/day)", "Arils added to food", "Standardised extract capsules"],
        dosage: "240 ml juice or 1 pomegranate/day; 500 mg standardised extract"
    },
    "Mango Leaf": {
        uses: ["Blood sugar management (type 2 diabetes)", "Hypertension support", "Antioxidant", "Throat and respiratory health (mango leaf tea)"],
        preparation: ["Mango leaf tea (boil 5–10 leaves in water)", "Leaf extract powder in water", "Dried leaf capsules"],
        dosage: "1–2 cups of leaf tea/day; 400 mg dry extract"
    },
    "Betel Leaf": {
        uses: ["Digestive stimulant after meals", "Antiseptic for minor wounds (topical)", "Oral hygiene (antibacterial)", "Antifungal (topical)"],
        preparation: ["Chew fresh leaf (without areca nut or tobacco)", "Betel leaf juice (small amounts)", "Poultice for wounds"],
        dosage: "1–2 fresh leaves after meals; topical as needed"
    },
    "Sarpagandha": {
        uses: ["Hypertension (under physician supervision only)", "Anxiety and agitation", "Insomnia", "Psychiatric conditions in Ayurveda"],
        preparation: ["Standardised reserpine preparations (physician-prescribed)", "Sarpagandha tablets (Ayurvedic — specific formulation)"],
        dosage: "Only under strict medical supervision — reserpine is a prescription-level compound"
    },
    "Ashoka": {
        uses: ["Heavy menstrual bleeding (menorrhagia)", "Uterine tonic", "Dysmenorrhoea (painful periods)", "Leucorrhoea"],
        preparation: ["Ashoka bark decoction (boil 30 g bark in 500 ml water)", "Standardised Ayurvedic Ashokarishta formulation", "Capsules"],
        dosage: "15–30 ml Ashokarishta twice daily after meals; bark decoction under practitioner guidance"
    },
    "Kutki": {
        uses: ["Liver protection and hepatitis support", "Digestive bitter tonic", "Fever management (anti-pyretic)", "Immune modulation"],
        preparation: ["Low-dose capsules of standardised picroside extract", "Traditional powder in honey (very small amounts — intensely bitter)", "Tablets"],
        dosage: "100–400 mg standardised picroside extract/day — precise dosing critical due to narrow therapeutic window"
    },

    // ── Ayurvedic / Indian ────────────────────────────────────────────────────
    "Calotropis": {
        uses: ["Skin diseases and eczema (external)", "Joint pain and arthritis (topical)", "Digestive stimulant (small doses)", "Fever management in traditional medicine"],
        preparation: ["Leaf paste applied externally for skin issues", "Latex diluted and applied topically for joint pain", "Under strict Ayurvedic practitioner guidance only"],
        dosage: "External use only for home remedies; internal use requires Ayurvedic practitioner supervision"
    },
    "Triphala Guggul": {
        uses: ["Digestive cleansing and detox", "Weight management support", "Cholesterol and lipid balance", "Joint and tissue rejuvenation"],
        preparation: ["Tablets or capsules with warm water", "Powder mixed with honey", "Take 30 minutes before meals"],
        dosage: "500 mg–2 g twice daily with warm water; reduce if loose stools occur"
    },
    "Guggul": {
        uses: ["Cholesterol management", "Arthritis and joint inflammation", "Weight management", "Thyroid support (hypothyroidism)"],
        preparation: ["Standardised guggulsterone capsules", "Traditional resin dissolved in warm water", "Combined formulations with other Ayurvedic herbs"],
        dosage: "500 mg–1 g standardised extract (2.5% guggulsterones) twice daily"
    },
    "Shilajit": {
        uses: ["Energy and stamina enhancement", "Male reproductive health", "Anti-aging and rejuvenation", "Iron deficiency support", "Cognitive function"],
        preparation: ["Dissolve pea-sized resin in warm milk or water", "Capsules or tablets", "Take on empty stomach or with milk"],
        dosage: "300–500 mg purified shilajit resin/day; avoid raw/unpurified forms"
    },
    "Haritaki": {
        uses: ["Bowel regulation and laxative", "Detoxification", "Digestive tonic", "Oral health (gargling)", "Eye health (wash)"],
        preparation: ["Powder with warm water at bedtime", "Decoction boiled with water", "Triphala combination (with Amla and Bibhitaki)"],
        dosage: "3–5 g powder at bedtime with warm water; or 500 mg–1 g capsule"
    },
    "Bibhitaki": {
        uses: ["Respiratory health and cough", "Digestive support", "Liver health", "Hair and scalp nourishment", "Detox (part of Triphala)"],
        preparation: ["Powder in warm water", "Triphala formulation", "Decoction for gargling"],
        dosage: "3–5 g powder in warm water daily; or as part of Triphala formula"
    },
    "Vidanga": {
        uses: ["Anti-parasitic and deworming", "Digestive issues and flatulence", "Skin disorders", "Nervous system tonic"],
        preparation: ["Powder with honey or warm water", "Decoction", "Capsules with Ayurvedic formulations"],
        dosage: "1–3 g powder twice daily with honey or warm water under practitioner guidance"
    },
    "Chitraka": {
        uses: ["Digestive stimulant and carminative", "Metabolic support and weight management", "Arthritis and joint pain", "Liver function improvement"],
        preparation: ["Small amounts of root powder with honey", "Decoction", "Ayurvedic tablets (e.g., Chitrakadi Vati)"],
        dosage: "250–500 mg root powder with honey twice daily; start with lowest dose"
    },
    "Pippali": {
        uses: ["Respiratory conditions (asthma, cough)", "Digestive fire enhancement", "Bioavailability enhancer for other herbs", "Cold and flu management"],
        preparation: ["Powder mixed with honey", "Warm milk with pippali and ginger", "Combined formulas (Trikatu)"],
        dosage: "250–500 mg powder twice daily with honey; or as part of Trikatu formula"
    },
    "Karpura Valli": {
        uses: ["Cough and cold relief", "Respiratory support", "Skin conditions (topical)", "Digestive health"],
        preparation: ["Fresh leaf juice with honey for cough", "Leaf decoction", "Leaf paste applied topically"],
        dosage: "2–5 ml fresh leaf juice with honey twice daily for cough"
    },
    "Punarnava Root": {
        uses: ["Kidney and urinary tract support", "Oedema and water retention", "Liver detoxification", "Anaemia management", "Anti-inflammatory"],
        preparation: ["Root decoction boiled in water", "Capsules or powder with water", "Juice of fresh plant"],
        dosage: "3–6 g root powder or 20–30 ml decoction twice daily"
    },
    "Vacha": {
        uses: ["Memory and cognitive enhancement", "Speech disorders", "Epilepsy support (adjunct)", "Digestive stimulant", "Nervous system tonic"],
        preparation: ["Small amounts of powder with honey", "Decoction", "Oil for external application on scalp"],
        dosage: "250–500 mg powder twice daily with honey; do NOT exceed recommended dose"
    },
    "Kalonji": {
        uses: ["Immune system support", "Respiratory health (asthma, allergies)", "Blood sugar management", "Anti-inflammatory and antioxidant", "Hair growth (oil)"],
        preparation: ["Half teaspoon seeds with honey", "Black seed oil (1 tsp) with honey or warm water", "Seeds added to food"],
        dosage: "1–3 g seeds/day or 2.5–5 ml oil daily"
    },
    "Henna": {
        uses: ["Hair conditioning and colouring (external)", "Cooling effect on scalp and skin", "Anti-fungal for skin conditions (topical)", "Wound healing (traditional external)"],
        preparation: ["Leaf paste with water applied to hair/skin", "Powder mixed with water, lemon juice, or tea", "External use only"],
        dosage: "Topical use only; apply paste for 1–3 hours, rinse thoroughly"
    },
    "Bael": {
        uses: ["Diarrhoea and dysentery treatment", "Digestive tonic", "Fever management", "Constipation relief (ripe fruit)", "Diabetes support"],
        preparation: ["Unripe fruit pulp decoction for diarrhoea", "Ripe fruit juice or sherbet", "Leaf tea for fever"],
        dosage: "50–100 ml bael sherbet daily; or 20–30 ml decoction of unripe fruit twice daily"
    },
    "Manjistha": {
        uses: ["Blood purifier and skin disorders", "Anti-inflammatory", "Lymphatic system support", "Wound healing", "Joint health"],
        preparation: ["Powder with warm water or milk", "Capsules", "Paste applied topically for skin conditions"],
        dosage: "1–3 g powder twice daily with warm water or milk"
    },
    "Lodhra": {
        uses: ["Women's reproductive health (leucorrhoea, menorrhagia)", "Skin tightening (topical)", "Diarrhoea and digestive disorders", "Anti-inflammatory for eyes"],
        preparation: ["Powder with honey", "Decoction", "Bark paste applied topically"],
        dosage: "3–6 g powder twice daily with honey or warm water"
    },
    "Gokshura": {
        uses: ["Urinary tract health and kidney stones", "Male sexual health and testosterone support", "Athletic performance", "Diuretic effect"],
        preparation: ["Powder with warm water or milk", "Capsules", "Decoction of seeds and fruit"],
        dosage: "500 mg–1 g powder twice daily with milk or warm water"
    },
    "Yashtimadhu": {
        uses: ["Gastric ulcer and acidity relief", "Throat and respiratory soothing", "Adrenal fatigue support", "Anti-inflammatory", "Skin lightening (topical)"],
        preparation: ["Powder mixed with honey or ghee", "Decoction for gargling", "Licorice tea"],
        dosage: "1–3 g powder twice daily; limit to 4–6 weeks continuous use"
    },
    "Kutaja": {
        uses: ["Acute diarrhoea and dysentery", "Intestinal parasites", "Irritable bowel syndrome", "Fever management"],
        preparation: ["Bark decoction", "Standardised Kutajarishta formulation", "Powder with buttermilk"],
        dosage: "15–30 ml Kutajarishta after meals; or 3–6 g bark powder twice daily"
    },
    "Daruharidra": {
        uses: ["Anti-inflammatory and antimicrobial", "Eye disorders (conjunctivitis)", "Skin diseases", "Digestive disorders", "Fever management"],
        preparation: ["Bark decoction for internal use", "Paste applied topically", "Eye wash (diluted decoction)"],
        dosage: "1–3 g bark powder twice daily with warm water"
    },
    "Berberine": {
        uses: ["Blood sugar regulation (diabetes support)", "Cholesterol management", "Gut health and antimicrobial", "Heart health support", "PCOS management"],
        preparation: ["Standardised capsules", "With meals to reduce GI side effects"],
        dosage: "500 mg two to three times daily with meals"
    },
    "Shatapushpa": {
        uses: ["Digestive carminative and gas relief", "Women's menstrual regulation", "Lactation enhancement", "Colic and abdominal pain"],
        preparation: ["Seeds boiled as tea (dill water)", "Powder with warm water", "Added to food as spice"],
        dosage: "1–3 g seeds as tea or powder twice daily"
    },
    "Khadira": {
        uses: ["Oral health (dental caries, gum disease)", "Skin diseases and eczema", "Blood purification", "Anti-fungal properties"],
        preparation: ["Bark decoction for gargling", "Paste applied to skin", "Khadira khanda formulation"],
        dosage: "20–40 ml decoction for gargling; or 1–3 g powder with honey internally"
    },
    "Tagetes": {
        uses: ["Eye health (macular degeneration — lutein source)", "Anti-inflammatory (topical)", "Wound healing", "Digestive support"],
        preparation: ["Lutein/zeaxanthin supplement capsules", "Flower tea", "Topical poultice from fresh flowers"],
        dosage: "6–20 mg lutein supplement daily for eye health; flower tea 1–2 cups/day"
    },
    "Alstonia": {
        uses: ["Malaria and fever management (traditional)", "Digestive tonic", "Respiratory support", "Anti-inflammatory"],
        preparation: ["Bark decoction under practitioner supervision", "Standardised extracts"],
        dosage: "Under Ayurvedic/traditional practitioner guidance only due to alkaloid content"
    },
    "Patala": {
        uses: ["Respiratory disorders (asthma, bronchitis)", "Liver and spleen disorders", "Anti-inflammatory", "Wound healing"],
        preparation: ["Root bark decoction", "Powder with honey", "Syrup formulations"],
        dosage: "3–6 g root powder twice daily with honey"
    },
    "Jatamansi": {
        uses: ["Anxiety and stress relief", "Sleep disorders and insomnia", "Memory enhancement", "Hair growth (oil)", "Hysteria and epilepsy support"],
        preparation: ["Powder with warm milk at bedtime", "Scalp oil application", "Decoction"],
        dosage: "250–500 mg powder twice daily with warm milk; spikenard oil topically"
    },
    "Chirata": {
        uses: ["Fever and malaria (anti-pyretic)", "Digestive bitter tonic", "Blood sugar regulation", "Liver detox", "Anti-inflammatory"],
        preparation: ["Cold infusion overnight", "Powder with honey", "Bitter tonic tea"],
        dosage: "1–3 g powder or 20–40 ml cold infusion twice daily"
    },
    "Bhui Amla": {
        uses: ["Liver protection (hepatitis B, fatty liver)", "Kidney stone dissolution", "Urinary tract health", "Blood sugar regulation", "Anti-viral"],
        preparation: ["Fresh plant juice (10–15 ml)", "Powder with warm water", "Capsules"],
        dosage: "10–20 ml fresh juice or 1–3 g powder twice daily"
    },
    "Parijat": {
        uses: ["Arthritis and joint pain", "Fever and anti-malarial", "Cough and respiratory disorders", "Anti-fungal and antibacterial (topical)"],
        preparation: ["Leaf decoction", "Flower tea", "Leaf paste applied topically"],
        dosage: "20–40 ml leaf decoction twice daily; or as directed by Ayurvedic practitioner"
    },
    "Agathi": {
        uses: ["Headache and fever relief", "Laxative effect", "Rich in vitamins (nutritional)", "Skin and eye health", "Anti-inflammatory"],
        preparation: ["Fresh leaves cooked as vegetable", "Leaf juice", "Flower decoction"],
        dosage: "Leaves as food; 10–20 ml fresh leaf juice once daily for medicinal use"
    },
    "Jamun": {
        uses: ["Blood sugar regulation (diabetes management)", "Digestive health", "Mouth ulcers (bark gargle)", "Antioxidant", "Liver health"],
        preparation: ["Seed powder with water", "Fresh fruit juice", "Bark decoction for gargling"],
        dosage: "1–3 g seed powder twice daily before meals for diabetes support"
    },
    "Jackfruit Leaf": {
        uses: ["Blood sugar regulation", "Wound healing (topical)", "Anti-inflammatory", "Skin conditions (external)"],
        preparation: ["Young leaf tea", "Leaf paste applied topically", "Dried leaf powder with water"],
        dosage: "2–3 cups young leaf tea daily; topical paste as needed"
    },
    "Kadamba": {
        uses: ["Fever management", "Skin diseases (topical)", "Anti-inflammatory", "Diarrhoea relief"],
        preparation: ["Bark decoction", "Bark paste applied topically", "Flower infusion"],
        dosage: "20–40 ml bark decoction twice daily; topical paste for skin"
    },
    "Sitaphal Leaf": {
        uses: ["Anti-cancer research properties", "Wound healing", "Lice treatment (topical)", "Anti-inflammatory", "Digestive support"],
        preparation: ["Leaf paste applied to wounds or scalp", "Seed paste for lice (external only)", "Leaf decoction"],
        dosage: "Topical use: leaf paste applied directly; internal: 20–30 ml leaf decoction once daily"
    },
    "Baheda": {
        uses: ["Respiratory health (cough, bronchitis)", "Eye health", "Hair nourishment", "Digestive tonic", "Part of Triphala"],
        preparation: ["Powder with honey for cough", "Triphala combination", "Bark decoction"],
        dosage: "3–5 g powder daily with honey; or as part of Triphala"
    },
    "Teak": {
        uses: ["Wound healing (bark paste)", "Diabetes support (traditional)", "Hair loss prevention", "Dysentery and diarrhoea"],
        preparation: ["Bark decoction", "Seed oil for hair application", "Bark paste for wounds"],
        dosage: "External: bark paste applied to wounds; internal: 20–30 ml bark decoction under guidance"
    },
    "Silk Cotton Tree": {
        uses: ["Dysentery and diarrhoea (bark)", "Aphrodisiac properties (roots)", "Wound healing (resin)", "Anaemia (flowers)"],
        preparation: ["Bark decoction", "Flower juice", "Gum/resin dissolved in water"],
        dosage: "20–40 ml bark decoction twice daily; under Ayurvedic practitioner guidance"
    },
    "Indian Laburnum": {
        uses: ["Laxative effect (pods)", "Fever management", "Skin disorders", "Liver and digestive support"],
        preparation: ["Pod pulp in small amounts as laxative", "Flower infusion for fever", "Bark decoction"],
        dosage: "5–10 g pod pulp as gentle laxative; seek guidance for prolonged use"
    },
    "Kathal": {
        uses: ["Blood sugar regulation (seeds)", "Digestive health", "Ulcer prevention", "Rich in potassium and fibre"],
        preparation: ["Seeds boiled and consumed", "Raw jackfruit curry", "Leaf tea for blood sugar"],
        dosage: "Seeds as food (30–50 g/day); leaf tea: 2 cups daily"
    },

    // ── Indian Kitchen / Spice Plants ─────────────────────────────────────────
    "Drumstick Leaf": {
        uses: ["Nutritional supplement (vitamins, minerals)", "Blood sugar regulation", "Anti-inflammatory", "Lactation enhancement", "Anaemia support"],
        preparation: ["Fresh leaves added to dal/curry", "Moringa leaf powder in smoothies", "Leaf tea"],
        dosage: "1–2 tsp powder daily; or fresh leaves as food; 7 g leaf powder max/day"
    },
    "Brahmi Leaves": {
        uses: ["Memory and cognitive enhancement", "Anxiety and stress reduction", "ADHD support", "Epilepsy adjunct therapy", "Anti-inflammatory"],
        preparation: ["Fresh leaf juice (5–10 ml)", "Brahmi churna with warm milk", "Brahmi tea"],
        dosage: "300–450 mg standardised extract/day or 5–10 ml fresh juice twice daily"
    },
    "Curry Leaf Tree": {
        uses: ["Digestive health and stomach disorders", "Blood sugar regulation", "Hair growth stimulation", "Cholesterol management", "Anti-oxidant"],
        preparation: ["Leaves added fresh to cooking", "Curry leaf powder with buttermilk", "Hair oil infused with leaves"],
        dosage: "8–10 fresh leaves daily on empty stomach; or 1 tsp dried powder"
    },
    "Pudina": {
        uses: ["Digestive issues, IBS and bloating", "Headache relief (topical menthol)", "Nausea and morning sickness", "Respiratory decongestant", "Oral health"],
        preparation: ["Peppermint tea (fresh or dried leaves)", "Mint chutney or added to food", "Menthol oil applied to temples"],
        dosage: "1–2 cups peppermint tea daily; peppermint oil 0.2–0.4 ml in enteric-coated capsule"
    },
    "Dhania": {
        uses: ["Digestive carminative and gas relief", "Blood sugar lowering", "Anti-inflammatory", "Cholesterol management", "Heavy metal chelation"],
        preparation: ["Coriander seed tea (boil 1 tsp seeds in water)", "Fresh leaves in food", "Seed powder with warm water"],
        dosage: "1–2 tsp seeds as tea 2–3 times daily; leaves as food freely"
    },
    "Jeera": {
        uses: ["Digestive stimulant and carminative", "Anaemia support (iron-rich)", "Blood sugar regulation", "Anti-inflammatory", "Immune support"],
        preparation: ["Jeera water (soak 1 tsp overnight, drink morning)", "Roasted seeds with food", "Cumin tea"],
        dosage: "1–3 g seeds/day as food or tea; 300–600 mg cumin extract supplement"
    },
    "Methi Leaf": {
        uses: ["Blood sugar management (type 2 diabetes)", "Cholesterol reduction", "Milk production (lactation)", "Appetite and digestive health", "Testosterone support"],
        preparation: ["Soaked seeds (1 tsp) with warm water morning", "Fresh leaves in food", "Seed powder with water before meals"],
        dosage: "5–50 g seeds/day; 1 tsp seed powder before meals for blood sugar"
    },
    "Ajwain": {
        uses: ["Digestive carminative and anti-flatulent", "Respiratory disorders (cough, bronchitis)", "Acidity and indigestion", "Antimicrobial properties", "Renal colic relief"],
        preparation: ["Boil 1 tsp seeds in water, strain and drink", "Ajwain ark (distilled water)", "Chew seeds directly with salt for instant relief"],
        dosage: "1–2 g seeds 2–3 times daily with warm water"
    },
    "Hing": {
        uses: ["Powerful digestive and anti-flatulent", "IBS and colic relief", "Respiratory conditions (bronchitis)", "Anti-epileptic (traditional)", "Anti-bacterial"],
        preparation: ["Tiny pinch dissolved in warm water", "Added to cooking (tadka)", "Hing water for colic"],
        dosage: "30–120 mg in warm water; very small culinary amounts safe for most adults"
    },
    "Tejpat": {
        uses: ["Blood sugar regulation", "Cholesterol management", "Digestive health", "Anti-inflammatory", "Respiratory support"],
        preparation: ["Bay leaf tea (boil 2–3 leaves)", "Powder in warm water", "Added to cooking"],
        dosage: "1–3 g powder/day or 2–3 cups bay leaf tea daily"
    },
    "Imli": {
        uses: ["Digestive laxative and cleanse", "Fever and anti-oxidant", "Blood sugar regulation", "Anti-inflammatory", "Rich in tartaric acid (digestive)"],
        preparation: ["Tamarind water (diluted paste)", "Added to food as souring agent", "Tamarind candy/concentrate"],
        dosage: "10 g tamarind pulp daily; as souring agent in cooking freely"
    },

    // ── TCM Plants ────────────────────────────────────────────────────────────
    "Astragalus": {
        uses: ["Immune system modulation", "Anti-aging and adaptogenic", "Heart health support", "Kidney protective", "Cancer adjunct therapy"],
        preparation: ["Root decoction (boil 15–30 g dried root)", "Capsules or standardised extract", "Combined with other TCM herbs"],
        dosage: "9–30 g dried root/day in decoction; or 500 mg–2 g standardised extract"
    },
    "Dong Quai": {
        uses: ["Menstrual irregularity and dysmenorrhoea", "Menopausal symptoms", "Blood tonic (anaemia)", "Cardiovascular health", "Anti-inflammatory"],
        preparation: ["Root tea or decoction", "Capsules", "TCM formulations (Ba Zhen Wan)"],
        dosage: "3–15 g dried root/day; 500 mg–2 g extract twice daily"
    },
    "Bupleurum": {
        uses: ["Liver support and detoxification", "Fever management", "Anti-inflammatory", "Immune modulation", "Depression support (adjunct)"],
        preparation: ["Root decoction", "Combined TCM formulas (Xiao Chai Hu Tang)", "Capsules"],
        dosage: "3–9 g dried root/day; 300–500 mg extract twice daily"
    },
    "Schisandra": {
        uses: ["Liver protection and detoxification", "Adaptogen for stress", "Cognitive function and memory", "Respiratory support", "Athletic endurance"],
        preparation: ["Berry tea or decoction", "Dried berry powder in smoothies", "Schisandra tincture"],
        dosage: "1.5–6 g dried berries/day; 500 mg–2 g extract"
    },
    "Codonopsis": {
        uses: ["Energy and qi tonification (gentle ginseng alternative)", "Digestive support", "Blood tonic (anaemia)", "Lung health", "Immune support"],
        preparation: ["Root decoction (boil 9–30 g)", "Soup with other tonics", "Capsules"],
        dosage: "9–30 g dried root/day in decoction; 1–3 g extract"
    },
    "Poria": {
        uses: ["Digestive tonic and anti-diarrhoeal", "Anxiety and insomnia", "Immune system support", "Cognitive support", "Kidney tonic"],
        preparation: ["Powder in warm water or tea", "Combined in TCM soups", "Capsules"],
        dosage: "9–15 g/day in decoction; 1–3 g powder"
    },
    "Jujube": {
        uses: ["Insomnia and anxiety relief", "Digestive health", "Blood tonic and anaemia", "Immune support", "Anti-stress adaptogen"],
        preparation: ["Dried fruit tea (simmer 10–12 dates)", "Eaten as food", "Suan Zao Ren formula for insomnia"],
        dosage: "6–15 g dried fruit/day; 3–5 jujubes as snack"
    },
    "Chrysanthemum": {
        uses: ["Eye health (dryness, redness)", "Fever and headache relief", "Liver heat clearing", "Blood pressure support", "Anti-inflammatory"],
        preparation: ["Flower tea (steep 8–10 dried flowers)", "Combined with goji berries in tea", "Eye wash (diluted cool tea)"],
        dosage: "9–15 g dried flowers as tea daily; 2–3 cups/day"
    },
    "Eucommia": {
        uses: ["Bone and joint strength", "Blood pressure regulation", "Kidney and liver tonic", "Testosterone and libido support", "Pregnancy safety (traditional)"],
        preparation: ["Bark decoction", "Capsules", "Combined TCM formulas"],
        dosage: "6–15 g bark/day in decoction; 500 mg–1.5 g extract"
    },
    "Ligustrum": {
        uses: ["Immune system enhancement", "Anti-aging and longevity", "Liver and kidney tonic", "Hair darkening (traditional)", "Antioxidant"],
        preparation: ["Berry decoction or tea", "Combined with astragalus", "Capsules"],
        dosage: "9–15 g dried berries/day; 500 mg–1 g extract"
    },
    "Magnolia Bark": {
        uses: ["Anxiety and stress relief", "Digestive issues (bloating, gas)", "Anti-inflammatory", "Sleep support", "Oral health (antimicrobial)"],
        preparation: ["Bark tea (simmer 3–9 g)", "Capsules or standardised extract", "Combined in TCM formulas"],
        dosage: "3–9 g bark/day; 200–400 mg standardised extract (honokiol/magnolol)"
    },
    "Pueraria": {
        uses: ["Hangover prevention and alcohol metabolism", "Menopausal symptom relief", "Blood pressure support", "Migraine prevention", "Neck and shoulder tension"],
        preparation: ["Root powder in warm water or tea", "Capsules (kudzu extract)", "Combined TCM formulas"],
        dosage: "1.5–3 g root/day; 100–300 mg isoflavone extract"
    },
    "Acanthopanax": {
        uses: ["Adaptogen for physical and mental stress", "Immune modulation", "Athletic performance", "Anti-inflammatory", "Cognitive support"],
        preparation: ["Root bark tincture or tea", "Capsules", "Combined with ginseng formulas"],
        dosage: "2–3 g dried bark/day; 300–600 mg extract"
    },
    "Goji Berry": {
        uses: ["Antioxidant and anti-aging", "Eye health (macular degeneration)", "Immune support", "Blood sugar regulation", "Liver protection"],
        preparation: ["Eaten dried as snack", "Goji tea (steep 10–15 berries)", "Added to smoothies, porridge"],
        dosage: "15–30 g dried berries/day as food; 300 mg–1 g extract"
    },
    "Chinese Yam": {
        uses: ["Digestive tonic (IBS, diarrhoea)", "Lung and kidney tonic", "Diabetes support", "Immune enhancement", "Reproductive health"],
        preparation: ["Cooked as food in soups and stir-fries", "Root powder in warm water", "Combined in TCM tonics"],
        dosage: "15–30 g cooked yam daily; 3–6 g powder"
    },
    "Angelica Dahurica": {
        uses: ["Headache and sinus congestion", "Skin disorders (anti-inflammatory)", "Toothache relief", "Menstrual pain", "Cold and flu"],
        preparation: ["Root decoction", "Powder", "Combined TCM formulas"],
        dosage: "3–9 g root/day in decoction; under TCM practitioner guidance"
    },
    "White Peony": {
        uses: ["Muscle cramps and spasms", "Menstrual pain and irregularity", "Liver support", "Anti-inflammatory", "Blood tonic"],
        preparation: ["Root decoction (boil 6–15 g)", "Combined in Si Wu Tang blood tonic", "Capsules"],
        dosage: "6–15 g dried root/day in decoction; 1–3 g standardised extract"
    },
    "Coptis": {
        uses: ["Antibacterial and antimicrobial (berberine-rich)", "Digestive infections and diarrhoea", "Blood sugar regulation", "Anti-inflammatory", "Heart health"],
        preparation: ["Root decoction (small amounts — very bitter)", "Standardised berberine capsules", "Huang Lian formulas"],
        dosage: "1.5–3 g dried root/day; 500 mg berberine extract twice daily with meals"
    },
    "Fritillaria": {
        uses: ["Cough and respiratory disorders (expectorant)", "Chest congestion and bronchitis", "Phlegm clearance", "Anti-inflammatory for lungs"],
        preparation: ["Bulb powder in pear and honey syrup", "Decoction", "Chuan Bei Pipa Gao syrup (traditional formula)"],
        dosage: "3–9 g/day in decoction; standardised formulas as labelled"
    },

    // ── African Medicinal Plants ──────────────────────────────────────────────
    "Devil's Claw": {
        uses: ["Arthritis and joint pain", "Back pain (lower back)", "Digestive bitters (appetite stimulant)", "Fever reduction", "Anti-inflammatory"],
        preparation: ["Capsules or tablets (standardised harpagoside)", "Tea from dried root", "Tincture"],
        dosage: "600–1200 mg standardised extract (2–3% harpagoside) twice daily"
    },
    "Sutherlandia": {
        uses: ["Immune system support (HIV adjunct)", "Adaptogen and anti-stress", "Cancer adjunct therapy", "Diabetes support", "Anti-inflammatory"],
        preparation: ["Tea from dried leaves", "Capsules or tincture", "Traditional decoction"],
        dosage: "300–600 mg extract twice daily; use under practitioner guidance for serious conditions"
    },
    "Buchu": {
        uses: ["Urinary tract infections and cystitis", "Kidney support and diuretic", "Digestive disorders", "Anti-inflammatory", "Gout"],
        preparation: ["Leaf tea (steep 1–2 tsp dried leaves)", "Tincture", "Capsules"],
        dosage: "1–2 cups buchu tea daily; or 1–3 ml tincture three times daily"
    },
    "Pelargonium": {
        uses: ["Upper respiratory infections (cold, sinusitis)", "Bronchitis and sore throat", "Immune stimulation", "Anti-bacterial properties"],
        preparation: ["Standardised extract capsules (Umckaloabo brand)", "Root tea", "Syrup for children"],
        dosage: "EPs 7630 extract: 30 mg three times daily for 5–10 days for respiratory infection"
    },
    "African Wild Ginger": {
        uses: ["Respiratory infections and cough", "Digestive disorders", "Anti-inflammatory", "Rheumatism (topical)", "Fever management"],
        preparation: ["Root decoction", "Fresh root in warm water", "Topical poultice"],
        dosage: "20–30 ml root decoction twice daily; topical paste as needed"
    },
    "Rooibos": {
        uses: ["Antioxidant and anti-aging", "Allergy relief (anti-histamine properties)", "Digestive health", "Bone health", "Caffeine-free relaxation"],
        preparation: ["Steep 1–2 tsp dried herb in boiling water for 5–10 min", "Cold brew", "Rooibos latte with milk"],
        dosage: "2–6 cups daily; considered very safe with no known toxicity"
    },
    "Pygeum": {
        uses: ["Benign prostatic hyperplasia (BPH)", "Urinary flow improvement", "Prostate health", "Libido support (traditional)", "Anti-inflammatory"],
        preparation: ["Standardised bark extract capsules", "Bark decoction (traditional)"],
        dosage: "100–200 mg standardised extract/day in divided doses"
    },
    "Witch Hazel": {
        uses: ["Skin inflammation and eczema (topical)", "Haemorrhoids treatment", "Bruises and minor wounds", "Oily skin and acne", "Varicose veins (topical)"],
        preparation: ["Distilled witch hazel applied with cotton pad", "Witch hazel cream or ointment", "Sitz bath for haemorrhoids"],
        dosage: "Topical: apply 2–3 times daily to affected area"
    },
    "Slippery Elm": {
        uses: ["Sore throat and cough soothing", "Gastric ulcer and GERD relief", "IBS and Crohn's disease support", "Nutritional supplement for illness recovery"],
        preparation: ["Powder mixed into porridge with water", "Lozenges", "Capsules with plenty of water"],
        dosage: "4 g powder in 200 ml water 3–4 times daily; or 400–500 mg capsules"
    },
    "Mullein": {
        uses: ["Respiratory expectorant (cough, bronchitis)", "Ear infections (topical oil)", "Anti-inflammatory", "Lymph support", "Anti-viral for herpes (topical)"],
        preparation: ["Leaf tea (steep 1–2 tsp in hot water, strain well)", "Mullein ear oil drops", "Capsules"],
        dosage: "1–2 cups leaf tea 3 times daily; ear oil: 5–10 drops in affected ear"
    },
    "Comfrey": {
        uses: ["Wound healing and fracture support (topical)", "Muscle and joint pain relief (topical)", "Bruises and sprains (external)", "Anti-inflammatory (topical)"],
        preparation: ["Topical cream or ointment", "Fresh leaf poultice", "Root salve"],
        dosage: "Topical use only — apply cream 2–3 times daily; maximum 10 days continuous; NEVER take internally"
    },
    "Plantain Herb": {
        uses: ["Wound healing and insect bites (topical)", "Cough and mucous membrane soothing", "Urinary tract support", "Anti-inflammatory", "Digestive aid"],
        preparation: ["Fresh leaf poultice applied directly", "Leaf tea (2 tsp dried leaves)", "Tincture"],
        dosage: "2–3 cups tea daily; fresh leaf poultice applied as needed"
    },
    "Black Cohosh": {
        uses: ["Menopausal symptoms (hot flushes, night sweats)", "PMS and menstrual cramps", "Bone health", "Mood and anxiety in menopause"],
        preparation: ["Standardised extract capsules", "Root tea (not recommended as main form)", "Remifemin (standardised product)"],
        dosage: "20–40 mg standardised extract (2.5% triterpene glycosides) twice daily; limit to 6 months"
    },
    "Goldenseal": {
        uses: ["Antimicrobial (infections of mucous membranes)", "Digestive infections", "Eye infections (eyewash)", "Anti-inflammatory", "Immune support"],
        preparation: ["Capsules or tincture", "Diluted tincture as eyewash", "Combined with echinacea"],
        dosage: "500–1000 mg dried root extract 3 times daily for short term (max 3 weeks)"
    },
    "Oregon Grape": {
        uses: ["Skin conditions (eczema, psoriasis — topical)", "Digestive infections and diarrhoea", "Antimicrobial (berberine-containing)", "Liver support", "Bile stimulation"],
        preparation: ["Topical cream or ointment for skin", "Root decoction for internal use", "Capsules"],
        dosage: "Topical: apply 10% mahonia cream 2–3 times daily; internal: 500 mg extract three times daily"
    },
    "Barberry": {
        uses: ["Digestive infections and diarrhoea", "Blood sugar regulation", "Liver support", "Skin conditions (topical)", "Antimicrobial"],
        preparation: ["Bark decoction", "Standardised berberine capsules", "Tincture"],
        dosage: "500 mg dried root bark extract 2–3 times daily; or 500 mg berberine twice daily"
    },

    // ── Western Herbal / European ─────────────────────────────────────────────
    "Grapefruit": {
        uses: ["Antioxidant (naringenin, vitamin C)", "Weight management support", "Blood pressure reduction", "Cholesterol improvement", "Immune support"],
        preparation: ["Fresh fruit or juice", "Grapefruit seed extract (GSE) capsules", "Half a grapefruit before meals"],
        dosage: "Half to one grapefruit daily; GSE: 100–200 mg extract; CAUTION — interacts with many drugs"
    },
    "Cranberry": {
        uses: ["Urinary tract infection prevention", "Antioxidant", "Dental health (anti-adhesion)", "H. pylori prevention", "Anti-inflammatory"],
        preparation: ["Unsweetened cranberry juice (240 ml)", "Cranberry capsules", "Dried cranberries as food"],
        dosage: "300–400 mg concentrated cranberry extract twice daily; or 300 ml unsweetened juice/day"
    },
    "Cat's Claw": {
        uses: ["Anti-inflammatory (arthritis)", "Immune system enhancement", "Anti-viral properties", "Digestive support", "Anti-cancer research properties"],
        preparation: ["Bark tea (simmer 1 g in 250 ml water)", "Capsules or tablets", "Tincture"],
        dosage: "20–60 mg standardised extract/day; or 1 g bark in tea twice daily"
    },
    "Pau D'Arco": {
        uses: ["Anti-fungal and antibacterial", "Immune system support", "Anti-inflammatory", "Cancer adjunct research", "Candida overgrowth"],
        preparation: ["Inner bark tea (simmer 2 tsp in 500 ml water for 20 min)", "Capsules", "Tincture"],
        dosage: "1–3 cups bark tea daily; 500 mg–1 g capsule 3 times daily; limit to 6 weeks"
    },
    "Kava Kava": {
        uses: ["Anxiety and stress relief", "Insomnia", "Muscle relaxation", "Social anxiety", "Menopausal anxiety"],
        preparation: ["Traditional water extraction of root", "Standardised extract capsules", "Kava tea"],
        dosage: "70–250 mg kavalactones/day; limit use to short courses (max 4 weeks)"
    },
    "Saw Palmetto": {
        uses: ["Benign prostatic hyperplasia (BPH)", "Male hair loss (DHT inhibitor)", "Prostate health", "Urinary flow improvement", "PCOS support (women)"],
        preparation: ["Standardised liposterolic extract capsules", "Tea (less effective)", "Oil-based soft gel capsules"],
        dosage: "160 mg standardised extract (85–95% fatty acids) twice daily"
    },
    "Feverfew": {
        uses: ["Migraine prevention", "Anti-inflammatory", "Fever reduction (traditional)", "Arthritis pain", "Menstrual pain"],
        preparation: ["Fresh or freeze-dried leaf capsules", "Feverfew tea", "Parthenolide standardised extract"],
        dosage: "50–150 mg freeze-dried leaf daily (0.2–0.4% parthenolide) for migraine prevention"
    },
    "Willow Bark": {
        uses: ["Pain relief (headache, back pain)", "Fever reduction", "Anti-inflammatory", "Osteoarthritis", "Flu symptoms"],
        preparation: ["Bark decoction (boil 1–2 tsp in water)", "Standardised salicin extract capsules", "Willow bark tea"],
        dosage: "240 mg salicin/day; or 1–3 cups bark decoction"
    },
    "Horse Chestnut": {
        uses: ["Chronic venous insufficiency (varicose veins)", "Leg swelling and oedema", "Haemorrhoids", "Sports injuries (topical gel)", "Anti-inflammatory"],
        preparation: ["Standardised extract capsules (aescin)", "Topical gel for varicose veins", "Seed extract tablets"],
        dosage: "300 mg standardised extract (50 mg aescin) twice daily; topical: apply 2 times/day"
    },
    "Ginkgo Biloba": {
        uses: ["Cognitive function and memory (dementia support)", "Circulation improvement", "Tinnitus management", "Eye health (glaucoma, macular degeneration)", "Anxiety"],
        preparation: ["Standardised leaf extract capsules", "Ginkgo biloba tea", "EGb 761 standardised product"],
        dosage: "120–240 mg standardised extract (24% flavonoids, 6% terpenes) in divided doses daily"
    },
    "Bilberry": {
        uses: ["Eye health and vision improvement", "Antioxidant (anthocyanins)", "Blood sugar regulation", "Circulation improvement", "Anti-inflammatory"],
        preparation: ["Fresh or dried berries eaten as food", "Standardised extract capsules", "Bilberry tea"],
        dosage: "80–160 mg standardised extract (25% anthocyanins) twice daily; or 20–60 g fresh berries"
    },
    "Horsetail": {
        uses: ["Bone health (silica-rich)", "Urinary tract support and diuretic", "Hair and nail strengthening", "Wound healing (topical)", "Kidney stone prevention"],
        preparation: ["Horsetail tea (1–2 tsp dried herb)", "Capsules", "Topical wash for wounds"],
        dosage: "1–2 cups tea daily; or 300 mg dried extract 3 times daily; limit to 6 weeks"
    },
    "Marshmallow Root": {
        uses: ["Sore throat and cough soothing (demulcent)", "Gastric ulcer and GERD relief", "Urinary tract soothing", "Dry mouth relief", "IBS support"],
        preparation: ["Cold infusion (soak overnight in cold water — preserves mucilage)", "Capsules", "Syrup"],
        dosage: "5 g root in 200 ml cold water as infusion, 3 times daily; or 500 mg–1 g capsule"
    },
    "Bladderwrack": {
        uses: ["Thyroid support (iodine-rich)", "Weight management", "Digestive health", "Anti-inflammatory", "Antioxidant"],
        preparation: ["Dried seaweed added to food", "Capsules or powder", "Bladderwrack tea"],
        dosage: "500 mg–1 g dried herb daily; caution — iodine content varies widely"
    },

    // ── More Ayurvedic / Indian ───────────────────────────────────────────────
    "Indian Cork Tree": {
        uses: ["Respiratory disorders (asthma, bronchitis)", "Anti-fungal and anti-bacterial (bark)", "Headache relief", "Wound healing (topical)", "Fever management"],
        preparation: ["Bark decoction for respiratory use", "Leaf tea", "Bark paste applied topically"],
        dosage: "20–40 ml bark decoction twice daily under Ayurvedic guidance"
    },
    "Bhringraj Oil": {
        uses: ["Hair growth stimulation and hair loss prevention", "Scalp health and dandruff", "Premature greying prevention", "Sleep aid (head massage)", "Liver support (internal)"],
        preparation: ["Warm oil massage on scalp 30 min before wash", "2–3 drops internal with milk (traditional)", "Nasal drops (nasya)"],
        dosage: "Topical: massage 10–15 ml warm oil into scalp 3 times/week; internal: 5 ml with milk twice daily"
    },
    "Neem Leaf": {
        uses: ["Blood purification", "Skin diseases (acne, eczema — internal and topical)", "Dental health (twigs as brush)", "Anti-diabetic support", "Anti-malarial (traditional)"],
        preparation: ["Fresh leaf juice (10–20 ml) on empty stomach", "Boiled leaf water for skin wash", "Neem powder capsules"],
        dosage: "10–20 ml fresh juice or 500 mg–1 g dried leaf extract twice daily"
    },
    "Gotu Kola": {
        uses: ["Wound healing acceleration", "Cognitive function and memory", "Anxiety and stress reduction", "Varicose veins and circulation", "Skin rejuvenation (topical)"],
        preparation: ["Fresh leaf juice or tea", "Standardised extract capsules (asiaticoside)", "Topical cream for wounds and skin"],
        dosage: "500 mg–1 g standardised extract twice daily; or 60 mg asiaticoside/day"
    },
    "Kutki Root": {
        uses: ["Liver protection (hepatitis, fatty liver)", "Immune stimulation (picrorrhiza)", "Anti-asthmatic", "Digestive bitter", "Anti-inflammatory"],
        preparation: ["Standardised picroside capsules", "Traditional powder in honey (very small amounts)", "Decoction under supervision"],
        dosage: "100–400 mg standardised picroside-II extract/day — use under guidance"
    },
    "Ashwagandha Root": {
        uses: ["Adaptogen for chronic stress and anxiety", "Testosterone and male fertility enhancement", "Muscle strength and athletic recovery", "Thyroid function support", "Sleep improvement"],
        preparation: ["Root powder with warm milk and honey (Ashwagandha Latte)", "Capsules or tablets", "KSM-66 or Sensoril standardised extracts"],
        dosage: "300–600 mg standardised root extract/day; or 3–6 g raw root powder with milk"
    },

    // ── Additional ────────────────────────────────────────────────────────────
    "Hoodia": {
        uses: ["Appetite suppression and weight management", "Thirst suppression (traditional use by San people)"],
        preparation: ["Standardised capsules", "Raw cactus plant (traditional — difficult to source)"],
        dosage: "400–800 mg standardised extract/day; limited evidence — use cautiously"
    },
    "Khat": {
        uses: ["Stimulant (traditional social use)", "Appetite suppressant", "Fatigue management (traditional)"],
        preparation: ["Fresh leaves chewed (traditional)", "Tea from fresh leaves"],
        dosage: "Restricted/controlled substance in many countries — traditional use only; not recommended as health supplement"
    },
    "Rehmannia": {
        uses: ["Kidney and liver tonic (TCM)", "Blood sugar regulation", "Bone marrow and blood production", "Anti-inflammatory", "Adrenal fatigue support"],
        preparation: ["Root decoction (prepared/cooked form — Shu Di Huang)", "Combined in Liu Wei Di Huang Wan formula", "Capsules"],
        dosage: "9–30 g prepared root/day in decoction; or 500 mg–2 g extract"
    },
    "Cornus": {
        uses: ["Kidney and liver tonic (TCM)", "Urinary frequency and incontinence", "Sweating and night sweats", "Blood sugar regulation", "Bone strength"],
        preparation: ["Decoction of dried fruit (Shan Zhu Yu)", "Liu Wei Di Huang Wan formula", "Capsules"],
        dosage: "6–12 g dried fruit/day in decoction; or 500 mg–1 g extract"
    },
    "Arnica": {
        uses: ["Bruises and muscle soreness (topical)", "Sprain and injury recovery", "Post-surgical swelling reduction", "Arthritis pain relief (topical)", "Scalp stimulation"],
        preparation: ["Arnica gel or cream applied to skin", "Diluted tincture (1:10) as topical compress", "Homeopathic arnica tablets"],
        dosage: "Topical only — apply gel/cream 2–3 times daily to intact skin; NEVER apply to broken skin or take internally"
    },
    "African Potato": {
        uses: ["Immune system support (HIV adjunct — traditional)", "Urinary tract health", "Anti-inflammatory", "Prostate health (traditional)"],
        preparation: ["Corm decoction (boil in water)", "Standardised extract capsules (hypoxoside)", "Traditional infusion"],
        dosage: "Under healthcare practitioner guidance only — drug interactions are significant; traditional: 30–50 ml decoction daily"
    },
    "Jatropha": {
        uses: ["Wound healing (latex topically)", "Toothache relief (bark/latex topical)", "Anti-fungal (external application)", "Skin infections (traditional topical)"],
        preparation: ["Latex applied sparingly to affected area (topical only)", "Bark decoction for wound wash (diluted)"],
        dosage: "Topical external use only — internal use is toxic; apply small amount of diluted latex to wounds"
    }
};

// Plant name mapping: common name → scientific name + alternative common names
// Used to enrich identification results and enable scientific-name matching
export const plantNamesMap = {
    "Aloe Vera":         { scientificName: "Aloe barbadensis miller",        commonNames: ["Aloe", "Burn Plant", "Ghee Kunvar", "Kathalai"] },
    "Turmeric":          { scientificName: "Curcuma longa",                  commonNames: ["Haldi", "Indian Saffron", "Yellow Ginger", "Manjal"] },
    "Ginger":            { scientificName: "Zingiber officinale",            commonNames: ["Adrak", "Shunthi", "Inji"] },
    "Garlic":            { scientificName: "Allium sativum",                 commonNames: ["Lahsun", "Veluthulli", "Rashona"] },
    "Tulsi":             { scientificName: "Ocimum tenuiflorum",             commonNames: ["Holy Basil", "Sacred Basil", "Krishna Tulsi", "Surasa"] },
    "Neem":              { scientificName: "Azadirachta indica",             commonNames: ["Indian Lilac", "Margosa", "Nimtree", "Vembu"] },
    "Ashwagandha":       { scientificName: "Withania somnifera",             commonNames: ["Indian Ginseng", "Winter Cherry", "Asgandh", "Ajagandha"] },
    "Peppermint":        { scientificName: "Mentha × piperita",              commonNames: ["Pudina", "Cool Mint", "Lamb Mint"] },
    "Chamomile":         { scientificName: "Matricaria chamomilla",          commonNames: ["German Chamomile", "Wild Chamomile", "Babune ka Phool"] },
    "Lavender":          { scientificName: "Lavandula angustifolia",         commonNames: ["English Lavender", "Common Lavender", "True Lavender"] },
    "Eucalyptus":        { scientificName: "Eucalyptus globulus",            commonNames: ["Blue Gum", "Tasmanian Blue Gum", "Fever Tree"] },
    "Basil":             { scientificName: "Ocimum basilicum",               commonNames: ["Sweet Basil", "Great Basil", "Sabja"] },
    "Cinnamon":          { scientificName: "Cinnamomum verum",               commonNames: ["Ceylon Cinnamon", "True Cinnamon", "Dalchini"] },
    "Moringa":           { scientificName: "Moringa oleifera",               commonNames: ["Drumstick Tree", "Horseradish Tree", "Sahjan", "Murungai"] },
    "Brahmi":            { scientificName: "Bacopa monnieri",                commonNames: ["Water Hyssop", "Thyme-leafed Gratiola", "Jalabrahmi"] },
    "Shatavari":         { scientificName: "Asparagus racemosus",            commonNames: ["Wild Asparagus", "Satavar", "Shatmool", "Tala Muli"] },
    "Amla":              { scientificName: "Phyllanthus emblica",            commonNames: ["Indian Gooseberry", "Emblic Myrobalan", "Amalaki", "Nellikai"] },
    "Fenugreek":         { scientificName: "Trigonella foenum-graecum",      commonNames: ["Methi", "Greek Hay", "Bird's Foot", "Vendhayam"] },
    "Lemongrass":        { scientificName: "Cymbopogon citratus",            commonNames: ["West Indian Lemongrass", "Fever Grass", "Choomana Pullu"] },
    "Rosemary":          { scientificName: "Salvia rosmarinus",              commonNames: ["Dew of the Sea", "Rosmarino", "Rusmari"] },
    "Sage":              { scientificName: "Salvia officinalis",             commonNames: ["Common Sage", "Garden Sage", "True Sage"] },
    "Thyme":             { scientificName: "Thymus vulgaris",                commonNames: ["Common Thyme", "Garden Thyme", "German Thyme"] },
    "Echinacea":         { scientificName: "Echinacea purpurea",             commonNames: ["Purple Coneflower", "American Coneflower", "Rudbeckia"] },
    "Valerian":          { scientificName: "Valeriana officinalis",          commonNames: ["Garden Valerian", "All-Heal", "Tagara"] },
    "Milk Thistle":      { scientificName: "Silybum marianum",               commonNames: ["Holy Thistle", "Mary Thistle", "St. Mary's Thistle"] },
    "St. John's Wort":   { scientificName: "Hypericum perforatum",           commonNames: ["Klamath Weed", "Goatweed", "Perforate St John's-wort"] },
    "Ginseng":           { scientificName: "Panax ginseng",                  commonNames: ["Asian Ginseng", "Korean Ginseng", "Chinese Ginseng", "Ren Shen"] },
    "Green Tea":         { scientificName: "Camellia sinensis",              commonNames: ["Chinese Tea", "Tea Plant", "Cha"] },
    "Bitter Melon":      { scientificName: "Momordica charantia",            commonNames: ["Bitter Gourd", "Karela", "Balsam Pear", "Pavakkai"] },
    "Giloy":             { scientificName: "Tinospora cordifolia",           commonNames: ["Heart-leaved Moonseed", "Guduchi", "Amrita", "Chittamrutha"] },
    "Arjuna":            { scientificName: "Terminalia arjuna",              commonNames: ["Arjun Tree", "White Murdah", "Arjuna Myrobalan"] },
    "Licorice Root":     { scientificName: "Glycyrrhiza glabra",             commonNames: ["Liquorice", "Mulethi", "Sweet Root", "Yashti Madhu"] },
    "Curry Leaf":        { scientificName: "Murraya koenigii",               commonNames: ["Sweet Neem", "Karivepaku", "Kadi Patta", "Meetha Neem"] },
    "Guava Leaf":        { scientificName: "Psidium guajava",                commonNames: ["Guava", "Amrood", "Peyara", "Koyya"] },
    "Papaya Leaf":       { scientificName: "Carica papaya",                  commonNames: ["Papaw Leaf", "Pawpaw Leaf", "Papita Patta"] },
    "Elderberry":        { scientificName: "Sambucus nigra",                 commonNames: ["Black Elder", "European Elder", "Common Elder"] },
    "Dandelion":         { scientificName: "Taraxacum officinale",           commonNames: ["Common Dandelion", "Lion's Tooth", "Blowball", "Pissabed"] },
    "Nettle":            { scientificName: "Urtica dioica",                  commonNames: ["Common Stinging Nettle", "Burn Nettle", "Bichu Booti"] },
    "Passionflower":     { scientificName: "Passiflora incarnata",           commonNames: ["Maypop", "Purple Passionflower", "Wild Apricot"] },
    "Hawthorn":          { scientificName: "Crataegus monogyna",             commonNames: ["Common Hawthorn", "Whitethorn", "May Blossom"] },
    "Senna":             { scientificName: "Senna alexandrina",              commonNames: ["Alexandrian Senna", "Tinnevelly Senna", "Cassia"] },
    "Black Pepper":      { scientificName: "Piper nigrum",                   commonNames: ["Common Pepper", "Kali Mirch", "Maricha", "Kurumulaku"] },
    "Cardamom":          { scientificName: "Elettaria cardamomum",           commonNames: ["Green Cardamom", "True Cardamom", "Elaichi", "Elakkai"] },
    "Clove":             { scientificName: "Syzygium aromaticum",            commonNames: ["Lavang", "Clove Tree", "Laung"] },
    "Coriander":         { scientificName: "Coriandrum sativum",             commonNames: ["Cilantro", "Dhania", "Malli", "Chinese Parsley"] },
    "Hibiscus":          { scientificName: "Hibiscus sabdariffa",            commonNames: ["Roselle", "Jamaica Sorrel", "Gudhal", "Joba"] },
    "Fennel":            { scientificName: "Foeniculum vulgare",             commonNames: ["Sweet Fennel", "Saunf", "Perunjirakam", "Florence Fennel"] },
    "Triphala":          { scientificName: "Emblica officinalis + Terminalia bellirica + Terminalia chebula", commonNames: ["Three Fruits", "Haritaki-Bibhitaki-Amla", "Trikatu"] },
    "Jiaogulan":         { scientificName: "Gynostemma pentaphyllum",        commonNames: ["Five-Leaf Ginseng", "Poor Man's Ginseng", "Magical Grass", "Xiancao"] },
    "Oregano":           { scientificName: "Origanum vulgare",               commonNames: ["Wild Marjoram", "Pot Marjoram", "Ajwain ke Phool"] },
    "Spearmint":         { scientificName: "Mentha spicata",                 commonNames: ["Garden Mint", "Lamb Mint", "Pudina"] },
    "Lemon Balm":        { scientificName: "Melissa officinalis",            commonNames: ["Balm Mint", "Common Balm", "Bee Balm", "Sweet Mary"] },
    "Boswellia":         { scientificName: "Boswellia serrata",              commonNames: ["Indian Frankincense", "Salai Guggul", "Sallaki", "Shallaki"] },
    "Andrographis":      { scientificName: "Andrographis paniculata",        commonNames: ["King of Bitters", "Kalmegh", "Green Chiretta", "Nilavembu"] },
    "Bacopa":            { scientificName: "Bacopa monnieri",                commonNames: ["Brahmi", "Water Hyssop", "Jalabrahmi", "Thyme-leafed Gratiola"] },
    "Punarnava":         { scientificName: "Boerhavia diffusa",              commonNames: ["Spreading Hogweed", "Red Spiderling", "Thazhuthama"] },
    "Kalanchoe":         { scientificName: "Kalanchoe pinnata",              commonNames: ["Cathedral Bells", "Air Plant", "Life Plant", "Patharchatta", "Bryophyllum"] },
    "Guduchi":           { scientificName: "Tinospora cordifolia",           commonNames: ["Giloy", "Heart-leaved Moonseed", "Amrita", "Chittamrutha"] },
    "Shankhpushpi":      { scientificName: "Convolvulus pluricaulis",        commonNames: ["Shankhpushpa", "Aloe Weed", "Morning Glory"] },
    "Coconut":           { scientificName: "Cocos nucifera",                 commonNames: ["Coconut Palm", "Nariyal", "Thengai", "Narikela"] },
    "Noni":              { scientificName: "Morinda citrifolia",             commonNames: ["Indian Mulberry", "Cheese Fruit", "Mengkudu", "Noni Fruit"] },
    "Wheatgrass":        { scientificName: "Triticum aestivum",              commonNames: ["Common Wheat Grass", "Gehun Ghaas"] },
    "Spirulina":         { scientificName: "Arthrospira platensis",          commonNames: ["Blue-Green Algae", "Dihe", "Tecuitlatl"] },
    "Flaxseed":          { scientificName: "Linum usitatissimum",            commonNames: ["Linseed", "Common Flax", "Alsi", "Tishi"] },
    "Beetroot":          { scientificName: "Beta vulgaris subsp. vulgaris",  commonNames: ["Beet", "Garden Beet", "Chukandar", "Red Beet"] },
    "Onion":             { scientificName: "Allium cepa",                    commonNames: ["Common Onion", "Pyaz", "Vengayam", "Dungri"] },
    "Calendula":         { scientificName: "Calendula officinalis",          commonNames: ["Pot Marigold", "Common Marigold", "Genda Phool"] },
    "Yarrow":            { scientificName: "Achillea millefolium",           commonNames: ["Common Yarrow", "Milfoil", "Soldier's Woundwort", "Nosebleed Plant"] },
    "Red Clover":        { scientificName: "Trifolium pratense",             commonNames: ["Meadow Clover", "Purple Clover", "Lal Tipatiya"] },
    "Alfalfa":           { scientificName: "Medicago sativa",                commonNames: ["Lucerne", "Purple Medic", "Rijka"] },
    "Rhodiola":          { scientificName: "Rhodiola rosea",                 commonNames: ["Rose Root", "Golden Root", "Arctic Root", "King's Crown"] },
    "Maca":              { scientificName: "Lepidium meyenii",               commonNames: ["Peruvian Ginseng", "Maino", "Ayak Chichira"] },
    "Mucuna Pruriens":   { scientificName: "Mucuna pruriens",                commonNames: ["Velvet Bean", "Cowhage", "Kapikachhu", "Atmagupta"] },
    "Bhringraj":         { scientificName: "Eclipta prostrata",              commonNames: ["False Daisy", "Yerba de Tago", "Kehraj", "Trailing Eclipta"] },
    "Nutmeg":            { scientificName: "Myristica fragrans",             commonNames: ["Nutmeg Tree", "Jaiphal", "Jatikosha", "Jatiphala"] },
    "Star Anise":        { scientificName: "Illicium verum",                 commonNames: ["Chinese Star Anise", "Chakra Phool", "Badian Khatai"] },
    "Mustard Seed":      { scientificName: "Brassica nigra",                 commonNames: ["Black Mustard", "Rai", "Sarson", "Kadugu"] },
    "Sesame":            { scientificName: "Sesamum indicum",                commonNames: ["Gingelly", "Til", "Benne", "Ellu"] },
    "Pomegranate":       { scientificName: "Punica granatum",                commonNames: ["Anaar", "Dadima", "Mathalam Pazham", "Granada"] },
    "Mango Leaf":        { scientificName: "Mangifera indica",               commonNames: ["Common Mango Leaf", "Aam Patta", "Mavila", "Amra"] },
    "Betel Leaf":        { scientificName: "Piper betle",                    commonNames: ["Paan", "Betel Pepper", "Tambula", "Vetrilai"] },
    "Sarpagandha":       { scientificName: "Rauvolfia serpentina",           commonNames: ["Indian Snakeroot", "Serpentwood", "Chandra", "Sarpagandha Vine"] },
    "Ashoka":            { scientificName: "Saraca asoca",                   commonNames: ["Asoka Tree", "Sorrowless Tree", "Sita Ashok", "Ashok"] },
    "Kutki":             { scientificName: "Picrorhiza kurroa",              commonNames: ["Indian Hellebore", "Katuki", "Kadu", "Kurroa"] },

    // ── Toxic / Dangerous Plants ──────────────────────────────────────────────
    "Oleander":          { scientificName: "Nerium oleander",                commonNames: ["Rose Bay", "Kaner", "Arali", "Ganeru", "Laurier Rose"] },
    "Foxglove":          { scientificName: "Digitalis purpurea",             commonNames: ["Common Foxglove", "Purple Foxglove", "Fairy Gloves", "Dead Men's Bells"] },
    "Datura":            { scientificName: "Datura stramonium",              commonNames: ["Jimsonweed", "Devil's Trumpet", "Thorn Apple", "Dhatura", "Unmatta", "Ummathai"] },
    "Hemlock":           { scientificName: "Conium maculatum",               commonNames: ["Poison Hemlock", "Spotted Hemlock", "Conium", "Spotted Corobane"] },
    "Ricinus":           { scientificName: "Ricinus communis",               commonNames: ["Castor Plant", "Castor Bean", "Arand", "Eranda", "Chittamanak", "Wonder Tree"] },
    "Aconite":           { scientificName: "Aconitum napellus",              commonNames: ["Monkshood", "Wolfsbane", "Vatsanabha", "Meetha Vish", "Fu Zi", "Blue Rocket"] },
    "Belladonna":        { scientificName: "Atropa belladonna",              commonNames: ["Deadly Nightshade", "Devil's Cherries", "Naughty Man's Cherries", "Divale"] },
    "Yew":               { scientificName: "Taxus baccata",                  commonNames: ["Common Yew", "English Yew", "European Yew", "Taxus"] },
    "Water Hemlock":     { scientificName: "Cicuta maculata",                commonNames: ["Spotted Water Hemlock", "Cowbane", "Suicide Root", "Poison Parsnip"] },
    "Lantana":           { scientificName: "Lantana camara",                 commonNames: ["Lantana", "Tickberry", "Putus", "Raimuniya", "Big Sage", "Wild Sage"] },
    "Nux Vomica":        { scientificName: "Strychnos nux-vomica",           commonNames: ["Poison Nut", "Kuchla", "Vishamushti", "Kajra", "Strychnine Tree"] },
    "Calotropis":        { scientificName: "Calotropis gigantea",            commonNames: ["Crown Flower", "Akanda", "Aak", "Madar", "Erukku", "Milkweed"] },
    "Abrus Precatorius": { scientificName: "Abrus precatorius",              commonNames: ["Rosary Pea", "Jequirity Bean", "Gunchi", "Gunja", "Ratti", "Indian Licorice"] },

    // ── Indian Ayurvedic / Siddha / Unani Plants ──────────────────────────────
    "Guggul":            { scientificName: "Commiphora wightii",             commonNames: ["Indian Bdellium", "Mukul Myrrh", "Guggulu", "Guggal"] },
    "Shilajit":          { scientificName: "Asphaltum punjabianum",          commonNames: ["Mineral Pitch", "Stone Oil", "Asphaltum", "Shilajita", "Mumijo"] },
    "Haritaki":          { scientificName: "Terminalia chebula",             commonNames: ["Chebulic Myrobalan", "Black Myrobalan", "Harad", "Kadukkai", "Abhaya"] },
    "Bibhitaki":         { scientificName: "Terminalia bellirica",           commonNames: ["Bahera", "Beleric Myrobalan", "Baheda", "Tani", "Vibhitaka"] },
    "Vidanga":           { scientificName: "Embelia ribes",                  commonNames: ["False Black Pepper", "Vidang", "Vayuvilanga", "Baberang"] },
    "Chitraka":          { scientificName: "Plumbago zeylanica",             commonNames: ["Leadwort", "White Plumbago", "Chita", "Chitrak", "Kodiveli"] },
    "Pippali":           { scientificName: "Piper longum",                   commonNames: ["Long Pepper", "Indian Long Pepper", "Pipli", "Thippali"] },
    "Vacha":             { scientificName: "Acorus calamus",                 commonNames: ["Sweet Flag", "Calamus", "Bach", "Vayambu", "Ugragandha"] },
    "Jatropha":          { scientificName: "Jatropha curcas",                commonNames: ["Physic Nut", "Purging Nut", "Ratanjot", "Kadu Yeranda", "Seemai Iluppai"] },
    "Tagetes":           { scientificName: "Tagetes erecta",                 commonNames: ["African Marigold", "Genda Phool", "Mexican Marigold", "Big Marigold"] },
    "Kalonji":           { scientificName: "Nigella sativa",                 commonNames: ["Black Seed", "Black Cumin", "Kalonji", "Habbatus Sauda", "Karun Jeeragam"] },
    "Henna":             { scientificName: "Lawsonia inermis",               commonNames: ["Henna Plant", "Mehndi", "Maruthani", "Mindi", "Egyptian Privet"] },
    "Alstonia":          { scientificName: "Alstonia scholaris",             commonNames: ["Saptaparni", "Devil Tree", "Chatian", "Ezhilampala", "Blackboard Tree"] },
    "Bael":              { scientificName: "Aegle marmelos",                 commonNames: ["Bel", "Bilva", "Bengal Quince", "Golden Apple", "Vilva", "Beli"] },
    "Manjistha":         { scientificName: "Rubia cordifolia",               commonNames: ["Indian Madder", "Majith", "Manjitti", "Majeeth", "Common Madder"] },
    "Lodhra":            { scientificName: "Symplocos racemosa",             commonNames: ["Lodh Tree", "Lodhra", "Velli Iluppai"] },
    "Gokshura":          { scientificName: "Tribulus terrestris",            commonNames: ["Puncture Vine", "Gokhru", "Gokshura", "Nerunji", "Caltrops"] },
    "Yashtimadhu":       { scientificName: "Glycyrrhiza glabra",             commonNames: ["Licorice Root", "Mulethi", "Atimadhuram", "Yashti"] },
    "Kutaja":            { scientificName: "Holarrhena antidysenterica",     commonNames: ["Kurchi", "Indrajav", "Conessi Bark", "Tellicherry Bark", "Veppalai"] },
    "Daruharidra":       { scientificName: "Berberis aristata",              commonNames: ["Tree Turmeric", "Indian Barberry", "Daruhaldi", "Rasaut", "Kashmal"] },
    "Berberine":         { scientificName: "Various (Berberis, Coptis, Hydrastis)", commonNames: ["Berberine Alkaloid", "Daruhaldi Active", "Huang Lian Active", "Goldenseal Active"] },
    "Shatapushpa":       { scientificName: "Anethum graveolens",             commonNames: ["Dill", "Suwa", "Sowa", "Shatapushpi", "Perunjirakam (Dill)"] },
    "Khadira":           { scientificName: "Acacia catechu",                 commonNames: ["Cutch Tree", "Black Catechu", "Kath", "Khair", "Karangalli"] },
    "Wrightia Tinctoria":{ scientificName: "Wrightia tinctoria",             commonNames: ["Pala Indigo Plant", "Sweet Indrajao", "Veppala", "Dyer's Oleander"] },

    // ── Traditional Chinese Medicine Herbs ────────────────────────────────────
    "Astragalus":        { scientificName: "Astragalus membranaceus",        commonNames: ["Huang Qi", "Milkvetch Root", "Chinese Astragalus", "Bei Qi"] },
    "Dong Quai":         { scientificName: "Angelica sinensis",              commonNames: ["Chinese Angelica", "Female Ginseng", "Dang Gui", "Danggui", "Tang Kuei"] },
    "Bupleurum":         { scientificName: "Bupleurum falcatum",             commonNames: ["Chai Hu", "Hare's Ear Root", "Thorowax Root", "Sickle-leaf Hare's Ear"] },
    "Schisandra":        { scientificName: "Schisandra chinensis",           commonNames: ["Wu Wei Zi", "Five-Flavour Berry", "Chinese Magnolia Vine", "Omija"] },
    "Codonopsis":        { scientificName: "Codonopsis pilosula",            commonNames: ["Dang Shen", "Poor Man's Ginseng", "Bonnet Bellflower", "Bastard Ginseng"] },
    "Rehmannia":         { scientificName: "Rehmannia glutinosa",            commonNames: ["Sheng Di Huang", "Chinese Foxglove", "Di Huang", "Rehmannia Root"] },
    "Cornus":            { scientificName: "Cornus officinalis",             commonNames: ["Shan Zhu Yu", "Cornelian Cherry", "Japanese Cornel", "Asiatic Cornelian Cherry"] },
    "Poria":             { scientificName: "Wolfiporia extensa",             commonNames: ["Fu Ling", "Tuckahoe", "China Root", "Indian Bread", "Hoelen"] },
    "Jujube":            { scientificName: "Ziziphus jujuba",                commonNames: ["Da Zao", "Red Date", "Chinese Date", "Ber", "Ilanthai"] },
    "Chrysanthemum":     { scientificName: "Chrysanthemum morifolium",       commonNames: ["Ju Hua", "Florist's Chrysanthemum", "Mums", "Guldaudi"] },
    "Eucommia":          { scientificName: "Eucommia ulmoides",              commonNames: ["Du Zhong", "Hardy Rubber Tree", "Chinese Rubber Tree", "Gutta-percha Tree"] },
    "Ligustrum":         { scientificName: "Ligustrum lucidum",              commonNames: ["Nu Zhen Zi", "Chinese Privet", "Glossy Privet", "Ligustrum"] },
    "Magnolia Bark":     { scientificName: "Magnolia officinalis",           commonNames: ["Hou Po", "Chinese Magnolia", "Magnolia", "Houpu Magnolia"] },
    "Coptis":            { scientificName: "Coptis chinensis",               commonNames: ["Huang Lian", "Chinese Goldthread", "Coptis Root", "Gold Thread"] },
    "Pueraria":          { scientificName: "Pueraria montana var. lobata",   commonNames: ["Kudzu", "Ge Gen", "Japanese Arrowroot", "Kudzu Vine"] },
    "Fritillaria":       { scientificName: "Fritillaria cirrhosa",           commonNames: ["Chuan Bei Mu", "Sichuan Fritillary", "Fritillary Bulb", "Chuanbeimu"] },
    "Acanthopanax":      { scientificName: "Eleutherococcus senticosus",     commonNames: ["Siberian Ginseng", "Ci Wu Jia", "Eleuthero", "Touch-me-not"] },

    // ── African Traditional Medicine Plants ────────────────────────────────────
    "Devil's Claw":      { scientificName: "Harpagophytum procumbens",       commonNames: ["Grapple Plant", "Wood Spider", "Sengaparile", "Harpago"] },
    "Sutherlandia":      { scientificName: "Sutherlandia frutescens",        commonNames: ["Cancer Bush", "Kankerbos", "Insiswa", "Unwele"] },
    "Buchu":             { scientificName: "Agathosma betulina",             commonNames: ["Bookoo", "Bucco", "Short Buchu", "Round Leaf Buchu"] },
    "Pelargonium":       { scientificName: "Pelargonium sidoides",           commonNames: ["Umckaloabo", "South African Geranium", "EPs 7630", "African Geranium"] },
    "Rooibos":           { scientificName: "Aspalathus linearis",            commonNames: ["Redbush Tea", "Red Tea", "Rooitea", "Bush Tea"] },
    "Hoodia":            { scientificName: "Hoodia gordonii",                commonNames: ["Bushman's Hat", "Queen of the Namib", "Xhoba", "South African Desert Cactus"] },
    "Pygeum":            { scientificName: "Prunus africana",                commonNames: ["African Cherry", "Pygeum africanum", "Red Stinkwood", "Bitter Almond"] },
    "African Potato":    { scientificName: "Hypoxis hemerocallidea",         commonNames: ["African Star Grass", "Yellow Stars", "Inkomfe", "Molapo"] },
    "Khat":              { scientificName: "Catha edulis",                   commonNames: ["Qat", "Chat", "Miraa", "Muirungi", "Arabian Tea", "Bushman's Tea"] },
    "African Wild Ginger":{ scientificName: "Siphonochilus aethiopicus",     commonNames: ["Wild Ginger", "Indudu", "Isiphephetho", "African Ginger"] },

    // ── Common Worldwide Medicinal Plants ─────────────────────────────────────
    "Grapefruit":        { scientificName: "Citrus paradisi",                commonNames: ["Grapefruit", "Chakotara", "Pumelo Hybrid", "Forbidden Fruit"] },
    "Cranberry":         { scientificName: "Vaccinium macrocarpon",          commonNames: ["Large Cranberry", "American Cranberry", "Bounceberry", "Fenberry"] },
    "Cat's Claw":        { scientificName: "Uncaria tomentosa",              commonNames: ["Una de Gato", "Vilcacora", "Uña de Gato", "Paraguayo"] },
    "Pau D'Arco":        { scientificName: "Handroanthus impetiginosus",     commonNames: ["Lapacho", "Taheebo", "Trumpet Tree", "Ipe Roxo"] },
    "Arnica":            { scientificName: "Arnica montana",                 commonNames: ["Mountain Tobacco", "Leopard's Bane", "Wolf's Bane Arnica", "Mountain Arnica"] },
    "Kava Kava":         { scientificName: "Piper methysticum",              commonNames: ["Kava", "Yaqona", "Awa", "Ava"] },
    "Saw Palmetto":      { scientificName: "Serenoa repens",                 commonNames: ["Saw Palmetto Berry", "American Dwarf Palm", "Cabbage Palm", "Sabal"] },
    "Feverfew":          { scientificName: "Tanacetum parthenium",           commonNames: ["Featherfoil", "Midsummer Daisy", "Bachelor's Buttons", "Altamisa"] },
    "Willow Bark":       { scientificName: "Salix alba",                     commonNames: ["White Willow", "Salicin Bark", "European Willow", "Withe Willow"] },
    "Horse Chestnut":    { scientificName: "Aesculus hippocastanum",         commonNames: ["Common Horse Chestnut", "Conker Tree", "Buckeye", "Aescin Plant"] },
    "Ginkgo Biloba":     { scientificName: "Ginkgo biloba",                  commonNames: ["Maidenhair Tree", "Bai Guo", "Fossil Tree", "Kew Tree"] },
    "Bilberry":          { scientificName: "Vaccinium myrtillus",            commonNames: ["European Blueberry", "Whortleberry", "Huckleberry", "Whinberry"] },
    "Horsetail":         { scientificName: "Equisetum arvense",              commonNames: ["Field Horsetail", "Scouring Rush", "Shavegrass", "Pewterwort"] },
    "Marshmallow Root":  { scientificName: "Althaea officinalis",            commonNames: ["White Mallow", "Marsh Mallow", "Mortification Plant", "Sweetweed"] },
    "Bladderwrack":      { scientificName: "Fucus vesiculosus",              commonNames: ["Bladder Fucus", "Sea Oak", "Black Tang", "Rockweed"] },

    // ── Indian Kitchen and Garden Plants ──────────────────────────────────────
    "Jeera":             { scientificName: "Cuminum cyminum",                commonNames: ["Cumin", "Zeera", "Jeerakam", "Seeragam", "Kala Jeera"] },
    "Ajwain":            { scientificName: "Trachyspermum ammi",             commonNames: ["Carom Seeds", "Bishop's Weed", "Omam", "Ajmo", "Thymol Seeds"] },
    "Hing":              { scientificName: "Ferula assa-foetida",            commonNames: ["Asafoetida", "Heeng", "Perungayam", "Devil's Dung", "Kayam"] },
    "Tejpat":            { scientificName: "Cinnamomum tamala",              commonNames: ["Indian Bay Leaf", "Tej Patta", "Malabar Leaf", "Tamalapatra"] },
    "Imli":              { scientificName: "Tamarindus indica",              commonNames: ["Tamarind", "Imlee", "Puli", "Chinch", "Tintiri"] },
    "Kalonji":           { scientificName: "Nigella sativa",                 commonNames: ["Black Seed", "Black Cumin", "Habbatus Sauda", "Karun Jeeragam"] },
    "Baheda":            { scientificName: "Terminalia bellirica",           commonNames: ["Beleric Myrobalan", "Bahera", "Vibhitaka", "Tani", "Bibhitaki"] },
    "Sitaphal Leaf":     { scientificName: "Annona squamosa",                commonNames: ["Sugar Apple Leaf", "Custard Apple Leaf", "Sitaphal", "Sharifa", "Seethapazham"] },
    "Triphala Guggul":   { scientificName: "Commiphora wightii (+ Triphala fruits)", commonNames: ["Triphala Guggulu", "Guggul with Three Fruits", "Trifala Guggul"] },
    "Patala":            { scientificName: "Stereospermum chelonoides",      commonNames: ["Trumpet Flower", "Padal", "Patala", "Pathiri"] },
    "Karpura Valli":     { scientificName: "Plectranthus amboinicus",        commonNames: ["Indian Borage", "Country Borage", "Karpura Valli", "Ajwain Leaves", "Mexican Mint"] },
    "Punarnava Root":    { scientificName: "Boerhavia diffusa",              commonNames: ["Spreading Hogweed", "Red Spiderling", "Thazhuthama", "Punarnava"] },
    "Drumstick Leaf":    { scientificName: "Moringa oleifera",               commonNames: ["Moringa Leaf", "Murungai Keerai", "Sahjan Patta", "Drumstick Tree Leaf"] },
    "Brahmi Leaves":     { scientificName: "Bacopa monnieri",                commonNames: ["Water Hyssop Leaf", "Jalabrahmi Leaf", "Brahmi Fresh Leaves"] },
    "Curry Leaf Tree":   { scientificName: "Murraya koenigii",               commonNames: ["Sweet Neem Tree", "Karivepaku", "Kadi Patta Tree", "Meetha Neem Plant"] },
    "Pudina":            { scientificName: "Mentha spicata",                 commonNames: ["Mint", "Spearmint", "Peppermint", "Podina", "Fudhina"] },
    "Dhania":            { scientificName: "Coriandrum sativum",             commonNames: ["Coriander Leaf", "Cilantro", "Malli", "Kothamalli", "Chinese Parsley"] },
    "Methi Leaf":        { scientificName: "Trigonella foenum-graecum",      commonNames: ["Fenugreek Leaf", "Vendhaya Keerai", "Kasuri Methi", "Methi Saag"] },
    "Kadamba":           { scientificName: "Neolamarckia cadamba",           commonNames: ["Kadamba Tree", "Burflower Tree", "Kadambu", "Kalam"] },

    // ── Additional Indian Plants ──────────────────────────────────────────────
    "Jackfruit Leaf":    { scientificName: "Artocarpus heterophyllus",        commonNames: ["Kathal Patta", "Panasa Patra", "Palakkai Ilai", "Jack Tree Leaf"] },
    "Teak":              { scientificName: "Tectona grandis",                 commonNames: ["Sagwan", "Sagun", "Tekku", "Teka", "Indian Oak"] },
    "Silk Cotton Tree":  { scientificName: "Bombax ceiba",                    commonNames: ["Semal", "Shimul", "Red Silk Cotton", "Kapok Tree", "Mullilavu"] },
    "Indian Laburnum":   { scientificName: "Cassia fistula",                  commonNames: ["Amaltas", "Golden Shower Tree", "Kondrai", "Rajataru", "Pudding Pipe Tree"] },
    "Jamun":             { scientificName: "Syzygium cumini",                 commonNames: ["Java Plum", "Black Plum", "Naaval Pazham", "Jambul", "Malabar Plum"] },
    "Kathal":            { scientificName: "Artocarpus heterophyllus",        commonNames: ["Jackfruit", "Jack Tree Fruit", "Panasa", "Halasina Hannu"] },
    "Agathi":            { scientificName: "Sesbania grandiflora",            commonNames: ["Agati", "August Tree", "Vegetable Hummingbird", "Agathi Keerai", "West Indian Pea"] },
    "Parijat":           { scientificName: "Nyctanthes arbor-tristis",        commonNames: ["Night Jasmine", "Har Singar", "Parijatak", "Coral Jasmine", "Shiuli"] },
    "Bhui Amla":         { scientificName: "Phyllanthus niruri",              commonNames: ["Stonebreaker", "Bhumyamalaki", "Keezhanelli", "Chanca Piedra", "Phyllanthus"] },
    "Jatamansi":         { scientificName: "Nardostachys jatamansi",          commonNames: ["Spikenard", "Nard", "Jatamansi Root", "Musk Root", "Nalada"] },
    "Chirata":           { scientificName: "Swertia chirayita",               commonNames: ["Chiretta", "Indian Gentian", "Chiraita", "Kirata Tikta", "Brown Chirata"] },

    // ── Additional TCM Plants ──────────────────────────────────────────────────
    "Goji Berry":        { scientificName: "Lycium barbarum",                 commonNames: ["Wolfberry", "Gou Qi Zi", "Chinese Wolfberry", "Tibetan Goji", "Matrimony Vine"] },
    "Chinese Yam":       { scientificName: "Dioscorea polystachya",           commonNames: ["Shan Yao", "Nagaimo", "Wild Yam (Chinese)", "Huai Shan", "Cinnamon Vine"] },
    "Angelica Dahurica": { scientificName: "Angelica dahurica",               commonNames: ["Bai Zhi", "Dahurian Angelica", "Chinese Angelica Root", "White Angelica"] },
    "White Peony":       { scientificName: "Paeonia lactiflora",              commonNames: ["Bai Shao", "White Peony Root", "Chinese Peony", "Paeonia Root"] },

    // ── Additional Worldwide Medicinal Plants ─────────────────────────────────
    "Witch Hazel":       { scientificName: "Hamamelis virginiana",            commonNames: ["American Witch Hazel", "Winterbloom", "Snapping Hazel", "Spotted Alder"] },
    "Slippery Elm":      { scientificName: "Ulmus rubra",                     commonNames: ["Red Elm", "Indian Elm", "Moose Elm", "Soft Elm", "Gray Elm"] },
    "Mullein":           { scientificName: "Verbascum thapsus",               commonNames: ["Great Mullein", "Aaron's Rod", "Common Mullein", "Velvet Dock", "Flannel Leaf"] },
    "Comfrey":           { scientificName: "Symphytum officinale",            commonNames: ["Knitbone", "Boneset", "Consound", "Bruisewort", "Beinwell"] },
    "Plantain Herb":     { scientificName: "Plantago major",                  commonNames: ["Greater Plantain", "Broadleaf Plantain", "Waybread", "Snakeweed", "Englishman's Foot"] },
    "Black Cohosh":      { scientificName: "Actaea racemosa",                 commonNames: ["Black Snakeroot", "Bugbane", "Rattleroot", "Cimicifuga", "Squawroot"] },
    "Goldenseal":        { scientificName: "Hydrastis canadensis",            commonNames: ["Yellow Root", "Ground Raspberry", "Eye Root", "Indian Dye", "Yellow Puccoon"] },
    "Oregon Grape":      { scientificName: "Mahonia aquifolium",              commonNames: ["Holly-leaved Barberry", "Mountain Grape", "Oregon Holly Grape", "Mahonia"] },
    "Barberry":          { scientificName: "Berberis vulgaris",               commonNames: ["European Barberry", "Common Barberry", "Zereshk", "Daruhaldi", "Katkatai"] },
    "Indian Cork Tree":  { scientificName: "Millingtonia hortensis",          commonNames: ["Tree Jasmine", "Akash Neem", "Indian Cork", "Cork Tree", "Venn Margosa"] },
    "Bhringraj Oil":     { scientificName: "Eclipta prostrata",               commonNames: ["False Daisy Oil", "Kehraj Tel", "Bhringraj Hair Oil", "Trailing Eclipta Oil"] },
    "Neem Leaf":         { scientificName: "Azadirachta indica",              commonNames: ["Neem Tree Leaf", "Nimba Patra", "Veppilai", "Indian Lilac Leaf", "Margosa Leaf"] },
    "Gotu Kola":         { scientificName: "Centella asiatica",               commonNames: ["Mandukaparni", "Brahma Manduki", "Asiatic Pennywort", "Tiger Grass", "Gotu Kola"] },
    "Kutki Root":        { scientificName: "Picrorhiza kurroa",               commonNames: ["Kutki", "Katuki", "Indian Hellebore Root", "Kadu", "Kurroa Root"] },
    "Ashwagandha Root":  { scientificName: "Withania somnifera",              commonNames: ["Indian Ginseng Root", "Winter Cherry Root", "Asgandh Root", "Withania Root"] }
};
