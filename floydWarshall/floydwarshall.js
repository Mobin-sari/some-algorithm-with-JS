const INF = Number.MAX_SAFE_INTEGER;

// تابع برای چاپ ماتریس کوتاه‌ترین مسیرها
function printSolution(dist, vertices) {
  let output = "Shortest distances between every pair of vertices:\n";
  for (let i = 0; i < vertices; i++) {
    for (let j = 0; j < vertices; j++) {
      if (dist[i][j] === INF) {
        output += "INF ";
      } else {
        output += dist[i][j] + " ";
      }
    }
    output += "\n";
  }
  console.log(output);
}

// الگوریتم Floyd-Warshall برای یافتن کوتاه‌ترین مسیرها
function floydWarshall(graphFloyd, vertices) {
  const dist = [];

  // مقداردهی اولیه به ماتریس فاصله‌ها
  for (let i = 0; i < vertices; i++) {
    dist[i] = [];
    for (let j = 0; j < vertices; j++) {
      dist[i][j] = graphFloyd[i][j];
    }
  }

  // اجرای الگوریتم
  for (let k = 0; k < vertices; k++) {
    for (let i = 0; i < vertices; i++) {
      for (let j = 0; j < vertices; j++) {
        if (dist[i][k] !== INF && dist[k][j] !== INF && dist[i][k] + dist[k][j] < dist[i][j]) {
          dist[i][j] = dist[i][k] + dist[k][j];
        }
      }
    }
  }

  // نمایش نتایج
  printSolution(dist, vertices);
}

// مثال اجرای الگوریتم Floyd-Warshall
const graphFloyd = [
  [0, 5, INF, 10],
  [INF, 0, 3, INF],
  [INF, INF, 0, 1],
  [INF, INF, INF, 0]
];
const Vfloyd = graphFloyd.length;

floydWarshall(graphFloyd, Vfloyd);


//این کد جاوا‌اسکریپت الگوریتم راFloyd-Warshall
//پیاده‌سازی می‌کند و یک مثال از گراف وزن‌دار با اندازه 4
//رأس ارائه می‌دهد.