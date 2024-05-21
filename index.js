
if (localStorage.getItem("hey") == null) {
	var id = 1
	var hey = [];
}
else {
	var hey = JSON.parse(localStorage.getItem("hey"));

	var id = hey.length + 1
}

function loginNow() {
	if (moveLogin && moveRegister) {
		moveLogin.classList.add("show");
		moveRegister.classList.remove("show");
		moveRegister.classList.add("hide");
	}

}
function xyz() {
	var a = document.getElementById("fname").value
	var b = document.getElementById("email").value
	var c = document.getElementById("password").value
	var d = document.getElementById("password2").value


	var temp = { username: a, number: b, pass: c, pass1: d, id: id++ };
	hey.push(temp);

	localStorage.setItem("hey", JSON.stringify(hey))
	alert("succesfully")
}
function registerNow() {

	if (moveRegister) {
		moveRegister.classList.add("show");
		moveLogin.classList.remove("show");
		moveLogin.classList.add("hide");

	}
	else {
		alert("something went wrong")
	}
}


// xyz.push(list)

