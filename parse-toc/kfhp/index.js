const toc_data = require('./2023-04-01_KFHP-CO_index.json');

const data = toc_data;
// if allowed_amount_file contains 'empty' then there is no allowed amount file, else print the plan_name, plan_id_type, plan_id, plan_market_type, and location
// name array to hold the plan names
// location for each array of plan names
const planObj = [];
// console.log(data)
// console.log(data.reporting_structure.length)

// console.log(data.reporting_structure[0].reporting_plans)
// 
const arr = Object.values(data.reporting_structure[0].reporting_plans)


let planNames = [];
let obj = {};

arr.map((item, index) => {
    console.log(item.PLAN_NM)

    planNames.push(item.PLAN_NM);
})

obj.planNames = planNames;
obj.location = data.reporting_structure[0].in_network_files[0].location;
planObj.push(obj);


console.log(obj)

const fs = require('fs');
// write planObj to a file
fs.writeFile('planObj.json', JSON.stringify(planObj), (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
}
);


