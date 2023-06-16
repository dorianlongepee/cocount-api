import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
});

export const UserModel = mongoose.model("User", userSchema);

UserModel.remove({});

UserModel.insertMany({
  firstname: "John",
  lastname: "Doe",
  email: "johndoe@gmail.com",
});
