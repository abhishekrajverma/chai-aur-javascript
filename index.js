const apple = {
    name: 'apple',
    price: 1.99,
    message : {
        message1 : 'Hello',
        message2 : 'World'
    }
}
 const apple1 = {...apple}

console.log(apple1) // { name: 'apple', price: 1.99 }

console.log(apple === apple1) // false

apple1.name = 'orange'

console.log(apple1) // { name: 'orange', price: 1.99 }
console.log(apple) // { name: 'apple', price: 1.99 }

apple1.message.message1 = 'Hi'

console.log(apple1) // { name: 'orange', price: 1.99, message: { message1: 'Hi', message2: 'World' } } because of nested object reference is copied not the object itself

console.log(apple) // { name: 'apple', price: 1.99, message: { message1: 'Hi', message2: 'World' } } because of nested object reference is copied not the object itself 