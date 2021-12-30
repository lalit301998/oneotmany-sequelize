var express = require('express');
const router = express.router();
const db = require("../models")
router.get('/all',(req,res)=>{
db.Todo.findall().then(todos=>res.send(todos));


});
module.exports = router;