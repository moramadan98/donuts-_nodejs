const express = require('express');
const Donut_controller = require('../controllers/Donut_controller');
const router = express.Router();


router.get('/',Donut_controller.getAllDonuts);
router.get('/:id',Donut_controller.getDonutById);
router.get('/get/:price',Donut_controller.getDonutByPrice);
router.post('/',Donut_controller.addNewDonut);
router.put('/:id',Donut_controller.editDonut);
router.put('/buy/:id',Donut_controller.buyDonut);
router.delete('/:id',Donut_controller.deleteDonutByID);
router.delete('/delete/unavaliable',Donut_controller.deleteUnavaliableDonut);






module.exports =router;