var express = require("express");

var router = express.Router();

const burgers = require("../models/burger.js");

router.get("/", function(req, res) {
    res.redirect('/burgers');
});

router.get('/burgers', function(req, res) {
    burgers.all(function(data) {
        console.log(data)
        res.render("index", {burger_data: data})
    })
});

router.post('/burgers', function(req, res) {
    burgers.create(req.body.burger_name, function(results) {
        res.redirect("/");
    })
});

router.patch('/burgers/:id', function(req, res) {
    burgers.update(req.params.id, function(results) {
        res.sendStatus(200);
    })
})


module.exports = router
