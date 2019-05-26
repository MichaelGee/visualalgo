import * as React from 'react';
import { hot } from 'react-hot-loader';
import withStyles, { WithStyles } from 'react-jss';

const styles = {
    gridItem: {
        border: '2px solid #576574',
        height: '50px',
        width: '50px',
        margin: '5px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    gridItemPrime: {
        border: '2px solid #54a0ff',
    },
    gridItemMedian: {
        border: '2px solid #10ac84',
    },
};

interface IProps {
    children: React.ReactNode;
    isPrime: boolean;
    isMedian: boolean;
}

type Props = IProps & WithStyles<typeof styles>;

const GridItem = ({ classes, isPrime, isMedian, children }: Props) => (
    <div className={`${classes.gridItem} ${isPrime ? classes.gridItemPrime : ''} ${isMedian ? classes.gridItemMedian : ''}`}>{children}</div>
);

export default hot(module)(withStyles(styles)(GridItem)) as React.ComponentType<IProps>;
