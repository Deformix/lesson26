task1.onclick = function () {
    let firstNum = +prompt("Введите первое число диапазона:");
    let lastNum = +prompt("Введите последнее число диапазона:");
    let total = 0;

    if (firstNum < lastNum) {
        for (firstNum; firstNum <= lastNum; firstNum++) {
            total += firstNum;
        }
        alert(`Сумма чисел в этом диапазоне: ${total}`);
    } else {
        alert('Неверный диапазон')
    }
}

task2.onclick = function () {
    let firstNum = +prompt("Введите первое число:");
    let lastNum = +prompt("Введите второе число:");

    if (firstNum > lastNum) {
        let _ = firstNum;

        firstNum = lastNum;
        lastNum = _;
    }

    if (firstNum === 0) {
        alert(`Наибольший общий делитель: ${lastNum}`)
    }

    else {
        while ((firstNum % lastNum) > 0) {
            let _ = (firstNum % lastNum);

            firstNum = lastNum;
            lastNum = _;
        }
        alert(`Наибольший общий делитель: ${lastNum}`);
    }
}

task3.onclick = function () {
    let num = +prompt("Введите число:");
    let result = [];
    let i = 0;

    while (num >= i) {
        if ((num % i) === 0) {
            result.push(i);
        }
        i++;
    }
    alert(result);
}

task4.onclick = function () {
    let num = prompt("Введите число:");

    alert(num.split('').length);
}

task5.onclick = function () {
    let zero = 0;
    let positive = 0;
    let negative = 0;
    let odd = 0;
    let even = 0;
    let counter = 0;

    do {
        let num = prompt('Введите число:');
        if (!(num == '')) {

            if (num == 0) {
                zero++;
            }

            if (num > 0) {
                positive++;
            }

            if (num < 0) {
                negative++;
            }

            if (num % 2 == 0) {
                even++;
            }

            if (num % 2 !== 0) {
                odd++;
            }
        }

        counter++;

    } while (counter < 10)

    alert(`Нулей: ${zero}\nПоложительных: ${positive}\nОтрицательных: ${negative}\nЧётных: ${even}\nНечётных: ${odd}`);
}

task6.onclick = function () {
    let isActive = true;
    let result;

    while (isActive) {
        let firstNum = prompt("Введите первое число:");
        let secondNum = prompt("Введите второе число:");
        let operator = prompt("Введите знак операции (+, -, *, /):");

        result = eval(firstNum + operator + secondNum);
        alert(result);

        let confirm = prompt("Решить ещё пример? (Да/Нет)");

        if (confirm != 'Да') {
            isActive = false;
        }
    }
}
//123456
//
task7.onclick = function () {
    let number = prompt("Введите первое число:");
    let shift = +prompt("На сколько цифр его сдвинуть?");

    alert(number.slice(shift) + number.slice(0, shift));
}

task8.onclick = function () {
    let day = [
        'Понедельник',
        'Вторник',
        'Среда',
        'Четверг',
        'Пятница',
        'Суббота',
        'Воскресенье'
    ]
    let i = 0;

    while (window.confirm(`${day[i]}. Хотите увидеть следующий день?`) == true) {
        i++;
        if (i == 7) {
            i = 0;
        }
    }

}

task9.onclick = function () {
    let table = document.createElement("table");
    document.getElementById("task9-result").appendChild(table);

    for (let i = 1; i < 11; i++) {
        let row = document.createElement("tr")
        table.appendChild(row);

        for (let j = 2; j < 10; j++) {
            let data = document.createElement("td");
            data.style.paddingRight = "40px"
            data.innerText = `${j} * ${i} = ${j * i}`;
            row.appendChild(data);
        }
    }

}

task10.onclick = function () {
    let start = 0;
    let end = 100;

    alert('Загадайте число от 0 до 100');
    while (true) {

        let num = Math.floor((start + end) / 2);
        let result = prompt(`Ваше число (>)больше, (<)меньше или (=)равно ${num}`);

        if (result == '=') {
            alert('Число угадано!')
            break;
        } else if (result == '>') {
            start = num + 1;
        } else if (result == "<") {
            end = num - 1;
        }
    }
}



