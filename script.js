function reverseAndTimeArray(arr) {
    let reversedArr = arr.reverse();

    let resultArr = reversedArr.map(num => num * 2);
    return resultArr;
}

let array1 = [1, 4, 6, 7];
let array2 = [7, 4, 2, 1]; 
let array3 = [5]; 

console.log(reverseAndTimeArray(array1));
console.log(reverseAndTimeArray(array2));
console.log(reverseAndTimeArray(array3));