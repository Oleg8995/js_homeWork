// ******************* LESS 17 ************************

//  # 1 Filter arr

const filterRange = (arr, from, to) => {
   let slicearray  = arr.slice(from - 1, to);
    console.log(slicearray);
    return slicearray;
};

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const arr2 = [31, 32, 33, 4, 555, 6, 327, 'hjhg21', 9, "rwfff", 'gy3gyrt3y66', 727];
filterRange(arr1, 3, 7);
filterRange(arr2, 5, 11);

// ===================================================================

// # 2 Sort arr

const arr3 = [324, 32423, -3242, 544, 0, 23, -454, 22, 4];
const arr4 = [54, 33, -3, 0, 0, 23, 1, 4, 9];
const arr5 = [1, 33, 56, 0, 0, 99, 1, 4, 9];

const sortArr2 = (arr) => {
    arr.sort((a, b) => {
        return a - b;
    });
    console.log(arr);
};

sortArr2(arr3);
sortArr2(arr4);
sortArr2(arr5)

// =============================================================

// # 3 Sort arr str

const arr6 = ["4534", "a", "bb", "sdfds", "", " ", "r4rdv-"];
const arr7 = ["4534", "28", "bb", "sdfds", "a", "aaa ", "xxww"];

const sortArr = (arr) => {
    arr.sort();
    console.log(arr);
    return arr;
};

sortArr(arr6);
sortArr(arr7);

// =============================================================

// # 4 Calculate average age of users older then 17 and younger then 55

const arr8 = [
    { name: "John", age: 25 },
    { name: "Pete", age: 30 },
    { name: "Mary", age: 29 },
    { name: "Taras", age: 25 },
    { name: "Kate", age: 74 },
    { name: "Chris", age: 14 },
    { name: "Alan", age: 5 },
    { name: "Boris", age: 55 },
    { name: "Elizabeth", age: 48 },
];
const arr9 = [
    { name: "John", age: 25 },
    { name: "Pete", age: 17 },
    { name: "Mary", age: 99 },
    { name: "Taras", age: 2 },
    { name: "Kate", age: 66 },
    { name: "Chris", age: 14 },
    { name: "Alan", age: 15 },
    { name: "Boris", age: 1 },
    { name: "Elizabeth", age: 4 },
];

const averageAge = (arr) => {

    let yers = [];
    let sumyers = 0;

    arr.forEach(element => {
        if (element.age > 17 && element.age < 55) {
            yers.push(element.age);
        }
    });

    yers.forEach((item) => (sumyers += item))
    let average = sumyers / yers.length;  
    console.log(average);
    return average;
}

averageAge(arr8);
averageAge(arr9);


// =============================================================

// # 5 Sort arr by name
// Sort arr by name if 2 elements have same name sort by age

const arr10 = [
    { name: "John", age: 25 },
    { name: "John", age: 5 },
    { name: "John", age: 2 },
    { name: "John", age: 45 },
    { name: "Pete", age: 30 },
    { name: "Mary", age: 29 },
    { name: "Mary", age: 2 },
    { name: "Taras", age: 25 },
    { name: "Taras", age: 19 },
    { name: "Kate", age: 74 },
    { name: "Chris", age: 14 },
    { name: "Alan", age: 5 },
    { name: "Alan", age: 32 },
    { name: "Boris", age: 55 },
    { name: "Elizabeth", age: 48 },
    { name: "Elizabeth", age: 8 },
  ];

const sortUsers = (arr) => {
  
  let sortarr = [];
  sortarr = arr.sort((a, b) => {

    if (a.name < b.name) {
      return -1;
    }

    if (a.name > b.name) {
      return 1;
    }

    if (a.name === b.name) {
      return a.age - b.age;
    }

    return 0;
  });

  console.log(sortarr);    

}
  
  sortUsers(arr10);
  [
    { name: "Alan", age: 5 },
    { name: "Alan", age: 32 },
    { name: "Boris", age: 55 },
    { name: "Chris", age: 14 },
    { name: "Elizabeth", age: 8 },
    { name: "Elizabeth", age: 48 },
    { name: "John", age: 2 },
    { name: "John", age: 5 },
    { name: "John", age: 25 },
    { name: "John", age: 45 },
    { name: "Kate", age: 74 },
    { name: "Mary", age: 2 },
    { name: "Mary", age: 29 },
    { name: "Pete", age: 30 },
    { name: "Taras", age: 19 },
    { name: "Taras", age: 25 },
  ];

  // =============================================================

//   # 6 Find min and max
//   Find min and max and return obj {min, max}
//   Use reduce method

const arr11 = [
  { name: "John", age: 25 },
  { name: "Pete", age: 30 },
  { name: "Mary", age: 29 },
  { name: "Taras", age: 25 },
  { name: "Kate", age: 74 },
  { name: "Chris", age: 14 },
  { name: "Alan", age: 5 },
  { name: "Boris", age: 55 },
  { name: "Elizabeth", age: 48 },
];

const arr12 = [
{ name: "John", age: 15 },
{ name: "Pete", age: 30 },
{ name: "Mary", age: 2 },
{ name: "Taras", age: 25 },
{ name: "Kate", age: 104 },
{ name: "Chris", age: 14 },
{ name: "Alan", age: 74 },
{ name: "Boris", age: 15 },
{ name: "Elizabeth", age: 48 },
];

const minMaxAge = (arr) => {

    let res = {
        min: null,
        max: null,
    };

    let arrage = [];
    let minage, maxage;

    arr.forEach((element) => {
        arrage.push(element.age);
    });

    minage = arrage.reduce((a, b) => Math.min(a, b));
    maxage = arrage.reduce((a, b) => Math.max(a, b));
    
    res = {
        min: minage,
        max: maxage,
    }

    console.log(res);
    return res;
}

minMaxAge(arr11);
minMaxAge(arr12);


 // =============================================================

//  # 7 Save only unique values


const strings = [
    "HELLO",
    "World",
    "JS",
    "Js",
    "HI",
    "Hello",
    "HTML",
    "CSS",
    "js",
];

const strings2 = [
    "Oleg",
    "World",
    "JS",
    "Js",
    "OLEG",
    "Hello",
    "HTML",
    "CSS",
    "js",
    "React",
    "js",
    "Java",
];

const unique = (sortstr) => {

  let uniquestrarr = [];

  sortstr.forEach(item => {

    let lowstr = item.toLowerCase();
    let isunique = true;

    uniquestrarr.forEach(uniquestr => {
        
        if ( uniquestr.toLowerCase() === lowstr) {
            isunique = false;
        }
    });

    if (isunique) {
        uniquestrarr.push(item);
    }
    
  });

  console.log(uniquestrarr);
  return uniquestrarr;

};

unique(strings);
// HELLO, World, JS, HI, HTML, CSS
unique(strings2);
 
// =============================================================

// # 8 Find the Longest Consecutive Sequence 


const numbers = [1, 2, 3, 4, 5, 2, 3, 4, 5];
const numbers2 = [10, 2, 3, 4, 5, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

function findLongestConsecutive(arr) {
  
  let sortarr = [];

  sortarr = arr.sort((a, b) => a - b);

  let coincidencearr = [sortarr[0]];
  let currentarr = [sortarr[0]];

  arr.forEach((num, index) => {

    if (num === arr[index - 1] + 1) {
      currentarr.push(num);
    } else if (num !== sortarr[index - 1]) {
      currentarr = [num];
    }

    if (currentarr.length > coincidencearr.length) {
      coincidencearr = currentarr;
    }
  
  });
  console.log(coincidencearr);
  return coincidencearr;
}

findLongestConsecutive(numbers);
findLongestConsecutive(numbers2);

