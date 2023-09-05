// # 1 Reverse str
// Create a function that reverses str

const reverse = (str) => {
  
    const reversestr = str.split('').reverse().join('');
    console.log(reversestr);
    return reversestr;
};

reverse("hello");
reverse("Oleg");
reverse("JavaScript");

// ===============================================

// # 2 Count words
// Create a function that counts words in sentence

const countWords = (str) => {
 
    let counter = str.split(' ').length ;
    console.log(counter);
    return counter;
};

countWords("Hi my name is Oleg");
countWords("Lorem ipsum dolor sit amet consectetur adipisicing elit.");

// ==============================================

// # 3 Clear whitespace
// Create a function that clears spaces

const clearWhiteSpace = (str) => {

    let clear = str.split(' ').join('');
    console.log(clear);
    return clear;

};

clearWhiteSpace("  1   2  5ty  sgsg ");
clearWhiteSpace("  dd 2 ty aa sgsg ");

// ==============================================

// # 4  Max length
// Create a function that cuts str if it's length is bigger then max length
// Add ... at the end if str is bigger

const cutStr = (str, maxLength) => {
  
    if ( maxLength === str.length || str.length < maxLength ) {

        console.log(str);
        return str;
    
    } else if ( str.length > maxLength ) {

        short = str.slice(0, maxLength);
        console.log(short + "...");
        return short + "...";
    }
};

cutStr("Hello", 5);
cutStr("car", 5);
cutStr("Hello there", 5);
cutStr("Lorem ipsum dolor sit amet consectetur adipisicing elit.", 11);

// ==============================================

// # 4 Palindrome
// Check if word reads the same from start to end
// and from end to start
// Return true/false

const palindrome = (str) => {
  str = str.toLowerCase();
  let reversestr = str.split('').reverse().join('');
  if ( reversestr === str ) {
    console.log(true);
  } else {
    console.log(false);
  }
 
};

palindrome("tenet");
palindrome("Anna");
palindrome("Oleg");
palindrome("8");
palindrome("878");
palindrome("js");
