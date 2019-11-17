import React from 'react';
import ReactDOM from 'react-dom';

import styles from './styles'

//展示卡片
class Card extends React.Component{
    render() {
        const {index,source,islight}=this.props;
        if(!source){
            return <div>没有卡片</div>;
        }
        return (
            <div style={islight?styles.cradLight:styles.cradDark}>
                <h4 style={styles.Ranking}>#{index}</h4>
                <img src={source.owner.avatar_url} alt={source.name} style={styles.cardImg} />
                <h2 style={styles.cardTitle}>
                    <a href={source.html_url} style={{...styles.cardLink,...styles.cardA}} target="_blank">
                        {source.owner.login}
                    </a>
                </h2>
                <ul style={styles.cardList}>
                    <li style={styles.cardListLi}>
                        <div>
                            <div style={styles.cardMan}>
                                <i className="fa fa-user fa-fw" style={{...styles.icon,color:'rgb(255, 191, 116)'}}></i>
                                <a href={source.owner.html_url} target="_blank" style={{...styles.cardListA,...styles.cardA}}>
                                {source.owner.login}
                                </a>
                            </div>
                        </div>
                    </li>
                    <li style={styles.cardListLi}>
                        <i className="fa fa-star fa-fw" style={{...styles.icon,color:'rgb(255, 215, 0)'}}></i>
                        {source.stargazers_count} stars
                    </li>
                    <li style={styles.cardListLi}>
                        <i className="fa fa-code-fork fa-fw" style={{...styles.icon,color:'rgb(129, 195, 245)'}}></i>
                        {source.forks} forks
                    </li>
                    <li style={styles.cardListLi}>
                        <i className="fa fa-warning fa-fw" style={{...styles.icon,color:'rgb(241, 138, 147)'}}></i>
                        {source.open_issues} Open issues
                    </li>
                </ul>
            </div>
        );
    }
}
export default Card;