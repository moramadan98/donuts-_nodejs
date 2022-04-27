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

const addNewDonut = async (req,res)=>{
    
    let donut = new Donut( {
        name: req.body.name ,
        isAvaliable:req.body.isAvaliable,
        price: req.body.price,
        flavors: req.body.flavors,
        size: req.body.size,
        quantity:req.body.quantity

      });

    donut = await donut.save();
    res.send(donut);
};


const deleteDonutByID = async (req,res)=>{
    const donut = await Donut.findByIdAndDelete(req.params.id );
    if(!donut) return res.status(404).send("Not Found");
    res.send("DELETED");
};


const buyDonut = async (req,res)=>{
    const donut = await Donut.findById(req.params.id);
    if(!donut) return;
    donut.quantity -= 1 ;
    donut.isAvaliable = true ? donut.quantity >0 : false ; 
    
  if(!donut) return res.status(404).send("Not Found");


  const result = await donut.save();
    res.send(result);
};


const editDonut = async (req,res)=>{
    const donut = await Donut.findByIdAndUpdate(req.params.id , {$set:{name: req.body.name ,
        isAvaliable:req.body.isAvaliable,
        price: req.body.price,
        flavors: req.body.flavors,
        quantity:req.body.quantity  ,
        size: req.body.size}},
        {new:true})


    if(!donut) return res.status(404).send("Not Found");
    const result = await donut.save();
    res.send(result);
};

module.exports={
    getAllDonuts,
    getDonutById,
    getDonutByPrice,
    deleteUnavaliableDonut,
    addNewDonut,
    deleteDonutByID,
    buyDonut,
    editDonut
    
}
