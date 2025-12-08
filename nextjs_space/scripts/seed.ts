import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const products = [
  {
    name: 'Beef with Mixed Vegetables',
    nameEs: 'Res con Vegetales Mixtos',
    description: 'Tender beef chunks with carrots and broccoli, rich in protein and vitamins. A complete, balanced meal for your dog.',
    descriptionEs: 'Trozos tiernos de res con zanahorias y brócoli, ricos en proteínas y vitaminas. Una comida completa y balanceada para tu perro.',
    imageUrl: 'https://cdn.abacus.ai/images/265b149d-5a85-428a-918a-4eea4bd546a5.png',
    category: 'beef',
    mainIngredients: ['Res magra', 'Zanahorias', 'Brócoli', 'Condimentos naturales'],
    nutritionProtein: '18-20%',
    nutritionFat: '6-8%',
    nutritionFiber: '2-3%',
    nutritionCalories: '150 kcal/100g',
    composition: '60% carne, 40% vegetales',
    portionSizes: ['100g', '200g', '300g'],
    featured: true,
  },
  {
    name: 'Chicken with Mixed Vegetables',
    nameEs: 'Pollo con Vegetales Mixtos',
    description: 'Lean chicken breast with fresh vegetables including carrots, peas, and green beans. Light and nutritious.',
    descriptionEs: 'Pechuga de pollo magra con vegetales frescos incluyendo zanahorias, guisantes y ejotes. Ligero y nutritivo.',
    imageUrl: 'https://cdn.abacus.ai/images/1d550d25-021a-429a-8886-af9417a48f81.png',
    category: 'chicken',
    mainIngredients: ['Pechuga de pollo', 'Zanahorias', 'Guisantes', 'Ejotes'],
    nutritionProtein: '16-18%',
    nutritionFat: '5-7%',
    nutritionFiber: '2-3%',
    nutritionCalories: '140 kcal/100g',
    composition: '60% carne, 40% vegetales',
    portionSizes: ['100g', '200g', '300g'],
    featured: true,
  },
  {
    name: 'Beef with Carrots',
    nameEs: 'Res con Zanahorias',
    description: 'Succulent beef combined with bright orange carrots. Rich in beta-carotene and essential proteins.',
    descriptionEs: 'Res suculenta combinada con zanahorias naranjas brillantes. Rica en betacaroteno y proteínas esenciales.',
    imageUrl: 'https://cdn.abacus.ai/images/0d6aca21-6c0f-42b0-9356-f3cea808dedd.png',
    category: 'beef',
    mainIngredients: ['Res magra', 'Zanahorias', 'Condimentos naturales'],
    nutritionProtein: '18-20%',
    nutritionFat: '6-8%',
    nutritionFiber: '2%',
    nutritionCalories: '155 kcal/100g',
    composition: '60% carne, 40% vegetales',
    portionSizes: ['100g', '200g', '300g'],
    featured: false,
  },
  {
    name: 'Chicken with Broccoli',
    nameEs: 'Pollo con Brócoli',
    description: 'Tender chicken pieces with fresh green broccoli florets. High in vitamins and antioxidants.',
    descriptionEs: 'Trozos tiernos de pollo con floretes de brócoli verde fresco. Alto en vitaminas y antioxidantes.',
    imageUrl: 'https://cdn.abacus.ai/images/62f7a2df-c295-40ac-b8c8-1e63c02ac1de.png',
    category: 'chicken',
    mainIngredients: ['Pechuga de pollo', 'Brócoli', 'Condimentos naturales'],
    nutritionProtein: '16-18%',
    nutritionFat: '5-6%',
    nutritionFiber: '3%',
    nutritionCalories: '135 kcal/100g',
    composition: '60% carne, 40% vegetales',
    portionSizes: ['100g', '200g', '300g'],
    featured: false,
  },
  {
    name: 'Beef with Sweet Potato',
    nameEs: 'Res con Camote',
    description: 'Premium beef with cubed sweet potato. A gourmet meal rich in complex carbohydrates and protein.',
    descriptionEs: 'Res premium con camote en cubos. Una comida gourmet rica en carbohidratos complejos y proteínas.',
    imageUrl: 'https://cdn.abacus.ai/images/4860a824-10ca-4762-9854-159c91093d0b.png',
    category: 'beef',
    mainIngredients: ['Res magra', 'Camote', 'Condimentos naturales'],
    nutritionProtein: '17-19%',
    nutritionFat: '6-7%',
    nutritionFiber: '2-3%',
    nutritionCalories: '160 kcal/100g',
    composition: '60% carne, 40% vegetales',
    portionSizes: ['100g', '200g', '300g'],
    featured: true,
  },
  {
    name: 'Chicken with Pumpkin',
    nameEs: 'Pollo con Calabaza',
    description: 'Wholesome chicken mixed with nutritious pumpkin chunks. Perfect for digestive health.',
    descriptionEs: 'Pollo saludable mezclado con trozos de calabaza nutritiva. Perfecto para la salud digestiva.',
    imageUrl: 'https://cdn.abacus.ai/images/54491706-972c-457d-9d0a-5694fd07b1cf.png',
    category: 'chicken',
    mainIngredients: ['Pechuga de pollo', 'Calabaza', 'Condimentos naturales'],
    nutritionProtein: '16-18%',
    nutritionFat: '5-7%',
    nutritionFiber: '3%',
    nutritionCalories: '145 kcal/100g',
    composition: '60% carne, 40% vegetales',
    portionSizes: ['100g', '200g', '300g'],
    featured: false,
  },
  {
    name: 'Turkey with Mixed Vegetables',
    nameEs: 'Pavo con Vegetales Mixtos',
    description: 'Premium turkey pieces with colorful vegetables. A sophisticated, nutrient-rich meal.',
    descriptionEs: 'Trozos de pavo premium con vegetales coloridos. Una comida sofisticada y rica en nutrientes.',
    imageUrl: 'https://cdn.abacus.ai/images/e41783b6-28fc-4e83-aaad-57a12e73a9e5.png',
    category: 'turkey',
    mainIngredients: ['Pavo', 'Zanahorias', 'Ejotes', 'Guisantes'],
    nutritionProtein: '17-19%',
    nutritionFat: '5-7%',
    nutritionFiber: '2-3%',
    nutritionCalories: '145 kcal/100g',
    composition: '60% carne, 40% vegetales',
    portionSizes: ['100g', '200g', '300g'],
    featured: false,
  },
  {
    name: 'Lamb with Vegetables',
    nameEs: 'Cordero con Vegetales',
    description: 'Gourmet lamb chunks with fresh mixed vegetables. An artisanal, luxurious meal for discerning dogs.',
    descriptionEs: 'Trozos de cordero gourmet con vegetales mixtos frescos. Una comida artesanal y lujosa para perros exigentes.',
    imageUrl: 'https://cdn.abacus.ai/images/0a7dc54a-b5fb-47af-9a7d-c06eac8ace28.png',
    category: 'lamb',
    mainIngredients: ['Cordero', 'Zanahorias', 'Calabacín', 'Pimientos'],
    nutritionProtein: '18-20%',
    nutritionFat: '7-8%',
    nutritionFiber: '2-3%',
    nutritionCalories: '165 kcal/100g',
    composition: '60% carne, 40% vegetales',
    portionSizes: ['100g', '200g', '300g'],
    featured: false,
  },
];

async function main() {
  console.log('Starting database seed...');

  // Clear existing products
  await prisma.product.deleteMany({});
  console.log('Cleared existing products');

  // Seed products
  for (const product of products) {
    await prisma.product.create({
      data: product,
    });
  }

  console.log(`Seeded ${products.length} products successfully`);
}

main()
  .catch((e) => {
    console.error('Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
