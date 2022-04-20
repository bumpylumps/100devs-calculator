//Follow best practices and use a constructor



class Calculator {
    constructor(){

    }
    /*functions needed
    1) Print - must print the buttons that are pressed in window
    2) Sum - if + is in window and = is pressed, perform addition
    3) Difference - if - is in window and = is pressed, perform subtraction
    4) Product - if * is in window and = is pressed, perform multilplication
    5) Quotient - if / is in window and = is pressed, perform division
    6) Fortune - if fortune is pressed, return random fortune 
    7) Try and set up for multiple math functions in window (i.e. x + y / 4)
    */

    //print button results
    printSeven(){
        document.querySelector('h1').innerText += 7
    }

    printEight(){
        document.querySelector('h1').innerText += 8
    }

    printNine(){
        document.querySelector('h1').innerText += 9
    }

    printFour(){
        document.querySelector('h1').innerText += 4
    }

    printFive(){
        document.querySelector('h1').innerText += 5
    }

    printSix(){
        document.querySelector('h1').innerText += 6
    }

    printOne(){
        document.querySelector('h1').innerText += 1
    }

    printTwo(){
        document.querySelector('h1').innerText += 2
    }

    printThree(){
        document.querySelector('h1').innerText += 3
    }

    printZero(){
        document.querySelector('h1').innerText += 0
    }

    printDivide(){
        document.querySelector('h1').innerText += '/'
    }

    printMultiply(){
        document.querySelector('h1').innerText += '*'
    }

    printAdd(){
        document.querySelector('h1').innerText += '+'
    }

    printSubtract(){
        document.querySelector('h1').innerText += '-'
    }



    //get result
    evaluateResult(){
        let resultString = document.querySelector('h1').innerText  
        let position = resultString.indexOf('/')
        let numerator = resultString.slice(0, position)
           console.log(numerator)
        let denominator = resultString.slice(position +1, resultString.length)
           console.log(denominator)
        if(resultString.includes('/')){ 
           resultString = numerator / denominator
           document.querySelector('h1').innerText = resultString
        } 
    }

    







    //clear
    clear(){
        document.querySelector('h1').innerText = ''
    }


    //fortune
    fortune(){
    let resultNum = Math.floor(Math.random()*6)
    if(resultNum === 0){
        document.querySelector('h1').innerText = 'Seek medical attention'
    } else if(resultNum === 1){
        document.querySelector('h1').innerText = 'Goblins Incoming'
    } else if(resultNum === 2){
        document.querySelector('h1').innerText = 'Good financial fortune inbound'
    } else if(resultNum === 3){
        document.querySelector('h1').innerText = 'Follow your nose'
    } else if(resultNum === 4){
        document.querySelector('h1').innerText = 'Write down the thing'
    } else if(resultNum === 5){
        document.querySelector('h1').innerText = 'I\'m tired: ask the Tarot'
    }

    console.log(resultNum)
    
}

}


let calc = new Calculator()

document.getElementById('fortune').addEventListener('click', calc.fortune)
document.getElementById('seven').addEventListener('click', calc.printSeven)
document.getElementById('eight').addEventListener('click', calc.printEight)
document.getElementById('nine').addEventListener('click', calc.printNine)
document.getElementById('divide').addEventListener('click', calc.printDivide)
document.getElementById('four').addEventListener('click', calc.printFour)
document.getElementById('five').addEventListener('click', calc.printFive)
document.getElementById('six').addEventListener('click', calc.printSix)
document.getElementById('multiply').addEventListener('click', calc.printMultiply)
document.getElementById('one').addEventListener('click', calc.printOne)
document.getElementById('two').addEventListener('click', calc.printTwo)
document.getElementById('three').addEventListener('click', calc.printThree)
document.getElementById('add').addEventListener('click', calc.printAdd)
document.getElementById('zero').addEventListener('click', calc.printZero)
document.getElementById('clear').addEventListener('click', calc.clear)
document.getElementById('equals').addEventListener('click', calc.evaluateResult)
document.getElementById('subtract').addEventListener('click', calc.printSubtract)

