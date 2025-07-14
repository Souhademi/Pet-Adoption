// routes/petRoutes.js
const express = require('express');
const router = express.Router();
const petController = require('../controllers/petController');
const auth = require('../middleware/authMiddleware');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: './uploads/',
    filename: (req, file, cb) =>
        cb(null, Date.now() + '-' + file.originalname)
});
const upload = multer({ storage });

router.get('/', petController.getAllPets);
router.get('/:id', petController.getPet);

// Protected
router.post('/', auth, upload.single('image'), petController.createPet);
router.put('/:id', auth, upload.single('image'), petController.updatePet);
router.delete('/:id', auth, petController.deletePet);

module.exports = router;