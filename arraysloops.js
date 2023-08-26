//OBJECTS in js are a collection of key-value pairs.
//The keys are always strings.
//The values can be any data type.
//Create an object with curly braces {}
//Access object's value with [] or .

// Define an object
const me = {
    name: 'Leah',
    age: 21,
    likesCoding: true
};

console.log(me['name']); //prints Leah to screen
console.log(me.age);

//Nesting
const person = { name: "Alexander", age: 32, likesCoding: true, address: {
    street: "123 Fake Street",
    suburb: "Fakeville",
    postcode: 1234
    }
};
console.log(person.address.street); // "123 Fake Street"
console.log(person["address"]["suburb"]); // "Fakeville"
// We can add values to an object using dot notation or square brackets
person.address.state = "NSW";
person["address"]["country"] = "Australia";
console.log(person.address); // { street: "123 Fake Street", suburb: "Fakeville", postcode: 1234, state: "NSW", country: "Australia" }

//Arrays are like lists in Python
