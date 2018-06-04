
function reverseString(str){
    return str.split('').reduce((revString,char)=>
    char + revString, '');    
}

function isPalindrome(str){
    const revString = str.split('').reverse().join('');
    return str === revString
}

function reverseInt(int){
    const revInt = int.toString().split('').reverse().join('');
    return parseInt(revInt)*Math.sign(int);
}

function capitalizeLetters(str){
    return str
        .toLowerCase()
        .split(' ')
        .map(word => word[0].toUpperCase() + word.substr(1)) // word[0] is the first letter of the word array and word.substr(1) is the rest of the characters
        .join(' ');
}

// console.log(capitalizeLetters('i love me some clojure'));

function maxCharacters(str){
    const charMap = {};
    let maxNum = 0;
    let maxChar = '';

    str.split('').forEach((char)=>{
        if(charMap[char]){
            charMap[char]++;
        } else {
            charMap[char] = 1;
    }});

    for(let char in charMap){
        // debugger;

        if(charMap[char] > maxNum){
            maxNum = charMap[char];
            maxChar = char;
        }
    }

    return maxChar;
}

console.log(maxCharacters('africa by toto'));