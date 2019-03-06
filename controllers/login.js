var express=require('express');
var userModel = require.main.require('./model/userModel');
var router=express.Router();

router.get('/',function(req,res){
     var data={err:null};
    res.render('login/index',data);
});


router.post('/',function(req,res){
   var user={ 
       email:req.body.email,
     password:req.body.pass
    };
    userModel.validate(user, function(result){
			if(result != ""){
				req.session.un = req.body.uname;
				req.session.uid = result.id;
                var varify=result.varified;
                console.log(varify);
                if(varify==0){
                    var data={err:"Please varify your email address"};
				res.render('login/index',data);
                }else{
				res.redirect('/');
                }
			}else{
                var data={err:"Wrong Email or Password"};
				res.render('login/index',data);
			}		
		});
});


module.exports = router;