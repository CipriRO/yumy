import Recipes from "../models/Recipes";
import Users from "../models/Users";
import connectDB from "./mongodb/connectDB";

export const getUserById = async (id) => {
  await connectDB();
  console.log(id)
  const data = await Users.findById(id).lean();
  return data;
};

export const getRecipes = async () => {
  await connectDB();
  const data = await Recipes.find().lean();

  const recipes = data.map(async (recipe) => {
    const user = await getUserById(recipe.userId);
    return { ...recipe, user };
  });

  return recipes;
};

export const getRecipeById = async (id) => {
  await connectDB();
  const data = await Recipes.findById(id).lean();
  const user = await Users.findById(data.userId).lean();
  return { ...data, user };
};
