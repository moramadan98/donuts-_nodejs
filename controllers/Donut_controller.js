const Donut = require('../models/Donut_model');
const mongoose = require('mongoose');


const getAllDonuts = async (req,res)=>{
    const donuts = await Donut.find().sort('name');
    res.send(donuts);
};



const getDonutById = async (req,res)=>{
    const donut = await Donut.findById(req.params.id);
    if(!donut) return res.status(404).send("Not Found");
    res.send(donut);
};

const getDonutByPrice = async (req,res)=>{
    const donut = await Donut.find({price : {  $lte:req.params.price }})
    .limit(10);
    if(!donut) return res.status(404).send("Not Found");
    res.send(donut);
};

const deleteUnavaliableDonut = async (req,res)=>{
    const donut = await Donut.deleteMany( {isAvaliable:false});
  if(!donut) return res.status(404).send("Not Found");
  res.send("DELETED");
};

module.exports={
    getAllDonuts,
    getDonutById,
    getDonutByPrice,
    deleteUnavaliableDonut,
    
}
