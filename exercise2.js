/* Задание 2
Написать функцию, которая принимает в качестве аргументов строку и объект,
а затем проверяет есть ли у переданного объекта свойство с данным именем. 
Функция должна возвращать true или false. */

let obj = {
  key1: 1,
  key2: 'key2',
  key3: 'smth text',
  key4: {obj1: 'obj1'},
}

let checkProp = (prop, obj) => {
  if (prop in obj) return true
  else return false
}

console.log(checkProp('key1', obj))
console.log(checkProp('logo', obj))