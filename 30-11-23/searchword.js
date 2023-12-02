// take 2 i/p from user 1) string to search the word  
// 2) word to search in string   ==> check word is present or not..check for exact match
const readline = require('readline-sync');
const str1 = readline.question("Enter the sentence: ");
const str2 = readline.question("Enter the word to search in string string: ");
//hi i am yogesh
//i
let arr=str1.split(' ')
let flag=0
let arr2=[]
let arr1=[]
let arr3=[]
let arr4=[]
// console.log(arr);
arr2=str2.split('')
arr1=str1.split(' ')
for(let i=0;i<arr1.length;i++)
{
    if(arr1[i].length==str2.length){
        arr4=arr3.push(arr1[i])
        
        // console.log(arr2,arr3)
        // arr2.sort()
        // arr3.sort()
        // console.log(arr3)


        // for(let j=0;j<arr[i].length;i++){
        //     if(arr[i].charCodeAt()==str1.charCodeAt()){
        //         return flag=1
        //     }
        // }
    console.log(arr4);
}

console.log("hi")


for(let k=0;k<str2.length;k++)
{   
    for(let m=0;str2.length;i++){
    if(arr4[i]===arr2[i]){
        return flag=1
    }
    else{
        flag=0
    }
}
}
if(flag==1){
    console.log("searching word is present");
}
else{
    console.log("not matched");
}
}
