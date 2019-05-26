import Grid from '@app/client/containers/grid';
import * as React from 'react';
import { hot } from 'react-hot-loader';

class App extends React.Component {
    public render() {
        return (
            <>
                <h1>Sieve of Eratosthenes Demo</h1>
                <Grid />
            </>
        );
    }
}

export default hot(module)(App);
