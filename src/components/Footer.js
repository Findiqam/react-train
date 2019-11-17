import React from 'react';
import ReactDOM from 'react-dom';

import styles from './styles'

//脚部
class Footer extends React.Component{
    render(){
        return(
            <div style={{...styles.center,backgroundColor:'rgba(0, 0, 0, 0.08)'}}>版权所有@好多鱼</div>
        )
    }
}
export default Footer;