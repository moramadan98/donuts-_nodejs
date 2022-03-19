const express = require('express');
const app = express();
app.use(express.json());



var donuts = [
    { id:1 , type: "Jelly", cost: 1.22 },
    {id:2 , type: "Chocolate", cost: 2.45 },
    {id:3 , type: "Cider", cost: 1.59 },
    {id:4 , type: "Boston Cream", cost: 5.99 }
  ];



app.delete('/donuts/:id', (req, res) => {
const donut = donuts.find(d=> d.id === parseInt(req.params.id));
if(!donut) return res.status(404).send("NOT FOUND");
res.send(donut);
});

app.put('/donuts/:id',(req,res)=>{
    const donut = donuts.find(d=> d.id === parseInt(req.params.id));
    if(!donut) return res.status(404).send("not found");
    donut.type = req.body.name;
    donut.cost = req.body.cost;
    res.send(donut);
});


const port = process.env.PORT || 3000 ;
app.listen(port , ()=> {console.log(`Listen to port ${port}......`)});

