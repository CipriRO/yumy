import mongoose, { Schema } from "mongoose";

const FeedSchema = new Schema({
  name: String,
  author: String,
  likes: String,
  image: String,
  recipe: {
    info: {
      cookTime: String,
      servings: Number,
      difficulty: { type: Number, min: 0, max: 2 },
      tags: [String],
      description: String,
      caloriesPerServing: Number,
    },
    ingredients: [String],
    instructions: String,
  },
});

const Feed = mongoose.models.recipes || mongoose.model("recipes", FeedSchema);

export default Feed;
