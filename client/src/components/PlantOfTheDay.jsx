import React, { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Sparkles, ArrowRight } from "lucide-react";
import "./PlantOfTheDay.css";

const PLANTS = [
  {
    name: "Tulsi",
    scientificName: "Ocimum tenuiflorum",
    fact: "Tulsi is considered sacred in Hinduism and is found in almost every Indian household courtyard.",
    use: "Boosts immunity and relieves respiratory ailments like cough and cold.",
    tip: "Brew 5-6 fresh leaves in hot water for a soothing herbal tea.",
  },
  {
    name: "Ashwagandha",
    scientificName: "Withania somnifera",
    fact: "The name means 'smell of horse' — it's said to give you the strength of one.",
    use: "Adaptogen that helps reduce stress and anxiety.",
    tip: "Mix half a teaspoon of powder in warm milk before bedtime.",
  },
  {
    name: "Neem",
    scientificName: "Azadirachta indica",
    fact: "A single neem tree can produce up to 50 kg of fruit per year and purify surrounding air.",
    use: "Powerful antibacterial and antifungal for skin conditions.",
    tip: "Boil neem leaves in water and use as a skin wash for irritations.",
  },
  {
    name: "Turmeric",
    scientificName: "Curcuma longa",
    fact: "India produces over 80% of the world's turmeric supply.",
    use: "Anti-inflammatory compound curcumin helps with joint pain and wound healing.",
    tip: "Add a pinch of black pepper to turmeric milk to boost curcumin absorption by 2000%.",
  },
  {
    name: "Brahmi",
    scientificName: "Bacopa monnieri",
    fact: "Ancient scholars used Brahmi to memorize lengthy Vedic hymns.",
    use: "Enhances memory, concentration, and cognitive function.",
    tip: "Take Brahmi juice (1-2 tsp) in the morning on an empty stomach.",
  },
  {
    name: "Amla",
    scientificName: "Phyllanthus emblica",
    fact: "One amla fruit has as much Vitamin C as 20 oranges.",
    use: "Rich antioxidant that strengthens immunity and promotes hair growth.",
    tip: "Eat one raw amla daily or drink its juice mixed with honey.",
  },
  {
    name: "Aloe Vera",
    scientificName: "Aloe barbadensis miller",
    fact: "Aloe vera has been used in Indian medicine for over 5,000 years.",
    use: "Soothes burns, heals skin, and aids digestion.",
    tip: "Scoop fresh gel and apply directly to minor burns or skin irritation.",
  },
  {
    name: "Giloy",
    scientificName: "Tinospora cordifolia",
    fact: "Known as 'Amrita' (the root of immortality) in Ayurveda.",
    use: "Powerful immunomodulator that helps fight chronic fevers.",
    tip: "Boil a 6-inch giloy stem in water, strain, and drink as kadha.",
  },
  {
    name: "Shatavari",
    scientificName: "Asparagus racemosus",
    fact: "The name translates to 'she who possesses a hundred husbands' — a nod to its rejuvenating properties.",
    use: "Supports female reproductive health and balances hormones.",
    tip: "Mix shatavari powder in warm milk with a pinch of cardamom.",
  },
  {
    name: "Moringa",
    scientificName: "Moringa oleifera",
    fact: "Called the 'drumstick tree,' every part of moringa is edible and nutritious.",
    use: "Packed with nutrients, it fights malnutrition and inflammation.",
    tip: "Add moringa leaf powder to soups, smoothies, or dal.",
  },
  {
    name: "Curry Leaf",
    scientificName: "Murraya koenigii",
    fact: "Despite the name, curry leaves have nothing to do with curry powder.",
    use: "Supports digestion, helps manage blood sugar, and strengthens hair.",
    tip: "Chew 5-6 fresh curry leaves on an empty stomach each morning.",
  },
  {
    name: "Bhringraj",
    scientificName: "Eclipta prostrata",
    fact: "Known as the 'king of herbs for hair' in Ayurvedic tradition.",
    use: "Promotes hair growth and prevents premature graying.",
    tip: "Warm bhringraj oil and massage into the scalp twice a week.",
  },
  {
    name: "Cardamom",
    scientificName: "Elettaria cardamomum",
    fact: "Called the 'queen of spices,' India's Western Ghats are its native home.",
    use: "Aids digestion, freshens breath, and helps lower blood pressure.",
    tip: "Chew a pod after meals or add crushed seeds to your chai.",
  },
  {
    name: "Peppermint",
    scientificName: "Mentha piperita",
    fact: "Peppermint oil can repel mosquitoes more effectively than many chemical sprays.",
    use: "Relieves headaches, nasal congestion, and digestive discomfort.",
    tip: "Steep a few fresh leaves in boiling water for 5 minutes for a calming tea.",
  },
  {
    name: "Vetiver",
    scientificName: "Chrysopogon zizanioides",
    fact: "Vetiver roots can grow 3-4 meters deep, making it a champion at preventing soil erosion.",
    use: "Cooling agent that reduces body heat and treats skin rashes.",
    tip: "Soak vetiver roots in water overnight and drink the infused water chilled.",
  },
  {
    name: "Triphala",
    scientificName: "Terminalia chebula + T. bellirica + Emblica officinalis",
    fact: "Triphala is a blend of three fruits and has been prescribed in Ayurveda for over 1,000 years.",
    use: "Gentle detoxifier and digestive tonic that supports gut health.",
    tip: "Take half a teaspoon of triphala powder with warm water before bed.",
  },
  {
    name: "Sandalwood",
    scientificName: "Santalum album",
    fact: "Indian sandalwood takes 15-20 years to develop its signature fragrance.",
    use: "Cools the skin, treats acne, and calms the mind.",
    tip: "Mix sandalwood powder with rose water into a paste for a soothing face pack.",
  },
  {
    name: "Ajwain",
    scientificName: "Trachyspermum ammi",
    fact: "A staple in Indian kitchens, ajwain seeds contain thymol — a potent antimicrobial.",
    use: "Relieves indigestion, bloating, and acidity almost instantly.",
    tip: "Chew a pinch of ajwain seeds with a bit of rock salt after a heavy meal.",
  },
];

/**
 * Deterministic daily plant picker — uses the date string as a simple hash seed.
 */
function getPlantIndex(dateStr, total) {
  let hash = 0;
  for (let i = 0; i < dateStr.length; i++) {
    hash = dateStr.charCodeAt(i) + ((hash << 5) - hash);
  }
  return Math.abs(hash) % total;
}

const PlantOfTheDay = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const plant = useMemo(() => {
    const idx = getPlantIndex(new Date().toDateString(), PLANTS.length);
    return PLANTS[idx];
  }, []);

  return (
    <div className="potd-card">
      <div className="potd-header">
        <Sparkles size={16} className="potd-icon" />
        <span className="potd-label">{t("potd.title", "Plant of the Day")}</span>
      </div>

      <div className="potd-body">
        <p className="potd-name">{plant.name}</p>
        <p className="potd-sci">{plant.scientificName}</p>
        <p className="potd-fact">{plant.fact}</p>
        <p className="potd-use">
          <strong>{t("potd.use", "Use")}:</strong> {plant.use}
        </p>
        <p className="potd-tip">
          <strong>{t("potd.tip", "Tip")}:</strong> {plant.tip}
        </p>
      </div>

      <button className="potd-link" onClick={() => navigate("/plant-search")}>
        {t("potd.learnMore", "Learn more")} <ArrowRight size={14} />
      </button>
    </div>
  );
};

export default PlantOfTheDay;
