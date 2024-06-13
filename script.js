// Function to generate a random color
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
  
// Function to generate a random drawing
function generateRandomDrawing() {
  var drawingArea = document.getElementById("drawingArea");
  drawingArea.innerHTML = ''; // Clear previous drawing

  var backgroundColor = getRandomColor();
  drawingArea.style.backgroundColor = backgroundColor;

  var areaWidth = drawingArea.clientWidth;
  var areaHeight = drawingArea.clientHeight;
  var density = Math.floor(Math.random() * (20000 - 2000 + 1)) + 2000; // Random density between 2000 and 20000
  var numShapes = Math.floor(areaWidth * areaHeight / density);

  for (var i = 0; i < numShapes; i++) {
    var randomColor = getRandomColor();
    var randomSize = Math.floor(Math.random() * (150 - 10 + 1)) + 10; // Random size between 10 and 150
    var x = Math.random() * (areaWidth - randomSize); 
    var y = Math.random() * (areaHeight - randomSize); 
    var rotation = Math.random() * 360;
    var shapeType = Math.random();

    var div = document.createElement("div");
    div.className = "shape";

    if (shapeType < 0.24) {
      // Circle
      div.classList.add("circle");
      div.style.backgroundColor = randomColor;
      div.style.width = randomSize + "px";
      div.style.height = randomSize + "px";
      div.style.left = x + "px";
      div.style.top = y + "px";
    } else if (shapeType < 0.48) {
      // Square
      div.style.backgroundColor = randomColor;
      div.style.width = randomSize + "px";
      div.style.height = randomSize + "px";
      div.style.left = x + "px";
      div.style.top = y + "px";
      div.style.transform = "rotate(" + rotation + "deg)";
    } else if (shapeType < 0.79) {
      // Triangle
      div.classList.add("triangle");
      div.style.borderBottomColor = randomColor;
      div.style.borderLeftWidth = randomSize / 2 + "px";
      div.style.borderRightWidth = randomSize / 2 + "px";
      div.style.borderBottomWidth = randomSize + "px";
      div.style.transform = "rotate(" + rotation + "deg)";
      div.style.left = x + "px";
      div.style.top = y + "px";
    } else if (shapeType < 0.93) {
      // Line
      var lineLength = Math.floor(Math.random() * 200) + 50; // Random length between 50 and 250
      div.classList.add("line");
      div.style.width = lineLength + "px";
      div.style.height = "1px";
      div.style.left = x + "px";
      div.style.top = y + "px";
      div.style.transform = "rotate(" + rotation + "deg)";
    } else {
      // Ring
      var ringThickness = Math.random() * (15 - 0.2) + 0.2; // Random thickness between 0.2 and 15
      div.classList.add("ring");
      div.style.borderWidth = ringThickness + "px";
      div.style.borderColor = randomColor;
      div.style.width = randomSize + "px";
      div.style.height = randomSize + "px";
      div.style.left = x + "px";
      div.style.top = y + "px";
      div.style.backgroundColor = 'transparent';
    }

    drawingArea.appendChild(div);
  }
}

// Function to save the drawing as an image
function saveDrawing() {
  var drawingArea = document.getElementById("drawingArea");
  html2canvas(drawingArea).then(function(canvas) {
    var link = document.createElement("a");
    link.download = 'art.png';
    link.href = canvas.toDataURL("image/png");
    link.click();
  });
}

// Event listener for the button click
document.getElementById("generateDrawing").addEventListener("click", generateRandomDrawing);
document.getElementById("saveDrawing").addEventListener("click", saveDrawing);  