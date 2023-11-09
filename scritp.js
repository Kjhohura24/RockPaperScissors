
var playerScore = 0

var computerScore = 0

var rounds = 0 

var computerChoices = ["R", "P", "S"]


for (rounds=0; rounds <11; rounds++) {
    var random = Math.floor(Math.random() * 3)
    var userChoice = prompt("Enter R, P or S")
    console.log("Computer's choice is " + computerChoices[random])
    if (computerChoices[random] == userChoice) {
        alert("it's a tie");
    }

    else if (computerChoices[random] ==  "R" && userChoice == "S") {
        computerScore++ ; alert("Computer won. Yhe score is: " + computerScore + "/" + playerScore); 
    }

    else if (computerChoices[random] ==  "R" && userChoice == "P") {
        playerScore++; alert("Player won. Yhe score is: " + computerScore + "/" + playerScore); 
    }


    else if (computerChoices[random] ==  "P" && userChoice == "S") {
        playerScore++; alert("Player won. the score is: " + computerScore + "/" + playerScore); 
    }


    else if (computerChoices[random] ==  "P" && userChoice == "R") {
        computerScore++ ; alert("Computer won. the score is: " + computerScore + "/" + playerScore);
    }


    else if (computerChoices[random] ==  "S" && userChoice == "P") {
        computerScore++ ; alert("Computer won. the score is: " + computerScore + "/" + playerScore); 
    }

    else if (computerChoices[random] ==  "S" && userChoice == "R") {
        playerScore++; alert("Player won. the score is: " + computerScore + "/" + playerScore); 
    }

else ("Enter a correct letter");

}

//Outline the picked object variables: Rock Paper Sciccors

//Outline user variables : 2 Users

//Prompt user to an object

//Player 1 - user

//Compare the options

// If variables are the same 
    // Rock & Rock = D
    // R & S = W
    // R & P = L

    // Paper & Paper = D
    // P & R = W
    // P & S = L
   
    // S & S = D
    // S & P = W
    // S & R = L

    // If draw D then alert to go again 
    //Alert winner of result (winner)


    //if (computerChoices[random] == "R") {
//        if (userChoice == "R"){alert("it's a tie")}}
    

//if (computerChoices[random] == "R") {
//        if (userChoice == "S"){alert("it's a win")}}
    
//if (computerChoices[random] == "R") {
 //       if (userChoice == "P"){alert("it's a loss")}}