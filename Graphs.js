function Graph(corner_list) {

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

		graph[p1][p2] = true;
		graph[p2][p1] = true;
	});

	console.log("\ngraph = \n", graph);

	this.walkDFS = function (startNode) {
		let nodes = {}; 

		function walk(node) {
			console.log('go to ', node);
			nodes[node] = true;
			for (let next in graph[node]) {
				if (!nodes[next]) 
					walk(next);
			}
		}

		walk(startNode);
	};

	this.walkBFS = function (startNode) {
		let nodes = {}; 
		let queue = []; 
		queue.push(startNode);

		while (queue.length > 0) {
			let node = queue.shift();
			console.log('go to ', node);
			nodes[node] = true;

			for (let next in graph[node]) {
				if (!nodes[next]) 
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