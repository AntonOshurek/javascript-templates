export const numbersArray: number[] = [1, 2, 3, 4, 2, 5, 6, 3, 7, 8, 9];
const stringArray = [
  "apple",
  "banana",
  "orange",
  "banana",
  "grape",
  "apple",
  "kiwi",
];

// находим одинаковые значение в массиве чисел или строк
export const findDuplicates = <T>(arr: T[]): T[] => {
  return arr.filter((value, index, self) => {
    return self.indexOf(value) !== index;
  });
};

console.log(
  `Найденные дубликаты в массиве чисел - ${findDuplicates(numbersArray)}`
);
console.log(
  `Найденные дубликаты в массиве строк - ${findDuplicates(stringArray)}`
);

// находим минимальное и максимальное число из массива чисел
export const findMinMaxValueFromArray = (
  array: number[]
): { min: number; max: number } => {
  return {
    min: Math.min(...numbersArray),
    max: Math.max(...numbersArray),
  };
};

const result = findMinMaxValueFromArray(numbersArray);
console.log("Минимальное число:", result.min);
console.log("Максимальное число:", result.max);

// находим второе значение по убыванию
const findSecondLargest = (arr: number[]): number | string => {
  if (arr.length < 2) {
    return "Массив должен содержать как минимум два элемента.";
  }
  let sortedArray = arr.sort((a, b) => b - a);
  let secondLargest = sortedArray[1];
  return secondLargest;
};
console.log(
  "Предпоследнее от большого число:",
  findSecondLargest(numbersArray)
);
