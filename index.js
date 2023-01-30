const numberToGuess = Math.floor(Math.random() * 1000)
console.log('Я загадал:', numberToGuess)

while (true) {
    const numberFromUser = prompt("Введите число:")
    console.log('Вы ввели:', +numberFromUser)

    if (numberFromUser == 'q') {
        alert('До свидания!')
        break
    }

    if (isNaN(numberFromUser)) {
        alert('Вы ввели не число!')
    } else if (+numberFromUser === numberToGuess) {
        alert('Вы угадали!')
        break
    } else if (+numberFromUser > numberToGuess){
        alert('Меньше!')
    } else if (+numberFromUser < numberToGuess){
        alert('Больше!')
    }
}