// NAVIGATION BAR CODE BELOW 

var homeButton = $('.home-button');
homeButton.on("click", switchToHome);
function switchToHome() {
  location.href = "index.html";
}

var fontButton = $('.font-button');
fontButton.on("click", switchToFont);
function switchToFont() {
  location.href = "font_changer.html";
}

var stemButton = $('.stem-button');
stemButton.on("click", switchToStem);
function switchToStem() {
  location.href = "stem.html";
}

var tipsButton = $('.tips-button');
tipsButton.on("click", switchToTips);
function switchToTips() {
  location.href = "tips.html";
}

var helpButton = $('.help-button');
helpButton.on("click", switchToHelp);
function switchToHelp() {
  location.href = "how_to_help.html";
}



// FONT CHANGER CODE BELOW

var output = $('.output'); 
var section4 = $('.section4');
var submitButton = $('.submit-btn');
submitButton.on("click", outputText);

function outputText() {
  event.preventDefault();
  var input = $('.input').val();

  // change the background  
  if (document.getElementById("light-yellow").checked) {
    section4.addClass('light-yellow');
  } else if (document.getElementById("light-green").checked) {
    section4.addClass('light-green');
  } else if (document.getElementById("light-gray").checked) {
    section4.addClass('light-gray');
  } else if (document.getElementById("light-blue").checked) {
    section4.addClass('light-blue');
  } else if (document.getElementById("light-purple").checked) {
    section4.addClass('light-purple');
  } else if (document.getElementById("pink").checked) {
    section4.addClass('pink');
  } else if (document.getElementById("peach").checked) {
    section4.addClass('peach');
  }

  // output the text
  if (document.getElementById("lato").checked && document.getElementById("yes").checked) {
    output.addClass('white-space');
    output.append(`<p style="font-family: 'Lato'">${input}</p>`);
  } else if (document.getElementById("lato").checked && document.getElementById("no").checked) {
    output.removeClass('white-space');
    output.append(`<p style="font-family: 'Lato'">${input}</p>`);    
  } else if (document.getElementById("montserrat").checked && document.getElementById("yes").checked) {
    output.addClass('white-space');
    output.append(`<p style="font-family: 'Montserrat'">${input}</p>`);
  } else if (document.getElementById("montserrat").checked && document.getElementById("no").checked) {
    output.removeClass('white-space');
    output.append(`<p style="font-family: 'Montserrat'">${input}</p>`);    
  } else if (document.getElementById("open-sans").checked && document.getElementById("yes").checked) {
    output.addClass('white-space');
    output.append(`<p style="font-family: 'Open Sans'">${input}</p>`);
  } else if (document.getElementById("open-sans").checked && document.getElementById("no").checked) {
    output.removeClass('white-space');
    output.append(`<p style="font-family: 'Open Sans'">${input}</p>`);    
  } else if (document.getElementById("roboto").checked && document.getElementById("yes").checked) {
    output.addClass('white-space');
    output.append(`<p style="font-family: 'Roboto'">${input}</p>`);
  } else if (document.getElementById("roboto").checked && document.getElementById("no").checked) {
    output.removeClass('white-space');
    output.append(`<p style="font-family: 'Roboto'">${input}</p>`);    
  } else if (document.getElementById("comic-sans").checked && document.getElementById("yes").checked) {
    output.addClass('white-space');
    output.append(`<p style="font-family: 'Comic Sans MS','Comic Sans'">${input}</p>`);
  } else if (document.getElementById("comic-sans").checked && document.getElementById("no").checked) {
    output.removeClass('white-space');
    output.append(`<p style="font-family: 'Comic Sans MS', 'Comic Sans'">${input}</p>`);    
  } else if (document.getElementById("verdana").checked && document.getElementById("yes").checked) {
    output.addClass('white-space');
    output.append(`<p style="font-family: 'Verdana'">${input}</p>`);
  } else if (document.getElementById("verdana").checked && document.getElementById("no").checked) {
    output.removeClass('white-space');
    output.append(`<p style="font-family: 'Verdana'">${input}</p>`);    
  } else if (document.getElementById("helvetica").checked && document.getElementById("yes").checked) {
    output.addClass('white-space');
    output.append(`<p style="font-family: 'Helvetica'">${input}</p>`);
  } else if (document.getElementById("helvetica").checked && document.getElementById("no").checked) {
    output.removeClass('white-space');
    output.append(`<p style="font-family: 'Helvetica'">${input}</p>`);    
  } else if (document.getElementById("open-dyslexic").checked && document.getElementById("yes").checked) {
    output.addClass('white-space');
    output.append(`<p style="font-family: 'openDyslexic'">${input}</p>`);
  } else if (document.getElementById("open-dyslexic").checked && document.getElementById("no").checked) {
    output.removeClass('white-space');
    output.append(`<p style="font-family: 'openDyslexic'">${input}</p>`);    
  }
}

var resetButton = $('.reset-btn');
resetButton.on("click", resetText);

function resetText() {
  var text = document.getElementById('output');
  text.replaceChildren();
}


