function LinkedList(){
    this.head = null;
    this.tail = null;
    this.length = 0;
}

function Node() {
    this.next = null;
    this.prev = null;
    this.content = null;
}

LinkedList.prototype.add = function(_content){
    var node = new Node(); node.content = _content;

    if (this.head == null) {
        this.head = node; this.length = 1;
        return node;
    }

    if (this.tail == null){
        this.tail = node;
        this.tail.prev = this.head;
        this.head.next = this.tail;
        this.length = 2;
        return node;
    }

    this.tail.next = node;
    node.prev = this.tail;
    this.tail = node;
    this.length++;
    return node;
}

LinkedList.prototype.print = function(){
    if (this.head == null) return "empty list";
    var s = "";
    var node = this.head;
    while(node != null){
        s += node.content + "   ";
        node = node.next;
    }
    return s;
}

var aList = new LinkedList();
function addNode(){
    var c = document.getElementById('v').value
    aList.add(c);
    document.getElementById('output').innerHTML = aList.print();
}