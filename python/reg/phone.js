const phoneReg = /^1[35789]\d{9}/; //匹配规则定义 正则表达式
console.log(phoneReg.test('19979113182,dfff'));
console.log(typeof phoneReg);

const a = /\d{3}-\d{5,8}/;
console.log(a.test('010-1229999999999999'));
console.log(typeof a);

