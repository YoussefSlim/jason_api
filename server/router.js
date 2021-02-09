const router = require("express").Router();

// import of 3 controllers
const memberController = require("./controllers/memberController");

// Members
router.get("/members", memberController.member);
router.post("/create", memberController.create);
router.put("/members/:memberId", memberController.updateMember);
router.delete("/members/:memberId", memberController.deleteMember);
module.exports = router;
