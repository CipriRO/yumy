import mongoose, { Schema } from "mongoose";

const RecipeSchema = new Schema({
  name: String,
  likes: String,
  image: String,
  blurImage: String,
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
  userId: mongoose.SchemaTypes.ObjectId,
});

const Recipes =
  mongoose.models.recipes || mongoose.model("recipes", RecipeSchema);

export default Recipes;
