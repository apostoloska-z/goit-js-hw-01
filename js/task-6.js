let userInput;
let total=0;

do { 
    userInput = prompt('Введите число');
    if (userInput===null){
        alert (`Общая сумма чисел равна ${total}`);
        break;
    } else if (Number.isNaN(Number(userInput))) {
        alert (`Было введено не число, попробуйте еще раз`);
        continue;
    }
    userInput=Number(userInput);
    total += userInput;
} while (userInput !== null)
