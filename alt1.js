function growtree (objTree) {
    objTree.character = textElementChar.value;
	objTree.height = textElementNum.value;
	if (objTree.character === "" || objTree.height === "") {
    	alert("Both fields must have a value!");
    }
    else {
    	//for display in console
		for (var i = 1; i <= objTree.height; i++) {
			var treePiecePerLine = "";
			for (var j = objTree.height - i; j > 0; j--) {
				treePiecePerLine += " ";
			}
			for (var j = 1; j <= i * 2 - 1; j++) {
				treePiecePerLine += objTree.character;
			}
			console.log(treePiecePerLine);
		}
		//for display in html
		var preElement = document.createElement("pre");
		for (var i = 1; i <= objTree.height; i++) {
			var treePiecePerLine = "";
			for (var j = objTree.height - i; j > 0; j--) {
				treePiecePerLine += "&nbsp";
			}
			for (var j = 1; j <= i * 2 - 1; j++) {
				treePiecePerLine += objTree.character;
			}
			var newDiv = document.createElement("div");
			newDiv.innerHTML =  treePiecePerLine;
			divElement.appendChild(preElement).appendChild(newDiv);
		}

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