const router = require("express").Router();

// import des 3 controllers
const memberController = require("./controllers/memberController");

// List
router.get("/membres", memberController.member);
router.post("/create", memberController.create);

module.exports = router;
