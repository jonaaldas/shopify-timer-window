let completeTime = '01 23 2023 12:00';
let btn = document.querySelector('button')?.addEventListener('click', () => {
	let selectedDate = document.querySelector('.date').value;
	let selectedtime = document.querySelector('.time').value;
	console.log(selectedDate, selectedtime);
	completeTime = selectedDate + ' ' + selectedtime;
	clearInterval(x);
	setInterval(startTimer, 1000, completeTime);
});

let startTimer = () => {
	// Get today's date and time
	let now = new Date().getTime();

	// let countDownDate = new Date('12 5, 2023 15:37:25').getTime();
	let countDownDate = new Date(`${completeTime}`).getTime();

	// Find the distance between now and the count down date
	let distance = countDownDate - now;

	// Time calculations for days, hours, minutes and seconds
	let days = Math.floor(distance / (1000 * 60 * 60 * 24));
	let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	let seconds = Math.floor((distance % (1000 * 60)) / 1000);

	// Output the result in an element with id="demo"
	document.getElementById('demo').innerHTML =
		days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's ';

	// If the count down is over, write some text
	if (distance < 0) {
		clearInterval(x);
		document.getElementById('demo').innerHTML = 'EXPIRED';
	}
};

let x = setInterval(startTimer, 1000);
