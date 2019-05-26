import App from './app';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {JssProvider} from 'react-jss';

const render = (Component) => {
    ReactDOM.hydrate(<Component />, document.getElementById('app'));
};

if (module.hot) {
    module.hot.accept('./app', () => {
        render(require('./app').default);
    });
}

if (window) {
    window.onload = () => {
        const ssStyles = document.getElementById('server-side-styles');
        ssStyles.parentNode.removeChild(ssStyles);
        render(App);
    };
}
