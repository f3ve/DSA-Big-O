function doubleArrayValues(array) {
  let ticks = 0
  for (let i = 0; i < array.length; i++) {
      ticks++
      array[i] *= 2;
  }
  return {array, ticks, length: array.length};
}


const mySmolArr = [1, 2,]
const myBigArr = [1, 3, 4, 5, 6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50]

console.log(doubleArrayValues(mySmolArr), doubleArrayValues(myBigArr))

//this algorithm has a linear time complexity O(n) because the running time is directy proportional to the input size.