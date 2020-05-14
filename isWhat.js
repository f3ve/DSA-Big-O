function isWhat(n) {
  let ticks = 0 
  if (n < 2 || n % 1 !== 0) {
    console.log(n % 1)
    ticks++
      return {result:false, ticks, n, message: 'oops'};
  }
  for (let i = 2; i < n; ++i) {
    ticks++
      if (n % i === 0) return {result:false, ticks, n};
  }
  ticks++
  return {result:true, ticks, n};
}

console.log(isWhat(11))