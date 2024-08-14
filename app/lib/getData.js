"use server";
import { unstable_cache } from "next/cache";
import Recipes from "../models/Recipes";
import Users from "../models/Users";
import connectDB from "./mongodb/connectDB";
import { isObjectIdOrHexString } from "mongoose";

export const getId = async (id) => {
  return isObjectIdOrHexString(id) ? id : undefined;
};

export const getUserById = unstable_cache(async (id) => {
  await connectDB();
  const userId = await getId(id);
  if (!userId) return undefined;
  const data = await Users.findById(userId, "name image").lean();
  return data;
});

export const getRecipes = unstable_cache(async () => {
  await connectDB();
  const data = await Recipes.find({}, "name likes image blurImage userId").lean();

  const recipes = await Promise.all(
    data.map(async (recipe) => {
      const user = await getUserById(recipe.userId);
      return { ...recipe, user };
    }),
  );
  return recipes;
});

export const getRecipeById = unstable_cache(async (id) => {
  await connectDB();
  const recipeId = await getId(id);
  const data = await Recipes.findById(recipeId).lean();
  if (!data) return undefined;
  const user = await Users.findById(data.userId).lean();
  return { ...data, user };
});
