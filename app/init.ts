//boolean类型，在变量后面用冒号来指定类型
let isDone : boolean = false;
//number类型
let decLiteral: number = 6;
/*
	string类型
	也可以使用es6的模板字符串，
	模板字符串还可以用在函数调用中func ``
*/
let name1: string = "sysuzhyupeng";
//使用模板字符串之后可以随意换行不会报错
let sentence: string = `Hello, my 
	name is ${ name1 }`;

/*
	数组有两种方法定义
	第一种是可以在元素类型后面接上 []，表示由此类型元素组成的一个数组
	第二种方式是使用数组泛型
*/
let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

/*
	元组类型允许表示一个已知元素数量和类型的数组
*/
let x: [string, number];
//初始化
x = ['hello', 10]

/*
	enum类型是对JavaScript标准数据类型的一个补充
*/
enum Color {Red, Green, Blue}
let c: Color = Color.Green;

/*
	我们会想要为那些在编程阶段还不清楚类型的变量指定一个类型。 
	这些值可能来自于动态的内容，比如来自用户输入或第三方代码库,
	它允许你在编译时可选择地包含或移除类型检查
*/
let notSure: any = 4;

/*
	在函数/方法后面可以用冒号来声明返回值类型
	当一个函数没有返回值时，
	返回值类型是 void
*/
function warnUser(): void {
    alert("This is my warning message");
}
/*
	允许自定义类型，如下例：
*/
class Person1 {
	name:string;
	age:number;
};
let sysuzhyupeng: Person1 = new Person1();
//IDE中就会出现这个类型的提示
// sysuzhyupeng.name

/*
	当成员被标记成private时，它就不能在声明它的类的外部访问
*/
class Animal {
    public name: string;
    private age: string;
    public constructor(theName: string) { this.name = theName; }
}

/*
	当我们规定函数的参数类型之后，调用时必须有3个参数，否则就会报错
*/
function testStr1(param1: string, param2: string, param3: string){
}
testStr1('a', 'b', 'c');
/*
	如果允许减少调用参数，必须给函数参数指定默认值或者将其设置为可选的
*/
function testStr2(param1: string, param2: string, param3: string = 'c'){
}
testStr2('a', 'b');

function testStr3(param1: string, param2?: string, param3: string = 'c'){
}
testStr3('a', 'b');
/*
	或者直接用...操作符，例子中的arg也就是类似于arguments
*/
function func1(...args){
	console.log(agrs);
}
func1('a', 'b', 'c');


/*
	never类型是那些总是会抛出异常或根本就不会有返回值
*/
function error(message: string): never {
    throw new Error(message);
}
/*
	ES6的解构赋值,
	这创建了2个命名变量 first 和 second。 相当于使用了索引
	first = input[0];
	second = input[1];
*/
let input = [1, 2];
let [first, second] = input;
console.log(first);

/*
	用接口来描述：必须包含一个label属性且类型为string，
	类型检查器不会去检查属性的顺序，只要相应的属性存在并且类型也是对的就可以
*/
function printLabel(labelledObj: { label: string }) {
  console.log(labelledObj.label);
}
/*
	接口在描述必须属性的同时也可以描述可选属性
*/
interface SquareConfig {
  color?: string;
  width?: number;
}
function createSquare(config: SquareConfig): {color: string; area: number} {
	let newSquare = {color: "white", area: 100};
	if (config.color) {
	    newSquare.color = config.color;
	}
	if (config.width) {
	    newSquare.area = config.width * config.width;
	}
	return newSquare;
}
/*
	只读属性,
	只能在对象初始化的时候修改其值
*/
interface Point {
    readonly x: number;
    readonly y: number;
}
/*
	函数类型
	为了使用接口表示函数类型，我们需要给接口定义一个调用签名。 
	它就像是一个只有参数列表和返回值类型的函数定义。参数列表里的每个参数都需要名字和类型。
*/
interface SearchFunc {
    (source: string, subString: string): boolean;
}
/*
	这样定义后，我们可以像使用其它接口一样使用这个函数类型的接口。 
	下例展示了如何创建一个函数类型的变量，并将一个同类型的函数赋值给这个变量
*/
let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
  	let result = source.search(subString);
  	return result > -1;
}