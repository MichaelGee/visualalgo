import Grid from '@app/client/containers/Grid';
import Axios from 'axios';
import * as React from 'react';
import { hot } from 'react-hot-loader';
import withStyles, { WithStyles } from 'react-jss';

interface IState {
    limitNumber: number;
    grids: number[];
    primes: number[];
    medians: number[];
}

const styles = {
    container: {
        width: '80%',
        padding: '20px',
        maxWidth: '630px',
    },
    controlContainer: {
        padding: '10px 0px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '30px 0px',
        borderTop: '1px solid rgba(0,0,0, 0.2);',
        borderBottom: '1px solid rgba(0,0,0, 0.2);',
    },
    numberInput: {
        width: '300px',
        height: '38px',
        paddingLeft: '10px',
        borderRadius: '10px',
        fontSize: '1.2em',
        border: '2px solid #f1f1f1;',
    },
    primeTag: {
        width: '80px',
        height: '25px',
        backgroundColor: '#54a0ff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        fontSize: '0.8em',
        fontWeight: 'bold',
        borderRadius: '15px',
    },
    medianTag: {
        width: '80px',
        height: '25px',
        backgroundColor: '#10ac84',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        fontSize: '0.8em',
        fontWeight: 'bold',
        borderRadius: '15px',
    },
    numberInputLabel: {
        fontSize: '0.8em',
        display: 'block',
    },
    numbersDisplay: {
        display: 'flex',
        flexDirection: 'column',
        margin: '10px 0px',
    },
};

type Props = WithStyles<typeof styles>;

class App extends React.Component<Props, IState> {
    public state: IState = {
        limitNumber: 0,
        grids: [],
        primes: [],
        medians: [],
    };

    public render() {
        const { grids, limitNumber, medians, primes } = this.state;
        const { classes } = this.props;

        return (
            <>
                <div className={classes.container}>
                    <h2>Sieve of Eratosthenes</h2>
                    <p>In mathematics, the Sieve of Eratosthenes is a simple, ancient algorithm for <br /> finding all prime numbers up to any given limit.</p>
                    <div className={classes.controlContainer}>
                        <form>
                            <label htmlFor="limitNumber" className={classes.numberInputLabel}>Enter a number</label>
                            <br />
                            <input
                                type="number"
                                id="limitNumber"
                                name="limitNumber"
                                value={limitNumber}
                                min={0}
                                className={classes.numberInput}
                                onChange={this.handleNumberChange}
                            />
                        </form>
                        <div className={classes.primeTag}>Prime</div>
                        <div className={classes.medianTag}>Median</div>
                    </div>
                    <div className={classes.numbersDisplay}>
                        <pre>Primes: {JSON.stringify(primes)}</pre>
                        <pre>Medians: {JSON.stringify(medians)}</pre>
                    </div>
                    <Grid grids={grids} medians={medians} primes={primes}  />
                </div>
            </>
        );
    }

    private fetchPrimeAndMedian = async (limitNumber) => {
        const { data: { median, primes } } = await Axios.get(`/prime/${limitNumber}/median`);
        return [ median, primes ];
    };

    private handleNumberChange = async (e: React.FormEvent<HTMLInputElement>) => {
        const limitNumber = Number(e.currentTarget.value);

        const grids = [];

        for (let i = 0; i < limitNumber; i++) {
            grids.push(i + 1);
        }

        if (limitNumber < 3) {
            return this.setState({
                limitNumber,
                grids: [],
                primes: [],
                medians: [],
            });
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

export default hot(module)(withStyles(styles)(App));
