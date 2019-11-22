// Warda Ahmad solution

// Lab: The Reading List
var books = [ 
    {title: "Harry Puter", 
    author: "JK", 
    alreadyRead : true},
    {title: "programming", 
    author: "null", 
    alreadyRead : false},
    {title: "Algorithm", 
    author: "Abdull Aid", 
    alreadyRead : true}
    ];
  
  for (var i = 0; i < books.length; i++ ){
    if (books[i].alreadyRead === true){
      console.log("You already read "+books[i].title+" by " + books[i].author);
  
    } else if (books[i].alreadyRead === false){
      console.log("You still need to read "+books[i].title+" by "+books[i].author+".");
  
    }
  }
  

//  Lab: The Movie Database
var movieDatabase = [
    {title: "Minions" ,
    duration: 90,
    stars: ["jro"," pop"]},
    {title: "The Lion King" ,
    duration: 118,
    stars: ["Donald"," Byonsy"]}
    ]

  for (var i = 0; i < movieDatabase.length; i++){
      console.log(movieDatabase[i].title+" lasts for "+movieDatabase[i].duration+" minutes. Stars: " + movieDatabase[i].stars);
  }