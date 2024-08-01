Sure, let's dive into JavaScript arrays and explore some commonly used methods with simple examples.

### What is an Array?

An array is a special variable in JavaScript that can hold more than one value at a time. Arrays are used to store multiple values in a single variable, making it easier to manage and manipulate collections of data.

### Creating an Array

You can create an array in a few different ways:

```javascript
// Using square brackets
let fruits = ["Apple", "Banana", "Mango"];

// Using the Array constructor
let numbers = new Array(1, 2, 3, 4, 5);
```

### Accessing Array Elements

You can access elements in an array using their index, starting from 0.

```javascript
let fruits = ["Apple", "Banana", "Mango"];
console.log(fruits[0]); // Output: Apple
console.log(fruits[2]); // Output: Mango
```

### Commonly Used Array Methods

1. **`push`** - Adds one or more elements to the end of an array and returns the new length of the array.

    ```javascript
    let fruits = ["Apple", "Banana"];
    fruits.push("Mango");
    console.log(fruits); // Output: ["Apple", "Banana", "Mango"]
    ```

2. **`pop`** - Removes the last element from an array and returns that element.

    ```javascript
    let fruits = ["Apple", "Banana", "Mango"];
    let lastFruit = fruits.pop();
    console.log(lastFruit); // Output: Mango
    console.log(fruits);    // Output: ["Apple", "Banana"]
    ```

3. **`shift`** - Removes the first element from an array and returns that element.

    ```javascript
    let fruits = ["Apple", "Banana", "Mango"];
    let firstFruit = fruits.shift();
    console.log(firstFruit); // Output: Apple
    console.log(fruits);     // Output: ["Banana", "Mango"]
    ```

4. **`unshift`** - Adds one or more elements to the beginning of an array and returns the new length of the array.

    ```javascript
    let fruits = ["Banana", "Mango"];
    fruits.unshift("Apple");
    console.log(fruits); // Output: ["Apple", "Banana", "Mango"]
    ```

5. **`concat`** - Merges two or more arrays and returns a new array.

    ```javascript
    let fruits = ["Apple", "Banana"];
    let moreFruits = ["Mango", "Pineapple"];
    let allFruits = fruits.concat(moreFruits);
    console.log(allFruits); // Output: ["Apple", "Banana", "Mango", "Pineapple"]
    ```

6. **`slice`** - Returns a shallow copy of a portion of an array into a new array object.

    ```javascript
    let fruits = ["Apple", "Banana", "Mango", "Pineapple"];
    let someFruits = fruits.slice(1, 3);
    console.log(someFruits); // Output: ["Banana", "Mango"]
    ```

7. **`splice`** - Changes the contents of an array by removing or replacing existing elements and/or adding new elements.

    ```javascript
    let fruits = ["Apple", "Banana", "Mango"];
    fruits.splice(1, 1, "Pineapple");
    console.log(fruits); // Output: ["Apple", "Pineapple", "Mango"]
    ```

8. **`indexOf`** - Returns the first index at which a given element can be found in the array, or -1 if it is not present.

    ```javascript
    let fruits = ["Apple", "Banana", "Mango"];
    let index = fruits.indexOf("Banana");
    console.log(index); // Output: 1
    ```

9. **`forEach`** - Executes a provided function once for each array element.

    ```javascript
    let fruits = ["Apple", "Banana", "Mango"];
    fruits.forEach((fruit) => {
        console.log(fruit);
    });
    // Output:
    // Apple
    // Banana
    // Mango
    ```

10. **`map`** - Creates a new array populated with the results of calling a provided function on every element in the calling array.

    ```javascript
    let numbers = [1, 2, 3, 4, 5];
    let squaredNumbers = numbers.map((number) => number * number);
    console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]
    ```

11. **`filter`** - Creates a new array with all elements that pass the test implemented by the provided function.

    ```javascript
    let numbers = [1, 2, 3, 4, 5];
    let evenNumbers = numbers.filter((number) => number % 2 === 0);
    console.log(evenNumbers); // Output: [2, 4]
    ```

12. **`reduce`** - Executes a reducer function on each element of the array, resulting in a single output value.

    ```javascript
    let numbers = [1, 2, 3, 4, 5];
    let sum = numbers.reduce((total, number) => total + number, 0);
    console.log(sum); // Output: 15
    ```

### Example: Combining Methods

Here's an example combining some of these methods:

```javascript
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Filter even numbers, square them, and then sum them up
let result = numbers
    .filter((number) => number % 2 === 0)
    .map((number) => number * number)
    .reduce((total, number) => total + number, 0);

console.log(result); // Output: 220
```

In this example, we first filter out the even numbers, then square each of those numbers, and finally sum up the squared numbers.

Understanding and using these array methods can greatly simplify your JavaScript code and make it more readable and efficient.