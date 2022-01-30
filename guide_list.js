console.log("imported");
const fs = require('fs');
let request;
fs.readFile("tourSchedule.json", (err, data) => {
    if (err)
      return;
    console.log(JSON.parse(data))
    request = JSON.parse(data);
  })
console.log(request);