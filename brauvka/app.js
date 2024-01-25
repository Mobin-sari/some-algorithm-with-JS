// تابع برای یافتن نماینده (پدر) یک رأس درخت
function findParent(parent, i) {
    while (parent[i] !== i) {
      i = parent[i];
    }
    return i;
  }
  
  // تابع ادغام دو مجموعه به یکدیگر
  function unionSets(parent, rank, x, y) {
    let xRoot = findParent(parent, x);
    let yRoot = findParent(parent, y);
  
    if (rank[xRoot] < rank[yRoot]) {
      parent[xRoot] = yRoot;
    } else if (rank[xRoot] > rank[yRoot]) {
      parent[yRoot] = xRoot;
    } else {
      parent[yRoot] = xRoot;
      rank[xRoot]++;
    }
  }
  
  // الگوریتم Boruvka برای یافتن کمترین درخت پوشا
  function boruvkaMST(graphBrauvka, vertices) {
    const parent = [];
    const rank = [];
    for (let i = 0; i < vertices; i++) {
      parent[i] = i;
      rank[i] = 0;
    }
  
    let mstEdges = [];
    let numTrees = vertices;
  
    while (numTrees > 1) {
      const closest = new Array(vertices).fill(-1);
      for (let i = 0; i < graphBrauvka.length; i++) {
        let set1 = findParent(parent, graphBrauvka[i].src);
        let set2 = findParent(parent, graphBrauvka[i].dest);
  
        if (set1 === set2) continue;
  
        if (closest[set1] === -1 || graphBrauvka[i].weight < graphBrauvka[closest[set1]].weight) {
          closest[set1] = i;
        }
        if (closest[set2] === -1 || graphBrauvka[i].weight < graphBrauvka[closest[set2]].weight) {
          closest[set2] = i;
        }
      }
  
      for (let i = 0; i < vertices; i++) {
        if (closest[i] !== -1) {
          let set1 = findParent(parent, graphBrauvka[closest[i]].src);
          let set2 = findParent(parent, graphBrauvka[closest[i]].dest);
  
          if (set1 === set2) continue;
  
          mstEdges.push(graphBrauvka[closest[i]]);
          unionSets(parent, rank, set1, set2);
          numTrees--;
        }
      }
    }
  
    return mstEdges;
  }
  
  // مثال اجرای الگوریتم Boruvka
  const graphBrauvka = [
    { src: 0, dest: 1, weight: 10 },
    { src: 0, dest: 2, weight: 6 },
    { src: 0, dest: 3, weight: 5 },
    { src: 1, dest: 3, weight: 15 },
    { src: 2, dest: 3, weight: 4 }
  ];
  const V = 4; // تعداد رئوس گراف
  
  const mstResult = boruvkaMST(graphBrauvka, V);
  console.log("Edges in the minimum spanning tree using Boruvka's algorithm:");
  for (const edge of mstResult) {
    console.log(`${edge.src} -- ${edge.dest} == ${edge.weight}`);
  }

  