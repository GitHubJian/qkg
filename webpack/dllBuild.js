const webpackCompiler = require('./compiler');
const { webpackConfig } = require('./webpack.dll.config');

const dllBuild = async () => {
    if (Object.keys(webpackConfig.entry).length > 0) {
        await webpackCompiler(webpackConfig);
    }

    console.log('---');
    console.log('DLL 打包完成');
    console.log('---');
};

dllBuild();
