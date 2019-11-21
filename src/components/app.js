import React from 'react';
import ReactDOM from 'react-dom';

import styles from './styles';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';



//App
class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {islight:true,nowpages:'Battle'};
    }
    lightClick=()=>{
        this.setState(state => ({
            islight: !state.islight
        }));
    }
    pagesClick=(pages)=>{
        this.setState({nowpages:pages});
    }
    render() {
        const {islight,nowpages}=this.state;
        return (
            <div style={islight ? styles.light : styles.dark}>
                <div style={styles.container}>
                    <Header onClick={this.lightClick} islight={islight} pagesClick={this.pagesClick} nowpages={nowpages}></Header>
                    <Content islight={islight} nowpages={nowpages}></Content>
                    <Footer></Footer>
                </div>
            </div>
        );
    }
}
export default App;
