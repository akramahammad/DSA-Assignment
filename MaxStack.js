class Stack {
    constructor() {
        this.data = [];
        this.max = [];
        this.top = null;
        this.length = 0;
    }
    append(val) {
        this.data.push(val);
        this.top = val;
        if (this.max.length == 0) {
            this.max.push(val);
        } else {
            if (val >= this.max[this.max.length - 1]) {
                this.max.push(val);
            }
        }
        this.length++;
    }
    remove() {
        const last = this.data.pop();
        if (last == this.max[this.max.length - 1]) {
            this.max.pop();
        }
        this.length--;
    }
    disp() {
        console.log(this.data);
    }
    maxelement() {
        return this.max[this.max.length - 1];
    }

}

const mystack = new Stack();

// mystack.append(2);
// mystack.append(3);
// mystack.append(9);
// mystack.append(7);
// mystack.append(2);
// console.log(mystack.maxelement());
// console.log(mystack.maxelement());
// console.log(mystack.maxelement());
// mystack.remove();
// console.log(mystack.maxelement());

mystack.append(7);
mystack.append(1);
mystack.append(7);
console.log(mystack.maxelement());
mystack.remove();
console.log(mystack.maxelement());