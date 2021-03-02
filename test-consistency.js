#! /usr/bin/env node
const data = require("./data.js")

try {
  let errors = [];
    if (!data.data.speed) {
      errors.push(new Error("Missing speed property"));
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