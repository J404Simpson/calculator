// CONTENT TO DOM OBJECTS
document.addEventListener('DOMContentLoaded', startCalc)

// DECLARED VARIABLES
//All characters to put into the equation
var inputs = ['']
//Subset of inputs, operators are the math part of the calculator
var operators = ['+', '-', '/', '*']
//Is the array of numbers and operators we are trying to assemble.
var totalString
//Requires its own variable due to its effect on mathematical operation.
var decimal = ['.']
//Array of numbers for use in the equation
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
//This is a copy of the last output which is then reinserted as the first value in the next equation string
var lastOutput = ['']

//Kickstarts my calculator
function startCalc() {
  // DECLARED FUNCTIONS
  //Need a function that fetches values from the ID's of the clicked buttons in document & inputs them into the holding pen called "equation" for a series of validation tests using this function.
  function getValue(string) {
    //1st Test checks the string for pre-existing decimals. This still requires some work.
    if (string.includes(inputs[inputs.length]) === true && string === '.') {
      console.log('Duplicate Decimal')
    }
    // 2nd Test qualifies that the equation doesn't start with any of the operators which would cause the equation not to work.
    else if (inputs.length === 1 && operators.includes(string) === false) {
      inputs.push(string)
    }
    // 3rd statement checks that the string does not have a double up of
    else if (operators.includes(inputs[inputs.length - 1]) === false) {
      inputs.push(string)
    }
    // 4th statement ensures that there are numbers in the string to push to the equation.
    else if (numbers.includes(Number(string))) {
      inputs.push(string)
    }
    update()
  }
  //This functions joins all of the character inputs and prints them to a holding pen called "equation".
  function update() {
    totalString = inputs.join('')
    $('#equation').html(totalString)
    console.log(inputs)
  }
  //This does the calculation on the array of values that has been assembed in the box called equation and outputs it to the main calculator display.
  function getTotal() {
    totalString = inputs.join('')
    $('#output').html(eval(totalString))
    $('#equation').html(eval(totalString))
  }
  //EVENT HANDLING
  //This reacts to button clicks on the page starting with button clicks.
  // All Clear - button functionality is defined in HTML doc to reload the page.
  $('button').on('click', function() {
    // Clear last entry button - this is just a backspace that pops off the last input into the equation field.
    if (this.id === 'Clear_Entry') {
      inputs.pop()
      update()
    }
    // Equals button, processes the math for the calculator.
    else if (this.id === 'total') {
      getTotal()
    }
    //This code fetches characters from the array that have not been flagged by the tests above and brings them into the totalString and equation display.
    else {
      if (inputs[inputs.length - 1].indexOf('+', '-', '/', '*', '.') === -1) {
        getValue(this.id)
      } else {
        getValue(this.id)
      }
    }
  })
}
