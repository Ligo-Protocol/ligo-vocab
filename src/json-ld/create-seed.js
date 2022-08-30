const { randomBytes } = require("crypto");
const { toString } = require("uint8arrays/to-string");

const buf = randomBytes(32);
console.log("Random Buffer: ", toString(buf, "base16"));
