const fs = require('fs');
const image = fs.readFileSync("cp.jpg").toString("base64");
const AipOcrClient = require("baidu-aip-sdk").ocr;
const client = new AipOcrClient('17712434','QG4LQnCuBi3BRzE97n6S5kGX','11tU0N0mc1EnWTmM3GERcTG9rO0OF2LN');
const options = {};
options["multi_detect"] = "true";
client
  .licensePlate(image,options)
  .then(function(result){
      console.log(result);
  })