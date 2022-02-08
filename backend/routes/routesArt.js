const express=require('express');
const router=express.Router();
const artCtrl=require('../controllers/artcontroller');
/*router.get('/',(req,res)=>{
    res.json({status:'Api world'});
});*/
router.get('/',artCtrl.getArts);
router.post('/',artCtrl.createArt);
router.get('/:id',artCtrl.getArt);
router.put('/:id',artCtrl.updateArt);
router.delete('/:id',artCtrl.deleteArt);
module.exports=router;