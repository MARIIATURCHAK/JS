//
// – Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
//
// Приклад структури знаходиться у файлі example.png, який лежить в папці з поточним файлом
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
let wrapperDiv = document.createElement('div');
wrapperDiv.classList.add('courses-wrapper');
for (const coursesArrayElement of coursesArray) {
    let courseDiv = document.createElement('div');
    courseDiv.classList.add('course');
    let titleDiv = document.createElement('div');
    titleDiv.innerText = coursesArrayElement.title;
    titleDiv.classList.add('title');
    let durationDiv = document.createElement('div');
    durationDiv.classList.add('duration');
    let monthDurationDiv = document.createElement('div');
    monthDurationDiv.innerText = coursesArrayElement.monthDuration;
    monthDurationDiv.classList.add('monthDuration');
    let hourDurationDiv = document.createElement('div');
    hourDurationDiv.innerText = coursesArrayElement.hourDuration;
    hourDurationDiv.classList.add('hourDuration');
    durationDiv.append(monthDurationDiv, hourDurationDiv);
    let modulesUl = document.createElement('ul');
    modulesUl.classList.add('modules');
    for (const modulElement of coursesArrayElement.modules) {
        let li = document.createElement('li');
        li.innerText = modulElement;
        modulesUl.appendChild(li);

    }
    wrapperDiv.appendChild(courseDiv);
    courseDiv.append(titleDiv, durationDiv, modulesUl);
}
document.body.appendChild(wrapperDiv);