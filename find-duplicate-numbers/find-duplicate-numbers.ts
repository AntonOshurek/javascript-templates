const findDuplicates = <T>(arr: T[]): T[] => {
  return arr.filter((value, index, self) => {
    return self.indexOf(value) !== index;
  });
};

let numbersArray = [1, 2, 3, 4, 2, 5, 6, 3, 7, 8, 9];
let duplicateValues = findDuplicates(numbersArray);
console.log(duplicateValues);

export { findDuplicates };
