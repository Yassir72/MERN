// function group(arr) { let temp = [[]]; let temp1=[]; let temp2=[];
//     for(let i=0;i<arr.length;i++){
//         if(!(temp.includes(arr[i]))){
//             temp[i] = arr.filter(num=>num===arr[i]);
//         }
//     }
//     for(let i=0;i<temp.length;i++){
//         if(!(temp1.includes(temp[i]))){
//             temp1.push(temp[i]);
//     }
//     } return temp1;
// }

// // console.log(group([3, 2, 6, , 2, 1, , 3]));

// function add(num1,num2){
//     return num1+num2;
// }

// function sub(num1,num2){
//     return num1-num2;
// }

// function multiply(num1,num2){
//     return num1*num2;
// }

// function divide(num1,num2){
//     return num1/num2;
// }

var XLSX = require("xlsx");

var workbook = XLSX.readFile("employee_data_.xlsx");
let worksheet = workbook.Sheets.Sheet;
let count = (Object.keys(worksheet).length-2)/2;

let arr = [];
for(let i=2; i<=count;i++){ 
    arr.push({employee : worksheet[`A${i}`].v ,salary : worksheet[`B${i}`].v});
}

function bonus(arr){ let BonusAmount; let BonusPercentage ;
    for(let i=0; i<arr.length;i++){
        if(arr[i].salary<50000){BonusAmount=0.05*arr[i].salary; BonusPercentage= 0.05;}
        if(arr[i].salary>=50000 && arr[i].salary<=100000){BonusAmount=0.07*arr[i].salary; BonusPercentage= 0.07;}
        if(arr[i].salary>100000){BonusAmount=0.1*arr[i].salary; BonusPercentage= 0.1;}

        arr[i].BonusAmount = BonusAmount;
        arr[i].BonusPercentage= BonusPercentage;
    }
    return arr;
}

// console.log(bonus(arr));

function writeXLSX(arr){
const worksheet = XLSX.utils.json_to_sheet(arr);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet);
  XLSX.writeFile(workbook, "new_employee.xlsx");
    }
try{
writeXLSX(bonus(arr));
}catch(error){console.log("an error has occured : ", error.message)}

