var fs = require('fs');

function readFileAsync(path){ 
    return new Promise((resolve,reject)=>{ 
        fs.readFile(path,'utf-8',(err,data)=>{
            if(err) {console.error("Erreur reading file: ",err); 
            reject("Not okay :"+err.message);
            return;
            }
            
            resolve(data);
        });      
    }
    )
}



function writeFileAsync(path,content){
    return new Promise((resolve,reject)=>{
        fs.writeFile(path,content,(err)=>{
            if(err) {
                console.log("error writing to file : ",err);
                reject("the msg is : ", err.message);
                return
            }
            resolve("everthing is okay: ");
        })
    })
}




async function processFiles(arr){ let content;
    for(let i=0; i<arr.length; i++){ let path = i+".txt";
        content= await readFileAsync(arr[i]);
        content= content.toUpperCase();
        writeFileAsync(path,content);
    } 
}

module.exports={readFileAsync,writeFileAsync,processFiles};