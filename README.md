# DSA-Big-O

this is an assignment for Thinkful's Full-Stack Flex program.

## 1. What is the Big 0 for this?

1) Determine the Big O for the following algorithm: You are sitting in a room with 15 people. You want to find a playmate for your dog, preferably of the same breed. So you want to know if anyone out of the 15 people have the same breed as your dog. You stand up and yell out, who here has a golden retriever and would like to be a playdate for my golden. Someone yells - "I do, be happy to bring him over"

Answer: This is constant time O(1) because the operation (yelling at the room of people) would take the same amount of time to complete no matter how many people are in the room.

2) Determine the Big O for the following algorithm: You are sitting in a room with 15 people. You want to find a playmate for your dog who is of the same breed. So you want to know if anyone out of the 15 people have the same breed as your dog. You start with the first person and ask him if he has a golden retriever. He says no, then you ask the next person, and the next, and the next until you find someone who has a golden or there is no one else to ask.

answer: this is Linear time O(n) becuase the operation (asking each person in the room) would take the same amount of time but you have to do if for each person in the room so the running time is directly proportional to the amount of people in the room.

## 2. Even or odd

What is the Big O of the following algorithm? Explain your answer.

```javascript
function isEven(value) {
    if (value % 2 === 0) {
        return true;
    }
    else
        return false;
    }
}
```
Answer: This function is Constant time O(1) because it is a basic arithmetic operation and will take the same amount of time to complete regardless of the size of the value

## 3. Are you here?

What is the Big O of the following algorithm? Explain your answer

```javascript
function areYouHere(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        const el1 = arr1[i];
        for (let j = 0; j < arr2.length; j++) {
            const el2 = arr2[j];
            if (el1 === el2) return true;
        }
    }
    return false;
}
```

Answer: This algorithm has Polynomial time complexity O(n^k) because it has nested loops, so the size of the input is increased to the power of the level of loops in the algorithm. so in this case O(n^2).

## 4. Doubler

What is the Big O of the following algorithm? Explain your answer

```javascript
function doubleArrayValues(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] *= 2;
    }
    return array;
}
```

Answer: This algorithm has a linear time complexity O(n) because the running time is directy proportional to the input size.

## 5 Naive search

What is the Big O of the following algorithm? Explain your answer

```javascript
function naiveSearch(array, item) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            return i;
        }
    }
}
```

Answer: This algorithm has a linear time complexity O(1) because it will take the same amount of time to compare each element of the array to the item.

## 6. Create pairs

What is the Big O of the following algorithm? Explain your answer

```javascript
function createPairs(arr) {
    for (let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            console.log(arr[i] + ", " +  arr[j] );
        }
    }
}
```

Answer: This algorithm has a polynomial time complexity O(n^k) becuase the running time is increased based on the length of the input and the number of loops levels in the function.

## 7. Compute the sequence 

What does the following algorithm do? What is its runtime complexity? Explain your answer

```javascript
function compute(num) {
    let result = [];
    for (let i = 1; i <= num; i++) {

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
    return result;
}
```

Answer: This algorithm returns the fibonacci sequence of the given number. it has a linear running time complexity O(n) because the running time is directly proportional to the size of the input

## 8. An efficient search

In this example, we return to the problem of searching using a more sophisticated approach than in naive search, above. Assume that the input array is always sorted. What is the Big O of the following algorithm? Explain your answer

```javascript
function efficientSearch(array, item) {
    let minIndex = 0;
    let maxIndex = array.length - 1;
    let currentIndex;
    let currentElement;

    while (minIndex <= maxIndex) {
        currentIndex = Math.floor((minIndex + maxIndex) / 2);
        currentElement = array[currentIndex];

        if (currentElement < item) {
            minIndex = currentIndex + 1;
        }
        else if (currentElement > item) {
            maxIndex = currentIndex - 1;
        }
        else {
            return currentIndex;
        }
    }
    return -1;
}
```

Answer: This algorithm has Logarithmic O(log(n)) time complexity becuase it cuts the size of the problem in half each time it runs through the while loop keeping the running time low even with larger inputs. 

## 9. Random element

What is the Big O of the following algorithm? Explain your answer

```javascript
function findRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}
```

Answer: This algorithm has a constant time O(1) becuase it pulls a random item from the array using Math.Random() which means it won't need to iterate over the array so it will always have the same run time regardless of the size of the input. 

## 10. What Am I?

What does the following algorithm do? What is the Big O of the following algorithm? Explain your answer

```javascript
function isWhat(n) {
    if (n < 2 || n % 1 !== 0) {
        return false;
    }
    for (let i = 2; i < n; ++i) {
        if (n % i === 0) return false;
    }
    return true;
}
```

Answer: this algorithm checks that a number is prime. It has a linear time complexity because the running time is directly proportional to the input value. in this case the for loop is exected whenever i is less than n starting with i = 2. So if n is 11 the for loop is executed 10 times. If n is 7 the for loop is executed 6 times. 