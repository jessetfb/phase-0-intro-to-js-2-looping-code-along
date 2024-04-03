// Code your solutions in this file
function writeCards(namesArray, eventName){

    let messageArray =[]
  
    for(let index = 0; index < namesArray.length; index++){
      
      let message = (`Thank you, ${namesArray[index]}, for the wonderful ${eventName} gift!`);
  
      messageArray.push(message);
  
    }
  
    return messageArray;
  
  }
  
  function countDown(number){
  
    let count = number;
  
    while(count >= 0){
  
      console.log(count);
  
      count--;
  
    }
  
  }