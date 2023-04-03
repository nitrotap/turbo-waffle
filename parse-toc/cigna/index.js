/* Parse the table of contents json file and return plan names and corresponding location */


/* TODO: update the file path to the table of contents json file */
const toc_data = require('./2023-03-01_cigna-health-life-insurance-company_index.json');

const data = toc_data;
// if allowed_amount_file contains 'empty' then there is no allowed amount file, else print the plan_name, plan_id_type, plan_id, plan_market_type, and location
// name array to hold the plan names
// location for each array of plan names
const planObj = [];

data.reporting_structure.forEach(element => {
    if (element.in_network_files) {
        // console.log(element.reporting_plans);

        // create an object of plans, with an array of names and a location, and push to the object
        let obj = {};
        let planNames = [];
        for (let i = 0; i < element.reporting_plans.length; i++) {
            // console.log(element.reporting_plans[i].plan_name);
            planNames.push(element.reporting_plans[i].plan_name);
        }
        // console.log(element.in_network_files[0].location)
        obj.planNames = planNames;
        obj.location = element.in_network_files[0].location;
        planObj.push(obj);
    }

});

// console.log(planObj);


const fs = require('fs');
// write planObj to a file
fs.writeFile('planObj.json', JSON.stringify(planObj), (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
}
);


