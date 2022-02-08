const mongoose=require('mongoose');
const db1='mongodb://localhost/articles';
mongoose.connect(db1)
.then(db=>console.log('conexion exitosa'))
.catch(err=> console.error(err));
module.exports=mongoose;