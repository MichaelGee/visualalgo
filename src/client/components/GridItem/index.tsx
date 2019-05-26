import * as React from 'react';
import { hot } from 'react-hot-loader';
import withStyles, { WithStyles } from 'react-jss';

const styles = {
    gridItem: {
        border: '2px solid #576574',
        backgroundColor: '#8395a7',
        height: '50px',
        width: '50px',
        margin: '5px',
        display: 'flex',
        fontSize: '1.3em',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
        transition: 'all 1s',
    },
    gridItemPrime: {
        border: '2px solid #2e86de',
        backgroundColor: '#54a0ff',
        boxShadow: '0px 0px 15px rgba(84,160,255, 0.5)',
    },
    gridItemMedian: {
        border: '2px solid #10ac84',
        backgroundColor: '#1dd1a1',
        borderRadius: '25px',
        boxShadow: '0px 0px 25px rgba(29,209,161, 0.5)',

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

export default withStyles(styles)(GridItem) as React.ComponentType<IProps>;
