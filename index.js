require('dotenv').config()
const express = require("express");
// import express from "express"    // same as first line

const app = express(); // we can use every function of express

const port = 4000;

app.get("/", (req, res) => {
         res.send("Hello World!");
});

app.get('/twitter', (req, res) => {
    res.send('chandan.com')
} )

app.get('/login',(req,res)=>{
    res.send('<h1> Plz login at chai or code </h1>')
})

app.get('/youtube', (req,res)=>{
    res.send("<h2>Chai or Code</h2>")
})

app.get('/github', (req,res)=>{
    res.json(githubData)
})

app.listen(process.env.PORT, () => {
        console.log(`Example app listening on port ${port}`);
});