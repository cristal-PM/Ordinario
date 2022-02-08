const express=require('express');
const app=express();
const morgan=require('morgan');
const cors=require('cors');
const {mongoose}=require('./database')
//settings
app.set('port',process.env.PORT || 3000)
//middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({origin:'http://localhost:4200'}));
//routes
//app.use(require('./routes/routesArt'));
app.use('/api/articles',require('./routes/routesArt'));
//empezando el servidor
app.listen(app.get('port'),()=>{
    console.log('server activo en el puerto 3000');
});