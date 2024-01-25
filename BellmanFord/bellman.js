
function bellmanFord(graph, startNode) {
    const nodes = Object.keys(graph);
    const distances = {};
    const predecessors = {};

    // Initialize distances and predecessors
    nodes.forEach(node => {
        distances[node] = Infinity;
        predecessors[node] = null;
    });
    distances[startNode] = 0;

    // Relax edges repeatedly
    for (let i = 0; i < nodes.length - 1; i++) {
        nodes.forEach(node => {
            const neighbors = graph[node];
            neighbors.forEach(neighbor => {
                const distanceToNeighbor = distances[node] + neighbor.weight;
                if (distanceToNeighbor < distances[neighbor.node]) {
                    distances[neighbor.node] = distanceToNeighbor;
                    predecessors[neighbor.node] = node;
                }
            });
        });
    }

    // Check for negative cycles
    nodes.forEach(node => {
        const neighbors = graph[node];
        neighbors.forEach(neighbor => {
            const distanceToNeighbor = distances[node] + neighbor.weight;
            if (distanceToNeighbor < distances[neighbor.node]) {
                console.log("Negative cycle detected!");
                return;
            }
        });
    });

    return { distances, predecessors };
}

// Example usage
const graph = {
    A: [{ node: "B", weight: 3 }, { node: "C", weight: 2 }],
    B: [{ node: "C", weight: 1 }],
    C: [{ node: "B", weight: -2 }]
};

const startNode = "A";
const result = bellmanFord(graph, startNode);
console.log("Distances:", result.distances);
console.log("Predecessors:", result.predecessors);
