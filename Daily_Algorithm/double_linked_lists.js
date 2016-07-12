function DLL(head){
	var DLL = {};
	DLL.head = head;
	DLL.sort = function(){
		if (this.head == null){
			return false;
		} else {
			this.head.sort();
		}
	}
	return DLL;
}
function Node(val, prev){
	var Node = {};
	Node.sort = function(){
		var current = this;
		while(current.next != null){
			if(current.next.val < current.val){
				var temp = current.prev;
				current.prev = current.next;
				current.next = current.next.next;
				current.prev.prev = temp;
				current.prev.next = current;
				if (current.next.next != null){
					current.next.next.prev = current.next;
				}
				current = current.prev;
				current.sort();
			}
			if(current.prev == null){
				current = current.next;
				current.sort();
			}
			if(current.next.val > current.val && current.prev.val < current.val){
				current = current.next;
				current.sort();
			}
			if(current.prev.val > current.val){
				var temp = current.next;
				current.next = current.prev;
				current.prev = current.next.prev;
				current.next.next = temp;
				current.next.prev = current;
				current.next.next.prev = current.next;
				current.sort();
			}
		}
			return current;
		}
	Node.val = val;
	Node.prev = prev;
	if(prev != null){
		Node.prev.next = Node;
	}
	return Node;
}
	



// DLL.prototype.sort = function() {
// 	if (this.head == null){
// 		return false;
// 	} else {
// 		this.head.sort();
// 	}
// }
// Node.prototype.sort = function() {
// 	var current = this;
// 	while(current.next != null){
// 		if(current.next.val < current.val){
// 			var temp = current.prev;
// 			current.prev = current.next;
// 			current.next = current.next.next;
// 			current.prev.prev = temp;
// 			current.prev.next = current;
// 			current.next.next.prev = current.next;
// 			current = current.prev;
// 			current.sort();
// 		}
// 		if(current.next.val > current.val && current.prev.val < current.val || current.prev.val == null){
// 			current = current.next;
// 			current.sort();
// 		}
// 		if(current.prev.val > current.val){
// 			var temp = current.next;
// 			current.next = current.prev;
// 			current.prev = current.next.prev;
// 			current.next.next = temp;
// 			current.next.prev = current;
// 			current.next.next.prev = current.next;
// 			current.sort();
// 		}
// 	}
// 	return current;
// }

var node1 = Node(4, null, null);
var node2 = Node(5, node1, null);
var node3 = Node(2, node2, null);
var list = DLL(node1);
list.sort();
console.log(list);
console.log(list.head);
console.log(list.head.next);