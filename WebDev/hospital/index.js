const express = require('express');
const app = express();

const user = [{
    name: "Jhon",
    kidney:[{
        healthy: false,
    }]
}];

app.use(express.json());

app.get('/',function(req,res){
    const jhonKidneys = user[0].kidney;
    const numberOfKidneys = jhonKidneys.length;
    let numberOfHealthyKidneys = 0;
    for(let i=0;i<numberOfKidneys;i++){
        if(jhonKidneys[i].healthy){
            numberOfHealthyKidneys ++;
        }
    }
    const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
    res.json({
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys,
    })
})

app.post('/',function(req,res){
    const isHealthy = req.body.isHealthy;
    user[0].kidney.push({
        healthy: isHealthy,
    })
    res.json({
        msg: "Done!"
    })
})

app.put('/',function(req,res){
    for(let i = 0;i<user[0].kidney.length;i++){
        user[0].kidney[i].healthy = true;
    }
    res.json({
        msg: "Done!"
    })
})

app.delete('/',function(req,res){
    user[0].kidney = user[0].kidney.filter((kidney) => kidney.healthy);
    res.json({
        msg: "Done!"
    })
})

app.listen(3000);