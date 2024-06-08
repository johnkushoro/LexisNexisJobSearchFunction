import { Before, After } from "@badeball/cypress-cucumber-preprocessor";

let startTime, finishTime;

function formatDateTime(date) {
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
}

function loadConfig() {
    try {
        const config = {}; // Replace with actual configuration loading logic
        cy.log(`Configuration loaded: ${JSON.stringify(config)}`);
        return config;
    } catch (error) {
        cy.log(`Failed to load configuration: ${error.message}`);
        throw error;
    }
}

function calculateDuration(start, end) {
    const diffInSeconds = Math.floor((end - start) / 1000);
    const hours = Math.floor(diffInSeconds / 3600);
    const minutes = Math.floor((diffInSeconds % 3600) / 60);
    const seconds = diffInSeconds % 60;

    const durationParts = [];
    if (hours > 0) durationParts.push(`${hours} ${hours > 1 ? 'hours' : 'hour'}`);
    if (minutes > 0) durationParts.push(`${minutes} ${minutes > 1 ? 'minutes' : 'minute'}`);
    if (seconds > 0 || (!hours && !minutes)) durationParts.push(`${seconds} ${seconds > 1 ? 'seconds' : 'second'}`);

    return durationParts.join(', ');
}

function clearEnvironment() {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.log("Environment setup completed successfully.");
}

Before(() => {
    try {
        startTime = new Date();
        cy.log(`Test execution started at: ${formatDateTime(startTime)}`);
        const config = loadConfig();
        clearEnvironment();
    } catch (error) {
        cy.log(`Error during setup: ${error.message}`);
        throw error;
    }
});

After(() => {
    try {
        finishTime = new Date();
        cy.log(`Test execution finished at: ${formatDateTime(finishTime)}`);
        const duration = calculateDuration(startTime, finishTime);
        cy.log(`Total Test Time: ${duration}`);
        cy.log("Test teardown completed successfully.");
    } catch (error) {
        cy.log(`Error during teardown: ${error.message}`);
        throw error;
    }
});
