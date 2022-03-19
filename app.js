


app.post('/donuts',(req,res)=>{
const donut={
  id:donuts.length+1,
  type:req.body.type,
  cost:req.body.cost
}
donuts.push(donut);
res.send(donut);
})


