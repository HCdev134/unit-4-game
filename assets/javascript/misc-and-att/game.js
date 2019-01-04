
// A $( document ).ready() block. to start 
    $( document ).ready(function() {
        alert( "Crystal Collector" + "   \n ready!" );
        var firstGuess = $("#guess-first"); 



    
        firstGuess.on("click", function(){
            firstGuess.val().trim() 
    
        });
   

    crystalValue.parseInt(); 
    });
    /*----- end document ready function ------------ */ 
    //need function to start the game 
    //know that i will need to get every id of elements that i am keeping track of or changing 
    //somehow apply that id value or append these math values to return different content (vague :( ))
    function beginGame () {

        var min = 1; 
        var max = 120; 
        //taking in our minimum and maximyum value for 120, will the min max value correspond to time? 

        //setting our crystal value to somewhere between 1 and 120 for each , the computer value, and the persons guess value (here -----> B )
        var crystalValue = Math.floor(Math.random() * (max - min + 1)) + min;
        var randomNumberValue = Math.floor(Math.random() * (max - min + 1)) + min;
     
    }
    //click event 
    //this works but anything w/ jquery won't go properly (can show console errors,)
    function getRandomNumber () {
        var randomNum = Math.random() * 10; //setting randomNum to a Math.random
        document.getElementById("math-output").textContent = "Your Random Number is" + randomNum; 
    }
 
        $("#guess-first").on("click", function returnCrystalValue(){
            console.log(crystalValue); 
            console.log(randomNumberValue); 
            return crystalValue && randomNumberValue; 
        })
   
        
            //adding slight animation to crystal tooltips -----
            /*-------------------------------------------------
            $(function () {   
                $('[data-toggle="tooltip"]').tooltip() 
              })
            $(".img").tooltip({title: " Crystal Game! ", animation:true})
            //CHANGE COLOR LIKE THIS (NOT REQ JUST QUESTION)
            $(".img").tooltip.css({color: "#42f"})
            conosle.log(tooltip); 
            ------------------Commented out Tooltip animation--------------------*/