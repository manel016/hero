const express = require("express");
const router = express.Router();

//njib les fonctionnalitées mel controller
const {
  listHeros,
  addHero,
  deleteHero,
  updateHero,
} = require("../Controllers/heroController");

//get all heros
router.get("/listHeros",listHeros);

//add hero
router.post("/ajouterhero",addHero);

//update hero
router.put("/modifierhero/:id", updateHero);

//delete hero
router.delete("/supprimerhero/:id", deleteHero);

module.exports = router;

//localhost:3000/api/hero/listheros