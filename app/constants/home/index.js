export const RecipesList = [
  {
    id: 0,
    name: "Grill Chicken",
    author: "Emily Rodriguez",
    likes: "10.2M",
    image: "recipe-community-2.jpg",
    recipe: {
      info: {
        cookTime: "30 mins",
        servings: 8,
        difficulty: 0,
        tags: ["Grilling", "Chicken", "Dinner"],
        description:
          "Juicy and flavorful grilled chicken thighs perfect for a family dinner.",
        caloriesPerServing: 250,
      },
      ingredients: [
        "8 bone-in skin-on chicken thighs, trimmed",
        "4 teaspoons Diamond Crystal kosher salt (or 2 teaspoons fine salt)",
        "1/2 teaspoon ground black pepper",
      ],
      instructions: `
        1. Season the chicken thighs with salt and pepper, ensuring even coverage.
        2. Preheat the grill to medium-high heat (about 375°F to 400°F).
        3. Place the seasoned chicken thighs on the grill, skin side down.
        4. Grill for about 6-8 minutes on each side, or until the internal temperature reaches 165°F.
        5. Remove the chicken thighs from the grill and let them rest for a few minutes before serving.
        6. Enjoy your delicious grilled chicken thighs with your favorite sides!
      `,
    },
  },
  {
    id: 1,
    name: "Savory Dutch Baby",
    author: "Adam Patel",
    likes: "982K",
    image: "recipe-community-1.jpg",
    recipe: {
      info: {
        cookTime: "20 mins",
        servings: 4,
        difficulty: 2,
        tags: ["Breakfast", "Brunch", "Dutch Baby"],
        description:
          "A savory twist on the classic Dutch baby pancake, perfect for breakfast or brunch.",
        caloriesPerServing: 300,
      },
      ingredients: [
        "3 large eggs",
        "3/4 cup whole milk",
        "3/4 cup all-purpose flour",
        "1/4 teaspoon salt",
        "1/2 teaspoon black pepper",
        "3 tablespoons unsalted butter",
        "1/4 cup grated Parmesan cheese",
        "2 tablespoons chopped fresh chives",
        "2 tablespoons chopped fresh parsley",
      ],
      instructions: `
        1. Preheat the oven to 425°F.
        2. In a mixing bowl, whisk together the eggs, milk, flour, salt, and pepper until smooth.
        3. Melt the butter in a cast-iron skillet over medium heat.
        4. Pour the batter into the skillet and sprinkle with Parmesan cheese, chives, and parsley.
        5. Transfer the skillet to the preheated oven and bake for 15-20 minutes, or until puffed up and golden brown.
        6. Remove from the oven and serve immediately, garnished with additional herbs if desired.
      `,
    },
  },
  {
    id: 2,
    name: "Ziti-Style Spaghetti Squash",
    author: "Sophia Nguyen",
    likes: "91.3M",
    image: "recipe-of-the-year.jpg",
    recipe: {
      info: {
        cookTime: "45 mins",
        servings: 6,
        difficulty: 1,
        tags: ["Vegetarian", "Pasta", "Healthy"],
        description:
          "A healthier alternative to traditional ziti, using spaghetti squash and flavorful marinara sauce.",
        caloriesPerServing: 200,
      },
      ingredients: [
        "1 large spaghetti squash",
        "2 tablespoons olive oil",
        "1 small onion, diced",
        "2 cloves garlic, minced",
        "1 can (14.5 ounces) diced tomatoes, drained",
        "1 teaspoon dried basil",
        "1 teaspoon dried oregano",
        "1/2 teaspoon salt",
        "1/4 teaspoon black pepper",
        "1 cup shredded mozzarella cheese",
        "1/4 cup grated Parmesan cheese",
        "2 tablespoons chopped fresh parsley, for garnish",
      ],
      instructions: `
        1. Preheat the oven to 375°F.
        2. Cut the spaghetti squash in half lengthwise and scoop out the seeds.
        3. Drizzle the cut sides of the squash with olive oil and season with salt and pepper.
        4. Place the squash halves cut side down on a baking sheet and roast in the preheated oven for 40-45 minutes, or until tender.
        5. Meanwhile, heat olive oil in a skillet over medium heat. Add the diced onion and cook until softened, about 5 minutes.
        6. Add the minced garlic, diced tomatoes, basil, oregano, salt, and pepper to the skillet. Cook for another 5 minutes.
        7. Use a fork to scrape the spaghetti-like strands from the cooked squash into a bowl.
        8. Combine the squash strands with the tomato sauce mixture and stir to coat.
        9. Transfer the mixture to a baking dish and sprinkle with mozzarella and Parmesan cheese.
        10. Bake for an additional 10-15 minutes, or until the cheese is melted and bubbly.
        11. Garnish with chopped parsley before serving.
      `,
    },
  },
];

export const HomeComments = [
  {
    name: "Merle Raco",
    content:
      "Wow, this recipe looks absolutely mouthwatering! The combination of flavors and ingredients has me drooling already. Can't wait to give it a try!",
    profile_picture: "man-1.jpg",
    liked: true,
    likes: "23k",
    time: "2h",
    replies: [
      {
        name: "Eleanora Nazemi",
        content:
          "Thanks so much for your kind words! It's always wonderful to hear that someone is excited to try out a recipe. I hope you enjoy making it as much as I did. Happy cooking!",
        profile_picture: "woman-1.jpg",
        time: "1h",
      },
    ],
  },
  {
    name: "Dwain Zoet",
    content:
      "This recipe is exactly what I've been craving lately! The photos are making my stomach growl just looking at them. Definitely saving this one!",
    profile_picture: "man-2.jpg",
    likes: "731",
    time: "13m",
    liked: true,
  },
];
