const books = require("./books.json");

function priceOfBook(bookName) {
  for(let i=0;i<books.length;i++){
    if(bookName==books[i].title) {return books[i].price;}
  }
}

function affordableBooks(budget) { let list=[];
  for(let i=0; i<books.length; i++){
    if(books[i].price<=budget)
    list.push(books[i].title);
  }
  return list;
}

function findBookByGenre(genre) {
  let list=[];
  for(let i=0; i<books.length; i++){
    for(let j=0; j<books[i].genres.length; j++){
    if(books[i].genres[j]==genre){
    list.push(books[i].genres[j]);
    break;}
    }
  }
  return list;
}

function groupByGenre() {
  let allgenres = [] ;
  
  for (let i = 0; i < books.length; i++) {  
      for (let j = 0; j < books[i].genres.length; j++) { let check = true;
          for (let k = 0; k < allgenres.length; k++) {
              if (books[i].genres[j] == allgenres[k]) check = false;
          }
          if(check) allgenres.push(books[i].genres[j]); 
      }
  }
  return allgenres;
}

function sortBooksByPrice() { let temp=[];
  for(let i=0;i<books.length-1;i++){
    for(let j=i+1;j<books.length;j++){
      if(books[i].price>books[j].price)
      { temp = books[j];
        books[j]=books[i];
        books[i]=temp;
      }
    }
  } return books;
}

(function main() {
  try {
    if (priceOfBook("The Alchemist") !== 9.49) {
      throw new Error("priceOfBook is not working properly.");
    }
    if (affordableBooks(10).length !== 6) {
      throw new Error("affordableBooks is not working properly.");
    }
    if (findBookByGenre("Fiction").length !== 7) {
      throw new Error("findBookByGenre is not working properly.");
    }
    if (Object.keys(groupByGenre()).length !== 30) {
      throw new Error("groupByGenre is not working properly.");
    }
    if (sortBooksByPrice()[0].price !== 5.99) {
      throw new Error("sortBooksByPrice is not working properly.");
    }
    console.log("All tests passed successfully.");
  } catch (error) {
    console.log(error);
  }
})();



