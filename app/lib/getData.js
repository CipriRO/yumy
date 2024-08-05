"use server";
import { unstable_cache } from "next/cache";
import Recipes from "../models/Recipes";
import Users from "../models/Users";
import connectDB from "./mongodb/connectDB";

export const getUserById = unstable_cache(async (id) => {
  console.log("getUserId is running..");
  await connectDB();
  const data = await Users.findById(id, "name image").lean();
  return data;
});

export const getRecipes = unstable_cache(async () => {
  console.log("getRecipes is running..");
  await connectDB();
  const data = await Recipes.find({}, "name likes image userId").lean();

  const recipes = await Promise.all(
    data.map(async (recipe) => {
      const user = await getUserById(recipe.userId);
      return { ...recipe, user };
    }),
  );

  return recipes;
});

export const getRecipeById = unstable_cache(async (id) => {
  console.log("getRecipeById is running..");
  await connectDB();
  const data = await Recipes.findById(id).lean();
  const user = await Users.findById(data.userId).lean();
  return { ...data, user };
});
