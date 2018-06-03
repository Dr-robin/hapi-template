const yamlLoader = require('./lib/yaml-loader');

const config = yamlLoader('config.yaml');

module.exports = {
    getValue(name, defaultValue = undefined) {
        const argc = name.split('.');
        let resultValue = config;
        return argc.every((prop) => {
            resultValue = resultValue[prop];
            return resultValue !== undefined;
        }) ? resultValue : defaultValue;
    }
};