var express=require("express");
var router=express.Router();


router.get('/',function(req, res){
    res.render('cognitio/index');
});

module.exports = router;