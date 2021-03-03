#! /usr/bin/env node
const data = require("./data.js")


chechDateFormat(date) {
  return !!date.match(/^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/)
}

try {
  let errors = [];
    if (typeof data.data.speed != "number") {
      errors.push(new Error("Invalid format for speed property - must be a number"));
    }
    if (typeof data.data.temperature != "number") {
        errors.push(new Error("Invalid format for temperature property - must be a number"));
      }
    if (typeof data.data.angle != "number" || data.data.angle > 180 || data.data.angle < 0) {
        errors.push(new Error("Invalid format for angle property - must be a number between [0, 180]"));
      }
	if (data.data.weight > 580 || data.data.weight < 530) {
		errors.push(new Error("Rocket's weight is out of range"));
    }
    if (typeof data.data.shape != "string") {
        errors.push(new Error("Invalid format for shape property - must be a string"));
    }
    if (typeof data.data.fuel != "string") {
        errors.push(new Error("Invalid format for fuel property - must be a string"));
    }
    if (typeof data.data.launchDate != "string" && checkDateFormat(data.data.launchDate)) {
        errors.push(new Error("Invalid format for date property - must be DD/MM/YYYY or dd-mm-yyyy or dd.mm.yyyy"));
    }
    if (errors.length > 0) {
      throw errors; 
    }
} catch (errors) {
    errors.map((e) => {
      console.log(e.name + ": " + e.message);
    })
    process.exit(1)
}
