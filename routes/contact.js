const fetch = require('node-fetch');
const express = require('express');
const router = express.Router();

let contacturl = "https://api.rootnet.in/covid19-in/contacts";

let settings = { method: "Get" };

router.get('/', function (req, res) {
    fetch(contacturl, settings)
        .then(res => res.json())
        .then((json) => {
            res.json(json.data.contacts.regional);
        });
})


router.get('/contact-details', function (req, res) {
    fetch(contacturl, settings)
        .then(res => res.json())
        .then((json) => {
            res.json(json);
        });
})
module.exports = router;
