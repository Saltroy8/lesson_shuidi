const map = new Map();
const obj = {p: 'hello world'};
console.log(map.set(obj,'ok'));
console.log(map.get(obj));
console.log(map.has(obj));
console.log(map.delete(obj));
console.log(map.has(obj));
