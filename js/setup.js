let setup = document.querySelector('.setup')
// setup.classList.remove('hidden') 


/* Генератор случайных чисел от min до max 

let min = 0
let max = 8
let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min
console.log('Случайное число = ' + randomNumber);

*/

let = randonName = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон']
let = randonFamilyName = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг']

// console.log(randonName[1]);
// console.log(randonFamilyName[1]);
// console.log('Имя и фамилия случайного волшебника: ' + randonName[randomNumber] + ' ' + randonFamilyName[randomNumber]);

/* ------ Генератор массива из случайных чисел от min до max ----------- */
let min = 0
let max = 7
let similarWizardArr = []
for (let i = 0; i <= 3; i++) {
    randomNumber = Math.floor(Math.random() * (max - min + 1)) + min
    if (similarWizardArr.indexOf(randomNumber)) {
        similarWizardArr.push(randomNumber);
    }
}
console.log(similarWizardArr);

/* ------ Генератор свойства name объектов ----------- */

let randomWizard = []
for (i = 0; i <= 3; i++) {
    randomWizard.push(randonName[similarWizardArr[i]] + ' ' + randonFamilyName[similarWizardArr[i]])
}
console.log(randomWizard);


// let similarWizard = []
//     for (i = 0; i <= 3; i++) {
//         similarWizard[i].name = randomWizard[i]

// }


// console.log(similarWizard);

// similarWizard[1].name = 'Андрей'

// console.log(similarWizard[1].name);