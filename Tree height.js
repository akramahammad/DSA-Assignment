const findHeight = (str) => {
    const nodearr = str.split(" ");
    const treearr = [];
    let findNode = -1;
    let count = 0;
    let height = 0;
    while (count < nodearr.length) {
        for (let i = 0; i < nodearr.length; i++) {
            if (nodearr[i] == findNode) {
                treearr.push(i);
                count++;
            }
        }
        height++;
        findNode = treearr[treearr.length - 1];
    }
    return `Height of the tree =>${height}`;

}

const nodestr1 = "4 -1 4 1 1";
console.log(findHeight(nodestr1));
const nodestr2 = "-1 0 4 0 3";
console.log(findHeight(nodestr2));