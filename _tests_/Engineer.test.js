const { test, expect } = require('@jest/globals');
const Engineer = require('./lib/Engineer');

test('creates engineer object',() => {
    const employee = new Engineer('Nancy', 43, 'nancy@gmail.com', 'nance');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.github).toEqual(expect.any(String));
});

test('get employee role',() => {
    const employee = new Engineer('Nancy', 43, 'nancy@gmail.com', 'nance');
    expect(employee.getRole()).toEqual('Engineer');
});