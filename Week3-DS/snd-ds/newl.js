class Graph{
constructor(){
    this.graph ={}
}


  addVertex(vertex){
    if(!this.graph[vertex]){
        this.graph[vertex] =[];

    }
    
  }

  addEdge(source,destination){
    this.addVertex(source)
    this.addVertex(destination)

    this.graph[source].push(destination)
    this.graph[destination].push(source)
  }

  hasEdge(source,destination){
    return this.graph[source] && this.graph[source].includes(destination) 
  }

  dfs(startVertex,visited={}){
    console.log(startVertex);
    visited[startVertex]=true;

    let neigbhor = this.graph[startVertex]
    for(let i=0;i<neigbhor.length;i++){
        neigbhor=neigbhor[i];
        if(!visited[neigbhor]){
            this.dfs(neigbhor,visited)
        }
    }
  }
}
const graph = new Graph()

graph.addVertex(20)
graph.addVertex(18)
graph.addVertex(27)

graph.addEdge(10,20)
graph.addEdge(18,27)


console.log(graph.hasEdge(10,20))
console.log(graph.hasEdge(10,30))

console.log("DFS:");
graph.dfs(10);
graph.dfs(18);