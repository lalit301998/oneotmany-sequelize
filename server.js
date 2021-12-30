const express = require('express');
const app = express()
const db =require("./models");
const apiroutes= require("./routes/apiroutes")
const PORT = process.env.PORT || 3001;
app.use(express.urlencoded({extended: true}))
app.use(express.json());
db.sequelize.sync().then(()=>{
console.log(PORT,"PORT");
app.listen(PORT,()=>{

    console.log(`listening on :http:localhost:${PORT}`);
})

})

