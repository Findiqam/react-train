import React from 'react';
import ReactDOM from 'react-dom';

import styles from './styles'
import Popular from './Popular';
import Battle from './Battle';

//内容部分
class Content extends React.Component{
    render(){
        const {islight,nowpages}=this.props;
        return(
            <div>
                {nowpages=='Popular'?<Popular islight={islight}></Popular>:<Battle></Battle>}  
            </div>
        )
    }
}

export default Content;