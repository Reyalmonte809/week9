let raw_data = `["a","b","c"]`;
console.log(raw_data.length); //13?
console.log(typeof raw_data);

let cooked_data = JSON.parse(raw_data); //interpret the string; cut it up in pieces

// let cooked_data = ["a","b","c"];
console.log(cooked_data.length); // 3
console.log(typeof cooked_data);

let raw_data2 = `[{"name":"kevin", "age":56},{"name":"kay", "age":59}]`;
console.log(raw_data2.length); //13?
console.log(typeof raw_data2);

let cooked_data2 = JSON.parse(raw_data2); //interpret the string; cut it up in pieces

//let cooked_data = ["a","b","c"];
console.log(cooked_data2.length); // 3
console.log(typeof cooked_data2);
console.log( cooked_data2[1].age);