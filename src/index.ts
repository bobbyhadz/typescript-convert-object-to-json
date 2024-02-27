export {};

// EXAMPLE 1 - Convert an Object to a JSON string in Typescript

// 👇️ const obj: {name: string; country: string;}
const obj = { name: 'Bobby', country: 'Chile' };

// ✅ Convert to JSON
// 👇️ const json: string
const json = JSON.stringify(obj);

// ✅ Parse back to Object
// 👇️ const parsed: any
const parsed = JSON.parse(json);

// ---------------------------------------------------

// // EXAMPLE 2 - Converting the JSON string back to an object

// const obj = { name: 'Bobby', country: 'Chile' };

// // ✅ Convert to JSON
// // 👇️ const json: string
// const json = JSON.stringify(obj);

// // ✅ Parse back to Object
// // 👇️ const parsed: any
// const parsed = JSON.parse(json);

// ---------------------------------------------------

// // EXAMPLE 3 - Beware of values that don't get converted to JSON

// // 👇️ const obj: {id: symbol; name: undefined; age: () => number;}
// const obj = {
//   id: Symbol('hello'),
//   name: undefined,
//   age: () => 5,
// };

// // ✅ Convert to JSON
// // 👇️ const json: string
// const json = JSON.stringify(obj);

// console.log(json); // 👉️ {}

// ---------------------------------------------------

// // EXAMPLE 4 - Avoid circular references (ERROR)

// const obj: { name: string; country: string; newName?: any } = {
//   name: 'Bobby',
//   country: 'Chile',
// };

// obj.newName = obj;

// // ⛔️ Error: Converting circular structure to JSON
// const json = JSON.stringify(obj);
