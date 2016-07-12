BST.prototype.balance = function() {
    if (this.root == null) {
        return false
    } else {
        var height = 0;
        var balance = 2;
        while (balance < -1 || balance > 1)
            var left = this.root.leftChild.nodeHeight(height);
            var right = this.root.rightChild.nodeHeight(height);
            balance = left - right;
            if (balance < -1) {
                // right longer than left
                this.balanceRight();

                }
                
            } else if (balance > 1) {
                // left longer than right
                this.balanceLeft();
                    
                }
            }
            

        }
    }
        
}
BST.prototype.balanceRight = function() {
    if (this.root.rightChild.leftChild != null && this.root.rightChild.rightChild != null) {
        var temp = this.root.rightChild.leftChild;
        this.root.rightChild.leftChild = this.root;
        this.root = this.root.rightChild;
    } else if (this.root.rightChild.leftChild != null && this.root.rightChild.rightChild == null) {
        this.root.rightChild.leftChild.rightChild = this.root.rightChild.leftChild;
        this.root.rightChild = this.root.rightChild.leftChild;
    }
    

}
// properties of node
// node.leftChild
// node.value 
// node.rightChild
// node.parent
// ignore for now ^
// node.key
Node.prototype.nodeHeight = function(height) {
    height++;
    if (this.leftChild != null && this.rightChild != null) {
        var left = this.leftChild.nodeHeight(height);
        var right = this.rightChild.nodeHeight(height);
        if (left > right) {
            return left;
        } else {
            return right;
        }
    }
    if (this.leftChild != null && this.rightChild == null) {
        var left = this.leftChild.nodeHeight(height);
        return left;
    }
    if (this.leftChild == null && this.rightChild != null) {
        var right = this.rightChild.nodeHeight(height);
        return right;
    }
    if (this.leftChild == null && this.rightChild == null) {
        return height;
    }
}