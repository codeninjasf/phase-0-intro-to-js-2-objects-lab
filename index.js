
const employee = {
    name:"Jack",
    streetAddress:"55 Sansome Avenue"
}
   

function updateEmployeeWithKeyAndValue(employee){
    return {name: "Sam", streetAddress: "11 Broadway"};
}
 
function destructivelyUpdateEmployeeWithKeyAndValue(employee){
    employee.streetAddress = "12 Broadway"
    return (employee)
}

function deleteFromEmployeeByKey(employee, key){
    const newEmployee = {...employee};
    delete newEmployee.name;
    return (newEmployee)
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee.name;
    console.log(employee);
    return (employee)

}




