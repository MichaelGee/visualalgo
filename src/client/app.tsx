import Grid from '@app/client/containers/grid';
import Axios from 'axios';
import * as React from 'react';
import { hot } from 'react-hot-loader';
import { debounce } from 'ts-debounce';

interface IState {
    limitNumber: number;
    grids: number[];
    primes: number[];
    medians: number[];
}

class App extends React.Component<{}, IState> {
    public state: IState = {
        limitNumber: 0,
        grids: [],
        primes: [],
        medians: [],
    };

    public render() {
        const { grids, limitNumber, medians, primes } = this.state;

        return (
            <>
                <h1>Sieve of Eratosthenes</h1>
                <form>
                    <input
                        type="number"
                        name="limitNumber"
                        value={limitNumber}
                        onChange={this.handleNumberChange}
                    />
                </form>

                <Grid grids={grids} medians={medians} primes={primes}  />
            </>
        );
    }

    private fetchPrimeAndMedian = async (limitNumber) => {
        const { data: { median, primes } } = await Axios.get(`/prime/${limitNumber}/median`);
        return [ median, primes ];
    };

    private handleNumberChange = async (e: React.FormEvent<HTMLInputElement>) => {
        const limitNumber = Number(e.currentTarget.value);

        if (limitNumber < 3) {
            return this.setState({
                limitNumber
            });
        }

        const grids = [];

        for (let i = 0; i < limitNumber; i++) {
            grids.push(i + 1);
        }

        const [median, primes] = await this.fetchPrimeAndMedian(limitNumber);

        this.setState({
            limitNumber,
            grids,
            primes,
            medians: median,
        });
    }
}

export default hot(module)(App);
