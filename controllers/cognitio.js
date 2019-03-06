var express=require("express");
var router=express.Router();


router.get('/',function(req, res){
    res.render('cognitio/index');
});


router.get('/profile',function(req,res){
    res.render('cognitio/profile'); 
});

router.get('/admin',function(req,res){
    res.render('cognitio/admin'); 
});
module.exports = router;