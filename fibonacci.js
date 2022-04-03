//fibonacci
const fibonacci = (function() {
    let seq = [1, 1];

    return function(n) {
        if(seq.length > n) {
            return seq.slice(0, n);
        }

    while(seq.length < n) {
        const lastEle = seq[seq.length - 1];
        const secLastEle = seq[seq.length - 2];
        seq.push(secLastEle + lastEle);
    }
    return seq;
    }
})();
