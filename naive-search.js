function naiveSearch(array, item) {
  for (let i = 0; i < array.length; i++) {
      if (array[i] === item) {
          return i;
      }
  }
}

// this algorithm has a linear time complexity O(1) because it will take the same amount of time to compare the element of array to the item.