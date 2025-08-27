// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
let day = prompt('Write day');
switch (day) {
    case 'Monday':
        console.log('task1.1');
        console.log('task1.2');
        console.log('task1.3');
        break;
    case 'Tuesday':
        console.log('task2.1');
        console.log('task2.2');
        console.log('task2.3');
        console.log('task2.4');
        break;
    case 'Wednesday':
        console.log('task3.1');
        console.log('task3.2');
        console.log('task3.3');
        console.log('task3.4');
        console.log('task3.5');
        break;
    case 'Thursday':
        console.log('task4.1');
        console.log('task4.2');
        console.log('task4.3');
        console.log('task4.4');
        break;
    case 'Friday':
        console.log('task5.1');
        console.log('task5.2');
        console.log('task5.3');
        console.log('task5.4');
        break;
    case 'Saturday':
        console.log('task6.1');
        console.log('task6.2');
        console.log('task6.3');
        console.log('task6.4');
        break;
    case 'Sunday':
        console.log('task7.1');
        console.log('task7.2');
        console.log('task7.3');
        break;
    default:
        console.log('wrong data!!!');
}