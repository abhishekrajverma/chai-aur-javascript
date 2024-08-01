
# Browser Storage in JavaScript

Browser storage in JavaScript refers to the mechanisms provided by web browsers to store data on the client side. There are several types of browser storage:

## 1. Cookies

- Small pieces of data stored by the browser to maintain stateful information for the user.
- Often used for session management, personalization, and tracking.
- Limited to about 4KB of data.

## 2. LocalStorage

- Stores data with no expiration date.
- Data persists even after the browser is closed and reopened.
- Each domain can store up to 5MB of data.
- Accessible through `window.localStorage`.

### Example Usage

```javascript
// Store data
localStorage.setItem('key', 'value');

// Retrieve data
let data = localStorage.getItem('key');
console.log(data); // Output: value

// Remove data
localStorage.removeItem('key');

// Clear all data
localStorage.clear();
```

## 3. SessionStorage

- Similar to LocalStorage but the data is only available for the duration of the page session.
- Data is cleared when the page is closed.
- Each tab has its own session storage.
- Accessible through `window.sessionStorage`.

### Example Usage

```javascript
// Store data
sessionStorage.setItem('key', 'value');

// Retrieve data
let data = sessionStorage.getItem('key');
console.log(data); // Output: value

// Remove data
sessionStorage.removeItem('key');

// Clear all data
sessionStorage.clear();
```

## 4. IndexedDB

- A low-level API for storing large amounts of structured data, including files/blobs.
- Allows for more complex queries and transactions.
- Useful for applications that require offline capabilities and complex data storage.
- Accessible through the `indexedDB` interface.

## 5. WebSQL (Deprecated)

- A database API for storing data in a structured way using SQL.
- Deprecated in favor of IndexedDB.

Each type of storage has its own use cases and limitations, and developers choose based on their specific needs for persistence and scope of data.
