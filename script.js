const scores = [
    0,0,0,0,0,55,59,58,75,77,79,83,85,84,89,90,93,95,97,99
];

scores.find(function(score) {
    return score > 75;
});

scores.find(function(score) {
    return score !== 0 && score % 2 === 0;
});
scores.filter(function(score) {
    return score > 75;
});
