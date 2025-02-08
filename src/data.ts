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
}
export const posData: PosData[] = [
  { id: 1, name: "Paracetamol 500mg", unitPrice: 100, type: "Drug", category: "Analgesic", stockQty: 50, totalPrice: 5000 },
  { id: 2, name: "Ibuprofen 200mg", unitPrice: 150, type: "Drug", category: "Analgesic", stockQty: 30, totalPrice: 4500 },
  { id: 3, name: "Amoxicillin 500mg", unitPrice: 250, type: "Drug", category: "Antibiotic", stockQty: 40, totalPrice: 10000 },
  { id: 4, name: "Ceftriaxone Injection", unitPrice: 500, type: "Drug", category: "Antibiotic", stockQty: 20, totalPrice: 10000 },
  { id: 5, name: "Vitamin C 100mg", unitPrice: 80, type: "Drug", category: "Supplement", stockQty: 100, totalPrice: 8000 },
  { id: 6, name: "Metformin 500mg", unitPrice: 200, type: "Drug", category: "Antidiabetic", stockQty: 25, totalPrice: 5000 },
  { id: 7, name: "Lisinopril 10mg", unitPrice: 300, type: "Drug", category: "Antihypertensive", stockQty: 35, totalPrice: 10500 },
  { id: 8, name: "Omeprazole 20mg", unitPrice: 180, type: "Drug", category: "Antacid", stockQty: 60, totalPrice: 10800 },
  { id: 9, name: "Salbutamol Inhaler", unitPrice: 750, type: "Drug", category: "Respiratory", stockQty: 15, totalPrice: 11250 },
  { id: 10, name: "Glucose IV 500ml", unitPrice: 600, type: "Drug", category: "IV Fluid", stockQty: 30, totalPrice: 18000 },
  { id: 11, name: "Syringe 5ml", unitPrice: 50, type: "Consumable", category: "Injection", stockQty: 200, totalPrice: 10000 },
  { id: 12, name: "Surgical Gloves (Pair)", unitPrice: 120, type: "Consumable", category: "Protective", stockQty: 150, totalPrice: 18000 },
  { id: 13, name: "Face Mask (Pack of 10)", unitPrice: 500, type: "Consumable", category: "Protective", stockQty: 50, totalPrice: 25000 },
  { id: 14, name: "Cotton Wool 100g", unitPrice: 300, type: "Consumable", category: "Wound Care", stockQty: 75, totalPrice: 22500 },
  { id: 15, name: "Adhesive Plaster", unitPrice: 400, type: "Consumable", category: "Wound Care", stockQty: 40, totalPrice: 16000 },
  { id: 16, name: "Blood Pressure Monitor", unitPrice: 7500, type: "Consumable", category: "Diagnostic", stockQty: 10, totalPrice: 75000 },
  { id: 17, name: "Thermometer Digital", unitPrice: 2500, type: "Consumable", category: "Diagnostic", stockQty: 20, totalPrice: 50000 },
  { id: 18, name: "Nebulizer Machine", unitPrice: 12000, type: "Consumable", category: "Respiratory", stockQty: 5, totalPrice: 60000 },
  { id: 19, name: "Insulin Syringe 1ml", unitPrice: 70, type: "Consumable", category: "Injection", stockQty: 250, totalPrice: 17500 },
  { id: 20, name: "Hand Sanitizer 500ml", unitPrice: 1500, type: "Consumable", category: "Hygiene", stockQty: 30, totalPrice: 45000 },
  { id: 21, name: "Aspirin 100mg", unitPrice: 120, type: "Drug", category: "Analgesic", stockQty: 70, totalPrice: 8400 },
  { id: 22, name: "Ciprofloxacin 500mg", unitPrice: 350, type: "Drug", category: "Antibiotic", stockQty: 50, totalPrice: 17500 },
  { id: 23, name: "Prednisone 10mg", unitPrice: 250, type: "Drug", category: "Steroid", stockQty: 60, totalPrice: 15000 },
  { id: 24, name: "Loratadine 10mg", unitPrice: 200, type: "Drug", category: "Antihistamine", stockQty: 80, totalPrice: 16000 },
  { id: 25, name: "Dextrose IV 500ml", unitPrice: 400, type: "Drug", category: "IV Fluid", stockQty: 40, totalPrice: 16000 },
  { id: 26, name: "Fluoxetine 20mg", unitPrice: 220, type: "Drug", category: "Antidepressant", stockQty: 45, totalPrice: 9900 },
  { id: 27, name: "Naproxen 250mg", unitPrice: 180, type: "Drug", category: "Analgesic", stockQty: 60, totalPrice: 10800 },
  { id: 28, name: "Hydrochlorothiazide 25mg", unitPrice: 300, type: "Drug", category: "Antihypertensive", stockQty: 55, totalPrice: 16500 },
  { id: 29, name: "Amlodipine 10mg", unitPrice: 270, type: "Drug", category: "Antihypertensive", stockQty: 50, totalPrice: 13500 },
  { id: 30, name: "Chlorpheniramine 4mg", unitPrice: 100, type: "Drug", category: "Antihistamine", stockQty: 90, totalPrice: 9000 },
  { id: 31, name: "Gauze Bandage", unitPrice: 350, type: "Consumable", category: "Wound Care", stockQty: 120, totalPrice: 42000 },
  { id: 32, name: "Band Aid (Pack of 12)", unitPrice: 250, type: "Consumable", category: "Wound Care", stockQty: 100, totalPrice: 25000 },
  { id: 33, name: "IV Cannula 18G", unitPrice: 200, type: "Consumable", category: "Injection", stockQty: 150, totalPrice: 30000 },
  { id: 34, name: "Surgical Mask (Pack of 50)", unitPrice: 800, type: "Consumable", category: "Protective", stockQty: 80, totalPrice: 64000 },
  { id: 35, name: "Thermometer Disposable", unitPrice: 150, type: "Consumable", category: "Diagnostic", stockQty: 200, totalPrice: 30000 },
  { id: 36, name: "Hand Gloves (Box of 100)", unitPrice: 200, type: "Consumable", category: "Protective", stockQty: 250, totalPrice: 50000 },
  { id: 37, name: "Needles (Pack of 50)", unitPrice: 500, type: "Consumable", category: "Injection", stockQty: 40, totalPrice: 20000 },
  { id: 38, name: "Blood Glucose Test Strips", unitPrice: 800, type: "Consumable", category: "Diagnostic", stockQty: 90, totalPrice: 72000 },
  { id: 39, name: "Stethoscope", unitPrice: 5000, type: "Consumable", category: "Diagnostic", stockQty: 20, totalPrice: 100000 },
  { id: 40, name: "Oxygen Mask", unitPrice: 1500, type: "Consumable", category: "Respiratory", stockQty: 25, totalPrice: 37500 }
];

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