function greet(name) {
    return `Hello, ${name}!`;
}

greet('Alice');
greet.language = 'english'
greet.greetInSpanish = function(name) {
    return `Hola, ${name}!`;
}

function invokeGreeting(greetingFunction, name) {
    return greetingFunction(name);
}

console.log(invokeGreeting(greet, 'Bob'));