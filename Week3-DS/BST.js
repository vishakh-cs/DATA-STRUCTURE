// bst

class Node{
    constructor(data){
        this.data=data;
        this.left=null;
        this.right =null;
    }
}

class BinnarySearchTree{
    constructor(){
        this.root=null;
    }
    
    isEmpty(){
        return this.root===null;
    }
    
    insert(data){
        let newNode =new Node(data)
        if(this.isEmpty()){
            this.root=newNode;
        }else{
            this.insertNode(this.root,newNode)
        }
        
    }
insertNode(root, newNode) {
    if (newNode.data < root.data) {
        if (root.left === null) {
            root.left = newNode;
        } else {
            this.insertNode(root.left, newNode);
        }
    } else if (newNode.data >= root.data) {
        if (root.right === null) {
            root.right = newNode;
        } else {
            this.insertNode(root.right, newNode);
        }
    }
}


    search(root,data){
        if(!root){
            return false;
        }
        if(root.data ===data){
            return true;
        }else{
            if(data<root.data){
                return this.search(root.left,data)
            }else{
                return this.search(root.right,data)
            }
        }
    }

    preOreder(root){
        if(root){
        console.log(root.data)
        this.preOreder(root.left);
        this.preOreder(root.right);
     }
  }

  inOrder(root){
    if(root){
        this.inOrder(root.left);
        console.log(root.data);
        this.inOrder(root.right)
    }
  }

  postOrder(root){
    if(root){
        this.postOrder(root.left);
        this.postOrder(root.right);
        console.log(root.data);
    }
  }

  min(root){
    if(!root.left){
        return root.data
    }else{
        return this.min(root.left)
    }
  }

  max(root){
    if(!root.right){
        return root.data
  }else{
    return this.max(root.right)
  }
  }
  
  
  delete(data) {
        this.root = this.deleteNode(this.root, data);
    }
  
   deleteNode(root, data) {
        if (root === null) {
            return root;
        }
        if (data < root.data) {
            root.left = this.deleteNode(root.left, data);
        } else if (data > root.data) {
            root.right = this.deleteNode(root.right, data);
        } else {
            if (!root.left && !root.right) {
                return null;
            }
            if (!root.left) {
                return root.right;
            }
            if (!root.right) {
                return root.left;
            }
            root.data = this.min(root.right);
            root.right = this.deleteNode(root.right, root.data);
        }
        return root;
    }
}



let bst = new BinnarySearchTree()

bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);



console.log(bst.search(bst.root,6))
console.log(bst.search(bst.root,3))

console.log("min",bst.min(bst.root))
console.log("max",bst.max(bst.root))


// bst.inOrder(bst.root)
// bst.preOreder(bst.root)
// bst.postOrder(bst.root)


bst.delete(10)
console.log(bst.search(bst.root,10))
console.log("Is BST Empty:", bst.isEmpty()); 