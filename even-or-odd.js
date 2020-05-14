function isEven(val) {
  let ticks = 0
  if(val % 2 === 0) {
    ticks++ 
    return {result: true, ticks}
  }
  else {
    ticks++
    return {result: true, ticks}
  }
}

//this function is Constant time O(1) because it is a basic arithmetic operation and will take the same amount of time to complete regardless of the size of the value

console.log(
  isEven(1),
  isEven(2),
  isEven(45),
  isEven(44)
)