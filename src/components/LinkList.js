import React from 'react';
import ReactDOM from 'react-dom';

import styles from './styles'

//头部的链接：Popular Battle
class LinkList extends React.Component {
    render() {
        const {pagesClick,nowpages}=this.props;      
        return (
            <ul style={styles.navUl}>
                <li style={styles.navLi}>
                    <button style={nowpages=='Popular'?styles.btnActive:styles.btnDefault} onClick={()=>pagesClick('Popular')}>Popular</button>
                </li>
                <li style={styles.navLi}>
                    <button style={nowpages=='Battle'?styles.btnActive:styles.btnDefault} onClick={()=>pagesClick('Battle')}>Battle</button>
                </li>
            </ul>
        );
    }
}
export default LinkList;