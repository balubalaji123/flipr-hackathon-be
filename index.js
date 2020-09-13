const express=require('express') 
const app=express()
const path=require('path')

const cors = require('cors');
app.use(cors());
var cookieParser = require('cookie-parser');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.listen(process.env.PORT || 3000,()=>{ 
    console.log(`serving website `);
})