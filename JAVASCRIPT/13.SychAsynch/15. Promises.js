//A PROMISE IN JAVASCRIPT HAS THE FOLLOWING THREE STAGES


//      1             2              3
// PENDING STAGE _/->  REJECT(catch) ------> SETTELD
//                \->  FULLFILLED(then) _/    


//Buffer has 72 characters while binary has 2 charters in it apart from this our buffer get converted to string on performing concatenation operation also , buffer mein data aata hai pehle then it is converted to string with the help of concatenation


const fs = require('fs');

console.log("BEFORE");

// fs.readFile('./f1.txt',function(err , data){ //async

//     if( err ){
//         console.log('Error',err);
//     }else{
//         console.log('File data -- '+ data);
//     }

// })

let data =  fs.readFileSync("./f1.txt",'utf-8'); //Sync
console.log('File data -- '+ data);//We perfome concatenation in order to avoid printing the buffer data 

let promise = fs.promises.readFile("f1.txt");//Promise are async in nature

//console.log(promise)//Pending stage

// FullFilled
promise.then(function (data) { // Fullfilled stage ,RESOLVE
  console.log("File Data -> " + data);
});

// rejected
promise.catch(function (err) { // rejected stage , REJECT
  console.log(err);
});

//Setteled

