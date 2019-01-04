$( document ).ready(function() {

//keeping track of score w/ computer and with player (will be used if we need to count their total UNTIL/FROM/Difference from the random number)
var computerNumberScore = 0; 
//playerWinningScore is set to 0 because we are just keeping track of it for now, and value will be changed in other functions, based on the input from the html page(Click Blockaer)
var playerWinningScore = 0; 

//to keep track of wins / losses, set variable to keep track of computer and player, to make more simple, and to go with rest of program. set variables to 0 and have them be appended to as game is played 

var winCount = 0; 
var lossCount = 0; 

//going to need an object to more easily keep track of the crystal values, 
/*---------
----Adding them all into one or two functions w/ proper click and append to html values (advanced) is where it starts to get blocker(y)
-------------------------------------------*/


//want the element to disappear after creating random number, generate random number only once, can give instruction to refresh the page
//or add option to constantly generate new random number 
    $(".math-output-test-head").on("click", function getRandomNumber(){

        var randomNum = Math.random() * 50 ; //setting randomNum to a Math.random
        document.getElementById("math-output").textContent = "Your Random Number is:    " + randomNum; 
    })
    //calling function <!important for click events Blocka
    getRandomNumber(); 


}); 