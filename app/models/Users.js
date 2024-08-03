import mongoose, { Schema } from "mongoose";

const UsersSchema = new Schema({
  name: String,
  email: String,
  image: String,
  // emailVerified: Null,
});

const Users = mongoose.models.users || mongoose.model("users", UsersSchema);

export default Users;
