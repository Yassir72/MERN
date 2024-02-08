// function whatsleft(busStops){ let count = busStops[0][0];
//    for(let i=1; i<busStops.length;i++){ 
//     count -= busStops[i][1];
//     count += busStops[i][0];
//    }
//    return count;
//   }

//   console.log(whatsleft([[10,0],[3,5],[5,8]]));


const { resolve } = require('path');
const readline = require('readline')
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });


function inputName() {
    return new Promise(resolve => {
        rl.question("give me a name : ", name => {
            if (Number(name) % 2 == 1 || Number(name) % 2 == 0) {
                rl.setPrompt("please give me a name :");
                rl.prompt();
                rl.on('line', name => {
                    if (Number(name) % 2 == 1 || Number(name) % 2 == 0) {
                        rl.setPrompt(`${name} is not a name :`);
                        rl.prompt();
                    }
                    else {
                        resolve(name);
                    }
                });
            }
            else { resolve(name); }
        });

    })
}

function inputNumber() {
    return new Promise(resolve => {
        rl.question("give me a number : ", number => {
            if (number % 2 != 1 && number % 2 != 0) {
                rl.setPrompt("please give me a number :");
                rl.prompt();
                rl.on('line', number => {
                    if (number % 2 != 1 && number % 2 != 0) {
                        rl.setPrompt(`${number} is not a number :`);
                        rl.prompt();
                    }
                    else {
                        resolve(number);
                    }
                });
            }
            else { resolve(number); }
        });

    })
}

async function add(Name, number, contacts) {
    Name = await inputName();
    number = await inputNumber();
    contacts.push({ Name: Name, Number: number });
    console.log(contacts);
}

function Compare(contacts) { 
    return new Promise(resolve => { let n=false; let j=0;
        rl.question("give me a name: ", input => {
            for (let i = 0; i < contacts.length; i++) {
                if (contacts[i].name === input) {n=true; j=i;}}
                if(n) resolve(["found", j]);
                else  resolve("not found");
        })

    })

}

async function Search(contacts) {
    let answer;
    answer = await Compare(contacts);
    if (typeof(answer) === 'string') console.log(answer);
    else {
        console.log(answer[0]);
        console.log("The contact is : ", contacts[answer[1]]);
    }
}

async function display(contacts){ let content;
    let promise = new Promise(resolve => {
        resolve(contacts);
    })
    content = await promise.then(data=>data);
    console.log(content);
}

function userChoice(){  
    rl.question("enter \n(1) to add a contact\n(2) to see all contacts\n(3) to search for a contact\n(0) to exit : ",input=>{
 switch (input) {
    case '1':
        add(Name, number, contacts);
        break;
    case '2':
        display(contacts);
        break;
    case '3':
        Search(contacts);
        break;
    case '0':
        
        console.log("you exited");
        rl.close();
        break;
    default : console.log("try again");
}  })
}

let contacts = [{name : 'yassir' , number: '123'}];
let Name; let number;
let choice;


userChoice();


// add(Name, number, contacts);
// Search(contacts);




