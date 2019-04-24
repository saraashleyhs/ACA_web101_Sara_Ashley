//Step 1 Create the board(HTML and CSS)

//Player chooses an x or an o

//Player clicks on a spot on the board, if void then mark if not then give an error. 

//
const points = [0,0,0,0,0,0,0,0];
points.length = 8;
var gameMarker = "X";

function changeMarkerToX(){ 
    gameMarker = "X";
    //The X button was clicked!" 
} 


function changeMarkerToO(){ 
    gameMarker = "O";
    //"The O button was clicked!"
}

function placeMark(divId){ 
    var place = document.getElementById(divId);
    place.innerHTML = gameMarker;
    switch(divId){
        
        case "square1":
            if (gameMarker = "X"){

            }
            break;
        case "square2":

        break;
        case "square3":

        break;
        case "square4":

        break;
        case "square5":

        break;
        case "square6":

        break;
        case "square7":

        break;
        case "square8":
        break;
        case "square9":
    }
}

