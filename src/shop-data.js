const SHOP_DATA = [
    {
      categoryName: "food",
      items: [
        {
          id: 1,
          title: "Brit Premium by Nature Junior Small Breed",
          imageUrl: "https://www.zoocity.hr/media/catalog/product/cache/3e64ba88bd29473e14083a708e79c587/b/r/brit_premium_by_nature_junior_small_breed.jpg",
          productCode: "BPR056",
          description: "Brit Premium by Nature Junior Small Breed is a complete food for small breed puppies (1-12 months)",
          size: "3 kg",
          price: 12.3,
          ingredients: "Chicken 55% (dehydrated 30%, boneless 25%), chicken fat (preserved with mixed tocopherols), oats, wheat, salmon oil (2%), corn, dried apples, hydrolyzed chicken liver, brewer's yeast, collagen, shrimp shells (a source of glucosamine, 260 mg/kg), cartilage (a source of chondroitin, 180 mg/kg), herbs and fruits (clove, citrus, rosemary, turmeric, 150 mg/kg), mannan-oligosaccharides (150 mg/kg), fructo-oligosaccharides (100 mg/kg), Mojave yucca (100 mg/kg), dried chamomile (90 mg/kg), green-lipped mussel extract (as a source of glycosaminoglycans, 60 mg/kg), dried blueberries (60 mg/kg). Additives: vitamin A (3a672a) 20,000 IU, vitamin D3 (E671) 1200 IU, vitamin E (alpha-tocopherol) (3a700) 500 mg, biotin (3a880) 0.6 mg, choline chloride (3a890) 600 mg, zinc amino acid chelate (3b606) 90 mg, iron amino acid chelate hydrate (E1) 80 mg, manganese amino acid chelate hydrate (E5) 35 mg, potassium iodide (3b201) 0.65 mg, copper amino acid chelate hydrate (E4) 15 mg, organic form of selenium obtained from Saccharomyces cerevisiae CNCM I-3060 (3b8.10) 0.2 mg. Contains EU-approved antioxidants: tocopherol extracts from vegetable oils (1b306), ascorbyl palmitate (1b304), and rosemary extract.",
          content: "Protein 32%, fat content 20%, moisture 10%, crude ash 6.8%, crude fiber 2%, calcium 1.5%, phosphorus 1.1%, omega-3 0.25%, omega-6 2.2%."
        },
        {
          id: 2,
          title: "Acana Dog Puppy Large Breed",
          imageUrl: "https://www.zoocity.hr/media/catalog/product/cache/3e64ba88bd29473e14083a708e79c587/a/c/acana_puppy_large_17_kg_1.jpg",
          productCode: "DAC2220i11.4",
          description: "CHICKEN, LAYING EGGS, WILD HERRING, FRUITS, AND VEGETABLES - Acana Puppy Large Breed is a complete food for large breed puppies over 25 kg in adulthood. Cooked in our award-winning kitchens in Canada, Acana Puppy Large Breed is packed with fresh regional ingredients, free-run chicken and eggs, wild-caught herring, and sun-ripened fruits and vegetables. Everything is delivered fresh from our regions, bursting with great taste to keep your puppy happy, healthy, and strong.",
          size: "11,4 kg",
          price: 86.27,
          ingredients: "Fresh chicken (22%), chicken meal (21%), whole red lentils, whole green peas, fresh chicken giblets (liver, heart) (6%), herring meal (4%), eggs (4%), fresh freeze-dried mackerel (4%), fish oil (4%), whole chickpeas, pea fiber, pea starch, turkey meal (2.5%), whole green lentils, whole yellow peas, chicken fat (2%), fresh freeze-dried turkey liver (0.5%), salt, dried seaweed, whole fresh apples, whole fresh butternut squash, whole fresh carrots, whole fresh pears, whole fresh pumpkin, whole fresh zucchini, fresh kale, fresh spinach, fresh mustard greens, fresh turnip greens, whole fresh blueberries, whole fresh cranberries, whole fresh sea buckthorn berries, burdock root, lavender, marshmallow root, milk thistle, turmeric. Additives (per kg): Technological additives: tocopherol-rich extracts of natural origin: 121 mg, citric acid: 40 mg. Sensory additives: rosemary extract: 80 mg. Nutritional additives: 3a890 choline chloride (choline): 700 mg, 3b606 (zinc: 112.5 mg), 3b406 (copper: 11 mg), 3a821 vitamin B1: 25 mg, 3a841 vitamin B5: 8 mg, 3a831 vitamin B6: 7.5 mg, 3a700 vitamin E: 60 IU. Zootechnical additives: 4b1707 Enterococcus faecium NCIMB 10415 2.2x10^6 CFU.",
          content: "Crude protein 33%, crude fat 15%, crude fiber 6%, crude ash 7%, moisture 12%, calcium 1.4%, phosphorus 1%, Omega-6 2.4%, Omega-3 1.2%, DHA/EPA 0.4%/0.4%."
        },
        {
          id: 3,
          title: "Happy Dog Supreme Adult Medium 12 kg",
          imageUrl: "https://www.zoocity.hr/media/catalog/product/cache/3e64ba88bd29473e14083a708e79c587/h/a/happy_dog_medium_12_kg_1_.jpg",
          productCode: "IQ2232",
          description: "Happy Dog Supreme Adult Medium is a complete food for adult dogs with a highly digestible recipe, ideal for dogs weighing between 11 and 25 kg with normal caloric needs.",
          size: "12 kg",
          price: 55,
          ingredients: "Poultry 14%, lamb 4%, corn, corn flour, rice flour, barley, fish meal (5%, including 50% salmon meal), poultry fat, hemoglobin*, hydrolyzed liver, sunflower oil, sugar beet pulp* (sugar-free), apple pomace*, potassium chloride, black cumin oil, yeasts*, sodium chloride, walnut*, flaxseed (0.16%), dried whole egg (0.12%), mussel meat* (0.02%), yeast* (extract), milk thistle, artichoke, dandelion, ginger (0.013%), birch leaves, stinging nettle, chamomile, coriander, rosemary, sage, sweet flag root, thyme (total dried herbs: 0.16%); *).",
          content: "Crude protein 24%, crude fat 13%, crude fiber 2.5%, ash 6.5%, calcium 1.4%, phosphorus 0.95%, sodium 0.4%, potassium 0.5%, omega-6 fatty acids 3%, omega-3 fatty acids 0.3%. Added per kg: vitamin A 12000 IU, vitamin D3 1000 IU, vitamin E 75 mg, vitamin B1 4 mg, vitamin B2 6 mg, vitamin B6 4 mg, biotin 575 mcg, pantothenic acid 10 mg, niacin 40 mg, vitamin B12 70 mcg, choline chloride 60 mg, vitamin C 20 mg, iron (iron sulfate) 105 mg, copper (copper sulfate) 10 mg, zinc (zinc oxide) 105 mg, manganese (manganese oxide) 25 mg, iodine (calcium iodide) 2 mg, selenium (sodium selenite) 0.15 mg. Antioxidants based on vitamins: extract of natural origin, tocopherol, 6-palmitoyl-L-ascorbic acid."
        },
        {
          id: 4,
          title: "Royal Canin Veterinary Diet Hypoallergenic",
          imageUrl: "https://www.zoocity.hr/media/catalog/product/cache/3e64ba88bd29473e14083a708e79c587/r/c/rcvd_hypoallergenic.jpg",
          productCode: "RCV0017",
          description: "Royal Canin Veterinary Diet Hypoallergenic is a complete dietary food for adult dogs with hydrolyzed proteins of low molecular weight to ensure hypoallergenic nutrition.",
          size: "2 kg",
          price: 23.55,
          ingredients: "Rice, corn, animal fats, isolated soy protein*, hydrolyzed animal proteins, beet pulp, minerals, soy oil, vegetable fibers, fish oil, fructo-oligosaccharides, marigold extract (source of lutein). Additives (per kg): Nutritional additives: Vitamin A: 11600 IU, Vitamin D3: 1000 IU, E1 (Iron): 115 mg, E2 (Iodine): 4.3 mg, E5 (Manganese): 53 mg, E6 (Zinc): 212 mg, E8 (Selenium): 0.38 mg - Preservatives - Antioxidants.",
          content: "Crude protein 21%, crude oils and fats 19%, crude ash 6.1%, crude fiber 1.1%. Per kg: essential fatty acids 42.7 g, EPA and DHA 3.3 g, omega-3 fatty acids 9.5 g."
        },
        {
          id: 5,
          title: "Graf Barf Menu Plus Chicken, 2,5 kg",
          imageUrl: "https://www.zoocity.hr/media/catalog/product/cache/3e64ba88bd29473e14083a708e79c587/g/r/graf_barf_piletina_plus_2_5_kg.jpg",
          productCode: "GB17400004",
          description: "Suitable for dogs that gulp food or have dental issues. Graf Barf is 100% natural and ethologically adapted to the species. Regional ingredients from Germany are used in production (salmon and chicken from Switzerland - a salmonella-free country, and sprats from the North Sea). All ingredients are of human-grade quality, and there are no by-products. 100% free from additives, sugars, flavor enhancers, etc. All menus are monoprotein, meaning they contain only one source of protein. The food includes meat, bones, and offal (vegetables come from offal). The meat is cut into pieces, not industrially ground, and does not contain sharp bones that could injure the dog. It comes in the form of cubes measuring 2.5 cm in length and weighing approximately 15 g (bones come in larger pieces). Each ingredient has its own cube (meat, tripe, liver, heart, kidney, etc.). The cubes are manually sorted and packaged, so there may be variations in the blend ratio.",
          size: "2,5 kg",
          price: 26.54,
          ingredients: "Chicken necks, chicken carcasses, fruit and vegetable mix (apple, cucumber, cooked potato, herbs, beetroot, banana, zucchini, iceberg lettuce, carrot), chicken (finely chopped, mechanically deboned meat), chicken gizzards, chicken liver, chicken hearts.",
          content: "Protein 14%, fat 10%, crude ash 2%, crude fiber 1%, moisture 73%."
        },
        {
          id: 6,
          title: "Orijen Fit&Trim",
          imageUrl: "https://www.zoocity.hr/media/catalog/product/cache/3e64ba88bd29473e14083a708e79c587/o/r/orijen_fit_and_trim_11_4_kg.jpg",
          productCode: "DOR1555i2",
          description: "Orijen Fit & Trim is a complete food for overweight adult dogs. Packed with nutritious meat proteins, the food contains proteins from free-run chicken and turkey, wild-caught fish, and free-range eggs delivered fresh in WholePrey ratios. With limited amounts of fat and carbohydrates, along with a unique combination of fibers from pumpkin, squash, and apple, Orijen Fit & Trim promotes optimal health for all adult dogs.",
          size: "2 kg",
          price: 39.15,
          ingredients: "Fresh chicken (25%), fresh whole herring (6%), fresh turkey (6%), fresh chicken liver, heart (6%), fresh whole flounder (5%), fresh whole mackerel (5%), fresh eggs (5%), chicken (dehydrated, 4%), mackerel (dehydrated, 4%), sardine (dehydrated, 4%), herring (dehydrated, 4%), turkey (dehydrated, 4%), whitefish (dehydrated, 4%), lentil fiber, whole pinto beans, whole navy beans, whole chickpeas, whole red lentils, whole green lentils, whole green peas, pea starch, fresh turkey liver (1.5%), chicken fat (1.5%), apple fiber, dried seaweed, dried brown kelp, fresh whole pumpkin, fresh whole butternut squash, fresh whole zucchini, fresh whole parsnips, fresh carrots, fresh whole Red Delicious apples, fresh whole Bartlett pears, freeze-dried liver (chicken and turkey) (0.1%), fresh whole cranberries, fresh whole blueberries, chicory root, turmeric root, milk thistle, burdock root, lavender, marshmallow root, rosehips. Technological additives: Tocopherol-rich extract of natural origin. Zootechnical additives: Enterococcus faecium NCIMB10415: 600x10^6 CFU.",
          content: "Crude protein 40%, crude fat 13%, crude ash 8%, crude fiber 8%, moisture 12%, calcium 1.4%, phosphorus 1.1%, Omega-6 fatty acids 2.2%, Omega-3 fatty acids 0.9%, DHA/EPA 0.25%/0.15%."
        },
        {
          id: 7,
          title: "Profine Adult Lamb",
          imageUrl: "https://www.zoocity.hr/media/catalog/product/cache/3e64ba88bd29473e14083a708e79c587/p/r/profine_adult_janjetina_15_kg_1.jpg",
          productCode: "HO23313",
          description: "Profine Adult Lamb is a complete food for adult dogs of all breeds. It is easily digestible and highly efficient. It does not cause allergic reactions or food intolerance. Organic zinc promotes a shiny and healthy coat, while organic selenium and vitamin E protect cells from aging.",
          size: "3 kg",
          price: 18.58,
          ingredients: "Lamb 35%, potatoes 25%, corn, chicken fat (preserved with mixed tocopherols, a source of vitamin E), dried apples, brewer's yeast, hydrolyzed chicken liver, shrimp 1.5%, salmon oil 1%, seaweed 0.5%, glucosamine sulfate 0.02%, inulin from chicory root (a source of mannan-oligosaccharides) 0.018%, plant mixture (fennel, basil, sage) 0.018%, fructooligosaccharides 0.012%, yucca schidigera extract 0.01%, chondroitin sulfate extract 0.012%, marigold extract 0.01%. Additives per kg: vitamin A (3a672a) 18,000 IU, vitamin E (alpha-tocopherol) (3a700) 500 mg, vitamin D3 (E671) 1,600 IU, choline chloride (3a890) 700 mg, biotin (3a880) 0.7 mg, niacin (3a314) 15 mg, calcium pantothenate (3a841) 12 mg, vitamin B12 (cyanocobalamin) 0.05 mg, vitamin B2 (riboflavin) 4 mg, vitamin B1 (3a820) 1 mg, vitamin B6 (3a831) 1.5 mg, folic acid (3a316) 0.6 mg, iron (E1) 90 mg, iodine (3b201) 0.7 mg, organic copper (E4) 18 mg, organic zinc (E6) 100 mg, organic manganese (E5) 45 mg, organic selenium (3b8.10) 0.2 mg, DL-methionine (3c301) 15 mg, L-lysine (3.2.3) 3 mg.",
          content: "Crude protein 25%, crude fat 13%, crude fiber 3%, moisture 10%, crude ash 6.8%, calcium 1.6%, phosphorus 1.2%, Omega-3 fatty acids 0.22%, Omega-6 fatty acids 1.28%. ME: 3,700 kcal/kg."
        },
        {
          id: 8,
          title: "Taste of the Wild Pacific Stream Salmon",
          imageUrl: "https://www.zoocity.hr/media/catalog/product/cache/3e64ba88bd29473e14083a708e79c587/t/a/taste_of_the_wild_pacific_stream_2.jpg",
          productCode: "TWW003",
          description: "This egg-free recipe derives all its animal proteins from fish, which means it is rich in omega fatty acids that help maintain healthy skin and a shiny coat. The unique flavors of smoked salmon, vegetables, legumes, and fruits provide appropriate levels of nutrients for overall health and vitality of adult dogs.",
          size: "2 kg",
          price: 16.8,
          ingredients: "Salmon (21%), fish meal, sweet potatoes, potatoes, peas, canola oil, lentils, salmon meal, smoked salmon (4%), potato fiber, minerals, dried chicory root, tomatoes, blueberries, raspberries, yucca schidigera extract.",
          content: "Crude protein 25.0%, crude fat 15.0%, crude fiber 3.0%, crude ash 8.9%, moisture 10.0%, Omega-6 fatty acids 2.4%, Omega-3 fatty acids 0.3%. Additives (per kg): Vitamins: vitamin A 10,000 IU/kg, vitamin D3 750 IU/kg, vitamin E 150 IU/kg, taurine 0.1%. Trace elements: iron (as iron (II) chelate of amino acids hydrate) 9 mg/kg, copper (as copper (II) chelate of amino acids hydrate) 1.05 mg/kg, iron (as iron (II) sulfate monohydrate) 18 mg/kg, copper (as copper (II) sulfate pentahydrate) 1.75 mg/kg, iodine (as potassium iodide) 1.485 mg/kg, manganese (as manganese chelate of amino acids hydrate) 2.1 mg/kg, manganese (as manganese (II) oxide) 7.7 mg/kg, manganese (as manganese sulfate monohydrate) 4.48 mg/kg, zinc (as zinc chelate of amino acids hydrate) 11.25 mg/kg, manganese (as zinc sulfate monohydrate) 26.625 mg/kg, selenium (as sodium selenite) 0.018 mg/kg."
        },
        {
          id: 9,
          title: "Pro Plan Adult duo delice mini govedina 2,5 kg",
          imageUrl: "https://www.zoocity.hr/media/catalog/product/cache/3e64ba88bd29473e14083a708e79c587/p/p/ppd_adult_duo_delice_mini_govedina_2_5_kg.jpg",
          productCode: "10868",
          description: "Pro Plan Adult duo delice Mini Beef is a complete dry food for adult small and mini dog breeds.",
          size: "2.5 kg",
          price: 20,
          ingredients: "Beef (17%), dehydrated poultry protein, wheat, corn, animal fat, wheat gluten meal, dried beet pulp, rice (4%), corn grits, hydrolyzed meat and animal by-products, minerals, propylene glycol, dried egg, fish oil, malt flour. Nutritional additives: IU/kg: Vit. A: 33,000; Vit. D3: 1,100; Vit. E: 550; mg/kg: Vit. C: 140; ferrous sulfate monohydrate: 237; calcium iodate anhydrous: 3.0; copper sulfate pentahydrate: 47; manganese sulfate monohydrate: 110; zinc sulfate monohydrate: 400; sodium selenite: 0.28. Technological additives: extracts of tocopherols from vegetable oils: 55 mg/kg.",
          content: "Crude protein 28%, crude fat 17%, crude ash 7.5%, crude fiber 2%"
        },
        {
          id: 10,
          title: "Dog Chow Adult Chicken",
          imageUrl: "https://www.zoocity.hr/media/catalog/product/cache/3e64ba88bd29473e14083a708e79c587/d/o/dog_chow_adult_piletina_14_kg_1.jpg",
          productCode: "ALC85416",
          description: "Dog Chow Adult Chicken is a complete food for adult dogs with chicken.",
          size: "2.5 kg",
          price: 9.5,
          ingredients: "Cereals, meat and animal derivatives (8%*), vegetable protein extracts, oils and fats, derivatives of vegetable origin, vegetables (dried chicory root 1.1%), minerals. *Equivalent to 16% rehydrated meat and animal derivatives: minimum 4% chicken. Additives per kg: Vit. A: 21,000; Vit. D3: 1,200; Vit. E: 100; mg/kg: Vit. B group: 83.5; Fe (E1): 266; I (E2): 3.3; Cu (E4): 38; Mn (E5): 20.3; Zn (E6): 429; Se (E8): 0.47. Technological additives: antioxidants.",
          content: "Crude protein 25%, crude fat 12%, crude ash 8%, crude fiber 3%."
        }
      ]
    },
    {
      categoryName: "bowls",
      items: [
        {
          id: 11,
          title: "Trixie Ceramic Dog Bowl with Rubber Rim 0.4 L / Diameter 12 cm, Grey",
          imageUrl: "https://www.zoocity.hr/media/catalog/product/cache/3e64ba88bd29473e14083a708e79c587/t/x/tx24360_trixie_kerami_ka_s_gumenim_rubom_0_4_lfi-12_cm_siva_1_.jpg",
          productCode: "TX24360",
          description: "This ceramic dog bowl has a rubber rim to prevent slipping and sliding while your dog eats or drinks. It has a capacity of 0.4 liters and a diameter of 12 cm. The grey color adds a stylish touch to your dog's feeding area.",
          "brand": "Trixie",
          price: 8.63
        },
        {
          id: 12,
          title: "Trixie Ceramic Dog Bowl with Paw Print Pattern, 0.3 L, Brown",
          imageUrl: "https://www.zoocity.hr/media/catalog/product/cache/3e64ba88bd29473e14083a708e79c587/t/r/trixie_posuda_kerami_ka_sme_a_uzorak__ape_0_3l.jpg",
          productCode: "TX24531",
          description: "This ceramic dog bowl features a charming paw print pattern. It has a capacity of 0.3 liters and is perfect for small to medium-sized dogs. The brown color adds a warm and inviting look to the bowl.",
          "brand": "Trixie",
          price: 6.24
        },
        {
          id: 13,
          title: "Trixie Lightweight Plastic Dog Bowl 0.5 L / Diameter 14 cm",
          imageUrl: "https://www.zoocity.hr/media/catalog/product/cache/3e64ba88bd29473e14083a708e79c587/t/r/trixie_posuda_plasti_na_lagana_crna_1.jpg",
          productCode: "TX2473",
          description: "This lightweight plastic dog bowl is easy to clean and suitable for both food and water. It has a capacity of 0.5 liters and a diameter of 14 cm. The bowl is designed to be durable and practical for everyday use.",
          "brand": "Trixie",
          price: 2.39
        },
        {
          id: 14,
          title: "Trixie Metal Dog Bowl 1.8 L / Diameter 20 cm",
          imageUrl: "https://www.zoocity.hr/media/catalog/product/cache/3e64ba88bd29473e14083a708e79c587/t/x/tx24843_trixie_posuda_metalna_1_8_l.jpg",
          productCode: "TX24843",
          description: "This metal dog bowl has a large capacity of 1.8 liters, making it suitable for medium to large-sized dogs. It has a diameter of 20 cm and provides a sturdy and stable feeding option for your pet.",
          "brand": "Trixie",
          price: 3.78
        },
        {
          id: 15,
          title: "Trixie Ceramic Dog Bowl 1.6 L / Diameter 20 cm, White",
          imageUrl: "https://www.zoocity.hr/media/catalog/product/cache/3e64ba88bd29473e14083a708e79c587/t/x/tx25025_trixie_posuda_kerami_ka_1_6_lfi-20_cm_bijela.jpg",
          productCode: "TX25025",
          description: "This ceramic dog bowl has a generous capacity of 1.6 liters, making it ideal for larger dogs or multiple pets. The white color gives it a clean and classic appearance, while the smooth surface makes it easy to clean.",
          "brand": "Trixie",
          price: 13.27
        },
        {
          id: 16,
          title: "Trixie Ceramic Dog Bowl - Pet's Home - 0.8 L / Diameter 16 cm",
          imageUrl: "https://www.zoocity.hr/media/catalog/product/cache/3e64ba88bd29473e14083a708e79c587/t/r/trixie_posuda_kerami_ka__pet_s_home_plava.jpg",
          productCode: "TX25051",
          description: "This ceramic dog bowl is part of the - Pet's Home collection. It has a capacity of 0.8 liters and a diameter of 16 cm. The bowl features a stylish design and is suitable for both food and water.",
          "brand": "Trixie",
          price: 8.1
        },
        {
          id: 17,
          title: "Trixie Ceramic Dog Bowl - Pet's Home - 0.3 L / Diameter 12 cm",
          imageUrl: "https://www.zoocity.hr/media/catalog/product/cache/3e64ba88bd29473e14083a708e79c587/t/x/tx25053_trixie_posuda_pets_home.jpg",
          productCode: "TX25053",
          description: "This ceramic dog bowl is another option from the - Pet's Home collection. It has a capacity of 0.3 liters and a diameter of 12 cm, making it perfect for small dogs or puppies.",
          "brand": "Trixie",
          price: 5.97
        },
        {
          id: 18,
          title: "Trixie Ceramic Dog Bowl - Junior - 0.8 L / Diameter 16 cm",
          imageUrl: "https://www.zoocity.hr/media/catalog/product/cache/3e64ba88bd29473e14083a708e79c587/t/r/trixie_posuda_kerami_ka_kerami_ka_junior_ljubi_asta_1.jpg",
          productCode: "TX25127",
          description: "This ceramic dog bowl is specially designed for puppies or small dogs. It has a capacity of 0.8 liters and a diameter of 16 cm. The bowl features a cute and playful design.",
          "brand": "Trixie",
          price: 9.29
        },
        {
          id: 19,
          title: "Trixie Dog Bowls on Wooden Stand 2 x 0.45 L / Diameter 12 cm, 36 x 7 x 19 cm",
          imageUrl: "https://www.zoocity.hr/media/catalog/product/cache/3e64ba88bd29473e14083a708e79c587/t/r/tr_posude_na_drvenom_postolju_2x0_45_lfi-12_cm_36x7x19.jpg",
          productCode: "TX24357",
          description: "This set includes two ceramic dog bowls placed on a wooden stand. Each bowl has a capacity of 0.45 liters and a diameter of 12 cm. The wooden stand adds an elevated and stylish feeding solution for your pets.",
          "brand": "Trixie",
          price: 23.23
        },
        {
          id: 20,
          title: "Trixie Dog Stand with Two Steel Bowls 2.8 L",
          imageUrl: "https://www.zoocity.hr/media/catalog/product/cache/3e64ba88bd29473e14083a708e79c587/t/r/trixie_stalak_s_dvije__eli_ne_posude_2_8_l_.jpg",
          productCode: "TX24922",
          description: "This dog stand comes with two stainless steel bowls, each with a capacity of 2.8 liters. The stand provides a raised feeding position, promoting better digestion and reducing neck strain for your dog. It is made of durable steel and is suitable for medium to large-sized dogs.",
          "brand": "Trixie",
          price: 42.47
        }
      ]
    },
    {
      categoryName: "beds",
      items: [
        {
          id: 21,
          title: "Trixie Dog Bed Leona 60x50 cm Pink/Grey",
          imageUrl: "https://www.zoocity.hr/media/catalog/product/cache/3e64ba88bd29473e14083a708e79c587/t/r/trixie_krevet_lona_60x50_cm_rozo_sivi.jpg",
          productCode: "TX37656",
          "brand": "Trixie",
          description: "Trixie Leona Dog Bed is made of fabric and features a polyester cover and polyester fleece filling. It has a stable shape due to its high-density filling. The bed includes a reversible inner cushion with a removable cover that is machine washable, while the rest of the bed should be hand washed. It also has a non-slip bottom. Dimensions of the bed: 60 x 50 cm.",
          price: 59.45
        },
        {
          id: 22,
          title: "Trixie Dog Bed Gino 70x45 cm",
          imageUrl: "https://www.zoocity.hr/media/catalog/product/cache/3e64ba88bd29473e14083a708e79c587/t/r/tr_lezaj_gino_70x45_cm.jpg",
          productCode: "TX37592",
          "brand": "Trixie",
          description: "Trixie Gino Dog Bed is a comfortable and soft bed for your pet. It is made of plush material, providing warmth, and filled with 8-14 cm thick polyester material for extra comfort. It is lightweight, making it ideal for travel or as a bed during transportation. The bed has a beige color with paw print motifs, making it easy to blend with any space. The cover is removable and can be washed at 30°. Dimensions of the bed: 70x45 cm.",
          price: 29.72
        },
        {
          id: 23,
          title: "Trixie Dog Bed Tammy fi 50",
          imageUrl: "https://www.zoocity.hr/media/catalog/product/cache/3e64ba88bd29473e14083a708e79c587/t/r/tr_lezaj_tammy_fi_50.jpg",
          productCode: "TX37377",
          "brand": "Trixie",
          description: "Soft plush material; Polyester cover; Polyester filling; Hand wash only.",
          price: 21.23
        },
        {
          id: 24,
          title: "Trixie Dog Bed Harvey fi-60 cm black and white",
          imageUrl: "https://www.zoocity.hr/media/catalog/product/cache/3e64ba88bd29473e14083a708e79c587/t/r/tr_le_aj_harvey_fi-60_cm_bijelo-crni.jpg",
          productCode: "TX37319",
          "brand": "Trixie",
          description: "Trixie Harvey Dog Cushion is a comfortable and soft resting place for your pet. The long plush fibers provide a soothing effect on pets. It has an aesthetically pleasing and attractive design that easily fits into any environment. The bottom is non-slip. The cover is removable and can be washed at 30°C in the washing machine, while the inner part is recommended for hand washing.",
          price: 50.96
        },
        {
          id: 25,
          title: "Trixie Dog Bed Junior Bunny fi-40 cm light gray/lilac",
          imageUrl: "https://www.zoocity.hr/media/catalog/product/cache/3e64ba88bd29473e14083a708e79c587/t/r/trixie_le_aj_junior_zeko_fi-40_cm_svij.siva_lila.jpg",
          productCode: "TX38252",
          "brand": "Trixie",
          description: "Trixie Junior Dog Bed is designed for puppies or small breed dogs. It is made of plush material, with a polyester cover and polyester fleece filling. It has a non-slip bottom. Pillow dimensions: diameter 40 cm.",
          price: 16.99
        },
        {
          id: 26,
          title: "Trixie Dog Cushion Harvey 140x90 cm black and white",
          imageUrl: "https://www.zoocity.hr/media/catalog/product/cache/3e64ba88bd29473e14083a708e79c587/t/r/trixie_jastuk_harvey_120x80_cm_bijelo_crni_3.jpg",
          productCode: "TX38011",
          "brand": "Trixie",
          description: "Trixie Harvey Dog Cushion offers optimal comfort with its soft cover and long-haired plush material that can be easily removed for cleaning. It is ideal for medium and large breed dogs. The bottom is non-slip for better stability. The removable cover can be machine washed, while the filling is recommended for hand washing. Pillow dimensions: 140 x 90 cm.",
          price: 100.87
        },
        {
          id: 27,
          title: "Ferplast Dog Bed Dandy 45 cotton",
          imageUrl: "https://www.zoocity.hr/media/catalog/product/cache/3e64ba88bd29473e14083a708e79c587/f/e/ferplast_le_aj_dandy_1.jpg",
          productCode: "F82941099",
          "brand": "Ferplast",
          description: "Ferplast Dandy is a padded oval-shaped bed for dogs and cats with a cotton fabric cover. It has high side walls and is lower on the entrance side. The internal cushion is included. The cushion can be removed as needed for easier maintenance and cleaning. The bed is machine washable at 30°C. Bed dimensions: 45 x 35 x 13 cm.",
          price: 19.11
        },
        {
          id: 28,
          title: "Ferplast Dog Bed Tommy 65 brown",
          imageUrl: "https://www.zoocity.hr/media/catalog/product/cache/3e64ba88bd29473e14083a708e79c587/f/e/ferplast_le_aj_tommy_sme_i.jpg",
          productCode: "F83765012",
          "brand": "Ferplast",
          description: "Padded bed made of plush and durable fabric for dogs, comes with a removable heart-shaped cushion. Suitable for small and medium-sized dogs. Made of robust, abrasion-resistant fabric with a tweed effect. Open on two sides for easier access. Comfortable backrests. The padded mattress is covered with fabric for extra comfort. Double-sided heart-shaped cushion with one side made of fabric and one side made of plush. It can be machine washed at 30°C. Bed dimensions: 56 x 32 cm.",
          price: 45.65
        },
        {
          id: 29,
          title: "Hudog Dog Pillow with Letters S",
          imageUrl: "https://www.zoocity.hr/media/catalog/product/cache/3e64ba88bd29473e14083a708e79c587/h/u/hudp-com2-l_1.jpg",
          productCode: "HUDP-COM2-S",
          "brand": "Hudog",
          description: "The bed comes with a matching bone-shaped pillow that can be removed as needed. Pets love to rest their heads on the elevated part. The outer cover of the pillow is easily removable thanks to the zipper closure, making maintenance simple. The pillow is made of Dakota fabric (durable decorative cotton fabric resistant to wear and tear). This lightweight pillow can be carried with you during travels to provide comfort for your pet. The pillow cover is machine washable at 60°C. Tumble drying on low heat. Pillow dimensions: 60 x 40 x 14 cm.",
          price: 42.47
        },
        {
          id: 30,
          title: "Trixie Dog Bed Tammy fi 70",
          imageUrl: "https://www.zoocity.hr/media/catalog/product/cache/3e64ba88bd29473e14083a708e79c587/t/r/tr_lezaj_tammy_fi_70.jpg",
          productCode: "TX37378",
          "brand": "Trixie",
          description: "Soft plush. Polyester cover. Polyester filling. Hand wash only.",
          price: 33.97
        }
      ]
    },
    {
      categoryName: "toys",
      items: [
        {
          id: 31,
          title: "Trixie Christmas Reindeer Fabric Dog Toy 42 cm Brown/Grey, 1 piece",
          imageUrl: "https://www.zoocity.hr/media/catalog/product/cache/3e64ba88bd29473e14083a708e79c587/t/r/trixie_igra_ka_sob_tkanina.jpg",
          productCode: "TX92501",
          "brand": "Trixie",
          description: "Trixie Christmas dog toy in the shape of a reindeer is made of durable fabric with a sound to attract your pet's attention and provide hours of interactive fun. These toys are not chew-proof or indestructible. Supervised play will help prolong the life of the toys. It's a perfect gift for your pet under the Christmas tree.",
          price: 11.68
        },
        {
          id: 32,
          title: "Trixie Activity Chess Dog Toy 40x27 cm",
          imageUrl: "https://www.zoocity.hr/media/catalog/product/cache/3e64ba88bd29473e14083a708e79c587/t/r/trixie_activity_chess_40x27_cm.jpg",
          productCode: "TX32022",
          "brand": "Trixie",
          description: "Strategic game with 4 cones, various indentations, and drawers. Non-slip base due to rubber feet. Material: plastic. Training instructions included.",
          price: 23.89
        },
        {
          id: 33,
          title: "Trixie Activity Snack Roll Dog Toy 14 cm",
          imageUrl: "https://www.zoocity.hr/media/catalog/product/cache/3e64ba88bd29473e14083a708e79c587/t/r/trixie_activity_snack_roll_14_cm.jpg",
          productCode: "TX32020",
          "brand": "Trixie",
          description: "Trixie Activity Snack Roll toy is a perfect toy for your pet's activity. Simply open the lid and fill the toy with your pet's favorite treats. Inside the toy, there are 3 rods that can be adjusted to regulate the release speed of the treats.",
          price: 4.91
        },
        {
          id: 34,
          title: "Trixie Ring Toy with Tennis Ball Diameter 18 cm",
          imageUrl: "https://www.zoocity.hr/media/catalog/product/cache/3e64ba88bd29473e14083a708e79c587/t/r/trixie_igra_ka_prsten_s_tenis_lopticom_fi-18_cm_crvena.jpg",
          productCode: "TX3266",
          "brand": "Trixie",
          description: "Trixie Ring Toy with Tennis Ball is a suitable toy for pulling and tugging, great for interactive play with your pet. Material: cotton, polyester. Toy diameter: ø 6 cm / ø 18 cm.",
          price: 3.32
        },
        {
          id: 35,
          title: "Trixie Dentafun Rubber Bone Dog Toy Mintfresh 11 cm",
          imageUrl: "https://www.zoocity.hr/media/catalog/product/cache/3e64ba88bd29473e14083a708e79c587/t/r/tr_igra_ka_dentafun_gumena_kost_mintfresh_11_cm.jpg",
          productCode: "TX32943",
          "brand": "Trixie",
          description: "Made of natural rubber, this Trixie Dentafun Rubber Bone Dog Toy is ideal for puppies during teething. It has a mint flavor and helps in dental and gum care.",
          price: 7.83
        },
        {
          id: 36,
          title: "Trixie Jute Bite Roll Dog Toy 25 cm",
          imageUrl: "https://www.zoocity.hr/media/catalog/product/cache/3e64ba88bd29473e14083a708e79c587/t/r/trixie_igra_ka_jutena_rola_za_zagriz_25_cm.jpg",
          productCode: "TX3295",
          "brand": "Trixie",
          description: "Trixie Jute Bite Roll Dog Toy is a woven jute toy with handles. It provides a great chewing and tugging experience for your dog.",
          price: 6.64
        },
        {
          id: 37,
          title: "Trixie Lick'n'Snack Tray Toy TPR/PP 20x20 cm",
          imageUrl: "https://www.zoocity.hr/media/catalog/product/cache/3e64ba88bd29473e14083a708e79c587/t/r/tr_igracka_lick_n_snack_pladanj_tpr-pp_20x20_cm.jpg",
          productCode: "TX34952",
          "brand": "Trixie",
          description: "The Trixie Lick'n'Snack Tray Toy is a treat-dispensing toy that provides a calming effect for your pet and ensures quiet periods. It allows for slow release of treats over an extended period and can be filled with pastes, wet food, or yogurt. You can also fill it with treats and freeze it for a refreshing surprise.",
          price: 10.35
        },
        {
          id: 38,
          title: "Trixie Latex Squeaky Pig Dog Toy 23 cm",
          imageUrl: "https://www.zoocity.hr/media/catalog/product/cache/3e64ba88bd29473e14083a708e79c587/t/r/trixie_igra_ka_latex_pig_rok_e_23_cm.jpg",
          productCode: "TX3537",
          "brand": "Trixie",
          description: "Made of latex, this Trixie Latex Pig Dog Toy produces an original animal sound (squeaking). It is 23 cm long and provides interactive fun for your dog.",
          price: 6.5
        },
        {
          id: 39,
          title: "Trixie Plush Dog Toy 4 Figures 17 cm",
          imageUrl: "https://www.zoocity.hr/media/catalog/product/cache/3e64ba88bd29473e14083a708e79c587/t/r/trixie_igra_ka_4_figure_17_cm_pas.jpg",
          productCode: "TX3582",
          "brand": "Trixie",
          description: "The Trixie Plush Dog Toy with 4 figures and a rope is a soft and robust toy for dogs that makes sounds. The toy dimensions are 17 cm.",
          price: 6.5
        },
        {
          id: 40,
          title: "Kong Classic XX-Large Dog Toy",
          imageUrl: "https://www.zoocity.hr/media/catalog/product/cache/3e64ba88bd29473e14083a708e79c587/k/g/kgkke_kong_classic_xx-large.jpg",
          productCode: "KGKKE",
          "brand": "Kong",
          description: "Kong toys are made of durable natural rubber and are recommended by veterinarians and dog trainers worldwide for their quality.",
          price: 33.18
        }
      ]
    },
    {
      categoryName: "hygiene",
      items: [
        {
          id: 41,
          title: "Trixie Dog and Cat Towel 50x60 cm Grey",
          imageUrl: "https://www.zoocity.hr/media/catalog/product/cache/3e64ba88bd29473e14083a708e79c587/t/r/tr_ru_nik_za_pse_i_ma_ke_50x60_cm_plavi.jpg",
          productCode: "TX2350",
          "brand": "Trixie",
          description: "The Trixie towel for dogs and cats is made of microfiber and has a size of 50 x 60 cm.",
          price: 8.49
        },
        {
          id: 42,
          title: "Trixie Paw Protection Cream for Dogs Beeswax, 50 ml",
          imageUrl: "https://www.zoocity.hr/media/catalog/product/cache/3e64ba88bd29473e14083a708e79c587/t/x/tx2571.jpg",
          productCode: "TX2571",
          "brand": "Trixie",
          description: "Trixie paw protection cream for dogs and cats contains beeswax, which protects and soothes soft paws, preventing cracks and calming existing irritations. It is especially recommended during the winter period when there is ice and road salt. It is also useful in the summer when walking on hot asphalt or near the sea due to frequent contact with salt. It can be used throughout the year during long walks on rough surfaces.",
          price: 3.85
        },
        {
          id: 43,
          title: "Trixie Cosmetics Wipes on Finger, for Ears, 50 pieces",
          imageUrl: "https://www.zoocity.hr/media/catalog/product/cache/3e64ba88bd29473e14083a708e79c587/t/r/trixie_kozmeti_ke_maramice_na_prst_za_u_i_50_kom.jpg",
          productCode: "TX29392",
          "brand": "Trixie",
          description: "These cosmetic wipes by Trixie are designed to be worn on your finger and are suitable for cleaning your pet's ears. Each pack contains 50 wipes.",
          price: 9.16
        },
        {
          id: 44,
          title: "Trixie Dental Set Toothpaste/Toothbrush/Finger Cover",
          imageUrl: "https://www.zoocity.hr/media/catalog/product/cache/3e64ba88bd29473e14083a708e79c587/t/x/tx2561.jpg",
          productCode: "TX2561",
          "brand": "Trixie",
          description: "The Trixie dental set includes toothpaste, a toothbrush, and a finger cover, providing you with the necessary tools for your pet's dental hygiene.",
          price: 6.11
        },
        {
          id: 45,
          title: "Trixie Instyle Brush Wooden Handle One-Sided 18x10 cm",
          imageUrl: "https://www.zoocity.hr/media/catalog/product/cache/3e64ba88bd29473e14083a708e79c587/t/r/tr_etka_instyle_drvena_dr_ka_jednostrana_18x10_cm.jpg",
          productCode: "TX2300",
          "brand": "Trixie",
          description: "This Trixie Instyle brush features a wooden handle and is designed for use on short to medium-long straight, medium-long to long, coarse, and curly hair.",
          price: 4.38
        },
        {
          id: 46,
          title: "Trixie Dog Shampoo for White/Light Fur, 250 ml",
          imageUrl: "https://www.zoocity.hr/media/catalog/product/cache/3e64ba88bd29473e14083a708e79c587/t/r/trixie__ampon_za_pse_bijelo_krzno.jpg",
          productCode: "TX2914",
          "brand": "Trixie",
          description: "This shampoo by Trixie is specially formulated for dogs with white/light fur. It helps enhance the natural color of the coat and gives it a shiny appearance. After washing, your dog's coat will look healthy and have a pleasant fragrance.",
          price: 3.78
        },
        {
          id: 47,
          title: "Trixie Dog Conditioner with Jojoba, 250 ml",
          imageUrl: "https://www.zoocity.hr/media/catalog/product/cache/3e64ba88bd29473e14083a708e79c587/t/r/tr_regenerator_jojoba_250_ml.jpg",
          productCode: "TX29193",
          "brand": "Trixie",
          description: "Trixie Dog Conditioner with jojoba oil will provide your pet's coat with a silky shine and a well-groomed appearance. It is suitable for long-haired dogs as it helps with detangling.",
          price: 4.11
        },
        {
          id: 48,
          title: "Trixie Dog Detangling Spray, 175 ml",
          imageUrl: "https://www.zoocity.hr/media/catalog/product/cache/3e64ba88bd29473e14083a708e79c587/t/r/trixie_sprej_za_ra_e_ljavanje_175_ml_.jpg",
          productCode: "TX2930",
          "brand": "Trixie",
          description: "Trixie Dog Detangling Spray is odorless and non-greasy. It facilitates daily combing and softens the coat. The formula repels dust, dirt, and water. It is suitable for use on long-haired dogs.",
          price: 4.78
        },
        {
          id: 49,
          title: "Ferplast Nail Clippers for Dogs",
          imageUrl: "https://www.zoocity.hr/media/catalog/product/cache/3e64ba88bd29473e14083a708e79c587/f/e/ferplast_klije_ta_za_nokte_small.jpg",
          productCode: "F85986899",
          "brand": "Ferplast",
          description: "These nail clippers by Ferplast are designed specifically for dogs. They provide a safe and easy way to trim your pet's nails.",
          price: 12
        },
        {
          id: 50,
          title: "Inodorina Dry Shampoo Mousse Talcum, 300 ml",
          imageUrl: "https://www.zoocity.hr/media/catalog/product/cache/3e64ba88bd29473e14083a708e79c587/i/n/in1013.jpg",
          productCode: "IN1012",
          "brand": "Inodorina",
          description: "Inodorina Dry Shampoo Mousse is ideal for daily grooming of fur for dogs, cats, puppies, and kittens without using water. Its gentle formula with a delicate powder scent deeply cleans and protects the coat and skin while maintaining the natural pH balance. After washing, the hair remains shiny and fragrant for a longer time. Directions: Shake well before use. Gently massage the foam into your pet's coat until fully absorbed. Brush to distribute evenly.",
          price: 7.7
        }
      ]
    }
  ];

export default SHOP_DATA;