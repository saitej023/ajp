const express = require('express');
const app = express();
const PORT = 3000;

// localhost:3000 add?a=10&b=5
app.get('/add',(req, res) => {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    if(isNaN(a)  || isNaN(b)) {
        return res.status(400).json({ error: ' INVAlid nums'});
    }
    res.json({ result : a + b });
});

app.get('/subtract',(req, res)=> {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    if(isNaN(a)  || isNaN(b)) {
        return res.status(400).json({ error: ' INVAlid nums'});
    }
    res.json({ result : a - b });
});

app.get('/multi',(req, res)=> {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    if(isNaN(a)  || isNaN(b)) {
        return res.status(400).json({ error: ' INVAlid nums'});
    }
    res.json({ result : a * b });
});
app.listen (PORT, () => {
    console.log('server running on http://localhost:${PORT}');

});