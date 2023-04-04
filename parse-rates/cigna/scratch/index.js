console.log('You can do this!')
const data = require('./20230120-oscar-039-in-network.json')

console.log(data.reporting_entity_name);

console.log(data.in_network[0].name);
console.log(data.in_network[0].billing_code);
console.log(data.in_network[0].description);
console.log(data.in_network[0].negotiated_rates[0].negotiated_prices[0].negotiated_rate);
console.log(data.in_network[0].negotiated_rates[0].provider_groups[0].npi);


// create an array of objects with the name as the key. the negotiated_rate as an array of values. the billing code as an array of values. if the name already exists, then push the negotiated_rate and the billing_code into the array of values
var arr = [];
for (var i = 0; i < data.in_network.length; i++) {
    var found = false;
    for (var j = 0; j < arr.length; j++) {
        if (arr[j].name == data.in_network[i].name) {
            arr[j].negotiated_rates.push(data.in_network[i].negotiated_rates[0].negotiated_prices[0].negotiated_rate);
            arr[j].billing_code.push(data.in_network[i].billing_code);
            found = true;
        }
    }
    if (!found) {
        arr.push({
            name: data.in_network[i].name,
            billing_code: [data.in_network[i].billing_code],
            negotiated_rates: [data.in_network[i].negotiated_rates[0].negotiated_prices[0].negotiated_rate]
        });
    }
}
console.log(arr);

const fs = require('fs');
fs.writeFile('output.json', JSON.stringify(arr), (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
});





// var arr = [];
// for (var i = 0; i < data.in_network.length; i++) {
//     var found = false;
//     for (var j = 0; j < arr.length; j++) {
//         if (arr[j].name == data.in_network[i].name) {
//             arr[j].negotiated_rates.push(data.in_network[i].negotiated_rates[0].negotiated_prices[0].negotiated_rate);
//             if (arr[j].billing_code.indexOf(data.in_network[i].billing_code) == -1) {
//                 arr[j].billing_code.push(data.in_network[i].billing_code);
//             }
//             found = true;
//         }
//     }
//     if (!found) {
//         arr.push({
//             name: data.in_network[i].name,
//             billing_code: [data.in_network[i].billing_code],
//             negotiated_rates: [data.in_network[i].negotiated_rates[0].negotiated_prices[0].negotiated_rate]
//         });
//     }
// }
// console.log(arr);







// var arr = [];
// for (var i = 0; i < data.in_network.length; i++) {
//     var found = false;
//     for (var j = 0; j < arr.length; j++) {
//         if (arr[j].name == data.in_network[i].name) {
//             arr[j].negotiated_rates.push(data.in_network[i].negotiated_rates[0].negotiated_prices[0].negotiated_rate);
//             found = true;
//         }
//     }
//     if (!found) {
//         arr.push({
//             name: data.in_network[i].name,
//             billing_code: data.in_network[i].billing_code,
//             negotiated_rates: [data.in_network[i].negotiated_rates[0].negotiated_prices[0].negotiated_rate]
//         });
//     }
// }
// console.log(arr);





// create an array of objects with the name as the key and the negotiated_rate as an array of values. if the name already exists, then push the negotiated_rate into the array of values
// var arr = [];
// for (var i = 0; i < data.in_network.length; i++) {
//     var found = false;
//     for (var j = 0; j < arr.length; j++) {
//         if (arr[j].name == data.in_network[i].name) {
//             arr[j].negotiated_rates.push(data.in_network[i].negotiated_rates[0].negotiated_prices[0].negotiated_rate);
//             found = true;
//         }
//     }
//     if (!found) {
//         arr.push({
//             name: data.in_network[i].name,
//             negotiated_rates: [data.in_network[i].negotiated_rates[0].negotiated_prices[0].negotiated_rate]
//         });
//     }
// }
// console.log(arr);



