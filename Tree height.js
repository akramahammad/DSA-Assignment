const findHeight = (str) => {
    const nodearr = str.split(" ");
    const heightarr = [];
    let height = 1;
    for (let i = 0; i < nodearr.length; i++) {
        let crnode = nodearr[i];
        while (nodearr[crnode] > -1) {
            crnode = nodearr[crnode];
            height++;
        }
        height++;
        heightarr.push(height);
        height = 1;
    }

    return `Height of tree=> ${Math.max(...heightarr)}`;

}

const nodestr1 = "4 -1 4 1 1";
console.log(findHeight(nodestr1));
const nodestr2 = "-1 0 4 0 3";
console.log(findHeight(nodestr2));
const nodestr3 = "-1 0 4 0 1 2 5 6";
console.log(findHeight(nodestr3));
