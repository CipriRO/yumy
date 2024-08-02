import Recipes from "../models/Recipes";
import connectDB from "./mongodb/connectDB";

export const getRecipeById = async (id) => {
  await connectDB();
  const data = await Recipes.findById(id);
  return data;
};
