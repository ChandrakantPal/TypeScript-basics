"use strict";
exports.__esModule = true;
exports.getName = exports.introduce = exports.fetchData = exports.printFormat = exports.format = exports.addStrings = void 0;
function addNumbers(a, b) {
    return a + b;
}
exports["default"] = addNumbers;
// defaulting a parameter
var addStrings = function (str1, str2) {
    if (str2 === void 0) { str2 = ''; }
    return "".concat(str1, " ").concat(str2);
};
exports.addStrings = addStrings;
// union type
var format = function (title, param) {
    return "".concat(title, " ").concat(param);
};
exports.format = format;
// viod return type
var printFormat = function (title, param) {
    console.log((0, exports.format)(title, param));
};
exports.printFormat = printFormat;
// Promise param type
var fetchData = function (url) {
    return Promise.resolve("Data from ".concat(url));
};
exports.fetchData = fetchData;
// rest param type
function introduce(salutation) {
    var names = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        names[_i - 1] = arguments[_i];
    }
    return "".concat(salutation, " ").concat(names.join(' '));
}
exports.introduce = introduce;
// testing type enforcement at compile time
function getName(user) {
    var _a, _b;
    // ?. to avoid error during runtime
    //   ?? to avoid displaying undefined undefined
    return "".concat((_a = user === null || user === void 0 ? void 0 : user.first) !== null && _a !== void 0 ? _a : 'first', " ").concat((_b = user === null || user === void 0 ? void 0 : user.last) !== null && _b !== void 0 ? _b : 'last');
}
exports.getName = getName;
