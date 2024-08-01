
# JavaScript Numbers

In JavaScript, numbers are a fundamental data type used to represent numeric values. JavaScript treats all numbers as floating-point values, which means they can represent both integer and decimal values.

## Basic Examples of Numbers
```javascript
let integerNumber = 42;    // Integer
let floatingNumber = 3.14; // Floating-point number
```

## Arithmetic Operations
You can perform basic arithmetic operations with numbers in JavaScript:
```javascript
let a = 10;
let b = 3;

console.log(a + b); // Addition, prints 13
console.log(a - b); // Subtraction, prints 7
console.log(a * b); // Multiplication, prints 30
console.log(a / b); // Division, prints 3.3333...
console.log(a % b); // Modulus, prints 1 (remainder of division)
```

## Commonly Used Methods
1. **toFixed()**: Formats a number using fixed-point notation.
2. **toPrecision()**: Formats a number to a specified length.
3. **Math.round()**: Rounds a number to the nearest integer.
4. **Math.ceil()**: Rounds a number up to the nearest integer.
5. **Math.floor()**: Rounds a number down to the nearest integer.
6. **Math.random()**: Generates a random number between 0 (inclusive) and 1 (exclusive).
7. **parseInt()**: Converts a string to an integer.
8. **parseFloat()**: Converts a string to a floating-point number.

### Examples of Methods

1. **toFixed()**
   ```javascript
   let num = 5.6789;
   console.log(num.toFixed(2)); // Output: "5.68"
   ```

2. **toPrecision()**
   ```javascript
   let num = 5.6789;
   console.log(num.toPrecision(3)); // Output: "5.68"
   ```

3. **Math.round()**
   ```javascript
   let num = 5.6789;
   console.log(Math.round(num)); // Output: 6
   ```

4. **Math.ceil()**
   ```javascript
   let num = 5.6789;
   console.log(Math.ceil(num)); // Output: 6
   ```

5. **Math.floor()**
   ```javascript
   let num = 5.6789;
   console.log(Math.floor(num)); // Output: 5
   ```

6. **Math.random()**
   ```javascript
   let randomNum = Math.random();
   console.log(randomNum); // Output: A random number between 0 and 1
   ```

7. **parseInt()**
   ```javascript
   let str = "123";
   console.log(parseInt(str)); // Output: 123
   ```

8. **parseFloat()**
   ```javascript
   let str = "123.45";
   console.log(parseFloat(str)); // Output: 123.45
   ```

## Example Usage in a Simple Program
```javascript
let price = 19.99;
let discount = 0.2;

let discountedPrice = price - (price * discount);

console.log("Original Price: $" + price.toFixed(2));  // Original Price: $19.99
console.log("Discounted Price: $" + discountedPrice.toFixed(2)); // Discounted Price: $15.99

let randomDiscount = Math.random() * 0.5; // Random discount between 0 and 50%
let newPrice = price - (price * randomDiscount);

console.log("New Random Discounted Price: $" + newPrice.toFixed(2));
```
