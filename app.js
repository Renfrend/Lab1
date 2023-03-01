/*
The MIT License (MIT)

Copyright © 2023 Hrushevytsyi Serhii

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
const user = require('./user');
let yargs = require('yargs');
let _ = require('lodash');

const argv = yargs.argv;

let method = _.first(_.map(argv));
method = method[0]

if (method == 'read') {
    if (_.isEmpty(argv.title))
        console.log("Команда read не працює без параметра назва")
    else
        user.read(argv.title)
} else if (method == 'list') {
    user.list()
} else if (method == 'add') {
    if (_.isEmpty(argv.title))
        console.log("Команда add не працює без параметра назва")
    else if (_.isEmpty(argv.level))
        console.log("Команда add не працює без параметра рівень")
    else
        user.add(argv.title, argv.level)
} else if (method == 'remove') {
    if (_.isEmpty(argv.title))
        console.log("Команда remove не працює без параметра назва")
    else
        user.remove(argv.title)
} else {
    console.log("Немає такої команди або немає такого методу")
}