let clockHours = document.getElementById("hours");
let clockMinutes = document.getElementById("minutes");
let clockNoons = document.getElementById("noons");
let settingsIcon = document.getElementById("settings-icon");
let popup = document.getElementById("popup");
let settingsDiv = document.getElementById("settings");
let clock = document.getElementById("clock-container");
let colorInput = document.getElementById("color-input");
let shadowToggle = document.getElementById("shadow-toggle");
let borderToggle = document.getElementById("border-toggle");
let root = document.documentElement;
let setup = false;

function getClock() {
	let date = new Date();
	let hours = date.getHours();
	let minutes = date.getMinutes();

	if(hours >= 12) {
		clockNoons.innerText = "pm";
	} else {
		clockNoons.innerText = "am";
	}

	if(clockHours.getAttribute("data-hours") != "24") {
		if(hours > 12) {
			clockHours.innerText = hours - 12;
		} else {
			clockHours.innerText = hours;
		}
	} else {
		clockHours.innerText = hours;
	}

	if(minutes < 10) {
		clockMinutes.innerText = "0" + minutes;
	} else {
		clockMinutes.innerText = minutes;
	}
};

window.onload = setInterval(function() {getClock()}, 250);

document.addEventListener("DOMContentLoaded", function () {
	if(setup == false) {
		root.style.setProperty("--all-color", "white");
		root.style.setProperty("--shadows", "drop-shadow( 5px 5px 5px rgb(0, 0, 0)");
		root.style.setProperty("--borders", "1px black");
		shadowToggle.checked = true;
		borderToggle.checked = true;
		colorInput.value = "#ffffff";

		setup = true;
	}
});

clockNoons.onclick = function (e) {
	let noons = e.target;
	
	if(noons.style.textTransform == "uppercase" || noons.style.textTransform == "") {
		noons.style.textTransform = "lowercase";
	} else {
		noons.style.textTransform = "uppercase";
	}
};

clockHours.onclick = function (e) {
	let hours = e.target.getAttribute("data-hours");

	if(hours == "12" || hours == "") {
		clockHours.setAttribute("data-hours", "24");
	} else {
		clockHours.setAttribute("data-hours", "12");
	}
};

settingsIcon.addEventListener("click", function () {
	if(popup.style.getPropertyValue("display") == "" || popup.style.getPropertyValue("display") == "none") {
		popup.style.setProperty("display", "inline");
		clock.style.setProperty("filter", "blur(3px)");
	} else {
		popup.style.setProperty("display", "");
		clock.style.setProperty("filter", "blur(0px)");
	}
});

/*settingsIcon.addEventListener("click", function () {
	const settingsWindow = window.open("settings.html", "_blank");
})*/

window.addEventListener("click", e => {
	if(popup.style.getPropertyValue("display") == "inline") {
		if(e.target == popup) {
			popup.style.display = "";
			clock.style.setProperty("filter", "blur(0px)");
		}
	}
});

colorInput.addEventListener("input", function (e) {
	let color = e.target.value;

	root.style.setProperty("--all-color", color);
}, false);

shadowToggle.addEventListener("change", function (e) {
	if(e.target.checked == false) {
		root.style.setProperty("--shadows", "drop-shadow(hidden)");
		settingsIcon.style.setProperty("filter", "drop-shadow(0px 0px 0px black)")
	} else {
		root.style.setProperty("--shadows", "drop-shadow(5px 5px 5px rgb(0, 0, 0)");
	}
});

borderToggle.addEventListener("change", function (e) {
	if(e.target.checked == false) {
		root.style.setProperty("--borders", "0px black");
		document.querySelector("svg").style.setProperty("stroke", "transparent");
	} else {
		root.style.setProperty("--borders", "1px black");
		document.querySelector("svg").style.setProperty("stroke", "black");
	}
});