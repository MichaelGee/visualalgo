import App from './app';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

const render = (Component) => {
    ReactDOM.hydrate(<Component />, document.getElementById('app'));
};

if (module.hot) {
    module.hot.accept('./app', () => {
        render(require('./app').default);
    });
}

if (window) {
    window.onload = () => render(App);
}
