// CodeWars

// function digitalRoot(n) { let m = n.toString();
//     while(m.length>1){ let temp=0 ; 
//         for(let i=0; i<m.length;i++){
//             temp += Number(m[i]);}
//         return digitalRoot(temp);
//     } 
//     console.log(n);
//     return n;
// }
// let n = 16;
// digitalRoot(n);


async function fetchUserData(path){
let content = await fetch(path).then((data)=>{
    return data.json();
});
console.log(processUserData(content));
}

function processUserData(data){
    const myData = data.users;
    const content= myData.filter(temp=> temp.gender != "male");
    const items = content.map(n => `Name: ${n.firstName}`+ ` Age: ${n.age}`);
return items;
}

function summarizeAge(data){
    const myData = data.users;
    const content= myData.filter(temp=> temp.gender == "male");
    const items= content.reduce((accumulator,next)=>accumulator + next.age,0);
    return items;
}

fetchUserData("https://dummyjson.com/users");
