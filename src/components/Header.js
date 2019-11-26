import React from 'react';
import {
    HashRouter as Router,
    Switch,
    Route,
    NavLink
  } from "react-router-dom";
import styles from './styles';


//头部的链接：Popular Battle
class LinkList extends React.Component {
    render() {
        const {pagesClick,nowpages}=this.props;      
        return (
            <ul style={styles.navUl}>
                <li style={styles.navLi}>
                <NavLink to="/Popular" className="btn-default" activeClassName="btn-active">Popular</NavLink>
                </li>
                <li style={styles.navLi}>
                <NavLink to="/Battle" className="btn-default" activeClassName="btn-active">Battle</NavLink>
                </li>
            </ul>
        );
    }
}
//头部的灯开关
class Light extends React.Component{
    render(){
        const {onClick,islight}=this.props;
        return(
            <button style={styles.btnLight} onClick={onClick}>{islight ? '🔦' : '💡'}</button>
        )
    }
}

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