import React, { Component} from 'react';

class StatePattern extends Component{
    constructor(props){
        super(props);
        this.state = {score:0};
        this.riseUp = this.riseUp.bind(this);
        this.riseUp2 = this.riseUp2.bind(this);
    }

    riseUp(){
        this.setState({score :this.state.score +1})
    }

    riseUp2(){
        this.setState(st=>{
            return {score: st.score +4}
        })
    }

    render(){
        return(
            <div>
                <text>Score is : {this.state.score}</text>
                <button onClick={this.riseUp}>increment score</button>
                <button onClick={this.riseUp2}>add three</button>
            </div>
        )
    }
}

export default StatePattern;