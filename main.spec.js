describe('Проверка функции ageClassification()', () => {

  it('Проверим, что возраст < 0', () => {
    const age = 0;

    expect(ageClassification(age)).toBeNull();
  });

  it('Проверим, что возраст < 24', () => {
    const age = 18;

    expect(ageClassification(age)).toContain('детский возраст');
  });

  it('Проверим, что возраст < 44', () => {
    const age = 34;

    expect(ageClassification(age)).toContain('молодой возраст');
  });

  it('Проверим, что возраст < 65', () => {
    const age = 57;

    expect(ageClassification(age)).toContain('средний возраст');
  });

  it('Проверим, что возраст < 75', () => {
    const age = 70;

    expect(ageClassification(age)).toContain('пожилой возраст');
  });

  it('Проверим, что возраст < 90', () => {
    const age = 89;

    expect(ageClassification(age)).toContain('старческий возраст');
  });

  it('Проверим, что возраст < 122', () => {
    const age = 111;

    expect(ageClassification(age)).toContain('долгожители');
  });


});


describe('Объект userObj', function () {

  it('Проверим, что объект userObj имеет обязательные поля возраст, имя, фамилию', function () {

    obj = {
      age: 20,
      firstName: 'Name',
      lastName: 'Last'
    }

    expect(obj).toEqual({ "age": 20, firstName: 'Name', lastName: 'Last' });
  });
});


describe('Функция mainFunc()', function () {

  it('Проверим что 2 + 3 = 5', function () {

    a = 2;
    b = 3;
    cb = cbAdd(a, b)

    expect(mainFunc(a, b, cbAdd)).toBe(5);
  });
});


describe('Функция weekFn()', function () {

  it('Проверим что case 7 соответствует Суббота', function () {

    let cond = 6

    expect(weekFn(cond)).toEqual('Суббота');
  });

  it('Проверим что case 2 соответствует Вторник', function () {

    let cond = 2

    expect(weekFn(cond)).toEqual('Вторник');
  });
});