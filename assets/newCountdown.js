let time;
let startCountDown = (time) => {
	let startTimer = () => {
		let now = new Date().getTime();
		let countDownDate = new Date(`${time || '12-30-2024 16:00'}`).getTime();
		let distance = countDownDate - now;
		let days = Math.floor(distance / (1000 * 60 * 60 * 24));
		let hours = Math.floor(
			(distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
		);
		let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		let seconds = Math.floor((distance % (1000 * 60)) / 1000);

		document.querySelector('.inner-days').innerText = days;
		document.querySelector('.inner-hour').innerText = hours;
		document.querySelector('.inner-min').innerText = minutes;
		document.querySelector('.inner-sec').innerText = seconds;

		if (distance < 0) {
			clearInterval(startTimer);
			document.getElementById('demo').innerHTML = 'EXPIRED';
		}
	};

	setInterval(startTimer, 1000, time);
};
startCountDown(time);
