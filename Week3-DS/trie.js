//  trie

class TrieNode{
    constructor(){
        this.end =false;
        this.children ={}
    }
}

class trie{
    constructor(){
        this.root= new TrieNode()
    }
    
    insert(word){
        let node = this.root;
        for(let i=0;i<word.length;i++){
            if(!node.children[word[i]]){
                node.children[word[i]] = new TrieNode()
            }
            node = node.children[word[i]]
        }
        node.end=true;
    }
    
    search(word){
        let node = this.root;
        for(let i =0;i<word.length;i++){
            if(node.children[word[i]]){
                node = node.children[word[i]]
            }else{
                return false;
            }
        }
        return node.end;
    }
    
    remove(word){
        this.removeWord(this.root,word,0)
    }
    removeWord(node,word,index){
        if(index===word.length){
            node.end=false;
            return;
        }
        const childNode = node.children[word[index]];
        if(childNode){
            this.removeWord(childNode,word,index+1)
            
        }
        if(!childNode.end && Object.keys(childNode.children).length===0){
            delete node.children[word[index]]
        }
        
    }
}

// Create a new Trie\
const tries = new trie
tries.insert("cat");
tries.insert("car");
tries.insert("bat");

tries.remove("bat")

console.log(tries.search("cat"));
console.log(tries.search("car"));
console.log(tries.search("bat")); 
console.log(tries.search("cab")); 

