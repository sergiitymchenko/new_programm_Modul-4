const ALPHABET = `qwertyuiop[]asdfghjkl;'zxcvbnm,./`;
let keyboard = ALPHABET.split('');

let upper = keyboard.slice(0,12);
let middle = keyboard.slice(12,23);
let lower = keyboard.slice(23,33);

(addKeyboardLayout = () => {
	document.getElementById('upper-out').innerHTML = upper;
	document.getElementById('middle-out').innerHTML = middle;
	document.getElementById('lower-out').innerHTML = lower;
})();

let getRandomInt = (min, max) => {
	return Math.floor(Math.random() * (max - min)) + min;
}

(getRandCharInRow = () => {
	let out1 = document.getElementById('out1');
	let out2 = document.getElementById('out2');
	let out3 = document.getElementById('out3');

	document.getElementById('btn-upper').onclick = () => {
		out1.innerHTML = `${upper[getRandomInt(0,upper.length)]}`;
	}
	document.getElementById('btn-middle').onclick = () => {
		out2.innerHTML = `${middle[getRandomInt(0,middle.length)]}`;
	}
	document.getElementById('btn-lower').onclick = () => {
		out3.innerHTML = `${lower[getRandomInt(0,lower.length)]}`;
	}
})();

(getRandCharInAlph = () => {
	let out4 = document.getElementById('out4');

	document.getElementById('btn-keyboard').onclick = () => {
		out4.innerHTML = `${keyboard[getRandomInt(0,keyboard.length)]}`;
	}
})();