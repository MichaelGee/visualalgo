import App from '@app/client/app';
import * as React from 'react';
import { cleanup, render } from 'react-testing-library';

afterEach(cleanup);

test('Client Side Render', () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
});

test('Makes request when button is clicked', () => {
    
});
