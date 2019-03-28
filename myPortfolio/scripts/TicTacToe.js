//Step 1 Create the board(HTML and CSS)

//Player chooses an x or an o

//Player clicks on a spot on the board, if void then mark if not then give an error. 

//
var gameMarker = "X";

function changeMarkerToX(){ 
    gameMarker = "X";
    //console.log("The X button was clicked!");
} 


function changeMarkerToO(){ 
    gameMarker = "O";
    //console.log("The O button was clicked!");
}

function placeMark(divId){ 
    var place = document.getElementById(divId);
    place.innerHTML = gameMarker;
}

