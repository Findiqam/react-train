import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";
import styles from './styles'
import Popular from './Popular';
import Battle from './Battle';

//内容部分
class Content extends React.Component{
    render(){
        const {islight,nowpages}=this.props;
        return(
            <div>
                <Switch>
                    <Route exact path="/">
                    <Redirect from="/" to="/Popular" />
                    </Route>
                    <Route path="/Popular">
                    <Popular islight={islight}></Popular>
                    </Route>
                    <Route path="/Battle">
                    <Battle islight={islight}></Battle>
                    </Route>
                </Switch>
            </div>
        )
    }
}

export default Content;