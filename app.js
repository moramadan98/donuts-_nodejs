


app.post('/donuts',(req,res)=>{
const donut={
  id:donuts.length+1,
  type:req.body.type,
  cost:req.body.cost
}
donuts.push(donut);
res.send(donut);
})



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



