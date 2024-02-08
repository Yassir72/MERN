// function narcissistic(value) {
//     let result = 0; let arr = value.toString();
//     for (let i = 0; i < arr.length; i++) {
//         result += Math.pow(arr[i], arr.length);

//     }
//     if (result == Number(arr)) return true;
//     return false;
// }


// console.log(narcissistic(153));
const fs= require('fs');
const Day13= require('../Day13.js');
const { resolve } = require('path');

 function readcity(filename){
    return new Promise((resolve,reject)=>{
         fs.readFile(filename,'utf-8',(err,data)=> {
            if(err) {console.log(err);
            reject("A problem has occured: ", err);
            }
             resolve(data);
        })

        })
        
    }

async function citytemperature(filename){ let name; let lat; let lng;
     name = await readcity(filename);
     for(i=0;i<Day13.cities.length;i++)
        if(name===Day13.cities[i].name){
            lat = Day13.cities[i].lat;
            lng = Day13.cities[i].lng;
        }
        data = await Day13.fetchdata(lat,lng);
        return data;
        
}

function writeFileAsync(filepath,content){
    return new Promise((resolve,reject)=>{
        fs.writeFile(filepath,content,(err)=>{
            if(err){
            console.log("an error has occured :",err)
            reject("not good",err); }
            resolve("everything went well!!");
        })
    })
}

function deletefile(filename){
    return new Promise((resolve,reject)=>{
        fs.rm(filename,(err)=>{
            if(err) reject(err);
            resolve(`${filename} is deleted`);
        })
    })
}

async function allprocess(filename){ let data; let cityname;
     data =  await citytemperature(filename);
     cityname = await readcity(filename);
     if(fs.existsSync(`${cityname}.txt`)) {await deletefile(`${cityname}.txt`);}
     
    let display = await writeFileAsync(`${cityname}.txt`,data.toString());
    console.log(display);
     
}


allprocess('input.txt');
// citytemperature('input.txt');
// Day13.tempcity(Day13.cities);
