const mongoose = require('mongoose');

const donutSchema = new mongoose.Schema({
    name:{
      type:String ,
      required:true,
      minlength:5,
      maxlength:25
    },
  
    quantity :{
      type: Number ,
      required:true,
      set: q=> Math.round(q)
    },
  
    isAvaliable : Boolean ,
  
    price :{
      type : Number,
      required : function(){return this.isAvaliable},
      min:5
      
    },
  
    flavors : {
      type:Array,
      validate:{
          validator:function(v){
                return v && v.length>0;
          },
          message:'a donut should have at least one flavor'
      },
      lowercase:true,
      trim: true
  
    },
  
    size:{
      type: String ,
      required: true,
      enum : ['S' , 'M' , 'L'],
      default: 'M',
      uppercase:true,
      trim: true
    }
  
  
  
  });
  
const Donut = mongoose.model('Donut', donutSchema);

module.exports = Donut
  