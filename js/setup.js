let setup = document.querySelector('.setup')
// setup.classList.remove('hidden')
let setupSimilar = document.querySelector('.setup-similar')
// setupSimilar.classList.remove('hidden')


/* Генератор случайных чисел от min до max 
let min = 0
let max = 8
let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min
console.log('Случайное число = ' + randomNumber);
*/

/* --- Массивы данных приходящих на вход функций в качестве аргументов --- */

let = randomName = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон']
let = randomFamilyName = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг']
let coatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)']
let eyesColor = ['black', 'red', 'blue', 'yellow', 'green']

/* --- Функция возвращающая массив случайного имени и фамилии волшебника --- */

let randomWizard = function(name, familyName) {
/* --- Генератор массива из случайных чисел от 0 до длины массива на входе --- */
    let lengthArrName = name.length - 1
    let minIndexArrName = 0
    let maxIndexArrName = lengthArrName
    let similarWizardArr = []
    for (let i = 0; similarWizardArr.length < 4; i++) {
        randomNumber = Math.floor(Math.random() * (maxIndexArrName - minIndexArrName + 1)) + minIndexArrName
        if (!similarWizardArr.includes(randomNumber)) {
            similarWizardArr.push(randomNumber);
        }
    }
    /* --- Генератор массива имен персонажей на основе массива из случайных чисел для свойства name объектов --- */
    let wizardName = []
    for (i = 0; wizardName.length < 4; i++) {
        wizardName.push(name[similarWizardArr[i]] + ' ' + familyName[similarWizardArr[i]])
    }
    return wizardName
}
randomWizard(randomName, randomFamilyName)
// console.log(randomWizard(randomName, randomFamilyName));

/* --- Функция возвращающая массив случайных цветов мантии волшебника --- */

let randomCoatColor = function(coatColor) {
    /* --- Генератор массива из случайных чисел от 0 до длины массива на входе --- */
    let lengthArrCoatColor = coatColor.length - 1
    let minIndexArrCoatColor = 0
    let maxIndexArrCoatColor = lengthArrCoatColor
    let coatColorWizardArr = []
    for (let i = 0; coatColorWizardArr.length < 4; i++) {
        randomNumber1 = Math.floor(Math.random() * (maxIndexArrCoatColor - minIndexArrCoatColor + 1)) + minIndexArrCoatColor
        if (!coatColorWizardArr.includes(randomNumber1)) {
            coatColorWizardArr.push(randomNumber1);
        }
    }
    /* --- Генератор массива случайных цветов мантии волшебника на основе массива из случайных чисел для свойства coatColor объектов --- */
    let randomCoatColorWizard = []
    for (i = 0; i <= 3; i++) {
        randomCoatColorWizard.push(coatColor[coatColorWizardArr[i]])
    }
    return randomCoatColorWizard
    
}
randomCoatColor(coatColor)
// console.log(randomCoatColor(coatColor)); 

/* --- Функция возвращающая массив случайных цветов цвета глаз волшебника --- */

let randomEyesColor = function(eyesColor) {
    /* --- Генератор массива из случайных чисел от 0 до длины массива на входе --- */
    let lengthArrEyesColor = eyesColor.length - 1
    let minIndexArrEyesColor = 0
    let maxIndexArrEyesColor = lengthArrEyesColor
    let eyesColorWizardArr = []
    for (let i = 0; eyesColorWizardArr.length < 4; i++) {
        randomNumber2 = Math.floor(Math.random() * (maxIndexArrEyesColor - minIndexArrEyesColor + 1)) + minIndexArrEyesColor
        if (!eyesColorWizardArr.includes(randomNumber2)) {
            eyesColorWizardArr.push(randomNumber2);
        }
    }
    /* --- Генератор массива случайных цветов мантии волшебника на основе массива из случайных чисел для свойства coatColor объектов --- */
    let randomEyesColorWizard = []
    for (i = 0; i <= 3; i++) {
        randomEyesColorWizard.push(eyesColor[eyesColorWizardArr[i]])
    }
    return randomEyesColorWizard
}
randomEyesColor(eyesColor)
// console.log(randomEyesColor(eyesColor));

/* --- Функция возвращающая массив случайных похожих волшебников --- */

let similarWizard = function(name, coatColor, eyesColor) {
    let similarWizard = [
        {
            name: name[0],
            coatColor: coatColor[0],
            eyesColor: eyesColor[0]
        },
        {
            name: name[1],
            coatColor: coatColor[1],
            eyesColor: eyesColor[1]
        },
        {
            name: name[2],
            coatColor: coatColor[2],
            eyesColor: eyesColor[2]
        },
        {
            name: name[3],
            coatColor: coatColor[3],
            eyesColor: eyesColor[3]
        },
        
    ]
    return similarWizard
}
similarWizard(randomWizard(randomName, randomFamilyName), randomCoatColor(coatColor), randomEyesColor(eyesColor))
console.log(similarWizard(randomWizard(randomName, randomFamilyName), randomCoatColor(coatColor), randomEyesColor(eyesColor)));

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