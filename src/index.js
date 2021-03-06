module.exports = function toReadable (number) {
    const numStr = {
        0: ['zero'],
        1: ['one'],
        2: ['two', 'twenty'],
        3: ['three', 'thirty'],
        4: ['four', 'forty'],
        5: ['five', 'fifty'],
        6: ['six', 'sixty'],
        7: ['seven', 'seventy'],
        8: ['eight', 'eighty'],
        9: ['nine', 'ninety'],
        10: ['ten'],
        11: ['eleven'],
        12: ['twelve'],
        13: ['thirteen'],
        14: ['fourteen'],
        15: ['fifteen'],
        16: ['sixteen'],
        17: ['seventeen'],
        18: ['eighteen'],
        19: ['nineteen']
    };
    let numLen = number.toString().length,
        temp = number.toString().split(''),
        str = '';

    if (numLen === 1){
        if (number > 1 && number < 10){
            return numStr[number][0];
        }
        return numStr[number][0];
    }

    if (numLen === 2){
        if (number % 10 === 0){
            if (number === 10){
                return numStr[number][0];
            } else {
                return numStr[temp[0]][1];
            }
        } else {
            if (number > 10 && number <20){
                return numStr[number][0];
            }

            return numStr[temp[0]][1] + ' ' + numStr[temp[1]][0];
        }
    }

    if (numLen === 3){
        let tmp = +(temp[1] + temp[2]);
        if (number % 10 !== 0){
            if (temp[1] === '0'){
                str = numStr[temp[0]][0] + ' hundred ' + numStr[temp[2]][0];
                return str;
            } else if (temp[1] === '1'){
                return numStr[temp[0]][0] + ' hundred '+ numStr[tmp][0];
            } else{
                return numStr[temp[0]][0] + ' hundred ' + numStr[temp[1]][1] + ' ' + numStr[temp[2]][0];
            }
        } else {
            let x = '';
            if (temp[2] === '0'){
                x = numStr[temp[0]][0] + ' hundred'; // возвращает 100
            }
            if (tmp === 10 && number / 100){
                x = numStr[temp[0]][0] + ' hundred ' + numStr[tmp]; //возвращает 10
            } else if (tmp > 10 && tmp % 10 === 0){
                x = numStr[temp[0]][0] + ' hundred ' + numStr[temp[1]][1]; // возвращает 20...
            }         
            return x;
        }
    }
};