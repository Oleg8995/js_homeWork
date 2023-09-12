// *********************************** LESS 18 ********************************************

// # 1 Pythagorean theorem

const pythagorean = (a, b) => {
    let c = Math.sqrt(a * a + b * b);
   return c.toFixed(2);
};

pythagorean(5, 12);
// 13
pythagorean(24, 102);
pythagorean(6, 2);
pythagorean(988, 110);

// ==========================================================

// # 2 Show number in money format

const formatMoney = (num) => {
    const sign = num >= 0 ? '+' : '-';
    const rounding = Math.abs(num).toFixed(2).toLocaleString();
    const toNumber = Number(rounding);
    const numTostr = String(toNumber).replace(/ /g, ',');

    const res = sign + ' ' + numTostr;
    console.log(res);

};

formatMoney(1232323);
//'+ 1,232,323.00'

formatMoney(-23.2132);
//'- 23.21'

// ==========================================================

// # 3 Format number in spaces

const formatNumber = (num) => {
    const sign = num >= 0 ? '+' : '-';
    const formantNum = num.toLocaleString();
    const res = sign + ' ' + formantNum;
    console.log(res);
    return res;
};

formatNumber(1232323);
// 1 232 323

formatNumber(1223.65378);
// 1 223.654
formatNumber(47128521756.55);
formatNumber(12342762761);

// ==========================================================

// # 4 Write a password generator with length n

const generatePassword = (n) => {
    const symbol = '!"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[]^_`abcdefghijklmnopqrstuvwxyz';
    let password = '';
    
    for (let i = 0; i <= n; i++) {
        const randomIndex = Math.trunc(Math.random() * n);
        password += symbol[randomIndex];
    }
    console.log(password);
    
};

generatePassword(8);
// 1H:s4dh$
generatePassword(4);
generatePassword(5);
generatePassword(15);


// ==========================================================

// # 5 Calculate percentage with n numbers after dot

const calc = (firstNum, secondNum, precision)=> {

    const perc = ( ( secondNum * 100 ) / firstNum ).toFixed(precision);
    console.log(perc);
    return perc;
};

calc(200, 50, 0);
// 25

calc(200, 0.14, 1);
// 0.1
calc(200, 44, 2);
calc(97, 0.13, 4);
calc(230, 73, 3);

// ==========================================================

// # 6 Get integer part of number and decimal

const splitNumber = (num) => {

    const res = {
        int: null,
        decimal: null,
    };

    const numFloat = Math.floor(num);

    if ( num % numFloat === 0) {
        res.int = num;
        res.decimal = 0;
    } else {
        res.int = numFloat;
        res.decimal = Number(( num - numFloat).toFixed(2).slice(2));
    }
    console.log(res);

};

splitNumber(2);
// {int: 2, decimal: 0}

splitNumber(2.34);
// {int: 2, decimal: 34}
splitNumber(0.44587);
splitNumber(66.99);


// ==========================================================

// # 7 Check if prime

const isPrime = (n) => {

        for ( let i = 2; i * i <= n; i++ ) {
        if ( n % i === 0 ) {
            console.log(false);
            return false;
        }

        if (n < 2) {
            console.log(false);
            return false
        }
    };
    console.log(true);
    return true;
};

isPrime(4);
// false

isPrime(5);
// true
isPrime(17);
isPrime(31);
isPrime(77);

// ==========================================================

// # 8 Check if number is Armstrong Number

const isArmstrong = (n) => {
    const numToString = n.toString();
    const numLength = numToString.length;
    let sum = 0;
  
    for (let i = 0; i < numLength; i++) {
      const digitNumber = parseInt(numToString[i]);
      sum += digitNumber ** numLength;
    }
    
    console.log(sum === n);
    return sum === n;
};

isArmstrong(4);
// true
isArmstrong(153);
// true
isArmstrong(43);
isArmstrong(13);
isArmstrong(88593477);