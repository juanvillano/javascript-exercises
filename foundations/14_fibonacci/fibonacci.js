const fibonacci = function(n) {
    if (typeof n === "string") n = parseInt(n);
    if (n === 0) return 0;
    if (n === 1) return 1;
    if (n < 0) return "OOPS";

    
    let previous = 1;
    let current = 1; 

    for(let i = 2; i<n; i++) {
        let next = current + previous;
        previous = current;
        current = next;
    }
    return current;
};

// Do not edit below this line
module.exports = fibonacci;
