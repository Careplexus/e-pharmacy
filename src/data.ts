// navigation bar link items 
type Link = {
  name: string;
  to: string;
}

type NavBarLinks = {
  [key: string]: Link;
}

export const navBarLinks: NavBarLinks = {
  Home: {
    name: 'Home',
    to: '/'
  },
  Pharmaceuticals: {
    name: 'Pharmaceuticals',
    to: '/pharmaceuticals'
  },
  Contact: {
    name: 'Contact',
    to: '/contact'
  }
}

// point of sales data
type PosData = {
  id: number;
  name: string;
  unitPrice: number;
  type: string;
  category: string;
  stockQty: number;
  totalPrice: number;
  description: string;
}
export const posData: PosData[] = [
  {
    "id": 1,
    "name": "Paracetamol 500mg",
    "unitPrice": 100,
    "type": "Drug",
    "category": "Analgesic",
    "stockQty": 50,
    "totalPrice": 5000,
    "description": "Relieves mild to moderate pain and fever. Commonly used for headaches, colds, and body aches. Safe for most people when taken as directed."
  },
  {
    "id": 2,
    "name": "Ibuprofen 200mg",
    "unitPrice": 150,
    "type": "Drug",
    "category": "Analgesic",
    "stockQty": 30,
    "totalPrice": 4500,
    "description": "Reduces pain, inflammation, and fever. Often used for arthritis, muscle aches, menstrual cramps, and minor injuries."
  },
  {
    "id": 3,
    "name": "Amoxicillin 500mg",
    "unitPrice": 250,
    "type": "Drug",
    "category": "Antibiotic",
    "stockQty": 40,
    "totalPrice": 10000,
    "description": "A broad-spectrum antibiotic used to treat bacterial infections such as respiratory tract infections, ear infections, and urinary tract infections."
  },
  {
    "id": 4,
    "name": "Ceftriaxone Injection",
    "unitPrice": 500,
    "type": "Drug",
    "category": "Antibiotic",
    "stockQty": 20,
    "totalPrice": 10000,
    "description": "A strong injectable antibiotic used to treat severe bacterial infections, including pneumonia, meningitis, and bloodstream infections."
  },
  {
    "id": 5,
    "name": "Vitamin C 100mg",
    "unitPrice": 80,
    "type": "Drug",
    "category": "Supplement",
    "stockQty": 100,
    "totalPrice": 8000,
    "description": "Boosts immunity, promotes healthy skin, and helps in wound healing. Often used to prevent or treat vitamin C deficiency."
  },
  {
    "id": 6,
    "name": "Metformin 500mg",
    "unitPrice": 200,
    "type": "Drug",
    "category": "Antidiabetic",
    "stockQty": 25,
    "totalPrice": 5000,
    "description": "First-line treatment for type 2 diabetes. Helps lower blood sugar levels by improving insulin sensitivity."
  },
  {
    "id": 7,
    "name": "Lisinopril 10mg",
    "unitPrice": 300,
    "type": "Drug",
    "category": "Antihypertensive",
    "stockQty": 35,
    "totalPrice": 10500,
    "description": "Used to treat high blood pressure and heart failure. Helps lower the risk of heart attacks and strokes."
  },
  {
    "id": 8,
    "name": "Omeprazole 20mg",
    "unitPrice": 180,
    "type": "Drug",
    "category": "Antacid",
    "stockQty": 60,
    "totalPrice": 10800,
    "description": "Reduces stomach acid production. Used for acid reflux, heartburn, and gastric ulcers."
  },
  {
    "id": 9,
    "name": "Salbutamol Inhaler",
    "unitPrice": 750,
    "type": "Drug",
    "category": "Respiratory",
    "stockQty": 15,
    "totalPrice": 11250,
    "description": "Provides quick relief for asthma and other respiratory conditions by relaxing airway muscles."
  },
  {
    "id": 10,
    "name": "Glucose IV 500ml",
    "unitPrice": 600,
    "type": "Drug",
    "category": "IV Fluid",
    "stockQty": 30,
    "totalPrice": 18000,
    "description": "Provides energy and hydration for patients who cannot eat or drink normally."
  },
  {
    "id": 11,
    "name": "Syringe 5ml",
    "unitPrice": 50,
    "type": "Consumable",
    "category": "Injection",
    "stockQty": 200,
    "totalPrice": 10000,
    "description": "A sterile, single-use syringe for administering injections or drawing fluids. Commonly used in hospitals and clinics."
  },
  {
    "id": 12,
    "name": "Surgical Gloves (Pair)",
    "unitPrice": 120,
    "type": "Consumable",
    "category": "Protective",
    "stockQty": 150,
    "totalPrice": 18000,
    "description": "Disposable gloves designed to prevent contamination and ensure hygiene during medical procedures."
  },
  {
    "id": 13,
    "name": "Face Mask (Pack of 10)",
    "unitPrice": 500,
    "type": "Consumable",
    "category": "Protective",
    "stockQty": 50,
    "totalPrice": 25000,
    "description": "A pack of protective face masks to reduce exposure to airborne particles and infections."
  },
  {
    "id": 14,
    "name": "Cotton Wool 100g",
    "unitPrice": 300,
    "type": "Consumable",
    "category": "Wound Care",
    "stockQty": 75,
    "totalPrice": 22500,
    "description": "Soft and absorbent cotton wool for cleaning wounds and applying antiseptics."
  },
  {
    "id": 15,
    "name": "Adhesive Plaster",
    "unitPrice": 400,
    "type": "Consumable",
    "category": "Wound Care",
    "stockQty": 40,
    "totalPrice": 16000,
    "description": "Used for covering and protecting minor wounds, cuts, and abrasions to aid healing."
  },
  {
    "id": 16,
    "name": "Blood Pressure Monitor",
    "unitPrice": 7500,
    "type": "Consumable",
    "category": "Diagnostic",
    "stockQty": 10,
    "totalPrice": 75000,
    "description": "A digital monitor for checking blood pressure at home or in medical settings."
  },
  {
    "id": 17,
    "name": "Thermometer Digital",
    "unitPrice": 2500,
    "type": "Consumable",
    "category": "Diagnostic",
    "stockQty": 20,
    "totalPrice": 50000,
    "description": "A quick and accurate digital thermometer for measuring body temperature."
  },
  {
    "id": 18,
    "name": "Nebulizer Machine",
    "unitPrice": 12000,
    "type": "Consumable",
    "category": "Respiratory",
    "stockQty": 5,
    "totalPrice": 60000,
    "description": "Used to convert liquid medicine into mist for easier inhalation in respiratory conditions."
  },
  {
    "id": 19,
    "name": "Insulin Syringe 1ml",
    "unitPrice": 70,
    "type": "Consumable",
    "category": "Injection",
    "stockQty": 250,
    "totalPrice": 17500,
    "description": "A sterile, single-use syringe for precise insulin administration."
  },
  {
    "id": 20,
    "name": "Hand Sanitizer 500ml",
    "unitPrice": 1500,
    "type": "Consumable",
    "category": "Hygiene",
    "stockQty": 30,
    "totalPrice": 45000,
    "description": "Kills germs and bacteria on hands. Essential for hand hygiene and infection prevention."
  },
  {
    "id": 21,
    "name": "Aspirin 100mg",
    "unitPrice": 120,
    "type": "Drug",
    "category": "Analgesic",
    "stockQty": 70,
    "totalPrice": 8400,
    "description": "Used for pain relief, fever reduction, and as a blood thinner to prevent heart attacks."
  },
  {
    "id": 22,
    "name": "Ciprofloxacin 500mg",
    "unitPrice": 350,
    "type": "Drug",
    "category": "Antibiotic",
    "stockQty": 50,
    "totalPrice": 17500,
    "description": "A broad-spectrum antibiotic for bacterial infections such as UTIs and respiratory infections."
  },
  {
    "id": 23,
    "name": "Prednisone 10mg",
    "unitPrice": 250,
    "type": "Drug",
    "category": "Steroid",
    "stockQty": 60,
    "totalPrice": 15000,
    "description": "A corticosteroid used to treat inflammation, allergies, and autoimmune conditions."
  },
  {
    "id": 24,
    "name": "Loratadine 10mg",
    "unitPrice": 200,
    "type": "Drug",
    "category": "Antihistamine",
    "stockQty": 80,
    "totalPrice": 16000,
    "description": "An antihistamine used to relieve allergy symptoms like runny nose, sneezing, and itching."
  },
  {
    "id": 25,
    "name": "Dextrose IV 500ml",
    "unitPrice": 400,
    "type": "Drug",
    "category": "IV Fluid",
    "stockQty": 40,
    "totalPrice": 16000,
    "description": "Provides energy and hydration for patients needing glucose supplementation."
  },
  {
    "id": 26,
    "name": "Fluoxetine 20mg",
    "unitPrice": 220,
    "type": "Drug",
    "category": "Antidepressant",
    "stockQty": 45,
    "totalPrice": 9900,
    "description": "A commonly prescribed antidepressant used to treat depression and anxiety disorders."
  },
  {
    "id": 27,
    "name": "Naproxen 250mg",
    "unitPrice": 180,
    "type": "Drug",
    "category": "Analgesic",
    "stockQty": 60,
    "totalPrice": 10800,
    "description": "A nonsteroidal anti-inflammatory drug (NSAID) used for pain relief and inflammation reduction."
  },
  {
    "id": 28,
    "name": "Hydrochlorothiazide 25mg",
    "unitPrice": 300,
    "type": "Drug",
    "category": "Antihypertensive",
    "stockQty": 55,
    "totalPrice": 16500,
    "description": "A diuretic used to lower blood pressure and reduce fluid retention."
  },
  {
    "id": 29,
    "name": "Amlodipine 10mg",
    "unitPrice": 270,
    "type": "Drug",
    "category": "Antihypertensive",
    "stockQty": 50,
    "totalPrice": 13500,
    "description": "A calcium channel blocker used to treat high blood pressure and chest pain (angina)."
  },
  {
    "id": 30,
    "name": "Chlorpheniramine 4mg",
    "unitPrice": 100,
    "type": "Drug",
    "category": "Antihistamine",
    "stockQty": 90,
    "totalPrice": 9000,
    "description": "An antihistamine that relieves allergy symptoms and common cold symptoms."
  },
  {
    "id": 31,
    "name": "Gauze Bandage",
    "unitPrice": 350,
    "type": "Consumable",
    "category": "Wound Care",
    "stockQty": 120,
    "totalPrice": 42000,
    "description": "A sterile gauze bandage used for wound dressing, protection, and absorption of exudate."
  },
  {
    "id": 32,
    "name": "Band Aid (Pack of 12)",
    "unitPrice": 250,
    "type": "Consumable",
    "category": "Wound Care",
    "stockQty": 100,
    "totalPrice": 25000,
    "description": "Adhesive bandages for covering small cuts and wounds to promote healing and prevent infections."
  },
  {
    "id": 33,
    "name": "IV Cannula 18G",
    "unitPrice": 200,
    "type": "Consumable",
    "category": "Injection",
    "stockQty": 150,
    "totalPrice": 30000,
    "description": "A sterile IV cannula used for fluid administration, medication infusion, and blood transfusions."
  },
  {
    "id": 34,
    "name": "Surgical Mask (Pack of 50)",
    "unitPrice": 800,
    "type": "Consumable",
    "category": "Protective",
    "stockQty": 80,
    "totalPrice": 64000,
    "description": "A disposable face mask that protects against airborne particles and contaminants."
  },
  {
    "id": 35,
    "name": "Thermometer Disposable",
    "unitPrice": 150,
    "type": "Consumable",
    "category": "Diagnostic",
    "stockQty": 200,
    "totalPrice": 30000,
    "description": "A single-use thermometer for quick and hygienic temperature measurement."
  },
  {
    "id": 36,
    "name": "Hand Gloves (Box of 100)",
    "unitPrice": 200,
    "type": "Consumable",
    "category": "Protective",
    "stockQty": 250,
    "totalPrice": 50000,
    "description": "Disposable gloves for hand protection in medical and hygiene-sensitive environments."
  },
  {
    "id": 37,
    "name": "Needles (Pack of 50)",
    "unitPrice": 500,
    "type": "Consumable",
    "category": "Injection",
    "stockQty": 40,
    "totalPrice": 20000,
    "description": "Sterile disposable needles for safe and precise injections in medical settings."
  },
  {
    "id": 38,
    "name": "Blood Glucose Test Strips",
    "unitPrice": 800,
    "type": "Consumable",
    "category": "Diagnostic",
    "stockQty": 90,
    "totalPrice": 72000,
    "description": "Test strips used with a glucometer to measure blood sugar levels for diabetes management."
  },
  {
    "id": 39,
    "name": "Stethoscope",
    "unitPrice": 5000,
    "type": "Consumable",
    "category": "Diagnostic",
    "stockQty": 20,
    "totalPrice": 100000,
    "description": "A medical instrument used to listen to heartbeats, lung sounds, and other body functions."
  },
  {
    "id": 40,
    "name": "Oxygen Mask",
    "unitPrice": 1500,
    "type": "Consumable",
    "category": "Respiratory",
    "stockQty": 25,
    "totalPrice": 37500,
    "description": "A mask used to deliver oxygen therapy to patients with respiratory difficulties."
  },
  {
    "id": 41,
    "name": "Hydrogen Peroxide 200ml",
    "unitPrice": 300,
    "type": "Consumable",
    "category": "Wound Care",
    "stockQty": 80,
    "totalPrice": 24000,
    "description": "A mild antiseptic used to clean wounds and prevent infections."
  },
  {
    "id": 42,
    "name": "Ethanol 70% 500ml",
    "unitPrice": 600,
    "type": "Consumable",
    "category": "Hygiene",
    "stockQty": 50,
    "totalPrice": 30000,
    "description": "A disinfectant solution used for sanitizing hands and surfaces to kill germs."
  },
  {
    "id": 43,
    "name": "Lactated Ringer’s IV 500ml",
    "unitPrice": 500,
    "type": "Drug",
    "category": "IV Fluid",
    "stockQty": 30,
    "totalPrice": 15000,
    "description": "An IV fluid used for hydration, electrolyte balance, and blood volume restoration."
  },
  {
    "id": 44,
    "name": "Azithromycin 500mg",
    "unitPrice": 400,
    "type": "Drug",
    "category": "Antibiotic",
    "stockQty": 45,
    "totalPrice": 18000,
    "description": "A broad-spectrum antibiotic for treating respiratory and skin infections."
  },
  {
    "id": 45,
    "name": "Diclofenac 50mg",
    "unitPrice": 180,
    "type": "Drug",
    "category": "Analgesic",
    "stockQty": 70,
    "totalPrice": 12600,
    "description": "A pain reliever and anti-inflammatory medication used for muscle and joint pain."
  },
  {
    "id": 46,
    "name": "Cough Syrup 100ml",
    "unitPrice": 250,
    "type": "Drug",
    "category": "Respiratory",
    "stockQty": 90,
    "totalPrice": 22500,
    "description": "A soothing syrup used to relieve cough and throat irritation."
  },
  {
    "id": 47,
    "name": "Zinc Sulfate 20mg",
    "unitPrice": 150,
    "type": "Drug",
    "category": "Supplement",
    "stockQty": 100,
    "totalPrice": 15000,
    "description": "A dietary supplement used to boost immunity and promote wound healing."
  },
  {
    "id": 48,
    "name": "Multivitamin Tablets",
    "unitPrice": 350,
    "type": "Drug",
    "category": "Supplement",
    "stockQty": 120,
    "totalPrice": 42000,
    "description": "A combination of essential vitamins and minerals to support overall health and wellness."
  },
  {
    "id": 49,
    "name": "Pregnancy Test Strips",
    "unitPrice": 500,
    "type": "Consumable",
    "category": "Diagnostic",
    "stockQty": 60,
    "totalPrice": 30000,
    "description": "A quick and reliable test strip for detecting pregnancy using urine samples."
  },
  {
    "id": 50,
    "name": "Antiseptic Liquid 500ml",
    "unitPrice": 700,
    "type": "Consumable",
    "category": "Hygiene",
    "stockQty": 40,
    "totalPrice": 28000,
    "description": "A powerful antiseptic solution for cleaning wounds and disinfecting surfaces to kill germs."
  }
]
      
// Landing page carousel data
type CarouselData = {
  image: string;
  description: string;
}

export const carouselData: CarouselData[] = [
  { image: '/assets/carousel-image-1.jpg',
    description: 'From daily vitamins to essential prescriptions, we provide trusted products for your well-being.',
  },
  { image: '/assets/nevea.jpg',
   description: 'Explore dermatologist-recommended skincare products for healthy, glowing skin.'
  },
  { image: '/assets/laboratory.jpg',
   description: 'Discover the latest in pharmaceuticals and medications, including over-the-counter drugs.'
  }
]