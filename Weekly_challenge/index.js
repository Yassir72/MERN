// const { error } = require('console');
// const fs = require('fs');
// const { resolve } = require('path');
// const readline = require('readline')
// const rl = readline.createInterface({ input: process.stdin, output: process.stdout });


// let users_data;

// async function fetchdata() {
//     const response = await fetch('https://4164048350-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FfNLzfr2sU4r319kcHCA8%2Fuploads%2FTgUOqHUjKeMiznk4NpPy%2Fusers.json?alt=media&token=29275fca-1fe4-44b3-988a-d95af3a64f01');
//     return await response.json();
// }


// function writefileasync(filename, content) {
//     return new Promise((resolve, reject) => {
//         fs.writeFile(filename, JSON.stringify(content), (err) => {
//             if (err) {
//                 console.log("error writing to file: ", err);
//                 reject("the msg is : ", err.message);
//                 return;
//             }
//             resolve(`${filename} has been created`);
//         })
//     })

// }

// async function new_user() {
//     let k = 0; let accountID;
//     do {
//         accountID = `ACC${Math.floor(1000 + Math.random() * 9000)}`;

//         for (i = 0; i < users_data.length; i++) {
//             if (accountID === users_data[i].accountID) {
//                 k = 1; break;
//             }
//         }
//     } while (k === 1)
//     let pin = `${Math.floor(1000 + Math.random() * 9000)}`;
//     let name = await input("name : ");
//     let balance = Number(await input("balance : "));
//     return { accountID: accountID, name: name, pin: pin, balance: balance, transactions: [] };
// }

// function input(msg) {
//     return new Promise(resolve => {
//         rl.question(msg, (input) => {
//             resolve(input);
//         })
//     })
// }



// async function display() {
//     let users_data = await fetchdata();
//     console.log(users_data);
// }

// async function the_process() {
//     users_data = await fetchdata();
//     let index = await authentication();
//     if (!index) {
//         console.log("not found");

//     }
//     else { console.log("Press \n1_ To add a new user\n2_To check Balance\n3_To deposit\n4_To withdraw\n5_To show transactions history\n0_To exit");
//         rl.on('line', async (input) => { 
//             switch (input) {
//                 case 0:
//                     rl.close();
//                     break;
//                 case 1:
//                     users_data.push(await new_user());
//                     await writefileasync('users.txt', users_data);
//                     break;
//                 case 2:
//                     checkBalance(index - 1);
//                     break;
//                 case 3:
//                     await deposit(index - 1);
//                     await writefileasync('users.txt', users_data);
//                     break;
//                 case 4:
//                     await withdraw(index - 1);
//                     await writefileasync('users.txt', users_data);
//                     break;
//                 case 5:
//                     viewTransactions(index - 1);
//                     break;
//                 default:
//                     rl.setPrompt("Press \n1_ To add a new user\n2_To check Balance\n3_To deposit\n4_To withdraw\n5_To show transactions history\n0_To exit");
//                     rl.prompt();
//                     break;
//             }
//         })
//     }
// }

// async function authentication() {
//     let k = 0;
//     let ID = await input("give me your accountID : ");
//     for (let i = 0; i < users_data.length; i++) {
//         if (ID === users_data[i].accountID) {
//             do {
//                 let pin = await input("give me your pin : ");
//                 if (pin == users_data[i].pin) { return i + 1 };
//                 k++;
//             } while (k < 3);
//             return false;
//         }
//     }
// }

// function checkBalance(i) {
//     console.log(users_data[i].balance);
// }

// async function deposit(i) {
//     let amount_added = Number(await input("The Amount you want to add is: "));
//     users_data[i].balance += amount_added;
//     users_data[i].transactions.push({ type: 'Deposit', amount: amount_added, date: `${new Date().toISOString().split('T')[0]}` })
// }

// async function withdraw(i) {
//     let amount_withdrawn = Number(await input("The Amount you want to withdraw is: "));
//     users_data[i].balance -= amount_withdrawn;
//     users_data[i].transactions.push({ type: 'withdraw', amount: amount_withdrawn, date: `${new Date().toISOString().split('T')[0]}` })
// }
// function viewTransactions(i) {
//     console.log(users_data[i].transactions);
// }

// the_process();

// rl.on('close', () => { console.log("You have exited") });

const fs = require('fs');
const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

let users_data;

async function fetchdata() {
    const response = await fetch('https://4164048350-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FfNLzfr2sU4r319kcHCA8%2Fuploads%2FTgUOqHUjKeMiznk4NpPy%2Fusers.json?alt=media&token=29275fca-1fe4-44b3-988a-d95af3a64f01');
    return await response.json();
}

function writefileasync(filename, content) {
    return new Promise((resolve, reject) => {
        fs.writeFile(filename, JSON.stringify(content), (err) => {
            if (err) {
                console.log("Error writing to file: ", err);
                reject(err.message);
                return;
            }
            resolve(`${filename} has been created`);
        });
    });
}

function input(msg) {
    return new Promise(resolve => {
        rl.question(msg, (input) => {
            resolve(input);
        })
    })
}

async function displayOptions() {
    console.log("Press:");
    console.log("1 - To add a new user");
    console.log("2 - To check balance");
    console.log("3 - To deposit");
    console.log("4 - To withdraw");
    console.log("5 - To view transactions history");
    console.log("0 - To exit");
}

async function the_process() {
    users_data = await fetchdata();
    let index = await authentication();
    if (!index) {
        console.log("User not found");
    } else {
        await displayOptions();
        rl.on('line', async (input) => {
            switch (parseInt(input)) {
                case 0:
                    rl.close();
                    process.exit();
                    break;
                case 1:
                    users_data.push(await new_user());
                    await writefileasync('users.txt', users_data);
                    break;
                case 2:
                    checkBalance(index - 1);
                    break;
                case 3:
                    await deposit(index - 1);
                    await writefileasync('users.txt', users_data);
                    break;
                case 4:
                    await withdraw(index - 1);
                    await writefileasync('users.txt', users_data);
                    break;
                case 5:
                    viewTransactions(index - 1);
                    break;
                default:
                    console.log("Invalid option. Please try again.");
                    break;
            }
            await displayOptions();
        });
    }
    await writefileasync('users.txt', users_data);
}

async function authentication() {
    let k = 0;
    let ID = await input("Enter your account ID: ");
    for (let i = 0; i < users_data.length; i++) {
        if (ID === users_data[i].accountID) {
            do {
                let pin = await input("Enter your PIN: ");
                if (pin == users_data[i].pin) { return i + 1 };
                k++;
            } while (k < 3);
            return false;
        }
    }
    return false;
}

function checkBalance(i) {
    console.log("Your balance is: " + users_data[i].balance);
}

async function deposit(i) {
    let amount_added = Number(await input("Enter the amount you want to deposit: "));
    users_data[i].balance += amount_added;
    users_data[i].transactions.push({ type: 'Deposit', amount: amount_added, date: new Date().toISOString().split('T')[0] });
}

async function withdraw(i) {
    let amount_withdrawn = Number(await input("Enter the amount you want to withdraw: "));
    if (amount_withdrawn > users_data[i].balance) {
        console.log("Insufficient funds.");
        return;
    }
    users_data[i].balance -= amount_withdrawn;
    users_data[i].transactions.push({ type: 'Withdraw', amount: amount_withdrawn, date: new Date().toISOString().split('T')[0] });
}

function viewTransactions(i) {
    console.log("Transaction history:");
    console.log(users_data[i].transactions);
}

the_process();

rl.on('close', () => { console.log("You have exited."); });
