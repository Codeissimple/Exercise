const words = [
    'immune', 
    'crypt',
    'Leslie',
    'Fargo',
    'breaking bad',
    'pillow',
    'sofa'
];

words.some(function(word) {
    return word.length > 5;
});

words.some(function(word){
    return word == 'crypt';
});

//console.log();