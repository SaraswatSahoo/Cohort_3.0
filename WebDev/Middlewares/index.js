const express = require("express");
const app = express();

let count = 0;
function logger(req, res, next){
    // console.log("method : " + (req.method));
    // console.log("URL : " + (req.url));
    // console.log(new Date());
    // next();
    count ++;
    next();

}

app.use(logger);
app.use(express.json());

app.post("/sum", (req, res) => {
    const a = req.body.a;
    const b = req.body.b;
    const sum = a + b;
    res.send({
        sum,
    });
});

app.post("/sub", (req, res) => {
    const a = req.body.a;
    const b = req.body.b;
    const sub = a - b;
    res.send({
        sub,
    });
});

app.post("/mul", (req, res) => {
    const a = req.body.a;
    const b = req.body.b;
    const mul = a * b;
    res.send({
        mul,
    });
});

app.post("/div", (req, res) => {
    const a = req.body.a;
    const b = req.body.b;
    const div = a / b;
    res.send({
        div,
    });
});

app.get("/reqs", (req, res) => {
    res.json({
        count: count - 1,
    });
});

app.listen((3000), () => { console.log("app running on port 3000!!")});