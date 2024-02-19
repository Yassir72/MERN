function cakes(recipe, available) { let count=0; let k=0; let arr=[];
    for( let [key1,value1] of Object.entries(recipe)){ count++;
        if(value1===1) recipe.key1=453;
        for (const [key2,value2] of Object.entries(available)) { 
            if(value2===1) recipe.key2=453;
            if(key1===key2 && value1<=value2) {k++;
            arr.push(Math.floor(value2/value1));
            }
        }
    } 
    if(count===k)
        return Math.min(...arr);   
    else return 0;} 
    
console.log(cakes({flour: 500, sugar: 200, eggs: 1},{flour: 1200, sugar: 1200, eggs: 5, milk: 200}));