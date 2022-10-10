var topic = document.getElementById("topic1");
var ment1 = document.getElementById("comment1");
var ment2 = document.getElementById("comment2");

topic = 0;

function postFunction() {
	
	var textinput = true;
	var textinput = "text1" > 0;
	var textinput = document.getElementById("text1").value


	if (topic == 0) {
		document.getElementById("topic1").innerText = textinput
		topic = textinput
	}
	
	else if (topic == 1) {
		document.getElementById("comment1").innerText = textinput
		topic = textinput
	}
	
	else if (topic == 2) {
		document.getElementById("comment2").innerText = textinput
		topic = textinput
	}

}

function clearFunction() {

		document.getElementById("topic1").innerText = "";
		document.getElementById("comment1").innerText = "";
		document.getElementById("comment2").innerText = "";
		document.getElementById("text1").value = "";

}