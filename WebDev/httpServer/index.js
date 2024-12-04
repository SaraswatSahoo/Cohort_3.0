const express = require("express");
const app = express();

app.get("/sum", function(req, res){
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    const sum = a+b;
    res.json({
        ans: sum
    })
})

app.get("/subtract", function(req, res){
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    const sub = a-b;
    res.json({
        ans: sub
    })
})

app.get("/multiply", function(req, res){
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    const mul = a*b;
    res.json({
        ans: mul
    })
})

app.get("/divide", function(req, res){
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    const div = a/b;
    res.json({
        ans: div
    })
})

app.listen(3000);