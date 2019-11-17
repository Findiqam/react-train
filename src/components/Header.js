import React from 'react';
import ReactDOM from 'react-dom';

import styles from './styles'
import LinkList from './LinkList';
import Light from './Light';

//头部
class Header extends React.Component{
    render(){
        const {onClick,islight,pagesClick,nowpages}=this.props;
        return(
            <nav style={styles.nav}>
                <LinkList pagesClick={pagesClick} nowpages={nowpages}></LinkList>
                <Light onClick={onClick} islight={islight}></Light>
            </nav>
        )
    }
}
export default Header;