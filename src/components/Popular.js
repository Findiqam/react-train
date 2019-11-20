import React from 'react';
import ReactDOM from 'react-dom';

import styles from './styles'
import Menu from './Menu';
import ContentList from './ContentList';
import ContentListInfinite from './ContentListInfinite';

//内容部分
class Popular extends React.Component{
    constructor(props) {
        super(props)
        this.state = { query: 'stars:>1' };
    }
    onClick=(query)=>{
        this.setState({
            query
        })
    }
    render(){
        const {query}=this.state;
        const {islight}=this.props;
        return(
            <div>
                <Menu onClick={this.onClick} current={query}></Menu>
                <ContentListInfinite query={query} islight={islight}></ContentListInfinite>
            </div>
        )
    }
}

export default Popular;