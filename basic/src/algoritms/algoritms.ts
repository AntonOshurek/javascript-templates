const fibo = (num: number): number[] => {
  const result = [0, 1];

  for (let i = 2; i < num; i++) {
    const prev1 = result[i - 1];
    const prev2 = result[i - 2];

    result.push(prev2 + prev1);
  }

  return result;
};

console.log(fibo(10));
