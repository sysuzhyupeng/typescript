var isDone = false;
var decLiteral = 6;
var name1 = "sysuzhyupeng";
var sentence = "Hello, my \n\tname is " + name1;
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
var x;
x = ['hello', 10];
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
var notSure = 4;
function warnUser() {
    alert("This is my warning message");
}
var Person1 = (function () {
    function Person1() {
    }
    return Person1;
}());
;
var sysuzhyupeng = new Person1();
var Animal = (function () {
    function Animal(theName) {
        this.name = theName;
    }
    return Animal;
}());
function testStr1(param1, param2, param3) {
}
testStr1('a', 'b', 'c');
function testStr2(param1, param2, param3) {
    if (param3 === void 0) { param3 = 'c'; }
}
testStr2('a', 'b');
function testStr3(param1, param2, param3) {
    if (param3 === void 0) { param3 = 'c'; }
}
testStr3('a', 'b');
function error(message) {
    throw new Error(message);
}
var input = [1, 2];
var first = input[0], second = input[1];
console.log(first);
function printLabel(labelledObj) {
    console.log(labelledObj.label);
}
function createSquare(config) {
    var newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
var mySearch;
mySearch = function (source, subString) {
    var result = source.search(subString);
    return result > -1;
};
