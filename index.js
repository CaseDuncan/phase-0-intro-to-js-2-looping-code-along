// Code your solutions in this file
const names =["Guadalupe", "Ollie", "Aki"]

function writeCards(names){
    for(let x=0; x < names.length; x++){
      console.log( `"Thank you, ${names[x]}, for the wonderful surprise gift!",`.split(","));
              
    }

}
writeCards(names)


function countDown(number){
     while(number>=0){
         number--;
         console.log(number);

     }
 }
 countDown(10)