import GridItem from '@app/client/components/GridItem';
import * as React from 'react';
import { hot } from 'react-hot-loader';
import withStyles, { WithStyles } from 'react-jss';

const styles = {
    grids: {
        display: 'flex',
        width: '300px',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        lineHeight: '30px',
        padding: 0,
        margin: 0,
    },
};

interface IProps {
    grids: number[];
    primes: number[];
    medians: number[];
}

type Props = IProps & WithStyles<typeof styles>;

class Grid extends React.PureComponent<Props> {
    public render() {
        const { grids, classes, primes, medians } = this.props;

        return (
            <div className={classes.grids}>
                {
                    grids.length > 0 ? grids.map((num, index) => (
                        <GridItem
                            key={`grid-${index}`}
                            isPrime={primes.includes(num)}
                            isMedian={medians.includes(num)}
                        >
                        {num}
                        </GridItem>
                        )) : null
                }
            </div>
        );
    }
}

export default hot(module)(withStyles(styles)(Grid)) as React.ComponentType<IProps>;
