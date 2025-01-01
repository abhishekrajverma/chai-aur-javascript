
# 7 Commonly Used `req` Properties in Express.js

## 1. `req.params`
**Purpose**: Holds route parameters (dynamic parts of the URL).  
**Use Case**: When you need specific values from a URL path, like a user ID or a product name.

**Example**:
```javascript
app.get('/user/:id', (req, res) => {
  const userId = req.params.id;
  res.send(`User ID is: ${userId}`);
});
```
**Test**:
- URL: `/user/42`
- Output: `User ID is: 42`

---

## 2. `req.query`
**Purpose**: Holds query string parameters (key-value pairs after `?` in a URL).  
**Use Case**: When you want to filter or search based on user input.

**Example**:
```javascript
app.get('/search', (req, res) => {
  const searchTerm = req.query.q;
  res.send(`You searched for: ${searchTerm}`);
});
```
**Test**:
- URL: `/search?q=express`
- Output: `You searched for: express`

---

## 3. `req.body`
**Purpose**: Holds data sent in the request body (used for POST, PUT, PATCH, etc.).  
**Use Case**: When you accept form data or JSON from the client.

**Example**:
```javascript
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  res.send(`Logged in as: ${username}`);
});
```
**Test**:
- URL: `/login`  
- Body: `{ "username": "Aman", "password": "1234" }`  
- Output: `Logged in as: Aman`

---

## 4. `req.headers`
**Purpose**: Contains HTTP headers sent by the client.  
**Use Case**: When you need metadata like `User-Agent` or `Authorization`.

**Example**:
```javascript
app.get('/', (req, res) => {
  const userAgent = req.headers['user-agent'];
  res.send(`Your browser is: ${userAgent}`);
});
```
**Test**:
- URL: `/`  
- Output: `Your browser is: [User-Agent of your browser]`

---

## 5. `req.method`
**Purpose**: Identifies the HTTP method (GET, POST, PUT, DELETE) used in the request.  
**Use Case**: When you want to handle different methods for the same route.

**Example**:
```javascript
app.use((req, res) => {
  res.send(`HTTP Method used: ${req.method}`);
});
```
**Test**:
- URL: `/`  
- Method: `GET`, `POST`, etc.  
- Output: `HTTP Method used: [Method]`

---

## 6. `req.url`
**Purpose**: Gives the full URL path of the request.  
**Use Case**: When you need to log or debug the requested path.

**Example**:
```javascript
app.use((req, res) => {
  res.send(`You requested URL: ${req.url}`);
});
```
**Test**:
- URL: `/products?category=books`  
- Output: `You requested URL: /products?category=books`

---

## 7. `req.cookies`
**Purpose**: Holds cookies sent by the client (requires `cookie-parser` middleware).  
**Use Case**: When you need to access session-related or user-specific data stored in cookies.

**Example**:
```javascript
app.use(cookieParser());
app.get('/', (req, res) => {
  const userCookie = req.cookies.user;
  res.send(`Cookie value: ${userCookie}`);
});
```
**Test**:
- Set cookie: `user=Aman`  
- URL: `/`  
- Output: `Cookie value: Aman`
