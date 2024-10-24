//BASIC CALCULATOR: ADD, SUBTRACT, MULTIPLY, DIVIDE
//Global Variables
let num1
let num2
let mathCalc
let again

// ADD A FUNCTION CALLED CALCULATE
function calculate(x, y, operation) {

        switch(operation) {
            case 'add':
                again = 'n'
                alert(x + y)
                break

            case 'subtract':
                again = 'n'
                alert(x - y)
                break

            case 'multiply':
                again = 'n'
                alert(x * y)
                break

            case 'divide':
                again = 'n'
                alert(x / y)
                break

            default:
                return again = prompt('The Operation entered was invalid. Try again?', 'y')
                
        }
}


do {
    // COLLECT FIRST NUMBER FROM USER
    num1 = parseFloat(prompt('Enter the first number'))

    // COLLECT SECOND NUMBER FROM USER
    num2 = parseFloat(prompt('Enter the second number'))

    // COLLECT OPERATION TO PERFORM (+,-,*,/) FROM USER
    mathCalc = prompt('Enter operation: Add, Subtract, Multiply, Divide').toLowerCase()

    // CALL THE FUNCTION AND RETURN THE RESULT WITHIN AN ALERT
    calculate(num1, num2, mathCalc)
} while (again === 'y')
