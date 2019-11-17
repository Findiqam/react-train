import React from 'react';
import ReactDOM from 'react-dom';

import styles from './styles'

//头部的灯开关
class Light extends React.Component{
    render(){
        const {onClick,islight}=this.props;
        return(
            <button style={styles.btnLight} onClick={onClick}>{islight ? '🔦' : '💡'}</button>
        )
    }
}
export default Light;