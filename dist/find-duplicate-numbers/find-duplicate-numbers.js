"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findDuplicates = void 0;
const findDuplicates = (arr) => {
    return arr.filter((value, index, self) => {
        return self.indexOf(value) !== index;
    });
};
exports.findDuplicates = findDuplicates;
let numbersArray = [1, 2, 3, 4, 2, 5, 6, 3, 7, 8, 9];
let duplicateValues = findDuplicates(numbersArray);
console.log(duplicateValues);
