let inputEl = document.getElementById("input")
let convertBtn = document.getElementById("convert-btn")
let lengthEl = document.getElementById("length-el")
let volumEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")

const meterToFeet = 3.281
const feetToMeter = 0.304
const literToGallon = 0.264
const gallonToLiter = 3.785
const kiloToPound = 2.204
const poundToKilo = 0.453

convertBtn.addEventListener("click", function() {
    let baseValue = inputEl.value
    
    lengthEl.textContent = ` ${baseValue} meters = ${baseValue * meterToFeet} feet ❘ ${baseValue} feet = ${baseValue * feetToMeter} meters `
    volumEl.textContent = ` ${baseValue} liters = ${baseValue * literToGallon} gallons ❘ ${baseValue} gallons = ${baseValue * gallonToLiter} liters `
    massEl.textContent = ` ${baseValue} kilos = ${baseValue * kiloToPound} pounds ❘ ${baseValue} pounds = ${baseValue * poundToKilo} kilos `
})
