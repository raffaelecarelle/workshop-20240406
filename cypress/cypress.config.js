module.exports = {
    e2e: {
        baseUrl: 'http://127.0.0.1:8000',
        experimentalStudio: true,
        setupNodeEvents(on, config) {
            on('task', {
                resetDB() {
                    return new Promise( (resolve, reject) => {
                        const util = require('util');
                        const exec = util.promisify(require('child_process').exec);

                        return resolve(exec(`cp /var/www/data/original.database.sqlite /var/www/data/database.sqlite`));
                    })
                },
            });
        },
    },
};
