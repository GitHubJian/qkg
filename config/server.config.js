process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const { NODE_ENV, PORT } = process.env;
const [isDevlopment, isProduction] = [
    NODE_ENV == 'development',
    NODE_ENV == 'production'
];

module.exports = {
    NODE_ENV,
    isDevlopment,
    isProduction,
    port: PORT || 8417
};
