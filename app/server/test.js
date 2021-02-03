const { Members } = require("./members");
const sequelize = require("./database");

const memberController = {
  //   read all members
  member: async (req, res) => {
    try {
      // recover members
      const members = await Members.findAll();
      console.log(members);
      // send a reply
      res.status(201).json(members);
    } catch (error) {
      console.trace(error);
      res.status(500).json(error.toString());
    }
  },
  // create a member
  create: async (req, res) => {
    console.log(req.body.name);
    try {
      if (!req.body.name) {
        throw new Error("Veuillez rentrer le membre de l'équipage");
      }

      // créer la carte
      const newMember = await Members.create({
        name: req.body.name,
      });
      // envoyer une réponse
      res.status(201).json(newMember);
    } catch (error) {
      console.trace(error);
      res.status(500).json(error.toString());
    }
  },
};
console.log(memberController.member());
