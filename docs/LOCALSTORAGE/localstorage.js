var subject = document.getElementById("subject");
var memo = document.getElementById("memo");
var clear = document.getElementById("clearButton");

//On input, the Title and Notes are saved seperately into localstorage
memo.oninput = function(){
	setValue();
}

//Set text into local storage subject -> head // text -> body
function setValue(){
	localStorage.setItem("head",subject.value);
	localStorage.setItem("body",memo.value);
}

//Recall the text from local storage when user refresh or comeback to page
window.onload = function(){
	subject.value = localStorage.getItem("head");
	memo.value = localStorage.getItem("body");
}

//Clear function. Set text as blank
clear.onclick = function(){
	subject.value = "";
	memo.value = "";
	setValue();
}

