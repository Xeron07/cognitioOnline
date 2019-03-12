var express=require("express");
var fileUploader=require("formidable");
var fs = require('fs');
var path = require('path');
var userModel = require.main.require('./model/userModel');
var getReq = require.main.require('./model/request');
var ext=path.join(path.dirname(__dirname)+"/ext/user-img/");
var bext=path.join(path.dirname(__dirname)+"/ext/images/book-img/");
var router=express.Router();
var msg="welcome";
var msga="welcome";

router.get('*', function(req, res, next){
	if(req.session.uid != null){
		next();
	}else{
		res.redirect('/login');
	}
});

router.get('/',function(req, res){
    res.render('cognitio/index');
});


router.get("/nameChange/:name",function(req,res)
{
  var user={
        name:req.params.name,
        uid:req.session.uid
  };

  console.log(user.name);
  userModel.updateName(user,function(result)
  {
  	    console.log("Updated");
        res.redirect("/profile");
  });

});

router.get("/passChange/:pass",function(req,res)
{
  var user={
        pass:req.params.pass,
        uid:req.session.uid
  };

  console.log(user.name);
  userModel.updatePass(user,function(result)
  {
  	    console.log("Updated");
        res.redirect("/profile");
  });

});


router.get('/profile',function(req,res){
	var user={
		uid:req.session.uid
	};
	userModel.get(user.uid,function(result)
	{
		 userModel.getBorrow(user,function(result2){

       var data={
       	uList:result,
       	borrow:result2
       };
       console.log(data.borrow);
        res.render('cognitio/profile',data);
       });
	});
   
});



router.post("/publisher",function(req,res){
	var pic="1.jpg";
	console.log(req.body);
	var book;
   var form = new fileUploader.IncomingForm();
    form.parse(req, function (err, fields, files) {
      var oldpath = files.bImg.path;
      console.log(fields.bname);
      var newpath = bext + files.bImg.name;
      pic=files.bImg.name;
      console.log(files.bImg.name);
      fs.copyFile(oldpath, newpath, function (err) {
        if (err) throw err;
        console.log('File uploaded and moved!');        
       book={
		bookName:fields.bname,
		author:fields.author,
		edition:fields.edition,
		publishDate:fields.pdate,
		des:fields.des,
		pub:fields.pub,
		type:fields.type,
		copies:fields.copies,
		p:files.bImg.name
	};
	 console.log(book);
	 userModel.addBook(book,function(result){
   	if(result)
   	console.log("book added");
   	res.redirect("/publisher");
   });
      });
  });





  
   
});



router.post("/imageupload",function(req,res){
	 console.log(ext);
      var form = new fileUploader.IncomingForm();
    form.parse(req, function (err, fields, files) {
      var oldpath = files.uimg.path;
      var newpath = ext + files.uimg.name;
      fs.copyFile(oldpath, newpath, function (err) {
        if (err) throw err;
        console.log('File uploaded and moved!');
        var user={
        	uid:req.session.uid,
        	pic:files.uimg.name
        }
        userModel.updatePic(user,function(result){
              res.redirect("/profile");
        });
       
      });
  });
});



router.get('/admin',function(req,res){
  userModel.getAll(function(result){
  	     userModel.getBooks(function(result2){
  	     	userModel.getAllReq(function(result3){
  	     		userModel.getAllBorrows(function(return4){
  	     			var data={
  	        	users:result,
  	        	books:result2,
  	        	booksreq:result3,
  	        	borrow:return4,
  	        	msgg:msg

  	        };
  	        console.log(return4);
            res.render('cognitio/admin',data); 
  	     		});
  	     	});
  	     	
  	     });
  	       
  });
});


router.get('/publisher',function(req,res){
  userModel.getAll(function(result){
  	     userModel.getBooks(function(result2){
  	     	userModel.getAllReq(function(result3){
  	     		var data={
  	        	users:result,
  	        	books:result2,
  	        	booksreq:result3,
  	        	msggg:msga

  	        };
            res.render('cognitio/publisher',data); 
  	     	});
  	     	
  	     });
  	       
  });

});




router.get('/delete/:id',function(req,res){
     userModel.delete(req.params.id,function(result){
          res.redirect("/admin");
     });
});

router.get('/updateCopies/:id/:val',function(req,res){
	  var data={
            bid:req.params.id,
            values:req.params.val
	  };
     userModel.updateCopies(data,function(result){
     	msga="Updated";
          res.redirect("/publisher");
     });
});

router.get('/accept/:id',function(req,res){
     userModel.getDataReq(req.params.id,function(result){

     	  var book={
                uid:result[0].uid,
                bid:result[0].bid
     	  };
     	  var i=req.params.id;
     	   userModel.getBorrowActive(book,function(result){
     	   	if(result){
     	   		userModel.getBookCopies(book.bid,function(result){
     	   			if(result){
     	   			 userModel.setBorrow(book,function(result){
     	  	userModel.deleteBorrowReq(i,function(result){

     	  		 userModel.updateBorrowCopy(book.bid,function(re){
                     	 msg="Borrow Accepted";
                	 res.redirect("/admin");
                     });
     	  		    
     	  	});
              
     	  });
     	   	}else{msg="Book not available"; res.redirect("/admin");}

     	   		});
     	 
     	}else{
     		 msg="User Already taken 3 books";
     		 res.redirect("/admin");
     	}
     	});
           
     });
});

router.get('/notaccept/:id',function(req,res){
   	userModel.deleteBorrowReq(req.params.id,function(result){
                     res.redirect("/admin");
     	  	});
});


router.get('/return/:id',function(req,res){
   	userModel.updateReturn(req.params.id,function(result){
   		     //userModel.updateReturnCopy();
   		      console.log(req.params.id);
   		     userModel.getBorrowk(req.params.id,function(result2){
                     userModel.updateReturnCopy(result2[0].bid,function(re){
                     	 res.redirect("/admin");
                     	 msg="returning success";
                      });
   		     });
                    
     	  	});
});

router.get('/deleteBook/:id',function(req,res){
     userModel.deleteBooks(req.params.id,function(result){
          res.redirect("/publisher");
     });
});
   


router.post("/borrowReq",function(req,res){
	 console.log("in");
     getReq.tReq().then(function (response) {
        res.json(response);
        console.log(response);
    });

    console.log();
});


module.exports = router;
