/* Задание 4
Реализовать следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.

Определить иерархию электроприборов. Включить некоторые в розетку. Посчитать потребляемую мощность. 

Таких приборов должно быть, как минимум, два (например, настольная лампа и компьютер). Выбрав прибор, подумайте, какими свойствами он обладает.

План:

Определить родительскую функцию с методами, которые включают/выключают прибор из розетки.
Создать делегирующую связь [[Prototype]] для двух конкретных приборов.
У каждого из приборов должны быть собственные свойства и, желательно, методы, отличные от родительских методов.
Создать экземпляры каждого прибора.
Вывести в консоль и посмотреть результаты работы, гордиться собой. :) */

let device = {
  type: 'electric',
  category: 'home',  
  states: 'off',
  serve: function (message = 'ON') {
    if (this.states === 'on') console.log(message)
    else console.log('Error. No power.')
  },
  getInfo: function () {
    if (this.states === 'on') {
      for (let key in this)
        if (this.hasOwnProperty(key)) console.log(key, ':', this[key])
    } else console.log('This device is off now')
  },
  getPower: function () {
    if (this.states === 'on' && this.wat) return this.wat
    else return 0
  },
}

device.power = function () {
  if (this.states === 'off') this.states = 'on'
  else this.states = 'off'
}

let kabinetDevice = Object.create(device)
let mediaDevice = Object.create(device)

kabinetDevice.subcat = 'kabinet'
kabinetDevice.serves.Prototype = function () {
  console.log('This device used in kabinet')
}

mediaDevice.subcat = 'media'
mediaDevice.message = 'for relax'

console.info('Info about lamp: ')

const lamp = Object.create(kabinetDevice)
lamp.name = 'Pixar'
lamp.power()
lamp.wat = 500
lamp.getInfo()
lamp.light = function () {
  this.serves('Lamp for lighting')
  console.log('Lighting on table')
}
lamp.light()

console.info('Info about computer: ')

const computer = Object.create(mediaDevice)
computer.message = 'For work and relax'
computer.name = 'Homer'
computer.wat = 900
computer.acc = {
  acc1: 'Monitor',
  acc2: 'Keyboard',
  acc3: 'Mouse',
}
computer.getInfo()
computer.power()
computer.getInfo()

let device = []

device.push(lamp)
device.push(computer)

function summWat() {
  let power = 0
  for (let device of device) power += parseInt(device.getPower())
  return power
}

console.log('Summ device consumption: ' + summWat())
