// bst 

class Node{
    constructor(data){
        this.data=data;
        this.left=null;
        this.right=null;
    }
}

class binarySearchTree{
    constructor(){
        this.root=null;
    }
    
    isEmpty(){
        return this.root==null;
    }
    insert(data){
        let newNode = new Node(data)
        if(this.isEmpty()){
            this.root=newNode;
        }else{
            this.insertNode(this.root,newNode)
        }
    }
    
    insertNode(root,newNode){
        if(newNode.data<root.data){
            if(root.left===null){
                root.left = newNode
            }
            this.insertNode(root.left,newNode)
        }else if(newNode.data>root.data){
            if(root.right===null){
                root.right=newNode;
            }
            this.insertNode(root.right,newNode)
        }
    }
}


let bst = new binarySearchTree()
bst.insert(10)
console.log(bst.isEmpty())