var express=require("express");
var userModel = require.main.require('./model/userModel');

var router=express.Router();

router.get('*', function(req, res, next){
	console.log(req.session.uid);
	if(req.session.uid != null){
		next();
	}else{
		res.redirect('/login');
	}
});

router.get('/',function(req, res){
	
     userModel.getAllBooks(function(result){
     	var data={bList:result,
     		      msg:null,
                  uname:req.session.uname,
                  uid:req.session.uid
     		      };
     	res.render('home/index',data);
     });
    
});

router.get('/1',function(req, res){
	
     userModel.getAllBooks(function(result){
     	var data={bList:result,msg:"Borrow request successful", uname:req.session.uname,
                  uid:req.session.uid};
     	res.render('home/index',data);
     });
    
});

router.get('/0',function(req, res){
	
     userModel.getAllBooks(function(result){
     	var data={bList:result,msg:"Maximum credit exists", uname:req.session.uname,
                  uid:req.session.uid};
     	res.render('home/index',data);
     });
    
});


router.get('/book/:id',function(req,res){
    userModel.getBook(req.params.id,function (result) {
    	// body...
    	console.log(result);
    
    	var data={
    		bdata:result, uname:req.session.uname,
                  uid:req.session.uid
    	};
    	res.render('home/details',data)
    });
});



router.get("/borrow/:id",function(req,res){
	var user={
		uid:req.session.uid
	};
	console.log(user.uid);
    userModel.getBorrowActive(user,function(result){
    	 console.log(result);
    	if(result)
    	{

    		console.log(122);
    		var user={
    			uid:req.session.uid,
    			bid:req.params.id
    		};
    		userModel.addBorrowReq(user,function(resut){
                 if(result){
                 	
                    res.redirect("/home/1");
                 }
                 else{
                 	res.redirect("/home/0");
                 }
    		});
    	}
    	 else{
                 	res.redirect("/home/0");
                 }
    });
});



module.exports = router;