function createPairs(arr) {
  let ticks = 0
  for (let i = 0; i < arr.length; i++) {
      ticks++
      for(let j = i + 1; j < arr.length; j++) {
          ticks++
          console.log(arr[i] + ", " +  arr[j]);
      }
  }
  return ticks 
}

const myArr1 = [1,2,3,4,5,6,7,8,9,10]
const myArr2 = [1,2,3,4,5]
const myArr3 = [1,2,3]

console.log(createPairs(myArr1), createPairs(myArr2), createPairs(myArr3))

//this algorithm has a polynomial time complexity O(n^k) becuase the running time is increased based on the length of the input and the number of loops levels in the function.