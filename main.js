/*
 * Тест 1
 *
 * создайте функцию ageClassification(n), которая будет в качестве параметра принимать любые числа
 * и возвращать строку согласно следующим условиям, n:
 *           менее 0 – null
 *             0..24 – 'детский возраст'
 *           24+..44 – 'молодой возраст'
 *           44+..65 – 'средний возраст'
 *           65+..75 – 'пожилой возраст'
 *           75+..90 – 'старческий возраст'
 *          90+..122 – 'долгожители'
 *         более 122 – null
 *
 * При выполнении задания допускается использовать только тернарный оператор ?.
 * Использование операторов if, switch – запрещено.
 */
function ageClassification(num) {
  return num > 0
    ? num > 24
      ? num > 44
        ? num > 65
          ? num > 75
            ? num > 90
              ? num > 122
                ? null
                : 'долгожители'
              : 'старческий возраст'
            : 'пожилой возраст'
          : 'средний возраст'
        : 'молодой возраст'
      : 'детский возраст'
    : null;
}

console.log('-1 :', ageClassification(-1)); // -1 : null

console.log('5 :', ageClassification(5)); // 5 : детский возраст

console.log('34 :', ageClassification(34)); // 34 : молодой возраст

console.log('50 :', ageClassification(50)); // 50 : средний возраст

console.log('65.1 :', ageClassification(65.1)); // 65.1 : пожилой возраст

console.log('80 :', ageClassification(80)); // 80 : старческий возраст

console.log('110 :', ageClassification(110)); // 110 : долгожители

console.log('130 :', ageClassification(130)); // 130 : null

/*
 * Блок тестирования, везде должны быть true:
 * console.log('    -1 :', ageClassification(-1) === null); // -1 : null
 * console.log('     1 :', ageClassification(1) === 'детский возраст'); // 1 : детский возраст
 * console.log('    24 :', ageClassification(24) === 'детский возраст'); // 24 : детский возраст
 * console.log(' 24.01 :', ageClassification(24.01) === 'молодой возраст'); // 24.01 : молодой возраст
 * console.log('    44 :', ageClassification(44) === 'молодой возраст'); // 44 : молодой возраст
 * console.log(' 44.01 :', ageClassification(44.01) === 'средний возраст'); // 44.01 : средний возраст
 * console.log('    65 :', ageClassification(65) === 'средний возраст'); // 65 : средний возраст
 * console.log('  65.1 :', ageClassification(65.1) === 'пожилой возраст'); // 65.1 : пожилой возраст
 * console.log('    75 :', ageClassification(75) === 'пожилой возраст'); // 75 : пожилой возраст
 * console.log(' 75.01 :', ageClassification(75.01) === 'старческий возраст'); // 75.01 : старческий возраст
 * console.log('    90 :', ageClassification(90) === 'старческий возраст'); // 90 : старческий возраст
 * console.log(' 90.01 :', ageClassification(90.01) === 'долгожители'); // 90.01 : долгожители
 * console.log('   122 :', ageClassification(122) === 'долгожители'); // 122 : долгожители
 * console.log('122.01 :', ageClassification(122.01) === null); // 122.01 : null
 * console.log('   150 :', ageClassification(150) === null); // 150 : null
 */

/*Тест 2*/

let userObj = {
  age: 20,
  firstName: 'Name',
  lastName: 'Last',
  fullName() {
    return `${userObj.firstName} ${userObj.lastName}`;
  }
};

/*Тест 3*/

function mainFunc(a, b, cb) {
  if (cb && typeof cb === 'function') return cb(a, b);

  return false;
}

function cbAdd(a, b) {
  return a + b;
}

/*Тест 4*/

function weekFn(cond) {
  let str = '';

  switch (cond) {
    case 1:
      str = 'Понедельник';
      break;
    case 2:
      str = 'Вторник';
      break;
    case 3:
      str = 'Среда';
      break;
    case 4:
      str = 'Четверг';
      break;
    case 5:
      str = 'Пятница';
      break;
    case 6:
      str = 'Суббота';
      break;
    case 7:
      str = 'Воскресенье';
      break;
    default:
      str = null;
  }

  return str;
}