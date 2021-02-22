


document.getElementById('currentDay').textContent = moment().format('dddd, MMMM, Do YYYY, h:mm:ss a')

let currentHour = new Date()
let hours = new Date().toLocaleTimeString()

console.log(currentHour)
console.log(hours)


for (let i = 0; i < 24; i++)

  if (hours > 9) {
    document.getElementById('nine').classList.add('past')
  } else if (hours < 9) {
    document.getElementById('nine').classList.add('future')
  } else {
    document.getElementById('nine').classList.add('present')
  }
if (hours > 10) {
  document.getElementById('ten').classList.add('past')
} else if (hours < 10) {
  document.getElementById('ten').classList.add('future')
} else {
  document.getElementById('ten').classList.add('present')
}
if (hours > 11) {
  document.getElementById('eleven').classList.add('past')
} else if (hours < 11) {
  document.getElementById('eleven').classList.add('future')
} else {
  document.getElementById('eleven').classList.add('present')
}
if (hours > 12) {
  document.getElementById('twelve').classList.add('past')
} else if (hours < 12) {
  document.getElementById('twelve').classList.add('future')
} else {
  document.getElementById('twelve').classList.add('present')
}
if (hours > 1) {
  document.getElementById('one').classList.add('past')
} else if (hours < 1) {
  document.getElementById('one').classList.add('future')
} else {
  document.getElementById('one').classList.add('present')
}
if (hours > 2) {
  document.getElementById('two').classList.add('past')
} else if (hours < 2) {
  document.getElementById('two').classList.add('future')
} else {
  document.getElementById('two').classList.add('present')
}
if (hours > 3) {
  document.getElementById('three').classList.add('past')
} else if (hours < 3) {
  document.getElementById('three').classList.add('future')
} else {
  document.getElementById('three').classList.add('present')
}
if (hours > 4) {
  document.getElementById('four').classList.add('past')
} else if (hours < 4) {
  document.getElementById('four').classList.add('future')
} else {
  document.getElementById('four').classList.add('present')
}
if (hours > 5) {
  document.getElementById('five').classList.add('past')
} else if (hours < 5) {
  document.getElementById('five').classList.add('future')
} else {
  document.getElementById('five').classList.add('present')
}

// document.getElementById('nine').textContent = localStorage.getItem('appt')

// document.getElementById('saveBtn').addEventListener('click', () => {

//   let appt = localStorage.setItem('appt', document.getElementById('nine').value)
// })