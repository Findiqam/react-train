import React from 'react';
import ReactDOM from 'react-dom';

import styles from './styles'


class Loading extends React.Component {
    render() {
        return <div style={styles.center}>
            正在加载<i className="fa fa-spinner fa-spin"></i>
        </div>;
    }
}
export default Loading;