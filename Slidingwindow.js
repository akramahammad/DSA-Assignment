const leng = 8;
const mArr = [2, 7, 3, 1, 5, 2, 6, 2];
const sblength = 4;

function slidewindow(len, arr, sblen) {
    let qee = [];
    let maxarr = [];
    for (let i = 0; i < sblen; i++) {
        qee.push(arr[i]);

    }
    let i = 0;
    while (i + sblen <= len) {
        qee = arr.slice(i, i + sblen);
        let max = 0;
        for (let i = 0; i < qee.length; i++) {
            if (qee[i] > max) {
                max = qee[i];
            }
        }
        maxarr.push(max);
        i++;
    }
    return maxarr.join(" ");
}

console.log(slidewindow(leng, mArr, sblength));
