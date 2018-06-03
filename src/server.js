const Hapi = require('hapi');
const fs = require('fs');
const path = require('path');
const config = require('./config');

const server = Hapi.server({port: config.getValue('server.port', 23364), host: '0.0.0.0'});

async function init() {
    await server.start();
    console.log(`Running at ${server.info.uri}`);
}

init().then(() => {
    module.exports = server;
    fs.readdirSync(path.resolve(__dirname, 'routes')).forEach((name) => {
        require(path.resolve(__dirname, 'routes', name));
    });
}, (e) => {
    console.error(e);
});
