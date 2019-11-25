import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import styles from './styles'

//头部的链接：Popular Battle
class LinkList extends React.Component {
    render() {
        const {pagesClick,nowpages}=this.props;      
        return (
            <ul style={styles.navUl}>
                <li style={styles.navLi}>
                <Link to="/Popular" style={styles.btnDefault}>Popular</Link>
                </li>
                <li style={styles.navLi}>
                <Link to="/Battle" style={styles.btnDefault}>Battle</Link>
                </li>
            </ul>
        );
    }
}
export default LinkList;