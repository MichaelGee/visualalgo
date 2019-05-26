import * as React from 'react';
import injectSheet from 'react-jss';

const styles = {
    gridItem: {
        border: '2px solid #576574',
        height: '100px',
        width: '100px',
    },
};

const GridItem = ({ classes }) => (<div className={classes.gridItem} />);

export default injectSheet(styles)(GridItem);
