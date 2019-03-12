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
				req.session.uname = result.name;
				req.session.uid = result.id;
                req.session.type=result.type;
                console.log(req.session.uid);
                if(result.type==="Admin")
                    res.redirect('/admin');
                else if(result.type==="publish")
                     res.redirect('/publisher');
                 else
                     res.redirect('/home');
             
 
                   
			
           			}else{
                var data={err:"Wrong Email or Password"};
				res.render('login/index',data);
			}		
		});
});


module.exports = router;