
# Shallow Copy and Deep Copy in JavaScript

In JavaScript, **shallow copy** and **deep copy** are two ways to duplicate objects or arrays, but they differ in how they handle nested objects.

## Shallow Copy

A shallow copy duplicates the top-level properties of an object, but if any property is a reference to another object, only the reference is copied. Therefore, changes to nested objects in the copy will affect the original object.

### Example:
```javascript
let original = { 
    name: "Alice", 
    address: { city: "Wonderland" }
};

let shallowCopy = { ...original }; // Using spread operator for shallow copy

shallowCopy.name = "Bob";
shallowCopy.address.city = "New City";

console.log(original.name); // Output: Alice (primitive value is copied)
console.log(original.address.city); // Output: New City (reference is copied, so original is affected)
```

## Deep Copy

A deep copy duplicates all properties and nested objects, creating completely independent copies. Changes to nested objects in the copy will not affect the original object.

### Example:
```javascript
let original = { 
    name: "Alice", 
    address: { city: "Wonderland" }
};

let deepCopy = JSON.parse(JSON.stringify(original)); // Using JSON methods for deep copy

deepCopy.name = "Bob";
deepCopy.address.city = "New City";

console.log(original.name); // Output: Alice (primitive value is copied)
console.log(original.address.city); // Output: Wonderland (nested object is deeply copied)
```

# Shallow and Deep Copy with Arrays

## Shallow Copy with Arrays

A shallow copy of an array duplicates the array itself, but if any elements of the array are objects or other arrays, only the references to those objects/arrays are copied.

### Example:
```javascript
let originalArray = [1, 2, { a: 3, b: 4 }];

// Shallow copy using the slice method
let shallowCopy = originalArray.slice();

shallowCopy[0] = 10; // Changing a primitive value
shallowCopy[2].a = 100; // Changing a nested object value

console.log(originalArray); // Output: [1, 2, { a: 100, b: 4 }] (nested object is affected)
console.log(shallowCopy); // Output: [10, 2, { a: 100, b: 4 }]
```

## Deep Copy with Arrays

A deep copy of an array duplicates the array and all nested objects/arrays, creating independent copies.

### Example:
```javascript
let originalArray = [1, 2, { a: 3, b: 4 }];

// Deep copy using JSON methods
let deepCopy = JSON.parse(JSON.stringify(originalArray));

deepCopy[0] = 10; // Changing a primitive value
deepCopy[2].a = 100; // Changing a nested object value

console.log(originalArray); // Output: [1, 2, { a: 3, b: 4 }] (nested object is not affected)
console.log(deepCopy); // Output: [10, 2, { a: 100, b: 4 }]
```

## Alternative Deep Copy Method with Arrays

If you have complex objects that can't be serialized to JSON, you can use a recursive function or libraries like Lodash for deep copying.

### Example using a Recursive Function:
```javascript
function deepCopy(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }

    if (Array.isArray(obj)) {
        let copy = [];
        obj.forEach((_, i) => {
            copy[i] = deepCopy(obj[i]);
        });
        return copy;
    }

    let copy = {};
    Object.keys(obj).forEach(key => {
        copy[key] = deepCopy(obj[key]);
    });
    return copy;
}

let originalArray = [1, 2, { a: 3, b: 4 }];
let deepCopyArray = deepCopy(originalArray);

deepCopyArray[0] = 10; // Changing a primitive value
deepCopyArray[2].a = 100; // Changing a nested object value

console.log(originalArray); // Output: [1, 2, { a: 3, b: 4 }] (nested object is not affected)
console.log(deepCopyArray); // Output: [10, 2, { a: 100, b: 4 }]
```
