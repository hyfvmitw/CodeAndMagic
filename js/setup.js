let setup = document.querySelector('.setup')
setup.classList.remove('hidden') 
let setupSimilar = document.querySelector('.setup-similar')
setupSimilar.classList.remove('hidden') 


/* Генератор случайных чисел от min до max 
let min = 0
let max = 8
let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min
console.log('Случайное число = ' + randomNumber);
*/

let = randonName = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон']
let = randonFamilyName = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг']
let coatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)','rgb(215, 210, 55)', 'rgb(0, 0, 0)']
let eyesColor = ['black', 'red', 'blue', 'yellow', 'green']

/* ------ Генератор массива из случайных чисел от min до max ----------- */
let min = 0
let max = 7
let similarWizardArr = []
for (let i = 0; similarWizardArr.length < 4; i++) {
    randomNumber = Math.floor(Math.random() * (max - min + 1)) + min
    if (!similarWizardArr.includes(randomNumber)) {
        similarWizardArr.push(randomNumber);
    }
}
// console.log(similarWizardArr);

/* --- Генератор массива имен персонажей на основе массива из случайных чисел для свойства name объектов --- */

let randomWizard = []
for (i = 0; i <= 3; i++) {
    randomWizard.push(randonName[similarWizardArr[i]] + ' ' + randonFamilyName[similarWizardArr[i]])
}
// console.log(randomWizard);

/* --- Генератор массива цвет мантии персонажей на основе массива из случайных чисел для свойства coatColor объектов --- */

let min1 = 0
let max1 = 5
let coatColorWizardArr = []
for (let i = 0; coatColorWizardArr.length < 4; i++) {
    randomNumber1 = Math.floor(Math.random() * (max1 - min1 + 1)) + min1
    if (!coatColorWizardArr.includes(randomNumber1)) {
        coatColorWizardArr.push(randomNumber1);
    }
}
// console.log(coatColorWizardArr);

let randomCoatColorWizard = []
for (i = 0; i <= 3; i++) {
    randomCoatColorWizard.push(coatColor[coatColorWizardArr[i]])
}
// console.log(randomCoatColorWizard);

/* --- Генератор массива цвет глаз персонажей на основе массива из случайных чисел для свойства eyesColor объектов --- */

let min2 = 0
let max2 = 4
let eyesColorWizardArr = []
for (let i = 0; eyesColorWizardArr.length < 4; i++) {
    randomNumber2 = Math.floor(Math.random() * (max2 - min2 + 1)) + min2
    if (!eyesColorWizardArr.includes(randomNumber2)) {
        eyesColorWizardArr.push(randomNumber2);
    }
}
// console.log(eyesColorWizardArr);

let randomEyesColorWizard = []
for (i = 0; i <= 3; i++) {
    randomEyesColorWizard.push(eyesColor[eyesColorWizardArr[i]])
}
// console.log(randomEyesColorWizard);

/* --- Массив, состоящий из 4 сгенерированных JS объектов, которые будут описывать похожих персонажей --- */

let similarWizard = [
    {
        name: randomWizard[0],
        coatColor: randomCoatColorWizard[0],
        eyesColor: randomEyesColorWizard[0]
    },
    {
        name: randomWizard[1],
        coatColor: randomCoatColorWizard[1],
        eyesColor: randomEyesColorWizard[1]
    },
    {
        name: randomWizard[2],
        coatColor: randomCoatColorWizard[2],
        eyesColor: randomEyesColorWizard[2]
    },
    {
        name: randomWizard[3],
        coatColor: randomCoatColorWizard[3],
        eyesColor: randomEyesColorWizard[3]
    }
]
// console.log(similarWizard);

/* --- Создание отрисовки случайно сгенерированных волшебников --- */

let template = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item')
let similarList = document.querySelector('.setup-similar-list')

for (let i = 0; i < similarWizard.length; i++) {
let wizardElement = template.cloneNode(true);
similarList.appendChild(wizardElement)
wizardElement.querySelector('.setup-similar-label').textContent = similarWizard[i].name
wizardElement.querySelector('.wizard-coat').style.fill = similarWizard[i].coatColor
wizardElement.querySelector('.wizard-eyes').style.fill = similarWizard[i].eyesColor
}


console.log(template);
console.log(similarList);