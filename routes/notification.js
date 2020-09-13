const fetch = require('node-fetch');
const express = require('express');
const router = express.Router();

let notificationurl = "https://api.rootnet.in/covid19-in/notifications";

let settings = { method: "Get" };


router.get('/', function (req, res) {
    fetch(notificationurl, settings)
        .then(res => res.json())
        .then((json) => {
            res.json(json.data.notifications)
        });
})
module.exports = router;
