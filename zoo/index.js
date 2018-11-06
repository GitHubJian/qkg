import components from './components';
import storage from './utils/storage';
import cookie from './utils/cookie';
import request from './utils/request-extra';
import dom from './utils/dom';

const install = (Vue, options = {}) => {
    components.forEach(component => {
        Vue.component(component.name, component);
    });
    const args = { prefix: options.urlPrefix };

    Vue.prototype.$cookie = cookie;
    Vue.prototype.$storage = storage;
    Vue.prototype.$get = request(args).get;
    Vue.prototype.$post = request(args).post;
    Vue.prototype.$dom = dom;
};

export default {
    install
};
