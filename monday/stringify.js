let binary_data = [
    {"name" : "kevin", "age" : 56},
    {"name" : "kay", "age" : 50},
    // {name : "kevin", age : 56},
    // {name : "kay", age : 50},

];
console.log(typeof binary_data);
console.log(binary_data.length);

freeze_dried = JSON.stringify(binary_data);
// freeze_dried = JSON.stringify(binary_data, undefined, 4); makes it pretty 
console.log(typeof freeze_dried);
console.log(freeze_dried.length);
console.log(freeze_dried);