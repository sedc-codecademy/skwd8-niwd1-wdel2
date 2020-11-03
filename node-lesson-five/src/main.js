const database = require('./modules/database');

(async () => {
    console.info('Starting the app...');
    console.info('Connecting to the DB...');
    await database.connect();
    console.info('Connected to the DB.');
})();