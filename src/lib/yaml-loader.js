const yaml = require('js-yaml');
const fs = require('fs');
const path = require('path');

function yamlLoader(rootPath) {
    try {
        return yaml.safeLoad(fs.readFileSync(path.resolve(__dirname, '../..', rootPath)));
    }
    catch(e) {
        console.warn(e.toString());
        return {};
    }
}

module.exports = yamlLoader;