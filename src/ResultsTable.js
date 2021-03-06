import React, {Component} from 'react';
import './ResultsTable.css';

class ResultsTable extends Component{
    render(){
        
        return(
            <div className="ResultsTable">
                <table className="ResultsTable-table table">
                    <thead>
                    <tr>
                        <th scope="col">Agent</th>
                        <th scope="col">Sales</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.totalSale.map((m,index)=>
                        <tr key={index} className="App-table-row" onClick={this.props.handleClick}>
                        <td>{m[0]}</td>
                        <td>{m[1]}</td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ResultsTable