const express = require('express');
const mongoose = require('mongoose');
const donut_router = require('./routes/donut_router');
const app = express();
require('./prod')(app);

app.use(express.json());
app.use('/api/donuts',donut_router)



mongoose.connect('mongodb+srv://geka98:geka98@cluster0.tltvs.mongodb.net/DountsShop?retryWrites=true&w=majority',{ useNewUrlParser: true })
.then(()=> console.log("connected to mongodb ....."))
.catch(err => console.error("Could not connect")) 







const port = process.env.PORT || 3000 ;
app.listen(port , ()=> {console.log(`Listen to port ${port}......`)});


