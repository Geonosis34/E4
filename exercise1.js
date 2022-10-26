/* Задание 1
Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения
только собственных свойств. Данная функция не должна возвращать значение. */

let obj = {
  key1: 1,
  key2: 'key2',
  key3: 'smth text',
  key4: {obj1: 'obj1'},
}

let ownProp = obj => {
  for (let elem in obj) {
    if (obj.hasOwnProperty(elem)) console.log(elem +' '+ obj[elem])
  }
}

ownProp(obj)