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
let max = 8
let similarWizardArr = []
for (let i = 0; i <= 3; i++) {
    randomNumber = Math.floor(Math.random() * (max - min + 1)) + min
    if (similarWizardArr.indexOf(randomNumber)) {
        similarWizardArr.push(randomNumber);
    }
}
console.log(similarWizardArr);

/* ------ Генератор свойства name объектов ----------- */




let similarWizard = [
    {
        name: '',
        coatColor: '',
        eyesColor: '',

    }



]