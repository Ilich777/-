let name = prompt('Привет! Как тебя зовут?')
while (name == '' || name == null) {
    name = prompt('Привет! Как тебя зовут?')
}
let rules = `${name}, я загадал число от 1 до 100. Попробуй отгадать его за наименьшее число попыток. 
После каждой попытки я скажу 'мало', 'много' или 'угадал'.`
alert(rules)

let number = 42 // число, которое загадал компьютер
let guess = prompt('Какое число я загадал?')
let amountAttempt =0//количество попыток

while (guess != number) {
    if (number < guess) {
        guess = prompt('Много. Попробуй ещё раз')

        amountAttempt++
    }

    if (number > guess) {
        guess = prompt('Мало. Попробуй ещё раз')

        amountAttempt++
    }
}

alert('Ты угадал! Это число '+ number + '. Количество потраченных попыток - ' + amountAttempt + '.')
