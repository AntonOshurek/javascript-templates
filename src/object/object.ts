//склонировать объект
interface IObj1 {
  name: string;
  surname: string;
  age?: number;
}
const obj1: IObj1 = {
  name: "Anton",
  surname: "Oshurek",
};

const clone1: IObj1 = { ...obj1, age: 29 };
const clone2: IObj1 = Object.assign({}, obj1, { age: 29 });
const clone3: IObj1 = JSON.parse(JSON.stringify(obj1));
clone3.age = 29;
// console.log(obj1);
// console.log(clone1);
// console.log(clone2);
// console.log(clone3);

//сравнить объекты
const compareObjects = JSON.stringify(obj1) === JSON.stringify(clone2);
// console.log(compareObjects);

// проход по массиву
for (const key in clone1) {
  const value = clone1[key as keyof typeof clone1]; // явное приведение типа
  //   console.log(`${key}: ${value}`);
}

const keys = Object.keys(clone1);
const values = Object.values(clone1);
const entries = Object.entries(clone1);
// console.log(keys);
// console.log(values);
// console.log(entries);

keys.forEach((key) => {
  const value = clone1[key as keyof typeof clone1];
  // console.log(key, value);
});

// удаление свойства из объекта
//only optionals value might be deleted
interface IObj2 {
  name?: string;
  surname: string;
  age?: number;
}

let obj2: IObj2 = {
  name: "Anton",
  surname: "Oshurek",
};
delete obj2.name;
console.log(obj2);
