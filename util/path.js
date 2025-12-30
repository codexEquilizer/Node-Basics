const path = require("path");

// Provides the entry path as root of the application
module.exports = path.dirname(require.main.filename);
