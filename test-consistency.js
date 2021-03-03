#! /usr/bin/env node
const data = require("./data.js")

try {
  let errors = [];
	if (![1, 2, 3, 6].includes(data.data.speed)) {
		errors.push(new Error("Speed does not match any mode (1, 2, 3 or 6 are available)"));
	}
	if (data.data.angle != data.asteroidData.hardness * 2) {
		errors.push(new Error("Rocket's angle does not fit for this asteroid hardness"));
	}
	if (data.data.weight != data.asteroidData.weight * 0.054) {
		errors.push(new Error("Rocket's weight is not OK according to asteroid's weight"));
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
