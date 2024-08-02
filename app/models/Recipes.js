import mongoose, { Schema } from "mongoose";

const RecipeSchema = new Schema({
  name: String,
  author: String,
  authorProfile: String,
  likes: String,
  image: String,
  recipe: {
    info: {
      cookTime: String,
      servings: String,
      difficulty: String,
      tags: [String],
      description: String,
      caloriesPerServing: String,
    },
    ingredients: [String],
    instructions: String,
  },
});

const Recipes =
  mongoose.models.recipes || mongoose.model("recipes", RecipeSchema);

export default Recipes;
