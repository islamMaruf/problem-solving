
// lim
let arr = [10, 20, 30, 50, 32, 5, 2, 5, 2];
let target = 100;


function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] == target){
            return 'data found index - '+ i;
        }
    }
    return 'data not found';

}

let linearSearchEl = linearSearch(arr,target)
let linearSearchString = linearSearch(['red','green','yellow'],'yellow'); 
console.log(linearSearchEl, linearSearchString)



