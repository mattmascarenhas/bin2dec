var display = document.getElementById('display')
var binaryValue = document.getElementById('binaryValue')
var buttonOK = document.getElementById('buttonOK')

buttonOK.addEventListener('click', function () {
  if (binaryValue.value.match(/^[0-1]+$/g) === null) {
    alert('Enter either 0 or 1')
  } else {
    display.childNodes[1].innerHTML = parseInt(binaryValue.value, 2)
  }
})
