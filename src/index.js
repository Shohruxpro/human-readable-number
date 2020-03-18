module.exports = function toReadable(number) {
        // function toReadable(number) {
        if (number === 0) {
            return 'zero';
        }
        let arr = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
        let strNum = number.toString();
        let str = '';
        let numbers = {
            0: '',
            10: 'ten',
            11: 'eleven',
            12: 'twelve',
            13: 'thirteen',
            14: 'fourteen',
            15: 'fifteen',
            16: 'sixteen',
            17: 'seventeen',
            18: 'eighteen',
            19: 'nineteen',
            20: 'twenty',
            30: 'thirty',
            40: 'forty',
            50: 'fifty',
            60: 'sixty',
            70: 'seventy',
            80: 'eighty',
            90: 'ninety',
        }
        for (let i = 0; i < strNum.length; i++) {
            if (i === 0 && strNum.length === 3) {
                if (strNum[i + 1] == '0' && strNum[i + 2] == '0') {
                    str += arr[+strNum[i] - 1] + ' hundred';
                } else
                    str += arr[+strNum[i] - 1] + ' hundred ';
            } else if (i === 1 && strNum.length === 3) {
                if (numbers.hasOwnProperty(+strNum.slice(1))) {
                    str += numbers[+strNum.slice(1)];
                    break;
                } else {
                    if (strNum[i] == '0')
                        str += numbers[+strNum[i] * 10];
                    else
                        str += numbers[+strNum[i] * 10] + ' ';
                }
            } else if (strNum.length === 2 && numbers.hasOwnProperty(+strNum)) {
                str += numbers[+strNum];
                break;
            } else if (strNum.length === 2 && i === 0) {
                str += numbers[+strNum[i] * 10] + ' ';
            } else {
                str += arr[+strNum[i] - 1]
            }
        }
        return str;
    }
    // console.log(toReadable(0))