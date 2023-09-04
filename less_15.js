// less 15
// #1  Quadratic equation
// Create a function that solves quadratic equation
// Use discriminant fot finding equation roots
// Return value of function should be obj {x1, x2}
// If there are no roots return {x1:null, x2:null}
// const roots = calculate(1, 5, 6);
  // {
  //   x1: -2,
  //   x2: -3,
  // };

const calculateQuadratic = (a, b, c) => {
    const discr = b ** 2 - 4 * a * c;
    let x1, x2, x ;

    if ( discr > 0 ) {
        x1 = (-b - Math.sqrt(discr)) / (2 * a);
        x1 = (Math.round(x1 * 100)) / 100;
        x2 = (-b + Math.sqrt(discr)) / (2 * a);
        x2 = (Math.round(x2 * 100)) / 100;

        console.log(x1 ,x2);
        return x1, x2;

    } else if ( discr === 0 ) {
        x = - b / (2 * a);

        console.log(x);
        return x;
    } else if ( discr < 0 ) {
        console.log(x1 = null, x2 = null);
        return x1 = null, x2 = null;
    }

  };
  calculateQuadratic(1, 5, 6);
  calculateQuadratic(1, 5, 2);
  calculateQuadratic(23, 15, 8);
  calculateQuadratic(4, 54, 68);
  calculateQuadratic(88, 57, 5);

//   ================================================

// #2  Factorial
// Create a function that finds a factorial of a number
// const result = factorial(5);
// 120



const factorial = (num) => {
    let result = 1;
    for (let i = 1 ; i <= num; i++ ) {
        result = result * i;
    }
    console.log(result);
    return result;
  };
  
factorial(5);
factorial(7);
factorial(4);

//   =================================================

// #3 Calculator
// Create a function that accepts a callback
// and infinite number of arguments
// Callbacks can be: addition, subtraction, multiplication, division
// const result = calculate(addition, 1, 1, 1, 1);
//   // 1 + 1 + 1 + 1 = 4
//   const result = calculate(subtraction, 20, 10, 5);
//   // 20 - 10 - 5 = 5
//   const result = calculate(multiplication, 2, 10, 2);
//   // 2 * 10 * 2 = 40
//   const result = calculate(division, 20, 10, 2);
//   // 20 / 10 / 2 = 1


const addition = () => '+';
const subtraction = () => '-';
const multiplication = () => '*';
const division = () => '/';

const calculate = (callback, ...rest) => {
   
    if ( callback == addition) {
        let res = 0;
        for (let i of rest ) {
            res += i;
        }
        console.log(res);
        return res;
    }

    if ( callback == subtraction) {
        let res = rest[0];
        arrRevers = rest.reverse();
        for (let i = 0; i < arrRevers.length - 1; i++ ) {
            res -= arrRevers[i] ;
        }
        console.log(res);
        return res;
    }

    if ( callback == multiplication) {
        let res = 1;
        for (let i of rest ) {
            res *= i;
        }
        console.log(res);
        return res;
    }
  
    if ( callback == division) {
        let res = rest[0];
        arrRevers = rest.reverse();
        for (let i = 0; i < arrRevers.length - 1; i++ ) {
            res /= arrRevers[i] ;
        }
        console.log(res);
        return res;
    }
    
  };

calculate(addition, 21, 88, 27, 1);
calculate(subtraction, 20, 10, 5);
calculate(multiplication, 55, 10, 2);
calculate(division, 20, 10, 0.5);
  
// ==================================================================================

// # 3 Fibonacci
// Create a function that receives a value from user
// and prints list of fibonacci seq
// Seq starts from 1
// const result = calculate(5);
// 1 1 2 3 5

const fib = (n) => {

    let prev = 0, 
        next = 1;

    for(let i = 0; i < n; i++) {
        next = prev + next;
        prev = next - prev;
        
        console.log(prev);
    }
};

fib(5);
fib(7);

// ==================================================================================

// #4 Pyramid
// Create a function that receives a value from user
// and prints a pyramid with rows from received value
// Empty space fill with # Pyramid fill with *
// printPyramid(5);
// ####*####
// ###***###
// ##*****##
// #*******#
// *********

const printPyramid = (n) => {
    
    let str = '';

    for ( let i = 1; i <= n ; i++ ) {
        
        for ( let j = 0; j < n - i; j++) {
            str += "#";
        }

        for ( let k = 0; k < i * 2 - 1; k++) {
            str += "*";
        }

        for ( let j = 0; j < n - i; j++) {
            str += "#";
        }
        
        str += "\n";
    }
    console.log(str);
};
  
printPyramid(5);
printPyramid(13);
