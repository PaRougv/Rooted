import React, { useState } from "react";
import {
  Wind, Utensils, Zap, Bandage, Brain, Stethoscope,
  Search, X, ChevronUp, ChevronDown, AlertTriangle,
  FlaskConical,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import BackButton from "./BackButton.jsx";
import "./RuralFirstAid.css";

// ── Data ──────────────────────────────────────────────────────────────────────
const AILMENTS = [
  // ── RESPIRATORY ──
  {
    id: "fever",
    name: "Fever",
    icon: "🌡️",
    category: "General",
    severity: "moderate",
    plants: ["Tulsi", "Ginger", "Neem"],
    system: "Ayurveda",
    activeCompounds: "Eugenol (Tulsi), Gingerols (Ginger), Nimbin (Neem)",
    preparation: "Boil 8–10 fresh Tulsi leaves + 1 inch grated ginger + 5 Neem leaves in 2 cups water for 12 min. Strain, add 1 tsp raw honey, drink warm. Repeat 2–3 times daily.",
    remedy: "Tulsi-Ginger-Neem decoction reduces fever by promoting perspiration (diaphoretic effect) and inhibiting fever-causing prostaglandins. Tulsi's eugenol acts as an antipyretic; Neem has antiviral properties for fever caused by infections.",
    dos: [
      "Rest in a cool, well-ventilated room",
      "Apply a cool damp cloth to forehead and armpits",
      "Drink 2–3 litres of fluids (ORS, coconut water, soups)",
      "Wear light, breathable cotton clothing",
      "Monitor temperature every 2–3 hours",
    ],
    donts: [
      "Do not cover with heavy blankets — it traps heat",
      "Avoid self-medicating with antibiotics without diagnosis",
      "Do not withhold fluids in children with fever",
      "Avoid vigorous activity",
    ],
    seeDoctor: "Fever above 39.5°C (103°F), fever persisting beyond 3 days, febrile seizures, rash with fever, stiff neck, extreme lethargy, or infant under 3 months with any fever.",
  },
  {
    id: "cold",
    name: "Common Cold & Flu",
    icon: "🤧",
    category: "Respiratory",
    severity: "mild",
    plants: ["Tulsi", "Ginger", "Peppermint", "Garlic"],
    system: "Ayurveda / Traditional",
    activeCompounds: "Rosmarinic acid (Tulsi), Menthol (Peppermint), Allicin (Garlic), Gingerols (Ginger)",
    preparation: "Tulsi-Ginger-Pepper tea: boil 6 Tulsi leaves + 1 inch ginger + 3 black pepper corns + 1 crushed garlic clove in 2 cups water for 12 min. Strain, add honey and squeeze of lemon. Drink hot, 3 times a day.",
    remedy: "The combination targets multiple cold symptoms — Tulsi's rosmarinic acid is antiviral, Garlic's allicin is strongly antimicrobial, Ginger's gingerols reduce inflammation, and Peppermint's menthol decongests airways. For steam: add Peppermint leaves or 3 drops peppermint oil to hot water and inhale.",
    dos: [
      "Gargle warm salt water (½ tsp salt in warm water) 3× daily for throat",
      "Drink warm fluids every 1–2 hours",
      "Use steam inhalation with peppermint 2–3 times daily",
      "Get 8–9 hours of sleep",
      "Eat light — soups, broths, khichdi",
    ],
    donts: [
      "Avoid cold drinks, ice cream and refrigerated foods",
      "Do not suppress cough with OTC drugs — it's a clearing mechanism",
      "Avoid dairy during active mucus production",
      "Do not share utensils",
    ],
    seeDoctor: "High fever (>39°C), severe sore throat with white patches, shortness of breath, ear pain, symptoms worsening after day 7, or flu in elderly/immunocompromised persons.",
  },
  {
    id: "cough",
    name: "Cough & Sore Throat",
    icon: "😮‍💨",
    category: "Respiratory",
    severity: "mild",
    plants: ["Tulsi", "Ginger", "Basil", "Turmeric"],
    system: "Ayurveda",
    activeCompounds: "Eugenol (Tulsi/Basil), Curcumin (Turmeric), Gingerols (Ginger)",
    preparation: "Honey-Ginger syrup: mix 1 tbsp raw honey + ½ tsp fresh ginger juice + 4 crushed Tulsi leaves + pinch of turmeric. Take 1 tsp every 4–6 hours. Sore throat gargle: warm water + ¼ tsp turmeric + ¼ tsp salt.",
    remedy: "Honey coats and soothes the throat while providing antimicrobial action. Ginger reduces throat inflammation. Turmeric's curcumin fights bacterial throat infections. Tulsi is expectorant, helping clear mucus from airways. Basil with black pepper tea is particularly effective for productive coughs.",
    dos: [
      "Stay warm and avoid sudden temperature changes",
      "Sip warm ginger-tulsi tea throughout the day",
      "Use honey-turmeric milk at bedtime",
      "Rest your voice if throat is very sore",
      "Humidify your room with steam",
    ],
    donts: [
      "Avoid cold drinks, sweets and fried foods — worsen mucus",
      "Do not shout or strain your voice",
      "Avoid smoking and secondhand smoke",
      "Do not give honey to children under 1 year",
    ],
    seeDoctor: "Coughing up blood, severe difficulty breathing, high fever with productive cough (possible pneumonia), cough lasting more than 3 weeks, or sudden loss of voice.",
  },
  {
    id: "congestion",
    name: "Nasal Congestion",
    icon: "👃",
    category: "Respiratory",
    severity: "mild",
    plants: ["Eucalyptus", "Peppermint", "Tulsi"],
    system: "Naturopathy / Ayurveda",
    activeCompounds: "1,8-Cineole / Eucalyptol (Eucalyptus), Menthol (Peppermint), Camphor (Tulsi)",
    preparation: "Steam inhalation: bring 1L water to boil, remove from heat, add 3–4 drops eucalyptus oil (or handful of crushed peppermint leaves). Cover head with towel and inhale for 8–10 minutes. Do 2–3 times daily. Jal Neti (saline nasal wash) also highly effective.",
    remedy: "Eucalyptol is the gold-standard natural decongestant — it reduces mucus production and opens nasal passages. Menthol creates a cooling sensation that relieves congestion. Both are clinically studied. Steam itself moistens and loosens dried mucus. Tulsi's camphor adds mild antibacterial action.",
    dos: [
      "Sleep with head elevated on 2 pillows",
      "Drink warm fluids — thins mucus secretions",
      "Use a saline (salt water) nasal rinse",
      "Keep room humidified",
      "Apply diluted peppermint oil under nostrils externally",
    ],
    donts: [
      "NEVER ingest eucalyptus oil — it is highly toxic internally",
      "Do not use eucalyptus steam for children under 2 years",
      "Avoid dry, air-conditioned environments",
      "Do not blow nose forcefully — damages capillaries",
    ],
    seeDoctor: "Green/yellow discharge lasting more than 10 days, facial pain/pressure (possible sinusitis), fever with nasal symptoms, loss of smell, or blood in nasal discharge.",
  },

  // ── DIGESTIVE ──
  {
    id: "digestion",
    name: "Indigestion & Bloating",
    icon: "🫃",
    category: "Digestive",
    severity: "mild",
    plants: ["Ginger", "Peppermint", "Chamomile", "Basil", "Fennel"],
    system: "Ayurveda / Traditional European",
    activeCompounds: "Gingerols (Ginger), Menthol (Peppermint), Apigenin (Chamomile), Anethole (Fennel/Basil)",
    preparation: "Post-meal digestive tea: steep 1 tsp fennel seeds + 3 fresh Basil leaves + 1 slice ginger in hot water for 8 min. Strain and drink. For bloating: chew 1 tsp fennel seeds directly after meals. Chamomile tea before bed for cramping.",
    remedy: "Ginger stimulates gastric motility, moving food through the stomach faster. Peppermint relaxes the intestinal smooth muscle, relieving spasms. Chamomile's apigenin is antispasmodic and anti-inflammatory. Fennel and Basil reduce gas (carminative) by dispersing intestinal air bubbles.",
    dos: [
      "Eat slowly and chew every bite 20–30 times",
      "Take a short 10-minute walk after meals",
      "Drink warm water with meals, not ice cold",
      "Eat smaller, more frequent meals",
      "Take 1 tsp of ginger juice with honey before meals",
    ],
    donts: [
      "Avoid carbonated drinks — increase gas",
      "Do not lie down immediately after eating",
      "Avoid fried, spicy, processed foods",
      "Do not skip meals — worsens acidity",
      "Avoid chewing gum — increases swallowed air",
    ],
    seeDoctor: "Severe or sharp abdominal pain, blood in stool, sudden unintended weight loss, persistent vomiting, or symptoms lasting more than 2 weeks.",
  },
  {
    id: "acidity",
    name: "Acidity & Heartburn",
    icon: "🔥",
    category: "Digestive",
    severity: "mild",
    plants: ["Aloe Vera", "Ginger", "Chamomile", "Basil"],
    system: "Ayurveda",
    activeCompounds: "Polysaccharides/Aloin (Aloe), Gingerols (Ginger), Apigenin (Chamomile)",
    preparation: "Drink 30ml fresh Aloe Vera juice (inner gel, no aloin/outer leaf) diluted in water, 20 min before meals. Chamomile tea after meals. For immediate relief: mix ½ tsp baking soda in a glass of warm water (occasional use only).",
    remedy: "Aloe Vera gel forms a soothing coating on the oesophagus and stomach lining, reducing burning sensation. It also has alkaline properties that neutralise excess acid. Chamomile reduces stomach inflammation. Ginger in small amounts promotes gastric emptying, reducing reflux risk.",
    dos: [
      "Eat dinner at least 3 hours before lying down",
      "Elevate the head of your bed by 15–20cm",
      "Maintain healthy weight — reduces abdominal pressure",
      "Wear loose-fitting clothes",
      "Chew 5–6 basil leaves on an empty stomach",
    ],
    donts: [
      "Avoid coffee, alcohol, tomatoes, citrus, chocolate and spicy food",
      "Do not smoke — weakens the lower oesophageal sphincter",
      "Do not take Aloe Vera with laxatives — interactions possible",
      "Avoid mint in large doses if reflux is severe — can relax LES",
    ],
    seeDoctor: "Heartburn more than 2 times per week, difficulty swallowing, vomiting blood or dark material, unexplained weight loss, or chest pain (rule out cardiac causes immediately).",
  },
  {
    id: "nausea",
    name: "Nausea & Vomiting",
    icon: "🤢",
    category: "Digestive",
    severity: "mild",
    plants: ["Ginger", "Peppermint", "Chamomile"],
    system: "Ayurveda / Evidence-Based",
    activeCompounds: "6-Gingerol, 6-Shogaol (Ginger), Menthol (Peppermint)",
    preparation: "Ginger tea: boil 1 inch fresh ginger + 1 tsp lemon juice in 1.5 cups water for 8 min. Strain and sip slowly in small sips. Alternatively, chew a thin slice of raw ginger with a pinch of salt. For motion sickness: consume ginger 30 min before travel.",
    remedy: "Ginger is clinically proven for nausea across multiple studies — it works by blocking 5-HT3 serotonin receptors in the gut and slowing gastric spasms. Peppermint oil aroma alone reduces nausea via olfactory-vagal pathways. Chamomile calms the stomach lining and reduces accompanying anxiety.",
    dos: [
      "Sip fluids slowly — a few sips every 5–10 minutes",
      "Eat bland foods: crackers, toast, banana, rice when able",
      "Rest in a semi-upright position",
      "Breathe fresh cool air",
      "Use acupressure point P6 (inner wrist, 3 fingers up)",
    ],
    donts: [
      "Do not eat large meals when nauseous",
      "Avoid spicy, fatty, or strong-smelling foods",
      "Do not lie flat — worsens nausea and reflux",
      "Avoid screens and reading when nauseated",
    ],
    seeDoctor: "Vomiting blood or dark 'coffee-ground' material, signs of dehydration (dry mouth, no urination for 6+ hours, sunken eyes), severe abdominal pain, high fever with vomiting, or projectile vomiting in infants.",
  },
  {
    id: "diarrhea",
    name: "Diarrhoea & Loose Motions",
    icon: "🚽",
    category: "Digestive",
    severity: "moderate",
    plants: ["Ginger", "Chamomile", "Basil", "Garlic"],
    system: "Ayurveda / Traditional",
    activeCompounds: "Gingerols (Ginger), Allicin (Garlic), Apigenin (Chamomile)",
    preparation: "ORS first — this is critical. Then: mix 1 tsp ginger powder + ½ tsp cumin powder + pinch of salt in 1 glass warm water. Alternatively, boil 1 inch ginger + 2 crushed garlic cloves in water for 10 min. For mild cases: eat ripe banana with a pinch of nutmeg.",
    remedy: "Ginger's anti-spasmodic action reduces intestinal cramps. Garlic's allicin has strong antibacterial effect against common diarrhoea pathogens (E. coli, Salmonella). Chamomile reduces intestinal inflammation. Banana provides potassium lost through loose motions and pectin absorbs excess fluid. BRAT diet (Banana, Rice, Applesauce, Toast) is the gold standard alongside ORS.",
    dos: [
      "ORS (Oral Rehydration Solution) is the most important treatment — drink after every loose motion",
      "BRAT diet: Banana, Rice, Applesauce, Toast",
      "Eat small amounts frequently to avoid overloading gut",
      "Wash hands thoroughly and maintain strict hygiene",
      "Boil drinking water if source is suspect",
    ],
    donts: [
      "Do not stop fluids even if vomiting — keep sipping",
      "Avoid dairy, fatty foods, fruit juices, caffeine",
      "Do not use anti-diarrhoeal medications without medical advice in children",
      "Do not ignore signs of dehydration",
    ],
    seeDoctor: "Blood or mucus in stool, fever above 38.5°C with diarrhoea, signs of dehydration especially in children or elderly, diarrhoea lasting more than 2 days in adults or 24 hours in infants.",
  },
  {
    id: "constipation",
    name: "Constipation & Hard Stools",
    icon: "🚶",
    category: "Digestive",
    severity: "mild",
    plants: ["Triphala", "Fennel", "Aloe Vera", "Ginger"],
    system: "Ayurveda",
    activeCompounds: "Tannins and gallic acid (Triphala), Anethole (Fennel), Polysaccharides (Aloe Vera), Gingerols (Ginger)",
    preparation: "At bedtime, mix 1 tsp Triphala powder in warm water and drink slowly. For daytime support, steep 1 tsp fennel seeds with 2 thin slices of ginger in hot water for 8 minutes. If dryness is prominent, use 20–30 ml inner-gel Aloe Vera juice diluted in water only occasionally.",
    remedy: "Triphala is a classic Ayurvedic bowel regulator that gently improves motility and stool passage without the harsh dependence pattern seen with stimulant laxatives. Fennel reduces gas and cramping, Ginger stimulates digestive movement, and Aloe's soothing inner gel can soften stool when used cautiously. Hydration and fibre remain the real foundation of treatment.",
    dos: [
      "Drink more water through the day — stool hardens when the body is dehydrated",
      "Include fibre: fruits, vegetables, soaked raisins, oats and flaxseeds",
      "Walk for 15–20 minutes after meals to stimulate bowel movement",
      "Try using the toilet at the same time each morning after warm water",
      "Use Triphala in small doses first and adjust slowly",
    ],
    donts: [
      "Do not strain hard for long periods — it can worsen piles and fissures",
      "Avoid repeated use of strong laxatives unless prescribed",
      "Do not ignore constipation lasting many days with pain or vomiting",
      "Avoid very low-fibre processed foods as your main diet",
    ],
    seeDoctor: "See a doctor urgently for severe abdominal swelling, vomiting, blood in stool, sudden constipation with weight loss, or no bowel movement for several days despite fluids and home measures.",
  },

  // ── PAIN ──
  {
    id: "headache",
    name: "Headache & Migraine",
    icon: "🤕",
    category: "Pain",
    severity: "mild",
    plants: ["Peppermint", "Lavender", "Ginger", "Tulsi"],
    system: "Naturopathy / Ayurveda",
    activeCompounds: "Menthol (Peppermint), Linalool (Lavender), 6-Gingerol (Ginger)",
    preparation: "Tension headache: dilute 2 drops peppermint oil in 1 tsp carrier oil (coconut/sesame), apply to temples, forehead and back of neck with circular massage. Migraine: lavender oil inhalation — place 2 drops on palm, cup over nose, breathe deeply 5–10 times. Ginger tea also reduces prostaglandin-mediated migraine pain.",
    remedy: "Peppermint's menthol has been shown in clinical trials to be as effective as 1000mg paracetamol for tension headaches when applied topically — it activates cold-sensitive receptors and inhibits serotonin receptors. Lavender inhalation is validated in trials for migraine attacks. Ginger inhibits thromboxane A2 synthesis which triggers migraines.",
    dos: [
      "Rest in a dark, quiet room",
      "Apply a cold or warm pack to neck/forehead",
      "Stay well hydrated — dehydration is a leading trigger",
      "Practise progressive muscle relaxation",
      "Keep a headache diary to identify triggers",
    ],
    donts: [
      "Avoid bright screens, fluorescent lighting, and loud noise",
      "Do not skip meals — hypoglycaemia is a major trigger",
      "Avoid red wine, aged cheese, processed meats (tyramine triggers)",
      "Do not overuse pain medication — causes rebound headaches",
    ],
    seeDoctor: "Sudden, severe 'thunderclap' headache, headache with fever and stiff neck (possible meningitis), after head injury, with vision changes or confusion, or progressively worsening headaches.",
  },
  {
    id: "inflammation",
    name: "Joint Pain & Inflammation",
    icon: "🦴",
    category: "Pain",
    severity: "moderate",
    plants: ["Turmeric", "Ginger", "Ashwagandha", "Eucalyptus"],
    system: "Ayurveda",
    activeCompounds: "Curcumin (Turmeric), Gingerols/Shogaols (Ginger), Withanolides (Ashwagandha)",
    preparation: "Golden Milk: 1 tsp turmeric powder + ¼ tsp black pepper (enhances curcumin absorption by 2000%) + 1 tsp coconut oil in 250ml warm milk. Drink nightly. Topical: mix turmeric + ginger powder in warm sesame oil, massage into joint for 15 min, cover with warm cloth.",
    remedy: "Curcumin in turmeric is as effective as ibuprofen for osteoarthritis knee pain in clinical studies, without GI side effects. Black pepper's piperine dramatically increases curcumin bioavailability. Ginger's shogaols inhibit COX-2 enzymes (same pathway as NSAIDs). Ashwagandha's withanolides reduce inflammatory markers (CRP, IL-6) and support muscle recovery.",
    dos: [
      "Gentle exercises: yoga, swimming, walking — keeps joints lubricated",
      "Apply warm compress for chronic pain, cold for acute swelling",
      "Maintain healthy weight to reduce joint load",
      "Include omega-3 foods: flaxseeds, walnuts, fish",
      "Take turmeric with black pepper — essential for absorption",
    ],
    donts: [
      "Do not remain sedentary — worsens stiffness",
      "Avoid applying turmeric paste to broken or inflamed skin",
      "Do not use Ashwagandha if pregnant or on thyroid medication",
      "Avoid repetitive high-impact movements on affected joints",
    ],
    seeDoctor: "Sudden severe pain after injury, joint that is hot, red and very swollen (rule out septic arthritis/gout), inability to bear weight, or pain not improving after 2 weeks of home care.",
  },
  {
    id: "muscle",
    name: "Muscle Cramps & Spasms",
    icon: "💪",
    category: "Pain",
    severity: "mild",
    plants: ["Ginger", "Lavender", "Turmeric"],
    system: "Traditional",
    activeCompounds: "Gingerols (Ginger), Linalool/Linalyl acetate (Lavender), Curcumin (Turmeric)",
    preparation: "Massage oil: mix 3 drops lavender oil + 2 drops peppermint oil in 1 tbsp warm coconut oil. Massage into cramping muscle with firm, long strokes towards the heart. For post-exercise soreness: apply warm ginger-turmeric paste and cover with warm cloth for 20 min.",
    remedy: "Lavender's linalool relaxes smooth and skeletal muscle by inhibiting calcium ion channels. Ginger reduces delayed onset muscle soreness (DOMS) by 25% in studies. Topical magnesium (Epsom salt soak) is the most direct remedy for cramps — deficiency is the most common cause. Turmeric reduces exercise-induced oxidative damage.",
    dos: [
      "Stretch and gently elongate the cramping muscle",
      "Apply warm compress immediately",
      "Massage firmly with thumb from the centre of cramp outward",
      "Increase magnesium-rich foods: spinach, pumpkin seeds, dark chocolate",
      "Hydrate well before and during exercise",
    ],
    donts: [
      "Do not apply ice to acute muscle cramp — worsens spasm",
      "Avoid overexertion when already fatigued",
      "Do not ignore recurring cramps — may indicate electrolyte imbalance",
    ],
    seeDoctor: "Severe cramps with swelling and warmth (possible DVT), cramps in the chest or jaw, or recurring cramps in the same muscle despite hydration and stretching.",
  },

  // ── SKIN ──
  {
    id: "cuts",
    name: "Minor Cuts & Wounds",
    icon: "🩹",
    category: "Skin",
    severity: "mild",
    plants: ["Aloe Vera", "Turmeric", "Neem"],
    system: "Ayurveda / Traditional",
    activeCompounds: "Acemannan (Aloe), Curcumin (Turmeric), Nimbin/Gedunin (Neem)",
    preparation: "Clean wound under running water for 3–5 min. Cut open an Aloe Vera leaf and apply fresh inner gel directly to the wound. Cover with clean cloth. For antiseptic paste: mix ½ tsp turmeric with a few drops of water or coconut oil, apply to clean wound, cover. Reapply twice daily.",
    remedy: "Aloe Vera's acemannan accelerates wound healing by stimulating fibroblast production and collagen synthesis — clinically proven. Turmeric's curcumin is strongly antibacterial and anti-inflammatory, preventing wound infection. Neem's nimbin and gedunin are proven antimicrobials active against Staphylococcus and E. coli.",
    dos: [
      "Always clean the wound first — this is the most important step",
      "Apply pressure with clean cloth for 5–10 min to stop bleeding",
      "Keep wound covered and change dressing daily",
      "Watch for signs of infection: redness spreading, warmth, pus, fever",
      "Ensure tetanus vaccination is up to date",
    ],
    donts: [
      "Never apply Neem oil to deep wounds — too concentrated",
      "Do not blow on wounds — introduces oral bacteria",
      "Do not remove a dressing that is stuck — soak with saline first",
      "Avoid dirt, soil, and animal contact with open wounds",
    ],
    seeDoctor: "Wounds that won't stop bleeding after 10 min of firm pressure, deep or gaping wounds needing stitches, animal or human bites, wounds over joints, or any signs of spreading infection.",
  },
  {
    id: "skin",
    name: "Skin Irritation, Rashes & Burns",
    icon: "🔆",
    category: "Skin",
    severity: "mild",
    plants: ["Aloe Vera", "Chamomile", "Neem", "Turmeric"],
    system: "Ayurveda / Traditional European",
    activeCompounds: "Acemannan/Aloesin (Aloe), Apigenin/Bisabolol (Chamomile), Nimbin (Neem), Curcumin (Turmeric)",
    preparation: "Minor burns/sunburn: apply refrigerated Aloe Vera gel generously, let air dry, reapply every 2–3 hours. Itchy rash: cooled Chamomile tea as compress (soak cloth, apply for 15 min) or Neem leaf paste (grind leaves with water, apply, leave 20 min, rinse). For fungal skin: apply diluted Neem oil (5% in coconut oil).",
    remedy: "Aloe's cooling, anti-inflammatory gel is backed by strong evidence for burn healing — reduces healing time and pain. Chamomile's bisabolol penetrates skin deeply and is anti-inflammatory. Neem is strongly antifungal and antibacterial — effective for eczema, psoriasis and fungal conditions. Turmeric face masks reduce acne and hyperpigmentation.",
    dos: [
      "Cool minor burns under running cold water for 10–15 minutes immediately",
      "Keep skin moisturised — dry skin worsens irritation",
      "Identify and remove the irritant (plant, detergent, metal)",
      "Wear loose, cotton clothing over rashes",
      "Aloe gel can be stored in refrigerator for extra cooling effect",
    ],
    donts: [
      "Never apply butter, toothpaste, oil or ice to burns",
      "Do not break blisters — risk of infection",
      "Do not apply Neem oil undiluted to sensitive skin — always dilute",
      "Avoid scratching — worsens inflammation and risks infection",
    ],
    seeDoctor: "Burns larger than your palm, burns on face/hands/genitals/joints, white or charred burns, rash spreading rapidly, rash with fever, or suspected allergic reaction.",
  },
  {
    id: "insect",
    name: "Insect Bites & Stings",
    icon: "🐝",
    category: "Skin",
    severity: "mild",
    plants: ["Aloe Vera", "Basil", "Lavender", "Neem"],
    system: "Traditional",
    activeCompounds: "Acemannan (Aloe), Eugenol (Basil), Linalool (Lavender)",
    preparation: "Remove stinger by scraping sideways (not squeezing). Apply fresh Aloe Vera gel immediately. Crush 6–8 Basil leaves into paste, apply to bite and cover. 1 drop diluted Lavender oil (in carrier oil) on the bite reduces itching quickly. For mosquito repellent: Neem oil (3% dilution) applied to skin.",
    remedy: "Aloe's anti-inflammatory properties reduce swelling and itching rapidly. Basil's eugenol is analgesic and anti-inflammatory. Lavender oil's linalool reduces histamine response. Neem oil is a proven natural insect repellent due to azadirachtin content — disrupts insect hormone systems.",
    dos: [
      "Scrape stinger sideways with a card — squeezing releases more venom",
      "Apply cold pack for 10 min to reduce swelling",
      "Elevate the affected limb",
      "Keep the area clean",
      "Take antihistamine if itching is severe",
    ],
    donts: [
      "Do not scratch — introduces infection and spreads histamine",
      "Do not squeeze a bee sting",
      "Avoid applying calamine and then scratching through it",
    ],
    seeDoctor: "EMERGENCY: difficulty breathing, swelling of face/throat/tongue, rapid heartbeat, dizziness, or hives spreading across body — these are signs of anaphylaxis. Call emergency services immediately.",
  },

  // ── MENTAL / SLEEP ──
  {
    id: "stress",
    name: "Anxiety & Stress",
    icon: "🧘",
    category: "Mental Health",
    severity: "mild",
    plants: ["Chamomile", "Lavender", "Ashwagandha", "Tulsi"],
    system: "Ayurveda / Traditional European",
    activeCompounds: "Apigenin (Chamomile), Linalool (Lavender), Withanolides (Ashwagandha), Ocimumosides (Tulsi)",
    preparation: "Evening wind-down: Chamomile tea — steep 1 tsp dried flowers in hot water 7 min, drink 30 min before bed. Lavender diffuser: 4–5 drops in a diffuser 30 min before sleep. Ashwagandha (adaptogen): 300mg root extract with warm milk before bed, daily for 4–8 weeks for long-term cortisol regulation.",
    remedy: "Chamomile's apigenin binds to GABA-A receptors in the brain — same pathway as anti-anxiety medications but mildly. Lavender has multiple RCTs showing reduced anxiety, cortisol levels and improved sleep. Ashwagandha is one of the most studied adaptogens: reduces cortisol by ~28% and anxiety scores significantly in 8-week trials. Tulsi's ocimumosides are adaptogenic, reducing corticosterone levels.",
    dos: [
      "4-7-8 breathing: inhale 4 counts, hold 7, exhale 8",
      "Daily 20-min walk in nature — proven cortisol reducer",
      "Maintain fixed sleep and wake times",
      "Journalling — 10 min of writing reduces rumination",
      "Limit news and screen time before bed",
    ],
    donts: [
      "Avoid caffeine after 2pm — half-life is 6–8 hours",
      "Do not use Ashwagandha if pregnant or on thyroid/immunosuppressant medication",
      "Avoid alcohol — short-term relief masks worsening anxiety",
      "Do not isolate — connection reduces cortisol",
    ],
    seeDoctor: "Anxiety preventing daily functioning, panic attacks (heart pounding, shortness of breath, fear of dying), persistent low mood for 2+ weeks, or any thoughts of self-harm.",
  },
  {
    id: "insomnia",
    name: "Insomnia & Poor Sleep",
    icon: "😴",
    category: "Mental Health",
    severity: "mild",
    plants: ["Chamomile", "Lavender", "Ashwagandha"],
    system: "Traditional European / Ayurveda",
    activeCompounds: "Apigenin (Chamomile), Linalool (Lavender), Triethylene glycol (Ashwagandha leaves)",
    preparation: "Sleep tea blend: 1 tsp chamomile + ½ tsp dried lavender flowers steeped in hot water for 8 min. Drink warm 30–45 min before bed. Warm Ashwagandha milk: 300mg ashwagandha powder + ½ tsp nutmeg + 1 tsp honey in warm milk. Lavender sachet under pillow.",
    remedy: "Chamomile's apigenin induces sleep by binding GABA-A receptors — it reduces sleep onset time. Lavender aromatherapy increases slow-wave (deep) sleep in studies. Ashwagandha leaf extract specifically (containing triethylene glycol) is clinically shown to improve both sleep onset and sleep quality. Nutmeg contains myristicin which has mild sedative properties.",
    dos: [
      "Maintain consistent sleep schedule — even weekends",
      "Make bedroom dark, cool (18–20°C) and quiet",
      "No screens 1 hour before bed — blue light blocks melatonin",
      "Warm bath or shower 90 min before bed — lowers core temperature",
      "Chamomile tea 30 min before bed consistently",
    ],
    donts: [
      "Avoid caffeine after noon",
      "Do not nap after 3pm or for more than 20 minutes",
      "Avoid alcohol — disrupts REM sleep in second half of night",
      "Do not do vigorous exercise within 2 hours of bedtime",
      "Avoid lying in bed awake for long periods — weakens sleep-bed association",
    ],
    seeDoctor: "Chronic insomnia (3+ nights a week for 3+ months), sleep apnoea symptoms (loud snoring, waking gasping), restless legs, or insomnia with depression/anxiety.",
  },

  // ── GENERAL ──
  {
    id: "toothache",
    name: "Toothache",
    icon: "🦷",
    category: "General",
    severity: "moderate",
    plants: ["Clove", "Garlic", "Peppermint"],
    system: "Traditional / Evidence-Based",
    activeCompounds: "Eugenol (Clove), Allicin (Garlic), Menthol (Peppermint)",
    preparation: "Immediate relief: place 1 whole clove against the painful tooth and bite gently — eugenol numbs the nerve. Or apply 1 drop clove oil diluted in coconut oil directly on the tooth and gum with a cotton bud. Garlic paste: crush 1 garlic clove, apply to tooth for 5 min — antibacterial. Salt water rinse 3× daily.",
    remedy: "Eugenol (clove oil) is actually used in professional dentistry as a topical anaesthetic — it's a true pain reliever with strong antibacterial action against oral pathogens including Streptococcus mutans. These are pain management measures only — they cannot fix the underlying cause (cavity, abscess, cracked tooth).",
    dos: [
      "Rinse with warm salt water every 2–3 hours",
      "Apply clove oil with a cotton bud — only to affected area",
      "Cold pack on cheek reduces swelling",
      "Keep head elevated — reduces blood pressure in the area",
      "See a dentist as soon as possible",
    ],
    donts: [
      "Do not apply clove oil directly to gum tissue in large amounts — can cause chemical burn",
      "Do not ignore toothache — it will not resolve without dental treatment",
      "Avoid very hot, cold, or sweet foods",
      "Do not use as a substitute for dental care",
    ],
    seeDoctor: "Swelling of the face or jaw, fever with toothache (possible abscess — dental emergency), difficulty opening mouth, difficulty swallowing or breathing. These are serious emergencies.",
  },
  {
    id: "urinary",
    name: "Urinary Tract Discomfort",
    icon: "💧",
    category: "General",
    severity: "moderate",
    plants: ["Tulsi", "Garlic", "Ginger"],
    system: "Ayurveda / Traditional",
    activeCompounds: "Oleanolic acid (Tulsi), Allicin (Garlic), Gingerols (Ginger)",
    preparation: "Increase fluid intake dramatically — aim 3+ litres water daily. Tulsi seed (Sabja) water: soak 1 tsp basil seeds in water overnight, drink in morning (diuretic, anti-inflammatory). Garlic tea: boil 3–4 garlic cloves in 2 cups water for 10 min, strain and drink.",
    remedy: "For UTI-like discomfort: hydration is the most important intervention — dilutes bacteria and flushes the tract. Tulsi has diuretic properties. Garlic's allicin has clinically proven activity against E. coli (the most common UTI pathogen). These SUPPORT recovery alongside medical treatment but are NOT a substitute for antibiotics in confirmed UTIs. Unsweetened cranberry helps acidify urine and prevent bacterial adhesion.",
    dos: [
      "Drink water every hour — flushing is the primary treatment",
      "Urinate after sexual activity to flush bacteria",
      "Wipe front to back",
      "Wear cotton underwear — reduces moisture",
      "Unsweetened cranberry juice or capsules daily as prevention",
    ],
    donts: [
      "Do not hold urine — bacteria multiply faster in stagnant urine",
      "Avoid caffeine, alcohol, and spicy food — irritate bladder",
      "Do not delay seeing a doctor if burning persists beyond 48 hours",
      "Avoid bubble baths and scented products in genital area",
    ],
    seeDoctor: "Blood in urine, pain in lower back or side (kidney involvement), fever and chills with urinary symptoms, symptoms in men or children, or no improvement after 48 hours.",
  },
  {
    id: "eyestrain",
    name: "Eye Strain & Irritation",
    icon: "👁️",
    category: "General",
    severity: "mild",
    plants: ["Chamomile", "Aloe Vera"],
    system: "Traditional",
    activeCompounds: "Apigenin/Bisabolol (Chamomile), Polysaccharides (Aloe Vera)",
    preparation: "Chamomile eye compress: brew strong chamomile tea, let cool completely, soak 2 cotton pads, place over closed eyelids for 15–20 minutes. Refrigerate for extra cooling effect. Aloe Vera: only use commercial, sterile aloe eye drops — never apply leaf gel directly to eyes.",
    remedy: "Chamomile's anti-inflammatory bisabolol and apigenin reduce eyelid swelling and conjunctival irritation. The cool compress itself reduces blood vessel dilation. Eye strain is primarily from ciliary muscle fatigue (focusing) — the 20-20-20 rule (every 20 min, look 20 feet away for 20 seconds) is the primary treatment.",
    dos: [
      "20-20-20 rule: every 20 minutes, look 20 feet away for 20 seconds",
      "Blink frequently when using screens",
      "Cool chamomile compress for 15–20 min to reduce irritation",
      "Ensure adequate lighting — neither too bright nor too dim",
      "Get regular eye examinations",
    ],
    donts: [
      "NEVER apply raw Aloe Vera gel directly to the eye",
      "NEVER use chamomile compress if you are allergic to ragweed (cross-reactivity)",
      "Do not rub eyes — worsens irritation and risks corneal abrasion",
      "Avoid prolonged screen use without breaks",
    ],
    seeDoctor: "Sudden vision changes, eye pain, eye injury, chemical splash in eye (flush immediately with water), persistent redness lasting more than 48 hours, or discharge from eye (possible infection).",
  },
];

const CATEGORIES = ["All", "Respiratory", "Digestive", "Pain", "Skin", "Mental Health", "General"];

const CATEGORY_ICONS = {
  Respiratory:     Wind,
  Digestive:       Utensils,
  Pain:            Zap,
  Skin:            Bandage,
  "Mental Health": Brain,
  General:         Stethoscope,
};

const SEVERITY_CONFIG = {
  mild:     { label: "Mild",     color: "#22c55e", bg: "rgba(34,197,94,0.1)"  },
  moderate: { label: "Moderate", color: "#f59e0b", bg: "rgba(245,158,11,0.1)" },
  severe:   { label: "Severe",   color: "#ef4444", bg: "rgba(239,68,68,0.1)"  },
};

const UNIQUE_PLANTS = [...new Set(AILMENTS.flatMap((ailment) => ailment.plants))];
const UNIQUE_CATEGORIES = [...new Set(AILMENTS.map((ailment) => ailment.category))];

const RuralFirstAid = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [expanded, setExpanded] = useState(null);
  const [activeTab, setActiveTab] = useState({});

  const filtered = AILMENTS.filter((a) => {
    const matchCat = category === "All" || a.category === category;
    const matchSearch =
      a.name.toLowerCase().includes(search.toLowerCase()) ||
      a.plants.some((p) => p.toLowerCase().includes(search.toLowerCase())) ||
      a.category.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const getTab = (id) => activeTab[id] || "remedy";
  const setTab = (id, tab) => setActiveTab((prev) => ({ ...prev, [id]: tab }));

  return (
    <div className="rfa-page">
      <BackButton to="/dashboard" label={t("nav.dashboard")} />

      {/* Hero */}
      <div className="rfa-hero">
        <div className="rfa-hero-bg" />
        <p className="rfa-kicker">{t("firstAid.kicker")}</p>
        <h1 className="rfa-title">{t("firstAid.title")}</h1>
        <p className="rfa-subtitle">
          {t("firstAid.subtitle", { count: AILMENTS.length })}
        </p>
        <div className="rfa-stats-row">
          <div className="rfa-stat"><span className="rfa-stat-num">{AILMENTS.length}</span><span className="rfa-stat-lbl">{t("firstAid.ailments")}</span></div>
          <div className="rfa-stat-div" />
          <div className="rfa-stat"><span className="rfa-stat-num">{UNIQUE_PLANTS.length}</span><span className="rfa-stat-lbl">{t("firstAid.plants")}</span></div>
          <div className="rfa-stat-div" />
          <div className="rfa-stat"><span className="rfa-stat-num">{UNIQUE_CATEGORIES.length}</span><span className="rfa-stat-lbl">{t("firstAid.categories")}</span></div>
        </div>
      </div>

      <div className="rfa-container">
        {/* Disclaimer */}
        <div className="rfa-disclaimer">
          <AlertTriangle size={16} strokeWidth={2} className="rfa-disclaimer-icon" />
          <span>{t("firstAid.disclaimer")}</span>
        </div>

        {/* Search + Category filter */}
        <div className="rfa-controls">
          <div className="rfa-search-wrap">
            <Search size={14} strokeWidth={2} className="rfa-search-icon" />
            <input
              className="rfa-search"
              type="text"
              placeholder={t("firstAid.searchPlaceholder")}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            {search && (
              <button className="rfa-search-clear" onClick={() => setSearch("")}><X size={11} strokeWidth={2.5} /></button>
            )}
          </div>
          <div className="rfa-cats">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                className={`rfa-cat-btn ${category === cat ? "rfa-cat-btn--active" : ""}`}
                onClick={() => setCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Result count */}
        <p className="rfa-result-count">
          {filtered.length} ailment{filtered.length !== 1 ? "s" : ""}
          {category !== "All" ? ` in ${category}` : ""}
          {search ? ` matching "${search}"` : ""}
        </p>

        {/* Cards */}
        <div className="rfa-list">
          {filtered.length === 0 ? (
            <div className="rfa-empty">
              <p>{t("firstAid.noMatches")}</p>
            </div>
          ) : (
            filtered.map((ailment) => {
              const isOpen = expanded === ailment.id;
              const sev = SEVERITY_CONFIG[ailment.severity];
              const tab = getTab(ailment.id);
              return (
                <div key={ailment.id} className={`rfa-card ${isOpen ? "rfa-card--open" : ""}`}>

                  {/* Severity stripe */}
                  <div className="rfa-card-stripe" style={{ background: sev.color }} />

                  {/* Header */}
                  <button
                    className="rfa-card-header"
                    onClick={() => setExpanded(isOpen ? null : ailment.id)}
                  >
                    {(() => { const CatIcon = CATEGORY_ICONS[ailment.category] || Stethoscope; return <CatIcon size={22} strokeWidth={1.75} className="rfa-icon" />; })()}
                    <div className="rfa-card-meta">
                      <div className="rfa-card-top-row">
                        <span className="rfa-card-name">{ailment.name}</span>
                        <span className="rfa-sev-badge" style={{ color: sev.color, background: sev.bg }}>
                          {sev.label}
                        </span>
                      </div>
                      <div className="rfa-card-bottom-row">
                        <span className="rfa-cat-tag">{ailment.category}</span>
                        <span className="rfa-system-tag">{ailment.system}</span>
                      </div>
                      <div className="rfa-plant-chips">
                        {ailment.plants.map((p) => (
                          <span key={p} className="rfa-chip">{p}</span>
                        ))}
                      </div>
                    </div>
                    <span className="rfa-chevron">{isOpen ? <ChevronUp size={14} strokeWidth={2} /> : <ChevronDown size={14} strokeWidth={2} />}</span>
                  </button>

                  {/* Body */}
                  {isOpen && (
                    <div className="rfa-body">

                      {/* Active compounds */}
                      <div className="rfa-compounds">
                        <span className="rfa-compounds-label"><FlaskConical size={12} strokeWidth={2} style={{display:'inline',verticalAlign:'middle',marginRight:4}} />{t("firstAid.activeCompounds")}:</span>
                        <span className="rfa-compounds-text">{ailment.activeCompounds}</span>
                      </div>

                      {/* Tabs */}
                      <div className="rfa-tabs">
                        {[
                          { key: "remedy",      label: t("firstAid.tabRemedy")       },
                          { key: "preparation", label: t("firstAid.tabPreparation")  },
                          { key: "dosdont",     label: t("firstAid.tabDosDonts") },
                          { key: "doctor",      label: t("firstAid.tabSeeDoctor") },
                        ].map((tb) => (
                          <button
                            key={tb.key}
                            className={`rfa-tab ${tab === tb.key ? "rfa-tab--active" : ""}`}
                            onClick={() => setTab(ailment.id, tb.key)}
                          >
                            {tb.label}
                          </button>
                        ))}
                      </div>

                      {/* Tab content */}
                      <div className="rfa-tab-body">
                        {tab === "remedy" && (
                          <div className="rfa-content rfa-content--remedy">
                            <p>{ailment.remedy}</p>
                          </div>
                        )}
                        {tab === "preparation" && (
                          <div className="rfa-content rfa-content--prep">
                            <p>{ailment.preparation}</p>
                          </div>
                        )}
                        {tab === "dosdont" && (
                          <div className="rfa-dosdont">
                            <div className="rfa-dos">
                              <h4>{t("firstAid.dos")}</h4>
                              <ul>
                                {ailment.dos.map((d, i) => <li key={i}>{d}</li>)}
                              </ul>
                            </div>
                            <div className="rfa-donts">
                              <h4>{t("firstAid.donts")}</h4>
                              <ul>
                                {ailment.donts.map((d, i) => <li key={i}>{d}</li>)}
                              </ul>
                            </div>
                          </div>
                        )}
                        {tab === "doctor" && (
                          <div className="rfa-content rfa-content--doctor">
                            <Stethoscope size={22} strokeWidth={1.75} className="rfa-doctor-icon" />
                            <p>{ailment.seeDoctor}</p>
                          </div>
                        )}
                      </div>

                      {/* CTA */}
                      <button className="rfa-cta" onClick={() => navigate("/camera")}>
                        {t("firstAid.identifyPlant")}
                      </button>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default RuralFirstAid;
