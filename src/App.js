import React, {Component} from 'react'
import './App.css';
import axios from "axios";
import PieChart from './PieChart';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      agents: [],
      property:[]
    }
    this.calcTotal = this.calcTotal.bind(this);
  }

  async componentDidMount() {
    const API_AGENT_URL = `http://localhost:3100/agent`;
    const API_PROPERTY_URL = `http://localhost:3100/property-type`;
    let responseAgent = await axios.get(API_AGENT_URL);
    let responseProperty = await axios.get(API_PROPERTY_URL);
    this.setState({agents: responseAgent.data, property: responseProperty.data});
  }

  calcTotal (targetAgent){
    let totalCount = {};
    let property = this.state.property
    let agents = this.state.agents

    for(let i =0; i<agents.length; i++){
        if(agents[i] === targetAgent){

            totalCount[property[i]]? totalCount[property[i]]++ : totalCount[property[i]]=1;
            
            }
        }
        return totalCount
    }


    render(){
      console.log(this.calcTotal("steve"));
      return(
            <PieChart agents = {this.state.agents} property = {this.state.property}/>
        )
    }
}

export default App