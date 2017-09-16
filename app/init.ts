//boolean类型
let isDone : boolean = false;
//number类型
let decLiteral: number = 6;
/*
	string类型
	也可以使用es6的模板字符串
*/
let name1: string = "sysuzhyupeng";
let sentence: string = `Hello, my name is ${ name1 }`;

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
	当一个函数没有返回值时，你通常会见到其返回值类型是 void
*/
function warnUser(): void {
    alert("This is my warning message");
}
/*
	never类型是那些总是会抛出异常或根本就不会有返回值
*/
function error(message: string): never {
    throw new Error(message);
}