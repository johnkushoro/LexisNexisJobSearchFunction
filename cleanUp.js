
const rimraf = require('rimraf');
const path = require('path');

const directories = [
    'cypress/screenshots',
    'cypress/videos'
];

directories.forEach(dir => {
    rimraf(path.join(dir, '*'), (err) => {
        if (err) {
            console.error(`Error deleting files in directory ${dir}:`, err);
        } else {
            console.log(`Deleted all files in directory: ${dir}`);
        }
    });
});

console.log('Old Cypress files deleted.');
