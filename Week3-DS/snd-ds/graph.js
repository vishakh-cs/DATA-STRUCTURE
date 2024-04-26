// graph

class graph{
    constructor(){
        this.graph ={}
    }
    
    
    addVertex(vertex){
        if(!this.graph[vertex]){
            this.graph[vertex]=[]
            
        }
    }
        
        addEdge(source,destination){
            this.addVertex(source)
            this.addVertex(destination)
            
            this.graph[source].push(destination)
            this.graph[destination].push(source)
        }
        
        hasEdge(source,destination){
            return this.graph[source] && this.graph[source].includes(destination);
        }
    }

let graphs = new graph();

graphs.addVertex(10)
graphs.addVertex(20)

graphs.addVertex(30)

graphs.addEdge(10,30)
graphs.addEdge(10,20)
console.log(graphs.hasEdge(10, 20));


