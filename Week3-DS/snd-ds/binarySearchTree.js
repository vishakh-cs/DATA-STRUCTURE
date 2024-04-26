// bst

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
    
    search(root,data){
        if(!root){
            return false;
        }
        if(root.data===data){
            return true;
        }else{
            if(data<root.data){
                return this.search(root.left,data)
            }else{
                return this.search(root.right,data)
            }
        }
        
    }
    
    // tree travel
    //preorder
    preOrder(root){
        if(root){
            console.log(root.data)
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }
    inorder(root){
        if(root){
            this.inorder(root.left)
            console.log(root.data)
            this.inorder(root.right)
        }
    }
    postOrder(root){
        if(root){
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.data)
        }
    }
    
    min(root){
        if(!root.left){
            return root.data;
        }
        return this.min(root.left)
    }
    
    max(root){
        if(!root.right){
            return root.data;
        }
        return this.max(root.right)
    }
    delete(data){
      this.root =this.deleteNode(this.root,data);
    }
    
    deleteNode(root,data){
        if(!root){
            return null;
        }
        if(data<root.data){
            root.left=this.deleteNode(root.left,data)
        }else if(data>root.data){
            root.right=this.deleteNode(root.right,data)
        }else{
            if(!root.left && !root.right){
                return null;
            }
            if(!root.left){
                return root.right;
            }if(!root.right){
                return root.left;   
            }
            root.data=this.min(root.right)
            root.data =this.deleteNode(root.right ,root.data)
        }
        return root;
    }
    
}


let bst = new binarySearchTree()
bst.insert(10)
bst.insert(20)
bst.insert(7)
bst.preOrder(bst.root)
// bst.inorder(bst.root)
// bst.postOrder(bst.root)
bst.min(bst.root)

bst.delete(7)
bst.preOrder(bst.root)
console.log(bst.search(bst.root,70))
console.log(bst.isEmpty())
