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
const array1 = [1, 2, 3];
const array2 = [1, 2, 3];
const array3 = [4, 5, 6];
const array4 = [0, 8, 9, 7];

// находим одинаковые значение в массиве чисел или строк
export const findDuplicates = <T>(arr: T[]): T[] => {
  return arr.filter((value, index, self) => {
    return self.indexOf(value) !== index;
  });
};

// console.log(
//   `Найденные дубликаты в массиве чисел - ${findDuplicates(numbersArray)}`
// );
// console.log(
//   `Найденные дубликаты в массиве строк - ${findDuplicates(stringArray)}`
// );

// находим минимальное и максимальное число из массива чисел
export const findMinMaxValueFromArray = (
  array: number[]
): { min: number; max: number } => {
  return {
    min: Math.min(...numbersArray),
    max: Math.max(...numbersArray),
  };
};

// const result = findMinMaxValueFromArray(numbersArray);
// console.log("Минимальное число:", result.min);
// console.log("Максимальное число:", result.max);

// находим второе значение по убыванию
const findSecondLargest = (arr: number[]): number | string => {
  if (arr.length < 2) {
    return "Массив должен содержать как минимум два элемента.";
  }
  let sortedArray = arr.sort((a, b) => b - a);
  let secondLargest = sortedArray[1];
  return secondLargest;
};
// console.log(
//   "Предпоследнее от большого число:",
//   findSecondLargest(numbersArray)
// );

//найти чётные или не чётные числа из массива
let evenNumbers = numbersArray.filter((number) => number % 2 === 0);
// console.log(evenNumbers);
let oddNumbers = numbersArray.filter((number) => number % 2 !== 0);
// console.log(oddNumbers);

//найти сумму всех числе в массиве
const findSumOfNumbers = (arr: number[]): number => {
  return arr.reduce((acc, item) => {
    return acc + item;
  }, 0);
};
// console.log(`sum of all elements in array = ${findSumOfNumbers(numbersArray)}`);

// соединение двух массивов
const concatArrays = <T, A>(arrOne: T[], arrTwo: A[]): (T | A)[] => {
  return [...arrOne, ...arrTwo];
};
// console.log(concatArrays(numbersArray, stringArray));

// сравнить 2 масссива
const areArraysEqual = <T>(arr1: T[], arr2: T[]): boolean => {
  return JSON.stringify(arr1) === JSON.stringify(arr2);
};
const areArraysSameObject = <T>(arr1: T[], arr2: T[]): boolean => {
  return arr1 === arr2;
};
// console.log(areArraysEqual(array1, array2));
const foo = array1;
// console.log(areArraysSameObject(array1, foo));

// найти совпадения в двух массивах
const findCommonValues = <T>(arr1: T[], arr2: T[]): T[] => {
  return arr1.filter((value) => arr2.includes(value));
};
console.log(findCommonValues(array1, array4));

// развернуть все внутренние массивы в один плоский массив
const flattenArray = <T>(arr: T[]): (T | undefined)[] => {
  const stack = [...arr];
  const result = [];

  while (stack.length) {
    const element = stack.pop();
    if (Array.isArray(element)) {
      stack.push(...element);
    } else {
      result.unshift(element);
    }
  }
  return result;
};
const nestedArray = [1, [2, [3, 4], 5], 6];
console.log(flattenArray(nestedArray)); // [1, 2, 3, 4, 5, 6]
