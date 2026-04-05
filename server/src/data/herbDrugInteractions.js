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
    "Kutki":             { scientificName: "Picrorhiza kurroa",              commonNames: ["Indian Hellebore", "Katuki", "Kadu", "Kurroa"] }
};
