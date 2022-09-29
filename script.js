
const words = [
    'immune', 
    'crypt',
    'Leslie',
    'Fargo',
    'breaking bad',
    'pillow',
    'sofa'
];
/*
let length = words.some(function(word) {
    return word.length > 5;
});
let crypto = words.some(function(word){
    return word == 'crypt';
});
let everyWord = words.every(function(word){
    return word.length > 3;
});
*/

function mySome(arr, callback) {
    for (let i = 0; i < arr.length; i++){
        if (callback(arr[i], i, arr)) return true;
    }
    return false;
};

mySome([4,5,6,7,8], function(n) {
    return n > 5;
});

function myEvery(arr, callback) {
    for (let i = 0; i < arr.length; i++){
        if (!callback(arr[i], i, arr)) return false;
    }
    return true;
}

myEvery([4,5,6,7,8], function(n) {
    return n > 3;
});