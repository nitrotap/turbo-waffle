console.log('You can do this!')

// const data = require('./20230120-oscar-039-in-network.json')
const data = require('./co801!colorado-hmo.json')

// console.log(data);

// console.log(data.reporting_entity_name);

// console.log(data.in_network[0].name);
// console.log(data.in_network[0].billing_code);
// console.log(data.in_network[0].description);
// console.log(data.in_network[0].negotiated_rates[0].negotiated_prices[0].negotiated_rate);
// console.log(data.in_network[0].negotiated_rates[0].provider_references);



// create an array of objects with the billing code as the key. the negotiated_rate as an array of values. the name as an array of values. if the name already exists, then push the negotiated_rate and the billing_code into the array of values
var arr = [];
// create an array of objects with the billing code as the key. the negotiated_rate as an array of values. the name as an array of values. if the name already exists, then push the negotiated_rate and the billing_code into the array of values
for (var i = 0; i < data.in_network.length; i++) {
    var found = false;
    for (var j = 0; j < arr.length; j++) {
        if (arr[j].billing_code === data.in_network[i].billing_code) {
            arr[j].negotiated_rates.push(data.in_network[i].negotiated_rates[0].negotiated_prices[0].negotiated_rate);
            arr[j].name.push(data.in_network[i].name);
            found = true;
            arr[j].npi.push(data.in_network[i].negotiated_rates[0].provider_references)
        }
    }
    if (!found) {
        arr.push({
            billing_code: data.in_network[i].billing_code,
            name: data.in_network[i].name,
            negotiated_rates: [data.in_network[i].negotiated_rates[0].negotiated_prices[0].negotiated_rate],
            npi: data.in_network[i].negotiated_rates[0].provider_references
        });
    }
}
console.log(arr);


const fs = require('fs');
fs.writeFile('output.json', JSON.stringify(arr), (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
});




