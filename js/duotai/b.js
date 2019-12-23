var makeSound = function(animal) {
    //多态 只要对象具有统一的接，那么可以互换使用123
    // if(animal instanceof Duck) {
    //     console.log('gagaga');
    // } else if (animal instanceof Chicken) {
    //     console.log('lololo');
    // }
    animal.say();//面向对象优化
}
var Duck = function() {};
Duck.prototype.say = function() {
    console.log('gagaga');
}
var Chicken = function() {};
Chicken.prototype.say = function() {
    console.log('lololo');
}
makeSound(new Chicken());