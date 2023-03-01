/*
The MIT License (MIT)

Copyright © 2023 Hrushevytsyi Serhii

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
let _ = require('lodash');
//1 Заношу всі елементи a в масив arr
let a = {id: 1, name: "some name"};
let arr = [];
_.each(a, function (item) {
    arr.push(item);
});
console.log(arr);
//2 Знаходимо два значення id
let newArr = _.map([{id: 1}, {id: 2}], 'id');
console.log(newArr);
//3 Прибираємо из масива всі пусті элементи (0, "", null, undefined)
console.log(_.compact([0, 1, false, 2, '', 3]));
//4 Повертає елементи до трьох не включно
console.log(_.filter([1, 2, 3, 4, 5], function (item) {
    return item < 3;
}));
//5 Повертає Unix time 
console.log(_.now());