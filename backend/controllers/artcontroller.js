const m=require('../models/articlesModel');
const artcon={};
artcon.getArts=async(req,res,next)=>{
    const arts= await m.find();
    res.json(arts);
};
artcon.createArt=async(req,res,next)=>{
    const e=new m({
        name: req.body.name,
        description: req.body.description,
        department: req.body.department,
        stock: req.body.stock,
        pu: req.body.pu,
        imagen: req.body.salary,
    });
    console.log(e);
    await e.save();
    res.json({'status:':'Articulo guardado'});
};

artcon.getArt=async(req,res,next)=>{
const id=await  m.findById(req.params.id);
res.json(id);
};
artcon.deleteArt=async(req,res,next)=>{
    await m.findByIdAndRemove(req.params.id);
    res.json({status:'articulo eliminado'});
};
artcon.updateArt=async(req,res)=>{
    const {id} =req.params;
    
    await m.findByIdAndUpdate(id,{$set:req.body},{new :true});
    res.json({status:'Articulo actualizado'});
};
module.exports=artcon;