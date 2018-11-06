const { entry } = require('./entry');
const {
    serverConfig: { port }
} = require('./../config');

const afterpack = async () => {
    Object.entries(entry).forEach(([k, v]) => {
        console.log('路由：');
        console.log(`http://localhost:${port}/${k}.html`);
    });
};

module.exports = afterpack;
