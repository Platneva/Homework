function Graph(corner_list) {
// Строим граф из списка ребер
	let graph = {};
	corner_list.forEach((corner) => {
		let p1 = corner[0];
		let p2 = corner[1];
		if (!graph[p1]) {
			graph[p1] = {};
		}
		if (!graph[p2]) {
			graph[p2] = {};
		}
		// В условии не ясно - направленный у нас граф или не направленный
		// Если граф направленный, то нужна только первая строка, если не направленный - то обе
		graph[p1][p2] = true;
		graph[p2][p1] = true;
	});
	// выводим для граф для отладки
	console.log("\ngraph = \n", graph);
	// Функция обхода в глубину
	this.walkDFS = function (startNode) {
		let nodes = {}; // Список уже обойденных вершин
		// Рекурсивная фунция обхода в глубину
		function walk(node) {
			console.log('go to ', node);
			nodes[node] = true;
			for (let next in graph[node]) {
				if (!nodes[next]) // Если вершину еще не посещали
					walk(next);
			}
		}
		// Запускаем рекурсивный обход
		walk(startNode);
	};
	// Функция обхода в ширину
	this.walkBFS = function (startNode) {
		let nodes = {}; // Список уже обойденных вершин
		let queue = []; // Список вершин для обхода
		queue.push(startNode);

		while (queue.length > 0) {
			let node = queue.shift();
			console.log('go to ', node);
			nodes[node] = true;

			for (let next in graph[node]) {
				if (!nodes[next]) // Если вершину еще не посещали
					queue.push(next);
			}
		}
	}
}

let graph1 = new Graph( [[0, 3], [1, 3], [2, 3], [4, 3], [5, 4]] );

console.log('DFS');
graph1.walkDFS(4);
console.log('BFS');
graph1.walkBFS(4);


