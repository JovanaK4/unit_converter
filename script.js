const convertBtn = document.getElementById("convert-btn");
let input = document.getElementById("number");
let resultMetersFeet = document.getElementById("result1");
let resultLitersGallons = document.getElementById("result2");
let resultKilogramsPounds = document.getElementById("result3");


convertBtn.addEventListener('click', function () {
    let inputValue = input.value;
    resultMetersFeet.innerHTML = `${inputValue} meters = ${(inputValue * 3.281).toFixed(3)} feet | ${inputValue} feet = ${(inputValue * 0.3048).toFixed(3)} meters`
    resultLitersGallons.innerHTML = `${inputValue} liters = ${(inputValue * 0.264).toFixed(3)} gallons | ${inputValue} gallons = ${(inputValue * 3.7854).toFixed(3)} liters`
    resultKilogramsPounds.innerHTML = `${inputValue} kilograms = ${(inputValue * 2.204).toFixed(3)} pounds | ${inputValue} poudns = ${(inputValue * 0.4535).toFixed(3)} kilograms`
})