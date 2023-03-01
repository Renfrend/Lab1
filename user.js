/*
The MIT License (MIT)

Copyright © 2023 Hrushevytsyi Serhii

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
const fs = require("fs");
let _ = require('lodash');
//зчитування JSON
let data = JSON.parse(fs.readFileSync('./user.json'));

//вивід усього списку
function list() {
    if (data.languages.length == 0)
        console.log("Список мов порожній")
    else {
        _.forEach(data.languages, function (value) {
            console.log("Title: ", value.title, "\tlevel:", value.level)
        });
    }
}

//знаходження мови за назвою
function findLanguageByTitle(title) {
    let i = 0;
    let res = -1;
    _.forEach(data.languages, function (value) {
        if (value.title.toLowerCase() == title.toLowerCase()) {
            res = i;
        }
        i += 1;
    });
    return res;
}

//додавння мови
function add(title, level) {
    let index = findLanguageByTitle(title);
    if (index >= 0) {
        console.log("Вже є мова з назвою", title)
    } else {
        let language = {
            "title": title,
            "level": level
        }
        data.languages.push(language);
        fs.writeFile('user.json', JSON.stringify(data), (err) => {
            if (err) throw err;
        });
    }
}

//Видалення мови
function remove(title) {
    let index = findLanguageByTitle(title);
    if (index == -1) {
        console.log("Немає мови з такою назвою", title)
    } else {
        _.remove(data.languages, function (n) {
            return n.title.toLowerCase() == title.toLowerCase();
        });
        list()
        fs.writeFile('user.json', JSON.stringify(data), (err) => {
            if (err) throw err;
        });
    }
}

//Вивід мови
function read(title) {
    let index = findLanguageByTitle(title);
    if (index == -1) {
        console.log("Немає мови з назвою", title)
    } else {
        let value = data.languages[index]
        console.log("Title: ", value.title, "\tlevel:", value.level)
    }
}


module.exports = {
    list, add, remove, read
}