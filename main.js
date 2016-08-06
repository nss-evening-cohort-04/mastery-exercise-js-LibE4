function growtree (clickEvent) {
	// set object
	var tree = new Object ();
	tree.character = textElementChar.value;
	tree.height = textElementNum.value;
	//make tree parts
	var treePiece = [tree.character];
	var treePiecePerLine = tree.character;
	var treeIncreasePerLine = tree.character + tree.character;
	var treeSpace = [""];
	var spacePerline = "";
	for (var i = 1; i <=tree.height; i++) {
		treePiecePerLine += treeIncreasePerLine;
		treePiece.push(treePiecePerLine);
		//next line is a alternative way to generate treePiece
		// treePiece[i] = treePiece[i-1] + treeIncreasePerLine;
		spacePerline += "&nbsp";//for html to display space properly
		treeSpace.unshift(spacePerline);
	}
	//print on html
	var preElement = document.createElement("pre");
	for (var i = 0; i <=tree.height; i++) {
		var newDiv = document.createElement("div");
		newDiv.innerHTML =  treeSpace[i] + treePiece[i];
		divElement.appendChild(preElement).appendChild(newDiv);
	}
	//for console.log to display space properly
	var treeSpaceInConsole = [""];
	var spacePerlineInConsole = "";
	for (var i = 1; i <=tree.height; i++) {
		spacePerlineInConsole += " ";
		treeSpaceInConsole.unshift(spacePerlineInConsole);
	}
	for (var i = 0; i <=tree.height; i++) {	
		console.log(treeSpaceInConsole[i] + treePiece[i]);
	}//end of console display
} //end of growtree function

function clearTextarea() {
	textElementChar.value = "";
	textElementNum.value = "";
	divElement.innerHTML = "";
} //end of clearTextarea function



//get element for html display
var divElement = document.getElementById("chartree");
var buttonGrowTree = document.getElementById("growtree");
var buttonClear = document.getElementById("clearinputbox");
// var textElement = document.getElementsByClassName("input");
var textElementChar = document.getElementById("character");
var textElementNum = document.getElementById("height");


// Assign a function to be executed when the button is clicked
buttonGrowTree.addEventListener("click", growtree);
buttonClear.addEventListener("click", clearTextarea);

// handles text enter event
textElementChar.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode == 13) {
        growtree(event);
    }
})

textElementNum.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode == 13) {
        growtree(event);
    }
})