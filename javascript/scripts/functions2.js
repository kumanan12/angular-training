// @ts-nocheck
function playTurn(player, location) {
    points = 0;
    if (location == 1) {
        points = points + 100;        
    }
    return points;
}

var total = playTurn("Mohan", 1);
console.log(points);
