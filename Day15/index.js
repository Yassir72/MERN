function onlyDuplicates(str) {let temp =[];
    for(let i=0;i<str.length;i++){ let k=0
        for(let j=0;j<str.length;j++){
            if(str[i]===str[j]) k++;
        }
        if(k===1) temp.push(str[i]);
    }
    let result=[];
    for(let i=0;i<str.length;i++){ let k=0;
        for(let j=0;j<temp.length;j++){
            if(str[i]===temp[j]) k++;
        }
        if(k===0) result.push(str[i]);
    }
    return result.join('');
  }

const http = require('http');
const url = require('url');
const Day13 = require('../Day13.js');

const server= http.createServer(async (req,res)=>{ 
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;
    const name = parsedUrl.query.name;
    if(path === '/weather'){ let lat; let lng;
        for(let i=0;i<Day13.cities.length;i++){
        if(name===Day13.cities[i].name){
            lat=Day13.cities[i].lat;
            lng=Day13.cities[i].lng;
            break;
        }}
        res.end(`${name} temperature: ${await Day13.fetchdata(lat,lng)}`);
    }
});

server.listen(3000, ()=>{
    console.log("server is listening on port 3000");
});


