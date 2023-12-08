const Hero = require("../Models/heroModel");


exports.listHeros = async (req, res) => {
  try {
    const heros = await Hero.find(); //[{}]
    res.json(heros);
  } catch (err) {
    res.json(err);
  }
};


exports.addHero = async (req, res) => {
  try {
    console.log("bonjour"); //tester
    const hero = req.body; 
    const newHero = await Hero.create(hero);
    res.json(newHero);
  } catch (err) {
    res.json(err);
  }
};

//delete hero

exports.deleteHero = async (req, res) => {
  try {
   
    const heroId = req.params.id;
    const deletedHero = await Hero.findOneAndDelete({ _id: heroId });

    if (!deletedHero) {
      res.json("hero with given id not found ");
    } else {
      res.json("hero sucessfully deleted ");
    }
  } catch (err) {
    res.json(err);
  }
};

//update user
exports.updateHero = async (req, res) => {
  try {
   
    const heroId = req.params.id;
    const existedHero = await User.findOne({ _id: heroId });

    if (!existedCar) {
      res.json("car with given id not found ");
    } else {
      // si ok ==> n9oul lel mongo db yamel maj
      //na9ra newdata
      const newData = req.body;
      const updatedHero = await User.findByIdAndUpdate(heroId, {
        $set: {
          name: newData.name,
          power: newData.power,
          imageUrl: newData.imageUrl,
        },
      });
      res.json(updatedHero);
    }
  } catch (err) {
    res.json(err);
  }
};