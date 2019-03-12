
var userModel=require('./userModel');

module.exports = {
	tReq:function()
	{
        return new Promise((resolve, reject) => {
		setTimeout(() => reject('time out'), 500);
		console.log(20);
         
		userModel.BorrowReq(function(result){
               resolve(result);
		});
         
    });
	}
};