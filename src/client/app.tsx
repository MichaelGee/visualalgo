import { hot } from 'react-hot-loader';

import * as React from 'react';

class App extends React.Component {
    public render() {
        return (
            <h1>Sieve of Eratosthenes Demo</h1>
        );
    }
}

export default hot(module)(App);
