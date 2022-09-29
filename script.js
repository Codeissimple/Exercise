const words = [
    'immune', 
    'crypt',
    'Leslie',
    'Fargo',
    'breaking bad',
    'pillow',
    'sofa'
];

let length = words.some(function(word) {
    return word.length > 5;
});

let crypto = words.some(function(word){
    return word == 'crypt';
});

let everyWord = words.every(function(word){
    return word.length > 3;
})