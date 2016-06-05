var student = {
    name: "Ruslana",
    last_name: "Ryabchuk"
}
console.log(student);

var username = prompt("What is your name? :) ", " ");
alert("Hello, " +username+ " ");

result = confirm("Do you really want to load this page?");


console.log(parseInt("9") + 9);

console.log((1/3+1+2/3).toFixed(1)==2);

var obj = {}, //создала пустой объект
    r = 0; //создала примитивную переменную инт

obj.prop = 9; //указала значение
r = obj.prop; //скопировала значения в переменную инт
delete obj.prop; //удалила переменную о

console.log(obj.prop, r); // а тут будет видно, что значениe в r осталось потому что r хранило не ссылку на объект, а само значение