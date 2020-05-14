function efficientSearch(array, item) {
  let minIndex = 0;
  let maxIndex = array.length - 1;
  let currentIndex;
  let currentElement;
  let ticks = 0

  while (minIndex <= maxIndex) {
      currentIndex = Math.floor((minIndex + maxIndex) / 2);
      currentElement = array[currentIndex];
      ticks++


      if (currentElement < item) {
          minIndex = currentIndex + 1;
      }
      else if (currentElement > item) {
          maxIndex = currentIndex - 1;
      }
      else {
          return {currentIndex, ticks};
      }
  }
  return {currentIndex: -1, ticks};
}

myArr = [1,2,3,4,5,6,7,8,9,10]
myArr2 = [1,2,3]
item = 1
item2 = 3

console.log(efficientSearch(myArr, item), efficientSearch(myArr2, item2))