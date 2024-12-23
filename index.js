const apple = {
    name: 'apple',
    price: 1.99,
    message : {
        message1 : 'Hello',
        message2 : 'World'
    }
}

const appleClone = {...apple}
console.log('appleClone', appleClone);

appleClone.price = 2.99;
appleClone.name = 'orange';
appleClone.message.message1 = 'Hi';
appleClone.message.message2 = 'Universe';

console.log(apple);
