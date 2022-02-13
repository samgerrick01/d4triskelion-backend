import mongoose from "mongoose";
import addMember from "../models/addMember.js";

export const getMembers = async (req, res) => {
  try {
    const postMembers = await addMember.find();

    res.status(200).json(postMembers);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createMember = async (req, res) => {
  const member = req.body;

  const newMember = new addMember(member);

  try {
    await newMember.save();

    res.status(201).json(newMember);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateMember = async (req, res) => {
  const { id: _id } = req.params;
  const member = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No Member with that id");

  const updatedMember = await addMember.findByIdAndUpdate(
    _id,
    { ...member, _id },
    {
      new: true,
    }
  );

  res.json(updatedMember);
};

export const deleteMember = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No Member with that id");

  await addMember.findByIdAndRemove(id);

  res.json({ message: "Member deleted successfully" });
};

export const getSingleMember = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(405).send("No Member with that id");

  try {
    const getSingle = await addMember.findById(id);

    res.status(200).json(getSingle);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
