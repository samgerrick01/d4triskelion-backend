import express from "express";

import {
  getMembers,
  createMember,
  updateMember,
  deleteMember,
  getSingleMember,
} from "../controllers/members.js";

const router = express.Router();

router.get("/members", getMembers);
router.post("/members/add", createMember);
router.patch("/members/update/:id", updateMember);
router.delete("/members/:id", deleteMember);
router.get("/members/viewmember/:id", getSingleMember);

export default router;
