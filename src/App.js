import React, {Component} from 'react'
import './App.css';
import axios from "axios";
import PieChart from './PieChart';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      agents: [],
      property:[],
      chartInput:[],
      targetAgent:""
    }
    this.calcDetailedSale = this.calcDetailedSale.bind(this);
    this.calcTotal = this.calcTotal.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  async componentDidMount() {
    const API_AGENT_URL = `http://localhost:3100/agent`;
    const API_PROPERTY_URL = `http://localhost:3100/property-type`;
    let responseAgent = await axios.get(API_AGENT_URL);
    let responseProperty = await axios.get(API_PROPERTY_URL);
    this.setState({agents: responseAgent.data, property: responseProperty.data});
    this.calcDetailedSale("steve")
  }

  calcDetailedSale (targetAgent){
    let detailedSale = {};
    let newChartInput = [["Property", "Sales"]];
    let property = this.state.property
    let agents = this.state.agents

    for(let i =0; i<agents.length; i++){
      if(agents[i] === targetAgent){
          detailedSale[property[i]]? detailedSale[property[i]]++ : detailedSale[property[i]]=1;
          }}


    for (const [key, value] of Object.entries(detailedSale)) {
      newChartInput.push([key,value]);
    }
    this.setState({
      chartInput: newChartInput
    });
    }

    calcTotal (){
      let totalSale = {};
      let agents = this.state.agents;
      let agentTotal=[];

      for(let i =0; i<agents.length; i++){
        totalSale[agents[i]]? totalSale[agents[i]]++ : totalSale[agents[i]]=1;
      }
      for (const [key, value] of Object.entries(totalSale)) {
        agentTotal.push([key,value])
      }
      return agentTotal;
    }

    handleClick(e){
      this.calcDetailedSale(e.target.innerText);

    }
    render(){
      let totalSale = this.calcTotal();
      
      return(
        <div className="App">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Agent</th>
                <th scope="col">Sales</th>
              </tr>
            </thead>
            <tbody>
              {totalSale.map(m=>
                <tr>
                  <td className="App-table-data" onClick={this.handleClick}>{m[0]}</td>
                  <td>{m[1]}</td>
                </tr>)}
            </tbody>
          </table>
          <PieChart agent="steve" chartInput={this.state.chartInput}/>
        </div>
            
        )
    }
}

export default App