var express=require('express');
var userModel = require.main.require('./model/userModel');
var router=express.Router();

const sendmail = require('sendmail')();
 
var nodemailer = require('nodemailer');


router.get('/',function(req,res){
	var data={err:null};
    res.render('signUp/index',data);
});

router.get('/success',function(req,res){
     var data={success:"Registration Successful.."};
    res.render('signUp/success',data);
});


router.post('/',function(req,res){
	if(req.body.pass===req.body.re_pass){
		var u={
            email:req.body.email
		};
      
      userModel.validate2(u, function(result){
			if(result != ""){
				var data={err:"This email is already used by another user"};
				res.render('signUp/index',data);	
			}else{
                var user={
          uname:req.body.uname,
          email:req.body.email,
          password:req.body.pass,
          t:"other",
          varify:0

	};
	  
	   	userModel.insert(user, function(result){
	 	 });
	   res.redirect("/signUp/success");
	}});

      
	

      
}else{
	       var data={err:"Password does not match........"};
				res.render('signUp/index',data);
	}

  //  res.render('signUp/index');

});

 

function registration(user)
{
              var id;
             
          userModel.getLastId(function(result){
          	  id=(result.id)+1;
          });
           console.log(""+id);
             nodemailer.createTestAccount((err, account) => {
        // create reusable transporter object using the default SMTP transport
       const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
        user: 'nihal.0.m7@gmail.com',
        pass: '2k19all41'
    }
});
		console.log("587");

  var mailOptions = {
    from: 'Cognition Ltd.',
    to: user.email,
    subject: "Varification email",
    text: "Please Click The Button To varify<br/><button style='margin-left:40%' type='button' onclick=''>Varify Me.</button>"


  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
      return 0;
    } else {
      console.log('Email sent: ' + info.response);
      return 1;
    }
  });
});



               
		

  
}


module.exports=router;