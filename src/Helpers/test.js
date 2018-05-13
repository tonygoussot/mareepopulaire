var backgroundImg = null;
var logoImg       = null;

// return the last used yPosition
/*function printJustifiedLine (ctx, text, xPos, yPos, maxRowLength, margin) {
	var words = text.split(" ");

	var rowLength     = 0;
	var nbSpaces      = 0;
	var rowIndexStart = 0;
	var spaceLength   = ctx.measureText(" ").width;

	for (i = 0; i < words.length; i++) {
		rowLength += ctx.measureText(words[i]).width;
		nbSpaces += 1;
		var totalLength = rowLength + nbSpaces * spaceLength;

		console.log(words[i]);
		console.log(totalLength);
		console.log(maxRowLength);

		console.log("+" + words[i] + "+");
		if (words[i] === "\n") {
			yPos += 72 + margin;
		}

		if (totalLength > maxRowLength) {
			console.log("inside write");
			var adjustedSpace = spaceLength;
			rowLength -= ctx.measureText(words[i]).width;
			nbSpaces -= 2; // remove space for extra-word + space between previous and extra word
			adjustedSpace     = ((1280 - 2 * margin) - rowLength) / nbSpaces;

			xPos = margin;
			for (word = rowIndexStart; word < i; word++) {
				ctx.fillText(words[word], xPos, yPos);
				xPos += ctx.measureText(words[word]).width + adjustedSpace;
			}

			yPos += 72 + margin;
			rowLength     = ctx.measureText(words[i]).width;
			rowIndexStart = i;
			nbSpaces      = 1;
			console.log("inside");
			console.log(rowIndexStart);
		}
	}

	console.log("outside");
	console.log(rowIndexStart);
	console.log(words.length);

	var finalString = "";
	for (i = rowIndexStart; i < words.length; i++) {
		finalString += words[i] + " ";
	}
	ctx.fillText(finalString, margin, yPos);
	return yPos;
}*/

function refresh_canvas () {

	var canvas = document.getElementById('canvas');
	var ctx    = canvas.getContext('2d');

	canvas.width  = 1024;
	canvas.height = 1024;

	var margin = 20;

	ctx.fillStyle = "rgba(255, 221, 0, 1)";
	ctx.fillRect(0, 0, canvas.width, canvas.height);

	ctx.drawImage(logoImg, 0, 0, logoImg.width, logoImg.height,     // source rectangle
		0, 0, canvas.width, canvas.height);

	var raisonValue = String(document.getElementById("raison").value);
	var raison      = raisonValue.split("\n");

	var taillePolice = Number(document.getElementById("taillePolice").value);
	ctx.fillStyle    = "#000000";
	ctx.font         = "" + taillePolice + 'pt BlockT';
	ctx.textAlign    = "center";

	var yPos = 40 + Number(taillePolice);
	var xPos = canvas.width * 0.5;

	for (row = 0; row < raison.length; row++) {
		console.log(raison[row]);
		ctx.fillText(raison[row], xPos, yPos);
		yPos += taillePolice + 20;
	}

	var downloadLink      = document.getElementById("download");
	downloadLink.href     = canvas.toDataURL();
	downloadLink.download = "LaFeteAMacron.png";

	return false;
}

window.onload = function () {
	logoImg        = new Image();
	logoImg.src    = 'fondLogo.png';
	logoImg.onload = function () {
		refresh_canvas();
	}
}