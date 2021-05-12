import React, {Component} from 'react'
import './App.css';
import axios from "axios";
import PieChart from './PieChart';
import ResultsTable from './ResultsTable';

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

  // Retrieve data from API and set data for first render
  async componentDidMount() {
    const API_AGENT_URL = `https://enigmatic-depths-90458.herokuapp.com/agent`;
    const API_PROPERTY_URL = `https://enigmatic-depths-90458.herokuapp.com/property-type`;
    let responseAgent = await axios.get(API_AGENT_URL);
    let responseProperty = await axios.get(API_PROPERTY_URL);
    this.setState({agents: responseAgent.data, property: responseProperty.data});
    this.setState({targetAgent:this.state.agents[0]})
    this.calcDetailedSale(this.state.targetAgent)
  }

  // Calculate total sales for each type of property and return as an array as required for plotting
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
      chartInput: newChartInput,
      targetAgent: targetAgent
    });
    }

// Calculate the total sales for each agent
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

// Update chart whenever a table row is clicked
    handleClick(e){
      this.calcDetailedSale(e.target.parentElement.firstChild.innerHTML);
    }
    
    render(){
      let totalSale = this.calcTotal();
      
      return(
        <div className="App">
          <ResultsTable totalSale={totalSale} handleClick = {this.handleClick}/>
          <PieChart agent={this.state.targetAgent} chartInput={this.state.chartInput}/>
        </div>
            
        )
    }
}

export default App