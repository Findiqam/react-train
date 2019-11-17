import React from 'react';
import ReactDOM from 'react-dom';

import styles from './styles';


//分类菜单
class Menu extends React.Component{
    render() {
        const {onClick,current}=this.props;
        const links = [
            {
                title: 'All',
                query: 'stars:>1'
            },
            {
                title: 'JavaScript',
                query: 'stars:>1+language:javascript'
            },
            {
                title: 'Ruby',
                query: 'stars:>1+language:ruby'
            },
            {
                title: 'Java',
                query: 'stars:>1+language:java'
            },
            {
                title: 'CSS',
                query: 'stars:>1+language:css'
            }
        ];
        const link=links.map((item,key)=><li style={styles.li} key={key}><button onClick={() => onClick(item.query)} style={current == item.query ? styles.btnActive:styles.btnDefault}>{item.title}</button></li>);
        return (
            <ul style={styles.ul}>
                {link}
            </ul>
        );
    }
}
export default Menu;