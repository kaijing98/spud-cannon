var price = document.getElementById("prcIsum").getAttribute("content");
var numPotatoes = parseInt(0.99+(parseFloat(price)/1.00));
console.log(price);

var node = document.getElementById("vi-mskumap-none");

var newItem = document.createElement("SPAN");       // Create a <li> node
var textnode = document.createTextNode(" " + numPotatoes + " Potatoes");  // Create a text node
newItem.appendChild(textnode);                    // Append the text to <li>
node.appendChild(newItem);
