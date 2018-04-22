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


function WeightGraph(corner_list) {
	
	let graph = {};
	corner_list.forEach((corner) => {
		let p1 = corner[0];
		let p2 = corner[1];
		let weight = corner[2];
		if (!graph[p1]) {
			graph[p1] = {};
		}
		if (!graph[p2]) {
			graph[p2] = {};
		}

		graph[p1][p2] = weight;
		graph[p2][p1] = weight;
	});

	
	console.log("\nweight graph = \n", graph);

	
	this.findPath = function (startNode, endNode) {
		let nodes = {}; 

		let node = startNode;
		nodes[node] = { weight : 0, prev : null, finish : false }

		while (node != null) { 
			
			for (next in graph[node]) {
				let new_weight = nodes[node].weight + graph[node][next];
				if (!nodes[next] || nodes[next].weight > new_weight) {
					nodes[next] = { weight : new_weight, prev : node }
				}
			}

			
			nodes[node].finish = true;
			
			
			node = null;
			let min = Infinity;
			for (next in nodes) {
				if (!nodes[next].finish && nodes[next].weight < min) {
					node = next;
					min = nodes[next].weight;
				}
			}
		}

		if (!nodes[endNode]) { 
			return "path from " + startNode + " to " + endNode + " not found";
		} 

		
		let ss = "" + endNode + "  =  " + nodes[endNode].weight;
		node = nodes[endNode].prev
		while (node != null) {
			ss = "" + node + " -> " + ss;
			node = nodes[node].prev;
		}
		return ss;
	}

}


let graph2 = new WeightGraph( [[0, 3, 5], [1, 3, 11], [2, 3, 56], [4, 3, 77], [5, 4, 89]] );
console.log(graph2.findPath(3, 3));
console.log(graph2.findPath(1, 5));


let graph3 = new WeightGraph([ [1, 2, 7], [1, 3, 9], [1, 6, 14], [2, 3, 10], [2, 4, 15], [3, 4, 11], [3, 6, 2], [4, 5, 6], [5, 6, 9] ]);
console.log(graph3.findPath(1, 5));
console.log(graph3.findPath(1, 4));


let graph4 = new WeightGraph([ [1, 2, 1], [3, 4, 2]]);
console.log(graph4.findPath(1, 3));
