var fs = require('fs');
const { resolve } = require('path');
const fonction= require('./files');


function maskify(cc) { let arr="";
    if(cc.length>4){
    for(let i=0; i<cc.length;i++){
      if(i<cc.length-4) arr=arr + "#";
      else arr= arr + cc[i];

    }}
    else return cc;
    return arr;
  }






function read(txt){ return readFileAsync(txt).then((msg)=>{ 
    console.log("File content is ",msg);  
}).catch((msg)=>{
    console.log("reject=the msg is: ",msg);
}) 
}






/*writeFileAsync("hello.txt","yassir").then((msg)=>{
    console.log("you're in resolve --> ", msg);
})*/



 let arr = ["hello.txt","texte.txt"];
 fonction.processFiles(arr);





