var price = document.getElementById("prcIsum").getAttribute("content");
var numPotatoes = parseInt(0.99+(parseFloat(price)/1.00));
console.log(price);

var node = document.getElementById("vi-mskumap-none");

var newItem = document.createElement("div");       // Create a <li> node
var textnode = document.createTextNode(" " + numPotatoes + " Potatoes");  // Create a text node
newItem.appendChild(textnode);                    // Append the text to <li>
newItem.setAttribute("id", "pop1");
newItem.style.borderColor = "#444141";
newItem.style.borderStyle = "solid";
newItem.style.backgroundColor = "#eaeaea";
newItem.style.borderWidth = "3px";
newItem.style.zIndex = "2";
newItem.style.borderRadius = "10px";
newItem.style.textAlign = "center"
newItem.style.padding = "4px";
newItem.style.display = "inline";
newItem.style.position = "absolute";
newItem.style.left = "120px";
newItem.style.top = "245px";

node.appendChild(newItem);


/*
	border-color: #444141;
	border-style: solid;
	border-width: 3px;
	background-color: #eaeaea;
    z-index: 2;
    border-radius: 10px;


*/
