var price = document.getElementById("prcIsum").getAttribute("content");
var numPotatoes = parseInt(0.9999+(parseFloat(price)/0.277));
console.log(price);

var node = document.getElementById("prcIsum");

var newItem = document.createElement("div");       // Create a <li> node
var textnode = document.createTextNode(" " + numPotatoes + " Potatoes");  // Create a text node

newItem.setAttribute("id", "pop1");
newItem.style.borderColor = "#444141";
newItem.style.borderStyle = "solid";
newItem.style.backgroundColor = "#eaeaea";
newItem.style.borderWidth = "3px";
newItem.style.zIndex = "2";
newItem.style.borderRadius = "10px";

newItem.style.textAlign = "center";
newItem.style.padding = "4px";

newItem.appendChild(textnode);                    // Append the text to <li>
node.appendChild(newItem);
