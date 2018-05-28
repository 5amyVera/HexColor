var input1, input2, output;
var defaultColor1 = defaultColor2 = defaultColor3 = "";
var hex = /#+[0-9A-Fa-f]{6}$/g;

var startup = () => {
	input1 = document.querySelector("#input1");
	input2 = document.querySelector("#input2");
	output = document.querySelector("#output");
	input1.value = defaultColor1;
	input2.value = defaultColor2;
	output.value = defaultColor3;
	window.addEventListener("input", update, false);
}

var update = event => {
	var element1 = document.querySelector("#color1");
	if (input1.value.match(hex)) {
		input1.style.color = "black";
    	element1.style.backgroundColor = input1.value;
	}
	else { input1.style.color = "red"; }

	var element2 = document.querySelector("#color2");
	if (input2.value.match(hex)) {
		input2.style.color = "black";
    	element2.style.backgroundColor = input2.value;
	}
	else { input2.style.color = "red"; }

	var element3 = document.querySelector("#color3");
	if (input1.value.match(hex) && input2.value.match(hex)) {
		element3.style.backgroundColor = mix(input1.value, input2.value);
		output.value = mix(input1.value, input2.value);
	}
}

var mix = (color1, color2) => {
	var result = "#";
	for (let i = 0; i < 3; i++) {
		var hexPart = (Math.trunc((parseInt(color1.substr(1 + i*2, 2), 16) + parseInt(color2.substr(1 + i*2, 2), 16) + 1)/2)).toString(16);
		if (hexPart.match(/^[0-9A-Fa-f]{1}$/)) {
			hexPart = "0" + hexPart;
		}
		result += hexPart;
	}
	return result;
}

window.addEventListener("load", startup, false);