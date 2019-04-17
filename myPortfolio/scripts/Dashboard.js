$(function() {

    let $list = $('#TD-list');
    //Store variable $list
    let $newItemForm = $('#newItemForm');
  
    $newItemForm.on('submit', function(e) {
      e.preventDefault();
      let text = $('input[type="text"]').val();
      $list.append(`<li>${text}</li>`);
      $('input[type="text"]').val('');
    });
  
    $list.on('click', 'li', function() {
      let $this = $(this);
      $this.remove();
    });
  
  });
//GEOLocation API
  var myLocation = document.getElementById("coordinates")

function getLocation() {
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(displayPosition)
  } else {
   myLocation.innerHTML = "Not available"
  }
}

function displayPosition(position) {
  myLocation.innerHTML = "Longitude: " + position.coords.longitude + " Latitude: " + position.coords.latitude
}

//Calculator Functions
function displayNumber(num) {
  document.querySelector("#results").value += num;
}

function clearResults() {
  document.querySelector("#results").value = "";
}

function addition() {
  document.querySelector("#results").value += "+";
}

function subtraction() {
  document.querySelector("#results").value += "-";
}

function division() {
  document.querySelector("#results").value += "/";
}

function multiply() {
  document.querySelector("#results").value += "*";
}
//Tried to use toggle for changing the sign..??
//function signToggle() {
//  $("#signbutton").toggle
//document.querySelector("#results").value += cuurent.slice();
//}

function signFunction() {
  document.querySelector("#results").value = document.querySelector("#results").value * -1;
}

function equals() {
  document.querySelector("#results").value =      eval(document.querySelector("#results").value);
}

function deleteLast() {
  let current = document.querySelector("#results").value;
  document.querySelector("#results").value = current.slice(0, -1);
}