var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("button");



function randomGen() {
	var x = Math.round(0xffffff * Math.random()).toString(16);
	var y = (6 - x.length);
	var z ="000000";
	var z1 = z.substring(0, y);
	return "#" + z1 + x;
}

function setGradient() {
	body.style.background =
		"linear-gradient(to right, "
		+ color1.value
		+ ", "
		+ color2.value
		+ ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click",function(){
	var x1 = randomGen();
	var x2 = randomGen();
	body.style.background =
		"linear-gradient(to right, "
		+ x1
		+ ", "
		+ x2
		+ ")";

	css.textContent = body.style.background + ";";
	color1.value = x1;
	color2.value = x2;


})
