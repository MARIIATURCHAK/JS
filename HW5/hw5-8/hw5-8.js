// – створити функцію, яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let printerArray = (arr) => {
    document.write(`<ul>`)
    for (let i = 0; i < arr.length; i++) {
        document.write(`<li>${arr[i]}</li>`)
    }
    document.write(`<ul>`)
    }
printerArray([11,12,55, true, `hello`, `world`])


