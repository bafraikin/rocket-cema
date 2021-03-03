#! /usr/bin/env node
const data = require("./data.js")

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
    if (typeof data.data.date != "string") { // TODO - add regex ?
        errors.push(new Error("Invalid format for date property - must be DD/MM/YY hh:mm"));
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