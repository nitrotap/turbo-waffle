console.log('You can do this!')

const data = require('./20230120-oscar-039-in-network.json')
// console.log(data);

// console.log(data.reporting_entity_name);

// console.log(data.in_network[0].name);
// console.log(data.in_network[0].billing_code);
// console.log(data.in_network[0].description);
// console.log(data.in_network[0].negotiated_rates[0].negotiated_prices[0].negotiated_rate);
// console.log(data.in_network[0].negotiated_rates[0].provider_groups[0].npi);


// create an array of objects with the name as the key. the negotiated_rate as an array of values. the billing code as an array of values. if the name already exists, then push the negotiated_rate and the billing_code into the array of values

const in_network_object = {};
for (i = 0; i < data.in_network.length; i++) {
    in_network_object[data.in_network[i].name] = {
        "billing_code": data.in_network[i].billing_code,
        "negotiated_rate": data.in_network[i].negotiated_rates[0].negotiated_prices[0].negotiated_rate,
        "npi": data.in_network[i].negotiated_rates[0].provider_groups[0].npi,
        "description": data.in_network[i].description
    }
}
console.log(in_network_object);









const fs = require('fs');
fs.writeFile('output.json', JSON.stringify(in_network_object), (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
});




