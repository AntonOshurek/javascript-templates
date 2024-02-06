const numbersArray: number[] = [1, 2, 3, 4, 2, 5, 6, 3, 7, 8, 9];

const findMinMaxValueFromArray = (
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
