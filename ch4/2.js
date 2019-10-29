'use strict'
function reverseArray(arr){
    let new_arr=[];
    for(let i=arr.length-1;i>=0;i--)
        new_arr.push(arr[i]);
    return new_arr;
}

function reverseArrayInPlace(arr){
    let temp,n=arr.length;
    for(let i=0;i<n/2;i++){
        temp=arr[i];
        arr[i]=arr[n-1-i];
        arr[n-1-i]=temp;
    }
}


let arr=[1,2,5,7,9],new_arr=reverseArray(arr);
console.log(new_arr);
console.log(arr);
reverseArrayInPlace(arr);
console.log(arr);

//从程序来看，第二个函数的运行速度应该更快