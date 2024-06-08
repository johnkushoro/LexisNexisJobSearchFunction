const dotenv = require("dotenv");

// Adjust the path to your .env file
dotenv.config({ path: "/Applications/AutomationSuite/LexiNexAutomation/.env" });

module.exports = {
    ...process.env, // Load all environment variables from process.env
};


