
// Promises are great way to get data from your service when your making ajax calls 


// why promise ?

function increment(num){
	// ajax call 
	setTimeout(function(){
		num++;
	},2000);
	
	return num;
}

let number = 5 ;
let res = increment(number);

console.log(res);   // prints 5 //WHICH IS WRONG 
//Expected 6 after a async activity from setTimeout function 


// Solution to this issue is by using 'Promise'

	function inc(num){
		  return new Promise(function(resolve,reject){
		  
		     // ajax event which takes time 
		     setTimeout(function(){
		      num=num+3;
		      console.log("inside ",num);
		       resolve(num);
		      },1000);

		  		if(false){
					reject(num); // no update 
		  		}
		  });
		 
		}

	let n = inc(6)
	.then(function(data){
	  console.log(data);
	})
	.catch(function(err){
	console.log(err);
	});