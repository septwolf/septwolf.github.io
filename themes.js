var b1;
var b2;
var b3;
onload = function() {
	//alert("HI!");
	var body = document.getElementById("body");
	//body.innerHTML = "HELLO";
	
	b1 = document.getElementById("b1");
	b2 = document.getElementById("b2");
	b3 = document.getElementById("b2");
	b1.addEventListener("click", click);
	b1.style.position = "absolute";
	b2.addEventListener("click", click2);
	b2.addEventListener("click", click3);

	
}
function click() {
	
	body.style.backgroundColor = "black";
	body.style.color = "white";
}
function click2() {
	
	body.style.backgroundColor = "white";
	body.style.color = "black";
}
function click3() {
	
	body.style.backgroundColor = "#51B5B1";
	body.style.color = "black";
}


