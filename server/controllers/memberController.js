const Members = require("../models/members");

const memberController = {
  //   read all members
  member: async (req, res) => {
    try {
      // recover members
      const allMembers = await Members.findAll();
      console.log(allMembers);
      // send a reply
      res.status(201).json(allMembers);
    } catch (error) {
      console.trace(error);
      res.status(500).json(error.toString());
    }
  },
  // create a member
  create: async (req, res) => {
    try {
      if (!req.body.input) {
        throw new Error("Veuillez rentrer le membre de l'équipage");
      }

      const newMember = await Members.create({
        name: req.body.input,
      });

      res.status(201).json(newMember);
    } catch (error) {
      console.trace(error);
      res.status(500).json(error.toString());
    }
  },
};

module.exports = memberController;
