// take one string as a i/p & find largest & smallest word from that string

const readline = require('readline-sync');
const str = readline.question("Enter the string: ");

let str1=str.split('');
let arr=[];
// console.log(str1);
for(let i=0;i<str1.length;i++)
{
    arr.push(str1[i].charCodeAt());
}
// console.log(arr);

arr.sort()
console.log(arr);
let min=String.fromCharCode(arr[0])
let max=String.fromCharCode(arr[arr.length-1])
// console.log(max);
console.log("the smallest character is :"+min);
console.log("the largest character is :"+max);

