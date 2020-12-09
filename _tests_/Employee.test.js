const Employee = require('../lib/Employee');

test('creates employee object',() => {
    const employee = new Employee('Nancy', 7, 'nancy@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test('gets employee role',() => {
    const employee = new Employee('Nancy', 7, 'nancy@gmail.com');
    expect(employee.getRole()).toEqual('Employee');
});