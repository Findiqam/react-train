import React from 'react';
import ReactDOM from 'react-dom';

import styles from './styles'
import Menu from './Menu';
import ContentList from './ContentList';

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
                <ContentList query={query} islight={islight}></ContentList>
            </div>
        )
    }
}

export default Popular;