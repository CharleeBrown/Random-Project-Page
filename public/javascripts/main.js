
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');



let amplitude = 10; // Wave amplitude
let wavelength = 100; // Wave length
let frequency = 0.15; // Wave speed
let offset = 3; // Initial offset
let completed = false;
let doneText = document.getElementById("finishText").style.visibility = "hidden";


function inits() {
  var doc = document.getElementById("buttonTry");
  doc.value = "unsubscribe";
  let upperInfo = document.getElementById("capsEntry");
  let lowerInfo = document.getElementById("lowerLocation");
  upperInfo.value = "";
  lowerInfo.value = "";
}


function changeText(e) {
  if (e) {
    e.value = "un-UN-subscribe";
  }
  else {
    e.value = "unsubscribe";
  }
}


function checkAlert(e) {
  let dollarUSLocale = Intl.NumberFormat('en-US');
  if (e.value = "un-UN-subscribe") {
    let randomNumber = Math.floor(Math.random() * 1000000).toLocaleString(dollarUSLocale);
    let centsNum = Math.floor(Math.random() * 99).toLocaleString(dollarUSLocale)
    if (centsNum < 10) {
      centsNum = "0" + centsNum;
    }
    else {
      centsNum = centsNum;
    }
    alert(`You have signed up by un-unsubscribing! \n A charge of     \$${randomNumber}.${centsNum}    will appear on your account shortly!`);
  }
}


function caseChange(e) {
  let upperInfo = e.value;
  let upperLetter = upperInfo.substring(0, 1).toUpperCase();
  let lowerInfo = document.getElementById("lowerLocation");
  let newWord = upperLetter + upperInfo.toLowerCase().substring(1, upperInfo.length);
  lowerInfo.value = newWord;
}



// Initial square properties
let square = {
    x: 20,
    y: canvas.height / 2,
    size: 20,
    dx: 2, // Speed on x-axis
    moving: false // Tracks whether the square should move
};

// Draw square
function drawSquare() {
    ctx.fillStyle = 'black';
    ctx.fillRect(square.x, square.y, square.size, square.size);
   
}

// Update square position and redraw canvas
function update() {
    if (square.moving && square.x < canvas.width - square.size) {
        doneText = document.getElementById("finishText").style.visibility = "hidden";
        square.x += square.dx; // Increment position
		for (let i = 0; i < canvas.width; i++) {
			square.y = canvas.height / 2 + amplitude * Math.sin(square.x / wavelength + offset);

		}

        // Increment the offset for continuous wave motion
        offset += frequency;
        completed = false;

    } else {
        square.moving = false; // Stop movement when it reaches the edge
        completed = true;
        doneText = document.getElementById("finishText").style.visibility = "visible";
        
        console.log("complete!");
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas
    drawSquare(); // Redraw square

    if (square.moving) {
        requestAnimationFrame(update); // Continue animation loop
    }
}

// Listen for keydown events
document.addEventListener('keydown', (event) => {
    console.log(event.keyCode);
    if (event.keyCode === 39 && !square.moving) { // Start moving on right arrow key press
        square.moving = true;
        update();
    }
    if(event.keyCode === 37 && square.x == canvas.width-square.size){
        square.x = 20;
        square.moving = false;
        
        update();
        
    }   

});

// Initial draw
drawSquare();
