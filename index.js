const express = require("express");
const app = express();
const port = 5000;
// const multer = require("multer");
// const jwt = require("jsonwebtoken");
const {create, deleteUser, getOneUser, update, getAlldata} = require('./crud')

app.use(express.json());

app.get('/', getAlldata)
app.post('/create', create)
app.get('/get/:id', getOneUser)
app.put('/update/:id', update)
app.delete('/delete/:id', deleteUser)

app.listen(port,()=>{
    console.log(`App working on port ${port}`);
})