const express = require('express');
const app = express();

const dotenv = require('dotenv');
const cors = require('cors');

const morgan = require('morgan')
const mongoose = require('mongoose');
//config cors with express
app.use(cors());

//Application Middleware Logger
app.use(morgan('tiny'));

dotenv.config({path: "./config/config.env"})
const PORT= 8000 || process.env.PORT;

//Test API
app.get('/',(req,res)=>{
    res.send(`<h1>Ecart Application Running Successfully.... </h1>`);
})

//accept express - from data
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/user',require('./router/userRouter'));
//app.use('/product',require('./router/productRouter'));
//app.use('/order',require('./router/orderRouter'));
//app.use('/payment',require('./router/paymentRouter'));

mongoose.connect(process.env.MONGODB_LOCAL_URL,{ 
    useUnifiedTopology: true,
    useNewUrlParser: true,
}).then((response)=>{
    console.log('Mongo DB Connected Successfully');
}).catch((err)=>{
    console.log(err)
})


app.listen(PORT,(err)=>{
    if(err) throw err
    console.log(`Server Running on port Number .... ${PORT}`);
});