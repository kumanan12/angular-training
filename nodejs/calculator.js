// public function add

var xyz = 10;
 var addCounter = 0;

 exports.xyz = xyz;

 exports.config = {
     url: ''
 };
 
function counter() {
    addCounter ++;
    console.log(`add is called ${addCounter} times`);
}

function someAdd(n1, n2) {
    
    return n1 + n2;
}

exports.add = function (n1, n2) {
    counter();
    return n1 + n2;
};

exports.multiply = function(n1, n2) {
    return n1 * n2;
};

exports.yyy= someAdd;