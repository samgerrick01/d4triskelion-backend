import mongoose from "mongoose";

const memberSchema = mongoose.Schema({
  fullName: String,
  allias: String,
  age: String,
  birthDate: Date.parse(JSON),
  tBirth: Date.parse(JSON),
  gtDuringIR: String,
  mwwIntDuringIR: String,
  mwwExtDuringIR: String,
  chapter: String,
  tStatus: String,
  selectedFile: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const addMember = mongoose.model("AddMember", memberSchema);

export default addMember;
