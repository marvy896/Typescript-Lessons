class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.currentOperand = ''
        this.previousOperand = ''
        this.clear
    }
    clear() {
        this.currentOperand = ' '
        this.previousOperand = ' '
        this.operation = undefined
    }       
    delete() {

    }
    appendNumber(number)  {
        if(number === '.' && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand + number.toString()
     }
    chooseOperation(operation) {
        if (this.currentOperand === '') return
        if (this.currentOperand !== '') {
            this.compute()
        }
        this.operation = operation
        this.previousOperand = this.currentOperand
        this.currentOperand = ''
    }
    compute() { 
        let computation
        const prev = parseFloat(this.previousOperand)
        const current = parseFloat(this.currentOperand)
        if (isNaN(prev) )
    }
    UpdateDisplay() {
        this.currentOperandTextElement.innerText = this.currentOperand
        this.previousOperandTextElement.innerText = this.previousOperand
    }
}
const numberButtons = document.querySelectorAll("[data-number]")
const operationButtons = document.querySelectorAll("[data-operation]")
const deleteButton = document.querySelector("[data-delete]")
const equalsButton = document.querySelector("[data-equals]")
const allClearButton = document.querySelector("[data-all-clear]")
const previousOperandTextElement = document.querySelector("[data-previous-operand]")
const currentOperandTextElement = document.querySelector("[data-current-operand]")

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText) 
        calculator.UpdateDisplay()
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText) 
        calculator.UpdateDisplay()
    })
})

equalsButton.addEventListener('click', button => {
    calculator.compute()
    calculator.UpdateDisplay()
})