var express = require("express");

var router = express.Router();

const burgers = require("../models/burger.js");

router.get("/", function(req, res) {
    res.redirect('/burgers');
});

router.get('/burgers', function(req, res) {
    burgers.all(function(data) {
        res.render("index"), {burger_data: data}
    })
});

router.post('/burgers', function(req, res) {
    burgers.create(req.body.burger_name, function(results) {
        results.redirect("/");
    })
});

router.patch('/burgers/:id', function(req, res) {
    burgers.update(req.param.id, function(results) {
        results.redirect("/");
    })
})


module.exports = router
