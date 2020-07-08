# JS Avanced
> Bài 1: Hoising
- hoisting là gì?
- [Viblo asia](https://viblo.asia/p/hoisting-javascript-WAyK8RmmlxX)
> Bài 2: var, let, const
- var
- let
- const
- Tránh hoisting dùng let hoặc const
- Block scope: [Scope](https://youtu.be/-tNsGSafGXg)
    + var chỉ có func scope: có thể khai báo lại được
    + let, const có cả func scope và block scope
> Bài 3: Function context & bind
- global context
- function context
- bind [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)
> Bài 4: Arrow function expresstion (fat arrow)
- Sự khác nhau giữa arrow func và func bình thường
    + arrow func không có biến `this`, không có context biến `this` chính là context của cái hàm gần nhất mà nó nằm trong
> Bài 6: Template string
- Có thể gọi trực tiếp biến, thực hiện tính toán, có thể xuống dòng...
> Bài 7: Arguments
- Array-like object & arguments:
    + Array-like object phải đảm bảo có thuộc tính length, có các index giống array (key: value)
    + Arguments: arguments la 1 object
> Bài 8: Default parameters
> Bài 9: Phương thức `call`
- [Hàm call MDN](https://developer.mozilla.org/vi/docs/Web/JavaScript/Reference/Global_Objects/Function/call)
- call: func.call(this, param1, param2, ...);
> Bài 10: Phương thức `apply`
- [Hàm apply MDN](https://developer.mozilla.org/vi/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)
- Trường hợp nào dùng apply?
- apply: func.apply(this, [param1, param2, ...]);
> Bài 11: Enhanced object literals
- [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer)
- Tên biến giống nhau có thể sử dung enhanced object literals, sử dụng ở phiên bản ES6
```
const name = 'Tom';

/*
const cat = {
    name = name,
    run: function() {
        console.log(`${this.name} is running`);
    }
};
*/

const cat = {
    name,
    run() {
        console.log(`${this.name} is running`);
    }
};
```
> Bài 12: class trong Javascript
- Không phải ngôn ngữ OOP từ đầu, dùng oop để viết contructor func dạng OOP, dễ hiểu dễ đọc hơn.
