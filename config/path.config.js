const root = process.cwd();
const { resolve } = require('path');

module.exports = {
    src: resolve(root, 'src'),
    pages: resolve(root, 'src/pages'),
    global: resolve(root, 'src/global.js'),
    temp: resolve(root, '.temp'),
    dll: resolve(root, '.temp/dll'),
    template: resolve(root, 'webpack/template.ejs'),
    prepackPath: resolve(root, '.temp/prepack'),
    static: resolve(root, 'static'),
    nodeModule: resolve(root, 'node_modules'),
    dist: resolve(root, 'dist'),
    favicon: resolve(root, 'favicon.ico'),
    zoo: resolve(root, 'zoo')
};
