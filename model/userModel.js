var db = require('./DbConn');


module.exports = {
	get: function(userId, callback){
		var sql = "select * from user where id="+userId;
		db.getResults(sql, function(result){

			if(result.length >0){
				callback(result[0]);
			}else{
				callback([]);
			}
		});
	},
	getDataReq: function(id, callback){
		var sql = "select * from borrowReq where id="+id;
		db.getResults(sql, function(result){
               callback(result);
		});
	},
	addBook:function(book,callback){
        var sql="insert into books values('"+book.bookName+"','"+book.author+"','"+book.edition+"','"+book.publishDate+"',null,'"+book.p+"','"+book.des+"','"+book.pub+"','"+book.type+"',"+book.copies+")";
        console.log(sql);
	    db.execute(sql, function(success){
			if(success){
				callback(true);
			}else{
				callback(false);
			}
		});

	},
	getAll: function(callback){
		var sql = "select * from user";
		db.getResults(sql, function(results){
			callback(results);
		});
	},
	getAllBorrows: function(callback){
		var sql = "select * from borrow where active =1";
		db.getResults(sql, function(results){
			callback(results);
		});
	},
	getBorrowk: function(id,callback){
		
		var sql = "select * from borrow where id="+id;
	
		db.getResults(sql, function(results){
			callback(results);
		});
	},
	getAllReq: function(callback){
		var sql = "select * from borrowreq";
		db.getResults(sql, function(results){
			callback(results);
		});
	},
	getBooks: function(callback){
		var sql = "select * from books";
		db.getResults(sql, function(results){
			callback(results);
		});
	},
	getAllBooks: function(callback){
		var sql = "select * from books";
		db.getResults(sql, function(results){
			callback(results);
		});
	},
	validate: function(user, callback){
		var sql = "select * from user where email='"+user.email+"' and password='"+user.password+"'";
		db.getResults(sql, function(result){

			if(result.length > 0 ){
				callback(result[0]);
			}else{
				callback([]);
			}
		})
	},
	validate2: function(user, callback){
		var sql = "select * from user where email='"+user.email+"'";
		db.getResults(sql, function(result){

			if(result.length > 0 ){
				callback(result[0]);
			}else{
				callback([]);
			}
		})
	},
	insert: function(user, callback){
		var sql = "insert into user values(null, '"+ user.uname+"', '"+user.email+"','"+ user.password+"', '"+ user.t+"',"+user.varify+")"
		db.execute(sql, function(success){
			if(success){
				callback(true);
			}else{
				callback(false);
			}
		});
	},
	updateName: function(user, callback){
		var sql = "update user set name='"+user.name+"' where id="+user.uid;
		console.log(sql);
		db.execute(sql, function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	},
	updateCopies: function(data, callback){
		var sql = "update books set copies='"+data.values+"' where id="+data.bid;
		console.log(sql);
		db.execute(sql, function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	},
	updateReturn: function(id, callback){
		var sql = "update borrow set rtn=1,active=0 where id="+id;;
		
		db.execute(sql, function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	},
	updateReturnCopy: function(id, callback){
		var sql = "select * from books where id="+id;;
		console.log(sql);
		db.getResults(sql, function(result){
                var x=result[0].copies;
                x++;
                sql = "update books set copies="+x+" where id="+id;;
		
		db.execute(sql, function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});

		});
	},
	updateBorrowCopy: function(id, callback){
		var sql = "select * from books where id="+id;;
		console.log(sql);
		db.getResults(sql, function(result){
                var x=result[0].copies;
                x--;
                sql = "update books set copies="+x+" where id="+id;;
		
		db.execute(sql, function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});

		});
	},
	updatePic: function(user, callback){
		var sql = "update user set pic='"+user.pic+"' where id="+user.uid;
		console.log(sql);
		db.execute(sql, function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	},
	updatePass: function(user, callback){
		var sql = "update user set password='"+user.pass+"' where id="+user.uid;
		db.execute(sql, function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	},
	addBorrowReq:function(user,callback){
        var sql="insert into borrowreq value(null,"+user.bid+","+user.uid+")";
        db.execute(sql, function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	},
	BorrowReq:function(callback){
        var sql="select count(id) as breq from borrowreq";
        	db.getResults(sql, function(results){
			    sql="select count(id) as areq from Addreq";
			    db.getResults(sql, function(results2){
			    	callback((results[0].breq+results2[0].areq));
			    });
		});
	},
   delete: function(userId, callback){
		var sql = "delete from user where id="+userId;
		db.execute(sql, function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	},
	deleteBorrowReq: function(Id, callback){
		var sql = "delete from borrowReq where id="+Id;
		db.execute(sql, function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	},
	deleteBooks: function(bId, callback){
		var sql = "delete from books where ID="+bId;
		db.execute(sql, function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	},
	getLastId:function(callback){
		var sql="select max(id) as id from user";
	db.getResults(sql, function(results){
			callback(results);
		});
    },
    getBook:function(bid,callback){
           var sql="select * from books where ID="+bid;
          db.getResults(sql, function(results){
			callback(results);
		});

    },
    getBorrowActive:function(user,callback){
    	      console.log(user.uid)
                    var sql = "select * from borrow where uid="+user.uid+" and active=1" ;
                    console.log();
		db.getResults(sql, function(result){

			if(result.length >= 3 ){
				callback(false);
			}else{
				callback(true);
			}
		})

    },
    getBookCopies:function(bid,callback){
           var sql="select * from books where ID="+bid;
          db.getResults(sql, function(results){
          	if(results[0].copies>0)
			callback(true);
		    else
		    	callback(false);
		});

    },
     getBorrow:function(user,callback){
    	      console.log(user.uid)
                    var sql = "select * from borrow where uid="+user.uid;
		db.getResults(sql, function(result){

			if(result.length >= 3 ){
				callback(result);
			}else{
				callback([]);
			}
		})

    },
    setBorrow:function(borrow,callback)
    {    
    	var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();

if(dd<10) {
    dd = '0'+dd
} 

if(mm<10) {
    mm = '0'+mm
} 
var lastday = today.getDate() - (today.getDay() - 1) + 6;
   var lday= new Date(today.setDate(lastday));
 var ldd=lday.getDate();;
 var lmm=lday.getMonth()+1;;
 var lyyyy=lday.getFullYear();

today = mm + '/' + dd + '/' + yyyy;
lastday= lmm + '/' + ldd + '/' + lyyyy;

console.log(today);
console.log(lastday);
    	var sql = "insert into borrow values(null, "+ borrow.uid+", "+borrow.bid+",'"+today+"', '"+ lastday+"',1,0)"
		db.execute(sql, function(success){
			if(success){
				callback(true);
			}else{
				callback(false);
			}
		});
    }

}