

// adding the date to top of the page
document.getElementById('currentDay').textContent = moment().format('dddd, MMMM, Do YYYY')

let currentHour = new Date()
let hours = currentHour.getHours()

console.log(currentHour)
console.log(hours)


// Adding class to input depending on the time
for (let i = 0; i < 24; i++)

  if (hours > 9) {
    document.getElementById('nine').classList.add('past')
  } else if (hours < 9) {
    document.getElementById('nine').classList.add('future')
  } else if (hours === 9){
    document.getElementById('nine').classList.add('present')
  }
if (hours > 10) {
  document.getElementById('ten').classList.add('past')
} else if (hours < 10) {
  document.getElementById('ten').classList.add('future')
} else if (hours === 10){
  document.getElementById('ten').classList.add('present')
}
if (hours > 11) {
  document.getElementById('eleven').classList.add('past')
} else if (hours < 11) {
  document.getElementById('eleven').classList.add('future')
} else if (hours === 11){
  document.getElementById('eleven').classList.add('present')
}
if (hours > 12) {
  document.getElementById('twelve').classList.add('past')
} else if (hours < 12) {
  document.getElementById('twelve').classList.add('future')
} else if (hours === 12){
  document.getElementById('twelve').classList.add('present')
}
if (hours > 13) {
  document.getElementById('one').classList.add('past')
} else if (hours <= 13) {
  document.getElementById('one').classList.add('future')
} else if (hours === 13){
  document.getElementById('one').classList.add('present')
}
if (hours > 14) {
  document.getElementById('two').classList.add('past')
} else if (hours < 14) {
  document.getElementById('two').classList.add('future')
} else if (hours === 14){
  document.getElementById('two').classList.add('present')
}
if (hours > 15) {
  document.getElementById('three').classList.add('past')
} else if (hours < 15) {
  document.getElementById('three').classList.add('future')
} else if (hours === 15){
  document.getElementById('three').classList.add('present')
}
if (hours > 16) {
  document.getElementById('four').classList.add('past')
} else if (hours < 16) {
  document.getElementById('four').classList.add('future')
} else if (hours === 16){
  document.getElementById('four').classList.add('present')
}
if (hours > 17) {
  document.getElementById('five').classList.add('past')
} else if (hours < 17) {
  document.getElementById('five').classList.add('future')
} else if (hours === 17){
  document.getElementById('five').classList.add('present')
}

// grabbing input from local storage
document.getElementById('nine').value = localStorage.getItem('apptNine')
document.getElementById('ten').value = localStorage.getItem('apptTen')
document.getElementById('eleven').value = localStorage.getItem('apptEleven')
document.getElementById('twelve').value = localStorage.getItem('apptTwelve')
document.getElementById('one').value = localStorage.getItem('apptOne')
document.getElementById('two').value = localStorage.getItem('apptTwo')
document.getElementById('three').value = localStorage.getItem('apptThree')
document.getElementById('four').value = localStorage.getItem('apptFour')
document.getElementById('five').value = localStorage.getItem('apptFive')

// saving input to local storage
document.addEventListener('click', event => {
  if (event.target.classList.contains('saveBtn')){
  localStorage.setItem('apptNine', document.getElementById('nine').value)
      console.log('hi')
  localStorage.setItem('apptTen', document.getElementById('ten').value)
  localStorage.setItem('apptEleven', document.getElementById('eleven').value)
  localStorage.setItem('apptTwelve', document.getElementById('twelve').value)
  localStorage.setItem('apptOne', document.getElementById('one').value)
  localStorage.setItem('apptTwo', document.getElementById('two').value)
  localStorage.setItem('apptThree', document.getElementById('three').value)
  localStorage.setItem('apptFour', document.getElementById('four').value)
  localStorage.setItem('apptFive', document.getElementById('five').value)    
}
})
