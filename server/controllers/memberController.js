const Members = require("../models/members");

const memberController = {
  //   read all members
  member: async (req, res) => {
    try {
      // recover members
      const allMembers = await Members.findAll();
      console.log(allMembers);
      // send a reply
      res.status(200).json(allMembers);
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

      res.status(200).json(newMember);
    } catch (error) {
      console.trace(error);
      res.status(500).json(error.toString());
    }
  },
  updateMember: async (req, res) => {
    console.log(req.body);
    console.log(res);
    try {
      const { memberId } = req.params;
      console.log("memberId =>", memberId);
      const inputValue = req.body.inputUpdate;
      console.log("inputValue =>", inputValue);
      const updated = await Members.update(
        { name: inputValue },
        {
          where: { id: memberId },
        }
      );

      if (updated) {
        const updatedMember = await Members.findAll();

        return res.status(200).json({
          updatedMember,
          message: "le profile du membre est mis à jour",
          updated,
        });
      }
      throw new Error("Le membre n'existe pas");
    } catch (error) {
      return res.status(500).send(error.message);
    }
  },
  deleteMember: async (req, res) => {
    try {
      const { memberId } = req.params;
      const deleted = await Members.destroy({
        where: { id: memberId },
      });

      if (deleted) {
        const allMembersAfterDelete = await Members.findAll();
        console.log("allMembersAfterDelete=>", allMembersAfterDelete);
        return res.status(200).json({
          allMembersAfterDelete,
          message: "le membre a été suprimé avec succés",
          deleted,
        });
      }
      throw new Error("Member not found");
    } catch (error) {
      return res.status(500).send(error.message);
    }
  },
};

module.exports = memberController;
