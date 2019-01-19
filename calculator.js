document.addEventListener('DOMContentLoaded', startCalc)

var inputs = ['']
var operators = ['+', '-', '/', '*']
var totalString
var decimal = ['.']
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var lastOutput = ['']

function startCalc() {
  function getValue(string) {
    if (string.includes(inputs[inputs.length]) === true && string === '.') {
      console.log('Duplicate Decimal')
    } else if (inputs.length === 1 && operators.includes(string) === false) {
      inputs.push(string)
    } else if (operators.includes(inputs[inputs.length - 1]) === false) {
      inputs.push(string)
    } else if (numbers.includes(Number(string))) {
      inputs.push(string)
    }
    update()
  }
  function update() {
    totalString = inputs.join('')
    $('#equation').html(totalString)
    console.log(inputs)
  }
  function getTotal() {
    totalString = inputs.join('')
    $('#output').html(eval(totalString))
    $('#equation').html(eval(totalString))
  }

  $('button').on('click', function() {
    if (this.id === 'Clear_Entry') {
      inputs.pop()
      update()
    } else if (this.id === 'total') {
      getTotal()
    } else {
      if (inputs[inputs.length - 1].indexOf('+', '-', '/', '*', '.') === -1) {
        getValue(this.id)
      } else {
        getValue(this.id)
      }
    }
  })
}
