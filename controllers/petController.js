// controllers/petController.js
const Pet = require('../models/Pet');

exports.getAllPets = async(req, res) => {
    const pets = await Pet.find();
    res.json(pets);
};

exports.getPet = async(req, res) => {
    const pet = await Pet.findById(req.params.id);
    res.json(pet);
};

exports.createPet = async(req, res) => {
    const { name, type, age, description } = req.body;
    const image = req.file ? req.file.filename : null;
    const pet = new Pet({ name, type, age, description, image });
    await pet.save();
    res.json(pet);
};

exports.updatePet = async(req, res) => {
    const { name, type, age, description } = req.body;
    const pet = await Pet.findById(req.params.id);
    pet.name = name || pet.name;
    pet.type = type || pet.type;
    pet.age = age || pet.age;
    pet.description = description || pet.description;
    if (req.file) pet.image = req.file.filename;
    await pet.save();
    res.json(pet);
};

exports.deletePet = async(req, res) => {
    await Pet.findByIdAndDelete(req.params.id);
    res.json({ message: 'Pet deleted' });
};