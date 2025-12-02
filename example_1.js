//import fs module from node
const fs = require('fs');

const saveUser = (data, callback) => {
    const dataString = JSON.stringify(data, null, 2)
    fs.appendFile('users.txt', dataString, (err) => {
        if(err) {
            console.log(`Failed to save data to file because `, err)
            callback(err, null);
            return;
        }
        console.log(`Successfully saved file to users.txt`);
        callback(null, data)
    })
}

const user = {
    name: "Esther",
    id: 1,
    occupation: "Manager"
}

saveUser(user, (error, success) => {
    if(error) {
        console.log(`Failed to save data to file because `, error)
    }

    if(success) {
        console.log(`Successfully saved user : ${success.name}`)
    }
});

console.log('Saving User ...')