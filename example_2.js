const fs = require('fs');

function saveFile(fileName, data) {
    fs.appendFile(fileName, data, (err) => {

    })
}