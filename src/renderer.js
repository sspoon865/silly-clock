function getClock() {
	let date = new Date();
	let hours = date.getHours();
	let minutes = date.getMinutes();
	let clockHours = document.getElementById("hours");
	let clockMinutes = document.getElementById("minutes");
	let clockNoons = document.getElementById("noons");

	if(hours > 12) {
		clockHours.innerText = hours - 12;
		clockNoons.innerText = "pm";
	} else {
		clockHours.innerText = hours;
		clockNoons.innerText = "am";
	}

	if(minutes < 10) {
		clockMinutes.innerText = "0" + minutes;
	} else {
		clockMinutes.innerText = minutes;
	}
}

window.onload = setInterval(function() {getClock()}, 250);