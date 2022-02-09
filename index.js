// Write your solution in this file!
const employee= {
    name: "Allison", 
    streetAddress: "123 Street Houston, TX 77070",
}; 


//updateEmployeeWithKeyAndValue(employee, key, value)
function updateEmployeeWithKeyAndValue(employee, key, value){
    return {
        ...employee, 
        [key]: value,
    };
};


//destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value)
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key]= value;
    return employee;
};


//deleteFromEmployeeByKey(employee, key)
function deleteFromEmployeeByKey(employee, key){
const newEmployee = {...employee}; 
delete newEmployee[key]; 
return newEmployee; 
};


//destructivelyDeleteFromEmployeeByKey(employee, key)

function destructivelyDeleteFromEmployeeByKey(employee, key){
delete employee[key]; 
return employee; 
};