module.exports = require("node:util").promisify(
  require("node:child_process").exec,
);
