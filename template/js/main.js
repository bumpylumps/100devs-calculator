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

