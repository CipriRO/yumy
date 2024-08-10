"use server";

import { isObjectIdOrHexString } from "mongoose";
import Users from "../models/Users";
import connectDB from "./mongodb/connectDB";

export const updateUserById = async (id, data) => {
  await connectDB();
  const userId = isObjectIdOrHexString(id) ? id : new ObjectId(id);
  await Users.updateOne({ _id: userId }, { ...data });
};

export const uploadImageToImgurByUrl = async (url) => {
  const res = await fetch("https://api.imgur.com/3/image", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.IMGUR_ACCESS_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      image: url,
      type: "url",
    }),
  });

  const data = await res.json();

  if (data.success) return data.data.link;
  else console.error("Image upload failed");
};
