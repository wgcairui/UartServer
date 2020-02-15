/* eslint-disable camelcase */
/* jshint esversion:8 */
import { mongoose, Schema } from "./index";

const Schema_Users = new Schema({
  userId: String,
  name: String,
  user: { type: String, index: true, trim: true, required: true, unique: true },
  userGroup: {
    type: String,
    enum: ["root", "admin", "user"],
    trim: true,
    default: "user"
  },
  passwd: String,
  mail: String,
  company: String,
  tel: Number,
  creatTime: { type: Date, default: new Date() },
  modifyTime: { type: Date, default: null },
  address: String,
  status: { type: Boolean, default: true },
  messageId: String,
});

const SchemaUserBindDevice = new Schema({
  user: String,
  ECs: [String],
  UTs: [String]
});

const Users = mongoose.model("users", Schema_Users);
const UserBindDevice = mongoose.model("UserBindDevice", SchemaUserBindDevice);
export { Users, UserBindDevice };