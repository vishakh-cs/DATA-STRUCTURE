// class Graph{
//     constructor(){
//         this.graph={}
//     }

//     addVertex(vertex){
//         if(!this.graph[vertex]){
//             this.graph[vertex]=[]
//         }

//     }
//     addEdge(source,destination){
//           this.addVertex(source);
//           this.addVertex(destination);

//           this.graph[destination].push(source);
//           this.graph[source].push(destination);
//     }

    
  
// }

// let graph = new Graph();

// graph.addVertex(10);
// graph.addVertex(17);
// graph.addVertex(6);
// graph.addVertex(21);
// graph.addVertex(41);

// graph.addEdge(10,17);
// graph.addEdge(6,41)
// graph.addEdge(10,41)
// console.log(graph);



// //

//  leafNode(root){
//     if(!root){
//         return null;
//     }
//     if(root.left){
//         leafNode(root.left);
//     }
//     if(root.right){
//         leafNode(root.right)
//     }
//     return root.data;

//  }


class TrieNode{
    constructor(){
        this.end = false;
        this.children={}
    }
}
class Trie{
    constructor(){
        this.root=new TrieNode()
    }

    insert(word){
        let node = this.root;
        for(let i=0;i<word.length;i++){
        if(!node.children[word[i]]){
            node.children[word[i]]=new TrieNode()
        }
    node=node.children[word[i]]
        }
        node.end=true;
   }

   display(){
      console.log(this.root)
   }

   startWith(prefix){
    let node =this.root;

    for(let i=0;i<prefix.length;i++){
        if(node.children[prefix[i]]){
            node=node.children[prefix[i]]
        }

    }
    return 
   }

   
}



let trie = new Trie()

trie.insert("cat")
trie.insert("cach")
trie.insert("pet")
trie.insert("hello")
trie.insert("hi")

 console.log(trie);
console.log(JSON.stringify(trie,null,2))
 trie.display()

console.log(trie.startWith("ca"));
 