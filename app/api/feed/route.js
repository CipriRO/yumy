import Recipes from "@/app/models/Recipes";
import connectDB from "@/app/lib/mongodb/connectDB";
import { NextResponse } from "next/server";

export const GET = async () => {
  await connectDB();
  const feed = await Recipes.find();
  return NextResponse.json(feed, { status: 200 });
};
