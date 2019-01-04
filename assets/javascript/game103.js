/*---Global Variables Should go here--
------------------------------------*/

//Setting our Crystal Object / nested object w/ values to call at particular time

var crystalValues = {
    ice:
    {
        name: "icecrystal",
        value: 0
    },
    //note, using crtrl+ intellisense (vs equiv)
    //realized i was setting nested objects with = sign instead of : wish i'd known that months ago. :( 

    fire: {
        name: "firecrystal",
        value: 0
    },
    earth: {
        name: "earthcrystal",
        value: 0
    },
    pink: {
        name: "pinkcrystal",
        value: 0
    }
//also learned how to re tab code with ctrl+click property intellisense(vs-equiv)
};
//setting current and target score for win and loss objectives 
//setting to integers at 0 as the score will be appended by clicking on a certain crystal
//clicking certain crystals appends/ADDs value to player score


var playerCurrentScore = 0; 
var playerTargetScore = 0; 

var blackJack = 80; //if you go over, you lose , click crystals in order to get to target score , target score = 80; 
var pseudoTargetScore = 80; 
//we could also put a "cheats" object for blackJack and pseudoTargetScore and pass those in that way, appended to cheat button.  

var wins = 0; 
var losses = 0; 


/*--------MAIN FUNCTIONS---------
--------------------------------*/ 


/*------RANDOM NUMBER GENERATOR randomNumberGen() -----------*/ 
// is going to generate a random number with Math. library 
//using math.floor to round the decimal number into whole
//random number will be passed in later when acessing our crystal values throughout
//seeing alot that take min-max property 




var randomNumberGen = function  (min, max) {
    //originally just used Math.floor(Math.Random * 10) to get my whole number 
    Math.floor(Math.random()* 10 || (max - min + 1)) + min; 
};


/*---GAME STARTING FUNCTION and setting crystal values to add to score --------------------------------------------------------------------*/
//resets player score to 0 for when the game loops over 
var beginGame = function () {
playerCurrentScore = 0; 

//calling || assigning? randomNumberGen function to get append random values to our crystals 

crystalValues.ice.value = randomNumberGen(1,10);
crystalValues.fire.value = randomNumberGen(2,12);


/*-----NOTE: properties correspond to min max,----: 
 might have to change function to variable to accomodate min-max to give each crystal a unique value, vs the more simple Math.floor(Math.random *10) if that way doesn't give a unique value ----------------------------------------------------------------------------------------------------------------------------------------*/ 

crystalValues.earth.value = randomNumberGen(3,15); //for max to have odd number in case needing to add odd number to achieve winning score  
crystalValues.pink.value = randomNumberGen(1,10); 

/*----------------test values--------------*/ 
console.log("Target Score: " + playerTargetScore);
console.log(crystalValues.fire.value);



/*------Append these values to html, --------------------------------*(maybe i'm calling the jQuery wrong, have tried just about anything to get this, works in regular JS btw)--------------------------------------------------------------------*/ 
$("#player-current-score").text("your score is   " + playerCurrentScore);
$("#player-target-score").text("target score is   " + playerTargetScore);


//end of function initializing game
};
/*----------Control Flow for Keeping Track of win/loss-------*/ 



var keepScore = function () {

    if (playerCurrentScore > playerTargetScore) {
        //for testing purposes this far down, using alert to see if this control flow works
        alert("sorrey, you lose: story of my life right, try again");
        confirm("try again? " +true);
        //incramenting the total of losses if players score doesn't match the target score 
        losses++
        //appending loss count to html (for some reason jQuery is not doing this but regular JS will. (generally been a weird problem throughout) )
        $("#losses").text(losses);

    }//end if block 
    else if (playerCurrentScore === playerTargetScore) {
        alert("you win! ")
        confirm("play again? \n \r" + "y/n")
        wins++
        $("#wins").text(wins); 
        //calling function here will start the game over 
        beginGame()
    }
    //else if took away the error, seems can't do regular else in this syntax
}

/*---------Block----------------------------------------------------------Appending values when we click on the Crystal images (to tie this altogether i think, and to approach these kinds of problems,
(they use functions that can be hard to determine outcome of,) doing in even smaller pieces helped, don't know what there is to say when i've tried this so many times(for such a simple assignment))
-----------------------------------------------------------*/ 
var addCrystalValues = function(clickedCrystal) {

    playerCurrentScore += clickedCrystal.value 

    //appends clicked crystal value from previous function to html, allows for repeated appending of values in playerCurrentScore 
    $("#player-current-score").text(playerCurrentScore);

    //keep score function called 
    keepScore(); 

    //test 
    console.log(playerCurrentScore);
    console.log(playerTargetScore);
};





/*----------Calling Begin Game Function -----------*/ 
//this would be the right spot to have everything loop through correctly./
beginGame(); 

$("#crystal-a").click(function() {
    addCrystalValues(crystalValues.ice);
  });
  
  $("crystal-b").click(function() {
    addCrystalValues(crystalValues.fire);
  });
  
  $("#crystal-c").click(function() {
    addCrystalValues(crystalValues.earth);
  });
  
  $("#yellow").click(function() {
    addCrystalValues(crystal.pink);
  });
console.log(playerCurrentScore);
console.log(playerTargetScore);
//bonus find a way to initialize blackJack or ANY other variable and get the numbers added to them in a correct way without breaking anything. 


/*-------Comments------------*/
/*-----
// stuffs: 
//the context of a target score being reached is hard to find exactly where this is, because both values are being passed through the min-max helper function , so i guess they get their value from there? 

//made random number generator on my own before, as well as appended to html, i know random number gen has various purposes. 

//see charasciii.js for more random number gen and "things that have a value getting appended/or added to html"
---------------------------------------------*/ 
/*$(".math-output-test-head").on("click", function randomNumberGen(){
    $("#math-output").text("textchanged")
})*/ 
/*function randoNumber () {
   
   var rn =  Math.floor(Math.random *10); 
   $("#math-output").text("your random number : " + rn);

};*/ 