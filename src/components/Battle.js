import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import styles from './styles';
import './battle.css'
import Card from './Card';


class BattleStart extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            getOne:false,//判断第一个是否已经获取
            getTwo:false,//判断第二个是否已经获取
            winner:""//胜利者是谁
        }
    }
    getOne= async ()=>{
        const inputOne=this.refs.inputOne.value;
        if (inputOne.match(/^[ ]*$/)) {
            alert("请输入项目名称")
            return
        }
        const url = `https://api.github.com/search/repositories?q=${inputOne} in:name&sort=stars&order=desc&type=Repositories&per_page=1`;
        try {
            const res = await axios.get(url)
            this.props.setOne(res.data.items[0])
            this.setState({getOne:true})
        } catch (e) {
            
        }
    }
    rmOne=()=>{
        this.props.setOne({})
        this.setState({getOne:false})
    }
    getTwo= async ()=>{
        const inputTwo=this.refs.inputTwo.value;
        const url = `https://api.github.com/search/repositories?q=${inputTwo} in:name&sort=stars&order=desc&type=Repositories&per_page=1`;
        try {
            const res = await axios.get(url)
            this.props.setTwo(res.data.items[0])
            this.setState({getTwo:true})
        } catch (e) {
            
        }
    }
    rmTwo=()=>{
        this.props.setTwo({})
        this.setState({getTwo:false})
    }
    render() {
        const sty={
            width:50,
            height:50
        }
        const {battleStart,playerOne,playerTwo}=this.props;
        const {getOne,getTwo}=this.state;
        return (
            <div>
                <div style={styles.center}>
                    <h1>Players</h1>
                </div>
                <div className="flex flex-nowrap flex-space-around">
                    <div>
                        <div>Player One</div>
                        {getOne ? <div><img src={playerOne.owner.avatar_url} alt={playerOne.name} style={sty} /><button onClick={this.rmOne}>Del</button></div> : <div><input ref="inputOne"></input><button onClick={this.getOne}>Submit</button></div>}
                    </div>
                    
                    <div>
                        <div>Player Two</div>
                        {getTwo ? <div><img src={playerTwo.owner.avatar_url} alt={playerTwo.name} style={sty} /><button onClick={this.rmTwo}>Del</button></div> : <div><input ref="inputTwo"></input><button onClick={this.getTwo}>Submit</button></div>}
                    </div>
                </div>
                {getOne && getTwo && <div style={styles.center}>
                <button onClick={battleStart}>Battle</button>
                </div>}
            </div>
        );
    }
}
class BattleEnd extends React.Component{
    constructor(props) {
        super(props);
    }
    
    render() {
        const {playerOne,playerTwo,winner,resetClick,islight}=this.props;
        return (
            <div>
                <div>
                <ul style={styles.grid}>
                <Card source={playerOne} index={winner==playerOne.name?"Winner":(winner==""?"Tie":"Loser")} islight={islight}></Card>
                <Card source={playerTwo} index={winner==playerTwo.name?"Winner":(winner==""?"Tie":"Loser")} islight={islight}></Card>
                </ul>
                </div>
                <div style={styles.center}>
                <button onClick={resetClick}>Reset</button>
                </div>
            </div>
        );
    }
}
//Battle
class Battle extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            playerOne:{},//存储第一个获取的数据
            playerTwo:{},//存储第二个获取的数据
            battle:false,//判断是否已经比较
            winner:""//胜利者是谁
        }
    }
    setOne=(inOne)=>{
        this.setState({
            playerOne:inOne
        })
    }
    setTwo=(inTwo)=>{
        this.setState({
            playerTwo:inTwo
        })
    }
    battleStart=()=>{
        const {playerOne,playerTwo}=this.state;
        if(playerOne.stargazers_count>playerTwo.stargazers_count){
            this.setState({
                battle:true,
                winner:playerOne.name
            })
        }else if(playerOne.stargazers_count==playerTwo.stargazers_count){
            this.setState({
                battle:true,
                winner:""
            })
        } else{
            this.setState({
                battle:true,
                winner:playerTwo.name
            })
        }      
    }
    resetClick=()=>{
        this.setState({
            playerOne:{},
            playerTwo:{},
            battle:false,
            winner:""
        })
    }
    render() {
        const {islight}=this.props;
        const {playerOne,playerTwo,battle,winner}=this.state;
        return (
            <div>
                {battle?<BattleEnd playerOne={playerOne} playerTwo={playerTwo} winner={winner} resetClick={this.resetClick} islight={islight}></BattleEnd>:<BattleStart setOne={this.setOne} setTwo={this.setTwo} battleStart={this.battleStart} playerOne={playerOne} playerTwo={playerTwo}></BattleStart>}
            </div>
        );
    }
}
export default Battle;