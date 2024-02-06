//поиск определённыех букв в строке
const findLetters = (str: string): string[] | string => {
  let letters = str.toLowerCase().match(/[hel]/gi);
  return letters ? letters : "";
};
const myString = "Hello, World!";
// console.log(findLetters(myString));

//перевернуть строку и буквы задом наперёд
const reversString = (string: string): string => {
  const reversedWords: string[] = string.split(" ").reverse();
  let reversedLetters: string[] = [];
  reversedWords.forEach((word: string) => {
    reversedLetters.push(word.split("").reverse().join(""));
  });
  return reversedLetters.join(" ");
};
// console.log(reversString("hello world"));
