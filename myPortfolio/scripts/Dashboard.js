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

//Game functions
$(document).ready(function() { // will load script after DOM is ready
  //intiallizing variables
  var time = 15000; // timer 15s
  var count = 0;
  var seconds = 0;
  var pressed = 0;
  var start = false;
  
  $('.number').html(count);
 
  $('#start').click(function() {
          if( time != 0){
          seconds++;
          var countdown = time / 1000 - seconds;
          $('h1').css('text-decoration', 'none').html('TIME LEFT: ' +     countdown);  //changes h1 during game to show countdown
           } else {
               setTimeout(function() {
              $('h1').html('You got an average of ' + count / 10 + ' clicks a second.').css('text-decoration', 'none');//changes h1 text after game is over 
              $('#block').css('pointer-events', 'none').hide(300);
              $('#reset').show(300).css('display', 'inline');
              start = false;
          }, time);
           }       
 
  });
  function startFunction{ 
      start++;
      setInterval(function() {
          if (start == true) {
              seconds++;
              var countdown = time / 1000 - seconds;
              $('h1').css('text-decoration', 'none').html('TIME LEFT: ' +     countdown);  //changes h1 during game to show countdown
                   }
              }, 1000);
          } 
          setTimeout(function() {
              $('h1').html('You got an average of ' + count / 10 + ' clicks a second.').css('text-decoration', 'none');//changes h1 text after game is over 
              $('#block').css('pointer-events', 'none').hide(300);
              $('#reset').show(300).css('display', 'inline');
              start = false;
          }, time);
      }
  });
  
  $('#block').click(function() {
      if (start != false) {
          count++;
          $('.number').html(count);
      } else {
          $('h1').css('text-decoration', 'underline');
      }
  });
  
  $('#reset').click(function() {//replace game with reset after timer is done.
      window.location.replace(window.location.href);
  });
});