import Feed from "@/app/models/Feed";
import connectDB from "@/app/lib/connectDB";
import { NextResponse } from "next/server";

export const GET = async() => {
  await connectDB();
  const feed = await Feed.find();
  return NextResponse.json(feed, { status:200 })
}