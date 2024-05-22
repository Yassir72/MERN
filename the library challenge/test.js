let employees = new Promise((resolve,reject)=>{ let age=20;
  if(age<35 && age>25)
  resolve("accepted");
  else
  reject("denied");
})

function check_employees(){
  
    employees.then((msg)=>{
      console.log("this is then : "+msg);
    })
  
  .catch((msg)=>{
    console.log("this is catch : "+msg);
  }); 
}
check_employees();
