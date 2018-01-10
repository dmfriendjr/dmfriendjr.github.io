console.log('Testing');

let descriptionContent = document.getElementById('about-description');
let cursorDisplay = document.getElementById('cursor-display');
let wordArray = ['am a Full-Stack Developer.', 'enjoy coding.', 'am looking for work!', 'have my projects displayed below.'];
let wordIndex = 0;
let cursorInterval;

console.log(descriptionContent);

setTimeout( () => typeWord(wordArray[wordIndex]), 500);

function typeWord(word) {
	displayCursor();
	descriptionContent.innerHTML = '';
	let typedChars = 0;
	let callback = setInterval( () => {
		descriptionContent.innerHTML += word[typedChars];
		typedChars++;
		if (typedChars >= word.length) {
			clearInterval(callback);
			wordIndex + 1 >= wordArray.length ? wordIndex = 0 : wordIndex++;
			cursorInterval = flashCursor(8);
			setTimeout(eraseWord, 2000);
		}
	}, 150);
}

function eraseWord() {
	displayCursor();
	let word = descriptionContent.innerHTML;
	let callback = setInterval( () => {
		//Erasing word
		word = word.substring(0, word.length-1);
		descriptionContent.innerHTML = word; 
		if (word.length === 0) {
			clearInterval(callback);
			flashCursor(8);
			setTimeout( () => typeWord(wordArray[wordIndex]), 2000);
		}
	}, 80);
}

function displayCursor() {
	cursorDisplay.innerHTML = '|';
}

function flashCursor(maxIterations) {
	let visible = false;
	let iterations = 0;
	let interval = setInterval( () => {
		if (visible) {
			cursorDisplay.innerHTML = ' ';
		} else {
			cursorDisplay.innerHTML = '|';
		}
		iterations++;
		if (iterations >= maxIterations) {
			clearInterval(interval);
			cursorDisplay.innerHTML = '|';
		}
		visible = !visible;
	}, 250);
}
