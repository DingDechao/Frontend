function FruitDemo1(type) {
    this.type = type;
    this.getInfo = function() {
        return this.type;
    };
}

var apple1 = new FruitDemo1("Apple");
var pear1 = new FruitDemo1("Pear");
console.log("apple1.getInfo -> " + apple1.getInfo);
console.log("apple1.getInfo() -> " + apple1.getInfo());
console.log("apple1.getInfo === pear1.getInfo -> " + (apple1.getInfo === pear1.getInfo))

function FruitDemo2(type) {
    this.type = type;
}

FruitDemo2.prototype.getInfo = function() {
    return this.type;
};

var apple2 = new FruitDemo2("Apple");
var pear2 = new FruitDemo2("Pear");
console.log("apple2.getInfo -> " + apple2.getInfo);
console.log("apple2.getInfo() -> " + apple2.getInfo());
console.log("apple2.getInfo === pear2.getInfo -> " + (apple2.getInfo === pear2.getInfo))

// Error
// (function foo(){
//     var a = b = 5;
// })();
// console.log("b = " + b);

var a = {}, b = {}, c = {};
a = b = c = {};
console.log("a = "+ a);

// Error
// (function(nodes) {
//     var i;
//     var nodes = document.getElementsByTagName("li");
//     for (i = 0; i < nodes.length; i += 1) {
//         nodes[i].onclick = function(e) {
//             alert(i);
//         };
//     }
// })();


// Error
// function test() {
//     foo();
//     bar();
//     var foo = function() {
//         alert("1");
//     }
//     function bar() {
//         alert("2");
//     }
// }
// test();

var foo = 1;
function bar() {
    if(!foo) {
        var foo = 10;
    }
    console.log("foo = " + foo);
}
bar();

var aVariable = 1;
function bFunction() {
    aVariable = 10;
    return;
    function aVariable(){};
}
bFunction();
console.log("aVariable = " + aVariable);

function barDemo() {
    console.log(this);
}
barDemo();

[5, 5, 5, 7, 7, 3, 4, 7, 7, 3, 3, 4, 4, 5, 2]
["5:3", "7:2", 3, 4, "7:2", "3:2", "4:2", 5, 2]

// add(2, 5)
// add(2)(5)