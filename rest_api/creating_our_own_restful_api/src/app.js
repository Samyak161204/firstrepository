const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

// app.get("/",(req, res)=>{
//     res.send("ehllo from the other sides.");
// })

// create a new students. 
app.post('/students', (req, res)=>{
    res.send("Hello from the other sides.");
})

app.listen(port, ()=>{
    console.log(`connection is setup at ${port}`);
})