const fs = require('fs');


fs.readFile('./20230120-oscar-039-in-network.json', 'utf8', (err, data) => {
    // console.log('You can do this!')
    const json = JSON.parse(data);
    console.log(json)
});
