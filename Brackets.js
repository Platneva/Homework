function brakesValid(s) {
	// решаем с помощью конечного автомата с магазином
	let magazine = new Array();

	for (let i = 0; i < s.length; i++) {
		let ch = s[i];
		// Если текущий символ - открывающая скобка, то помещаем ее в магазин
		if (ch == '{' || ch == '(' || ch == '[') {
			magazine.push(ch);
		}
		// Если текущий символ - закрывающая скобка, то извлекаем верхний символ из магазина и сверям их
		if (ch == '}' || ch == ')' || ch == ']') {
			if (magazine.length == 0)
				return false;
			let m = magazine.pop();
			let ok = (m == '{' && ch == '}') || (m == '(' && ch == ')') || (m == '[' && ch == ']');
			if (!ok)
				return false;
		}
	}
	// После полного прохода строки - если в магазине остались символы - значит у нас открывающих скобок больше, чем закрывающих
	return magazine.length == 0;
}

console.log('test 3');
console.log(brakesValid('{[]({})}'));
console.log(brakesValid('{[]({})'));
console.log(brakesValid('{[]({)}}'));
