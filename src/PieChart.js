import React, {Component} from 'react';
import Chart from "react-google-charts";

class PieChart extends Component{
    render(){
        
        return(
            <Chart
                width={'50em'}
                height={'40em'}
                chartType="PieChart"
                loader={<div>Loading Chart</div>}
                data={this.props.chartInput}
                options={{
                    title: `Analytics for ${this.props.agent}`,
                }}
                rootProps={{ 'data-testid': '1' }}
                />
        )
    }
}

export default PieChart