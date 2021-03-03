#! /usr/bin/env node
const data = require("./data.js")

try {
  let errors = [];
    if (!data.data.speed) {
      errors.push(new Error("Missing rocket's speed property"));
    }
    if (!data.data.date) {
      errors.push(new Error("Missing rocket's date property"));
    }
    if (!data.data.temperature) {
      errors.push(new Error("Missing rocket's temperature property"));
    }
    if (!data.data.angle) {
      errors.push(new Error("Missing rocket's angle property"));
    }
    if (!data.data.weight) {
      errors.push(new Error("Missing rocket's weight property"));
    }
    if (!data.data.shape) {
      errors.push(new Error("Missing rocket's shape property"));
    }
    if (!data.data.fuel) {
      errors.push(new Error("Missing rocket's fuel property"));
    }
    if (!data.data.launchDate) {
      errors.push(new Error("Missing a date to launch the rocket"));
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
