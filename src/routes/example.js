const server = require('../server');

server.route({method: 'GET', path: '/',
    handler(req, h) {
        return {foo: 'bar'};
    }
});
