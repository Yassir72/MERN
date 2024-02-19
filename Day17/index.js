function validate(email) {
    if(email.includes('@') && email.includes('.')){
        let mail1 = email.split('@');
        let mail2 = email.split('.');
        if(mail1.length==2 && mail2.length>1 && mail1[0].includes(' ')==false && mail2[mail2.length-1].includes(' ')==false && mail1[1].includes(' ')==false) return true;
    }
    return false;
}

// console.log(validate(''));

let products = [
    { id: 1, name: 'iPhone 12 Pro', price: 1099.99 },
    { id: 2, name: 'Samsung Galaxy S21', price: 999.99 },
    { id: 3, name: 'Sony PlayStation 5', price: 499.99 },
    { id: 4, name: 'MacBook Pro 16', price: 2399.99 },
    { id: 5, name: 'DJI Mavic Air 2', price: 799.99 },
  ];

const express= require('express');
const app = express();

function logging(req,res,next){
    console.log(`${new Date().toISOString().split('T')[0]} ${new Date().toISOString().split('T')[1].split('.')[0]} : ${req.method} : ${req.url}`);
    next();
}


app.use(logging);
app.use(express.json());


app.get('/products', (req,res)=>{
    res.send(`${JSON.stringify(products,null,5)}`);
})
app.get('/products/search',(req,res)=>{ 
    const {minPrice,maxPrice} = req.query;

    if(minPrice && maxPrice){ let arr = [];
        for(i=0;i<products.length;i++){
            if(products[i].price<Number(maxPrice) && products[i].price>Number(minPrice))
            arr.push(products[i]);
        }
        res.send(arr);
    }
    else if(minPrice){ let arr = [];
        for(i=0;i<products.length;i++){
            if(products[i].price>Number(minPrice))
            arr.push(products[i]);
        }
        res.send(arr);
    }
    else if(maxPrice){ let arr = [];
        for(i=0;i<products.length;i++){
            if(products[i].price<Number(maxPrice))
            arr.push(products[i]);
        }
        res.send(arr);
    }
    

})

app.get('/products/:id',(req,res)=>{
    let id = req.params.id; 
    for(let i=0;i<products.length;i++){ 
        if(products[i].id==id) res.send(JSON.stringify(products[i]));
    }
})

app.post('/products',(req,res)=>{
    let new_element =req.body;
    new_element.id=products.length+1;
    products.push(new_element);
    res.send("Done");
    console.log(products);
})

app.put('/products/:id',(req,res)=>{
    let id = req.params.id;
    for (let i = 0; i < products.length; i++) { 
        if(products[i].id===Number(id)){ 
            products[i]=req.body;
            products[i].id = Number(id);
        }
    } res.send("Done");
    console.log(products);
})

app.delete('/products/:id',(req,res)=>{
    let id = req.params.id;
    for (let i = 0; i < products.length; i++) {
        if(Number(id-1)===products[i].id){
        products.splice(i,1);
        res.send("Done");}
    }
})

app.use("*",(req,res,next)=>{
    next(new Error("This Path Doesn\'t Exist"));
})

app.use((err,req,res,next)=>{
    res.send(err.message);
})

app.listen(4000,()=>{
    console.log("it's working");
})