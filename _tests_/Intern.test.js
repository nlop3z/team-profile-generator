const { test } = require('@jest/globals');
const Intern = require('./lib/Intern');
const { TestScheduler } = require('jest');

test('creates intern object',() => {
    const employee = new Intern('Nancy', 43, 'nancy@gmail.com', 'University of Texas at Austin');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.school).toEqual(expect.any(String));
});

test('get employee role',() => {
    const employee = new Intern('Nancy', 43, 'nancy@gmail.com', 'University of Texas at Austin');
    expect(employee.getRole()).toEqual('Intern');
});
