const fetch = require('node-fetch');
const express = require('express');
const router = express.Router();
let settings = { method: "Get" };
let dashboardurl = "https://api.rootnet.in/covid19-in/hospitals/beds";
let collegeurl="https://api.rootnet.in/covid19-in/hospitals/medical-colleges";

router.get('/hospital-beds', function (req, res) {
    fetch(dashboardurl, settings)
        .then(res => res.json())
        .then((json) => {
            res.json(json.data.regional);
        });
})

router.get('/medicalcollege-beds',function(req,res){
    fetch(collegeurl, settings)
    .then(res => res.json())
    .then((json) => {
        res.json(json.data.medicalColleges);
    });
})

module.exports = router;
