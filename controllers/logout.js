var express = require('express');
var router = express.Router();


//ROUTES

router.get('/', function(req, res){
	req.session.un = null;
	res.redirect('/login');
});

module.exports = router;