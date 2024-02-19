// function matrixAddition(a, b){ let c=[]; 
//     for(let i=0;i<a.length;i++){ let d =[];
//         for(let j=0;j<a[i].length;j++){
//             d.push(a[i][j]+ b[i][j]);  
//         } 
//         c.push(d); 
//     }
//     return c;
//   }

  
// console.log(matrixAddition([[1, 2],[1, 2],[1,1]],[[2, 3],[2, 3],[1,1]]));

const express = require('express');
const app = express();
const port =3000;

app.get('/',(req,res)=>{
    res.send("Welcome to my Express.js server!");
})

app.listen(port, ()=>{
    console.log(`Server is running on port : ${port}`);
})