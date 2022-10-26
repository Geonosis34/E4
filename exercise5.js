/* Задание 5
Переписать консольное приложение из предыдущего юнита на классы. */

const device = []

function summWatt() {
  let power = 0
  for (let device of device) power += parseInt(device.getPower())
  return power
}

class Device {
  constructor(subcat, watt, category, type, states, message) {
    this.subcat = subcat || 'not'
    this.watt = watt || 0
    this.category = category || 'home'
    this.type = type || 'electric'
    this.states = states || 'off'
    this.message = message || 'ON'
    appliances.push(this)
  }
  
  power() {
    if (this.states === 'off') this.states = 'on'
    else this.states = 'off'
    console.log(`This device is ${this.states}`)
    summWatt()
  }
    
  usage(message) {
    if (this.states === 'on') return message
    else return 'No power'
  }
  getInfo() {
    if (this.states === 'on') {
      usage(this.message)
      return `This is a ${this.category} ${this.type} device.`
    } else return 'This device is off'
  }
  getPower() {
    if (this.states === 'on' && this.watt) return this.watt
    return 0
  } 
}

class KabinetDevice extends Device {
  constructor(name, mode, watt, message, subcat, category, type, states) {
    super(
      subcat,
      watt,
      category,
      type,
      states,
      (message = message || 'Used in kabinet')
    )
    this.subcat = subcat || 'kabinet'
    this.name = name || 'no'
    this.wattage = wattage || 0
    this.mode = mode || 0
  }

  getInfo() {
    if (this.states === 'on') {
      return `This '${this.name}' is a ${this.subcat} ${this.type} device. 
      It takes ${this.watt} watts and is set to mode "${this.mode}" 
      ${this.usage(this.message)}`
    } else return super.getInfo()
  }
}

class MediaDevice extends Device {
  constructor(
    name,
    inputs,
    wattage,
    message,
    subcat,
    category,
    type,
    states
  ) {
    super(
      subcat,
      wattage,
      category,
      type,
      states,
      (message = message || 'For work and relax')
    )
    this.subcat = subcat || 'media'
    this.name = name || 'computer'
    this.watt = watt || 900
    this.inputs = inputs || {}
}
  
  getInfo() {
    if (this.states === 'off')
      return `This ${this.name} is a ${this.subcat} ${this.type} device. 
      It takes ${this.watt} watts. ${this.usage(this.message)}`
    else return this.usage(this.message)
  }
}


console.info('Info about lamp: ')

const lamp = new KabinetDevice('lamp', 'lighting', 500)

console.log(lamp.getInfo())
lamp.power()
console.log(lamp.getInfo())

console.info('Info about computer: ')

const computer = new MediaDevice('computer', 3, 900, 'for work and relax')

console.log(computer.getInfo())
computer.power()
console.log(computer.getInfo())
