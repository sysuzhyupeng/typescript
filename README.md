typescript demo
--

入门文档可以参考https://www.tslang.cn/docs/handbook/basic-types.html

typescript说明：
-
typescript有以下特点：

 * 是js的超集，所有js文件可以直接搬到ts文件中运行
 * ts严格遵循ES6语法(基本都支持)
 * 由微软开发，同时angular-2的框架是由typescript编写

typescript解决的问题
-
 * 支持ES6规范(可以说不必要，因为通过babel编译es6进行开发也同样可以，不需要使用ts除es6的其他语法)
 * IDE支持(比如一个string类型的变量，在赋值为number的时候，IDE会进行提示; 或者在重构时，修改方法的实现，调用的地方相应修改。然而我只用sublime...)
 * 节省类型判断代码

注意点
-
  无论是接口还是类型检查等的实现，只有在编译过程中会进行检查。也就是说，生成的js代码还是原来es3或者es5的样子，他们并没有增加新特性。ts所做的，是把运行时的错误转移到编译中。所以当我们直接修改ts生成的js文件，并且上线之后，他就失去了ts存在的意义。

文件说明：
-
 * 文档尝试在`app/init.ts`和`app/greeter.ts`中
 * 编译ts文件可以使用命令`tsc` + ts文件完成
 * 通过配置根目录下的`tsconfig.json`，直接输入tsc即可编译所有引入的ts文件

