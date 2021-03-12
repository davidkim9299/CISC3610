//Boiler plate
var text = document.getElementById("text");
var clear = document.getElementById("clear");

//On input, the Title and Notes are saved seperately into localstorage
text.oninput = function(){
setValue();
}

//When user comes back, onload it will check if there is anything in localstorage, if not then it will just be black
window.onload = function(){
text.value = localStorage.getItem("text");
}

//Whether or not it has text, button will clear the text in the boxes and since it counts as input it will be saved.
clear.onclick = function(){
	text.value = "";
	setValue();
}

/*function setValue()
Since it is being called multiple times, why not just make it a function?*/
function setValue(){
  localStorage.setItem("text",text.value);
}