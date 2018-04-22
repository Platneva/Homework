function populateWord(text) {
	let words = {};
	
// Сначала делим текст на строки и подсчитываем их в объекте words
	let word_start = 0;
	for (let word_end = 0; word_end <= text.length; word_end++) {
		let is_symbol = false;
		if (word_end < text.length) {
			let char = text[word_end];
			is_symbol = (char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z');
		}

		if (!is_symbol) {
			if (word_start < word_end - 1) {
				let word = text.substring(word_start, word_end).toLowerCase();
				if (words[word]) {
					words[word]++;
				} else {
					words[word] = 1;
				}
			}
			word_start = word_end + 1;
		}
	}

	// Теперь уже просто ищем в объекте слово с максимальным числом
	let max_word = '';
	let max_count = 0;
	for (word in words) {
		let count = words[word];
		if (count > max_count) {
			max_word = word;
			max_count = count;
		} else if (count == max_count) {
			max_word = '---'
		}
	}

	return max_word;
}

console.log('test 2');
let text = 'Sed tempus ipsum quis eros tempus lacinia Cras finibus lorem ut lacinia egestas nunc nibh iaculis est convallis tincidunt mi mi sed nisl Sed porttitor aliquam elit ullamcorper tincidunt arcu euismod quis Mauris congue elit suscipit leo varius facilisis Cras et arcu sodales laoreet est vitae pharetra orci Integer eget nulla dictum aliquet justo semper molestie neque Maecenas bibendum lacus tincidunt auctor varius purus felis ullamcorper dui et laoreet ligula ex et risus Donec eget fringilla nibh Cras congue tincidunt accumsan Maecenas euismod eleifend elit ut rhoncus tortor sodales a Cras egestas finibus lorem non tempor tincidunt aera';
console.log(populateWord(text));
