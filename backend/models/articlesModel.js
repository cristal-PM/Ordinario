const mongoose=require('mongoose');
const {Schema}=mongoose;
const aresq=new Schema({
    name:{type:String},
    description:{type:String},
    department:{type:String},
    stock:{type:Number},
    up:{type:Number},
    imagen:{type:String}
});
module.exports=mongoose.model('articlesv',aresq);