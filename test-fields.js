#! /usr/bin/env node
const data = require("./data.js")

try {
  let errors = [];
    if (!data.data.speed) {
      errors.push(new Error("Missing speed property"));
    }
    if (!data.data.date) {
      errors.push(new Error("Missing date property"));
    }
    if (!data.data.temperature) {
      errors.push(new Error("Missing temperature property"));
    }
    if (!data.data.angle) {
      errors.push(new Error("Missing angle property"));
    }
    if (!data.data.weight) {
      errors.push(new Error("Missing wheight property"));
    }
    if (!data.data.shape) {
      errors.push(new Error("Missing shape property"));
    }
    if (!data.data.fuel) {
      errors.push(new Error("Missing fuel property"));
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