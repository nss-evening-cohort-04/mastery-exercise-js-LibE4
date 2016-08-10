function growtree (objTree) {
	//make tree parts
    objTree.character = textElementChar.value;
	objTree.height = textElementNum.value;
	var treePiece = [objTree.character];
	var treePiecePerLine = objTree.character;
	var treeIncreasePerLine = objTree.character + objTree.character;
	var treeSpace = [""];
	var spacePerline = "";
	if (objTree.character === "" || objTree.height === "") {
    	alert("Both fields must have a value!");
    }
    else {
		for (var i = 1; i <=objTree.height; i++) {
			treePiecePerLine += treeIncreasePerLine;
			treePiece.push(treePiecePerLine);
			//next line is an alternative way to generate treePiece
			// treePiece[i] = treePiece[i-1] + treeIncreasePerLine;
			spacePerline += "&nbsp";//for html to display space properly
			treeSpace.unshift(spacePerline);
		}
		//print on html
		var preElement = document.createElement("pre");
		for (var i = 0; i < objTree.height; i++) {
			var newDiv = document.createElement("div");
			newDiv.innerHTML =  treeSpace[i] + treePiece[i];
			divElement.appendChild(preElement).appendChild(newDiv);
		}
		//for console.log to display space properly
		var treeSpaceInConsole = [""];
		var spacePerlineInConsole = "";
		for (var i = 1; i <=objTree.height; i++) {
			spacePerlineInConsole += " ";
			treeSpaceInConsole.unshift(spacePerlineInConsole);
		}
		for (var i = 0; i < objTree.height; i++) {	
			console.log(treeSpaceInConsole[i] + treePiece[i]);
		}//end of console display
	}
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
var textElementChar = document.getElementById("character");
var textElementNum = document.getElementById("height");

// set object
var tree = new Object ();
tree.character = "";
tree.height = "";

// Assign a function to be executed when the button is clicked
buttonGrowTree.addEventListener("click", function(event) {
    growtree(tree);
    }
);
buttonClear.addEventListener("click", clearTextarea);

// handles text enter event
textElementChar.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode == 13) {
        growtree(tree);
    }
})

textElementNum.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode == 13) {
        growtree(tree);
    }
})