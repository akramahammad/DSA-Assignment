function networkpack(arr1, arr2) {
    const size = arr1[0];
    const nmber = arr1[1];
    const qee = [];

    for (let i = 0; i < nmber; i++) {
        let [arrtime, proctime] = arr2[i];
        const pack = {};
        pack.arrtime = arrtime;
        pack.proctime = proctime;
        qee.push(pack);
    }

    let starttime = 0;
    let occpied = 0;
    const result = [];
    const arrtimes = [];
    for (let i = 0; i < qee.length; i++) {
        if (occpied < size) {
            starttime = starttime > qee[i].arrtime ? starttime : qee[i].arrtime;
            result.push(starttime);
            arrtimes.push(qee[i].arrtime);
            occpied++;
            starttime += qee[i].proctime;
        } else {
            if (qee[i].arrtime == arrtimes[arrtimes.length - 1]) {
                result.push(-1);

            } else {
                starttime = starttime > qee[i].arrtime ? starttime : qee[i].arrtime;
                result.push(starttime);
                arrtimes.push(qee[i].arrtime);
                occpied++;
                starttime += qee[i].proctime;
            }
        }
    }

    return result;
}


const bffer = [1, 2];
const packarr = [
    [0, 1],
    [0, 1]
];

const bffer1 = [1, 2];
const packarr1 = [
    [0, 1],
    [1, 1]
];

const bffer2 = [2, 5];
const packarr2 = [
    [0, 1],
    [0, 1],
    [0, 1],
    [1, 3],
    [2, 3]
];

console.log(networkpack(bffer, packarr));
console.log(networkpack(bffer1, packarr1));
console.log(networkpack(bffer2, packarr2));