function areYouHere(arr1, arr2) {
  let ticks = 0
  let result = false
  for (let i = 0; i < arr1.length; i++) {
      const el1 = arr1[i];
      ticks++;
      for (let j = 0; j < arr2.length; j++) {
          const el2 = arr2[j];
          ticks++
          if (el1 === el2) result = true;
      }
  }
  return {result, ticks};
}

const array1 = ['foo', 'bar']
const array2 = ['yeet', 'no', 'not yet', 'bar']

const myArr1 = ['foo', 'bar', 'foo bar', 'bar foo', 'yes', 'no', `don't talk to me`]
const myArr2 = ['never', 'gonna', 'give', 'you', 'up', 'never', 'gonna', 'let', 'you', 'down', 'or', 'desert', 'you']

console.log(areYouHere(array1, array2), areYouHere(myArr1, myArr2))

// This algorithm has Polynomial time complexity O(n^k) because it has nested loops, so the size of the input is increased the the power of the level of loops in the algorithm. so in this case O(n^2).