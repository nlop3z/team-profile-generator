const { test, expect } = require('@jest/globals');
const Manager = require('./lib/Manager');

test('creates manager object',() => {
    const employee = new Manager('Nancy', 43, 'nancy@gmail.com',1234);

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.officeNumber).toEqual(expect.any(Number));
});

test('gets employee role',() => {
    const employee = new Manager('Nancy', 43, 'nancy@gmail.com',1234);
    expect(employee.getRole()).toEqual('Manager');
});