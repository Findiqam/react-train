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
            loadingOne: false,
            loadingTwo: false,
        }
    }
    getOne= async ()=>{
        const inputOne=this.refs.inputOne.value;
        if (inputOne.match(/^[ ]*$/)) {
            alert("请输入项目名称")
            this.refs.inputOne.value="";
            return
        }
        const url = `https://api.github.com/search/repositories?q=${inputOne} in:name&sort=stars&order=desc&type=Repositories&per_page=1`;
        this.setState({ loadingOne: true })
        try {
            const res = await axios.get(url)
            if(res.data.items.length==0){
                alert("未查询到项目,请重新输入")
                this.refs.inputOne.value="";
                return
            }
            this.props.setOne(res.data.items[0])
            this.setState({getOne:true})
        } catch (e) {
            
        }
        this.setState({ loadingOne: false })
    }
    rmOne=()=>{
        this.props.setOne({})
        this.setState({getOne:false})
    }
    getTwo= async ()=>{
        const inputTwo=this.refs.inputTwo.value;
        if (inputTwo.match(/^[ ]*$/)) {
            alert("请输入项目名称")
            this.refs.inputTwo.value="";
            return
        }
        const url = `https://api.github.com/search/repositories?q=${inputTwo} in:name&sort=stars&order=desc&type=Repositories&per_page=1`;
        this.setState({ loadingTwo: true })
        try {
            const res = await axios.get(url)
            if(res.data.items.length==0){
                alert("未查询到项目,请重新输入")
                this.refs.inputTwo.value="";
                return
            }
            this.props.setTwo(res.data.items[0])
            this.setState({getTwo:true})
        } catch (e) {
            
        }
        this.setState({ loadingTwo: false })
    }
    rmTwo=()=>{
        this.props.setTwo({})
        this.setState({getTwo:false})
    }
    oneInputChange=()=>{
        const inputOne=this.refs.inputOne.value;
        if (inputOne.match(/^[ ]*$/)) {
            this.refs.submitOne.className="button-submit disable-button";
            return
        }
        this.refs.submitOne.className="button-submit";
    }
    twoInputChange=()=>{
        const inputTwo=this.refs.inputTwo.value;
        if (inputTwo.match(/^[ ]*$/)) {
            this.refs.submitTwo.className="button-submit disable-button";
            return
        }
        this.refs.submitTwo.className="button-submit";
    }
    oneEnter=(e)=>{
        if (e.key == "Enter") {
            this.getOne();
        }
    }
    twoEnter=(e)=>{
        if (e.key == "Enter") {
            this.getTwo();
        }
    }
    render() {
        const battleStyles={
            iFont:{
                fontSize:200
            },
            iFontDel:{
                fontSize:20
            },
            getImg:{
                width:'50px',
                height:'50px',
                margin:'5px'
            }
        }
        const {battleStart,playerOne,playerTwo}=this.props;
        const {getOne,getTwo,loadingOne,loadingTwo}=this.state;
        return (
            <div className="instructions-container">
                <div style={styles.center}><h1>Instructions</h1></div>
                <div className="flex flex-wrap flex-space-around">
                    <div style={styles.center}>
                        <div className="instruction" style={styles.center}>Enter two Github project</div>
                        <i className="fa fa-git-square " style={{...battleStyles.iFont,color: 'rgb(255, 191, 116)'}}></i>
                    </div>
                    <div style={styles.center}>
                    <div className="instruction" style={styles.center}>Battle</div>
                    <i className="fa fa-fighter-jet" style={{...battleStyles.iFont,color: 'rgb(114, 114, 114)'}}></i>
                    </div>
                    <div style={styles.center}>
                    <div className="instruction" style={styles.center}>See the winner</div>
                    <i className="fa fa-hand-peace-o" style={{...battleStyles.iFont,color: 'rgb(255, 215, 0)'}}></i>
                    </div>
                </div>
                <div style={styles.center}>
                    <h1>Players</h1>
                </div>
                <div className="flex flex-wrap flex-space-around">
                    <div className="instruction">
                        <div className="playerh2">Player One</div>
                        {
                            loadingOne ?
                                <div>
                                    正在查找
                                    <i className="fa fa-spinner fa-spin"></i>
                                </div>
                                :
                                getOne ?
                                    <div className="getPlayer">
                                        <img src={playerOne.owner.avatar_url} alt={playerOne.name} style={battleStyles.getImg} />
                                        {playerOne.name}
                                        <button onClick={this.rmOne} className="button-del">
                                            <i className="fa fa-times-circle" style={{ ...battleStyles.iFontDel, color: 'rgb(194, 57, 42)' }}></i>
                                        </button>
                                    </div>
                                    :
                                    <div>
                                        <input ref="inputOne" placeholder="github project" className="player-input" onChange={this.oneInputChange} onKeyDown={this.oneEnter}></input>
                                        <button onClick={this.getOne} className="button-submit disable-button" ref="submitOne">Submit</button>
                                    </div>
                        }
                    </div>
                    
                    <div className="instruction">
                        <div className="playerh2">Player Two</div>
                        {
                            loadingTwo ?
                                <div>
                                    正在查找
                                    <i className="fa fa-spinner fa-spin"></i>
                                </div>
                                :
                                getTwo ?
                                    <div className="getPlayer">
                                        <img src={playerTwo.owner.avatar_url} alt={playerTwo.name} style={battleStyles.getImg} />
                                        {playerTwo.name}
                                        <button onClick={this.rmTwo} className="button-del">
                                            <i className="fa fa-times-circle" style={{ ...battleStyles.iFontDel, color: 'rgb(194, 57, 42)' }}></i>
                                        </button>
                                    </div>
                                    :
                                    <div>
                                        <input ref="inputTwo" placeholder="github project" className="player-input" onChange={this.twoInputChange} onKeyDown={this.twoEnter}></input>
                                        <button onClick={this.getTwo} className="button-submit disable-button" ref="submitTwo">Submit</button>
                                    </div>
                        }
                    </div>
                </div>
                {getOne && getTwo && <div style={styles.center}>
                <button onClick={battleStart} className="button-buttle">Battle</button>
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
                <button onClick={resetClick} className="button-reset">Reset</button>
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