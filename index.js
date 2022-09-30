let greeting = 'Привет! Как тебя зовут?'
let name = prompt(greeting)
while (name == '' || name == null) {
    name = prompt(greeting)
}
let rules = `${name}, я загадал число от 1 до 100. Попробуй отгадать его за наименьшее число попыток. 
После каждой попытки я скажу 'мало', 'много' или 'угадал'.`
alert(rules)

let number = random(100)  // число, которое загадал компьютер
let guess = prompt('Какое число я загадал?')
let amountAttempt =1 //количество попыток

while (guess != number) {
    amountAttempt++
    if (number < guess) guess = prompt('Много. Попробуй ещё раз') 
    else if (number > guess) guess = prompt('Мало. Попробуй ещё раз')
}

alert('Ты угадал! Это число '+ number + '. Количество потраченных попыток - ' + amountAttempt + '.')
