// let time = '12-30-2024 16:00';
// let startCountDown = (time) => {
// 	let startTimer = () => {
// 		let now = new Date().getTime();
// 		let countDownDate = new Date(`${time}`).getTime();
// 		let distance = countDownDate - now;
// 		let days = Math.floor(distance / (1000 * 60 * 60 * 24));
// 		let hours = Math.floor(
// 			(distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
// 		);
// 		let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
// 		let seconds = Math.floor((distance % (1000 * 60)) / 1000);

// 		document.getElementById('demo').innerHTML =
// 			days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's ';

// 		if (distance < 0) {
// 			clearInterval(x);
// 			document.getElementById('demo').innerHTML = 'EXPIRED';
// 		}
// 	};

// 	setInterval(startTimer, 1000, time);
// };
// export default startCountDown(time);
