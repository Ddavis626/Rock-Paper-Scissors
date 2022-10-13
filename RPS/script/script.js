/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

    document.querySelector('#yell').addEventListener('click', run)


    function run() {
      const answer1 = document.querySelector('#p1').value.toLowerCase();
      const answer2 = document.querySelector('#p2').value.toLowerCase();
     
    
     if(answer1 === "rock" && answer2 === "paper"){
        document.querySelector('#placeToYell').innerText = `Player 2 Wins!`
     }else if (answer1 === "rock" && answer2 === "scissors") {
       document.querySelector('#placeToYell').innerText = `Player 1 Wins!`
     }else if (answer1 === "rock" && answer2 === "rock"){
       document.querySelector('#placeToYell').innerText  = `Tie!`
     }
      
      
       if(answer1 === "paper" && answer2 === "paper"){
        document.querySelector('#placeToYell').innerText = `Tie!`
     }else if (answer1 === "paper" && answer2 === "scissors") {
       document.querySelector('#placeToYell').innerText = `Player 2 Wins!`
     }else if (answer1 === "paper" && answer2 === "rock"){
       document.querySelector('#placeToYell').innerText  = `Player 1 Wins!`
     }
      
      
       if(answer1 === "scissors" && answer2 === "paper"){
        document.querySelector('#placeToYell').innerText = `Player 1 Wins!`
     }else if (answer1 === "scissors" && answer2 === "scissors") {
       document.querySelector('#placeToYell').innerText = `Tie!`
     }else if (answer1 === "scissors" && answer2 === "rock"){
       document.querySelector('#placeToYell').innerText  = `Player 2 Wins!`
       }
    }
    