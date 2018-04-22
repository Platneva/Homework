function stringMaxSub(s) {
// Можно заметить, что число k по условию задачи обязательно явяляется делителем длины строки
// Таким образом мы можем просто перебрать все делители длины строки, начиная с самого большого - и вывести подходящий
	for (let k = s.length; k > 1; k--) {
		if (s.length % k != 0) 
			continue;

	
		let t_len = s.length / k;
		let ok = true;
		for (let i = 0; i < s.length - t_len; i += t_len) {
			let s1 = s.substring(i, i + t_len);
			let s2 = s.substring(i + t_len, i + 2 * t_len);
			ok = ok && (s1 === s2)
		}
	
		if (ok)
			return k;
	}

	
	return 1;
}

console.log('test 1');
console.log("abcabcabcabc = ", stringMaxSub("abcabcabcabc"));
console.log("aaaaaaaaaaaa = ", stringMaxSub("aaaaaaaaaaaa"));
console.log("abcdefgh = ", stringMaxSub("abcdefgh"));
