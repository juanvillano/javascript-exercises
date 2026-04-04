const repeatString = function(str, num) {
    let result = '';

    if (num < 0) {
        return 'ERROR';
    }
        
    if (str == '' || num == 0) {
        return '';
    }

    for (let i=0; i < num; i++) {
        result += str;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
