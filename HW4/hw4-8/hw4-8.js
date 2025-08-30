// – створити функцію, яка приймає масив примітивних елементів
// (числа,стрінги,булеві), та будує для них список (ul li)
// та виводить його через document.write
function list(arrayOfPrimetives){
    document.write(`<ul>`);
    for (const item of arrayOfPrimetives) {
            document.write(`<li>${item}</li>`);
    }
    document.write(`</ul>`);
}
list([12, 23, 34, 'hello', 'world', false, true, -5.6]);