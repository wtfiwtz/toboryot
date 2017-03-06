import React from 'react';
import classnames from 'classnames/bind'

import styles from './App.css';
const cx = classnames.bind(styles)

const App = () => (
    <div className={cx('App')}>
        <h2>Hello, Toy Robot</h2>
    </div>
);

export default App;
