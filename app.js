




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


