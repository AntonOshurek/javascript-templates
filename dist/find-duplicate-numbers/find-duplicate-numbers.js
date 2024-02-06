"use strict";
const findDuplicates = (arr) => {
    return arr.filter((value, index, self) => {
        return self.indexOf(value) !== index;
    });
};
let myArray = [1, 2, 3, 4, 2, 5, 6, 3, 7, 8, 9];
let duplicateValues = findDuplicates(myArray);
console.log(duplicateValues);
