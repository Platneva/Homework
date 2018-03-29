function brakesValid(s) {
	
	let magazine = new Array();

	for (let i = 0; i < s.length; i++) {
		let ch = s[i];
		if (ch == '{' || ch == '(' || ch == '[') {
			magazine.push(ch);
		}

		if (ch == '}' || ch == ')' || ch == ']') {
			if (magazine.length == 0)
				return false;
			let m = magazine.pop();
			let ok = (m == '{' && ch == '}') || (m == '(' && ch == ')') || (m == '[' && ch == ']');
			if (!ok)
				return false;
		}
	}

	return magazine.length == 0;
}

console.log('test 3');
console.log(brakesValid('{[]({})}'));
console.log(brakesValid('{[]({})'));
console.log(brakesValid('{[]({)}}'));
