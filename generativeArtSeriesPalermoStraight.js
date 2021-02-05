function myFunction() {
  document.getElementById("demo").innerHTML = "Paragraph changed.";
}

function download_image_Straight(imagename){
  var canvas = document.getElementById("canvas");
  image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
  var link = document.createElement('a');
  link.download = imagename + ".png";
  console.log('Downloading ' + imagename);
  link.href = image;
  link.click();
}

function reset_image_Straight(){
    console.log('reverting to original colours');
    document.getElementById("color1").value = "#1244b3";
    document.getElementById("color2").value = "#ffd505";
    document.getElementById("color3").value = "#b82c09";
}



function blinkyStraight(colour1, colour2, colour3) {

    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    var width = canvas.width;
    var height = canvas.height;
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    //COLOUR - Each colour is denoted in hex triplet: #xxxxxx [sRGB]
    //-------------
    //var straightBlue    = "#1244b3"; //blue
    //var straightYellow  = "#ffd505"; //yellow
    //var straightRed     = "#b82c09"; //red
    //var straightColours = [straightBlue, straightYellow, straightRed];

    var straightColours = [colour1,colour2,colour3]


    //IMAGE RENDERING
    //-------------
    //Implementation Notes, this is designed with a white background, vertical lines placed, then filled in with the smaller squares

    //Image Dimensions & Artwork Specific Ratios
    var columns     = 26;                                           //main coloured strips (default 13)
    var yratio      = 1.3;                                          //x:y ratio, >1 makes y>x (portrait)
    var rows        = columns*yratio
    console.log("Creating Palermo Straight Artwork with Rows, with " + color1.value + "," + color2.value + "," + color3.value);
    var squareDimension = Math.round(width/columns)                 
    var xSpacer = squareDimension;
    var ySpacer = squareDimension;
    var xOrigin = 0;
    var yOrigin = 0;
    var colourToDraw;

    //Columns
    //console.log("Drawing Columns");
    for (c = 0; c < columns/2; c++) {
      xOrigin = c*squareDimension*2;
      colourToDraw = straightColours[c % 3]  						//select the right colour
      ctx.fillStyle = colourToDraw;
      ctx.fillRect(xOrigin,yOrigin,squareDimension,height);
    }

    //Create Squares
    //console.log("Drawing Squares");
    xOrigin = 0; 													//reset x-cord to start
    yOrigin = 0;

    for (r = 0; r < rows/2; r++) {
        for (c = 0; c < columns; c++) {
        xOrigin = squareDimension*(2*c)+xSpacer;
        yOrigin = squareDimension*(2*r);
        colourToDraw = straightColours[(c+1+r%3)% 3]; 						//select the right colour
        ctx.fillStyle = colourToDraw;
        ctx.fillRect(xOrigin,yOrigin,squareDimension,squareDimension);
        }
    }    
}
