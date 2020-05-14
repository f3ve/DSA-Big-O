function compute(num) {
  let result = [];
  let ticks = 0
  for (let i = 1; i <= num; i++) {
    ticks++
      if (i === 1) {
          result.push(0);
      }
      else if (i === 2) {
          result.push(1);
      }
      else {
          result.push(result[i - 2] + result[i - 3]);
      }
  }
  return {result, ticks, num};
}

console.log(
  compute(1),
  compute(4),
  compute(10)
)

//this algorithm returns the fibonacci sequence of the given number. it has a linear running time complexity O(n) because the running time is directly proportional to the size of the input.