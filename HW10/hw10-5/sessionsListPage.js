let ul = document.getElementsByTagName('ul')[0];
let sessionsListArray = JSON.parse(localStorage.getItem('sessionsList'))
if (!sessionsListArray || sessionsListArray.length === 0) {
    ul.innerText = `Ще немає відвідувань`
} else {
    for (const listElement of sessionsListArray) {
        let li = document.createElement('li')
        li.innerText = listElement;
        ul.appendChild(li)
    }
}

