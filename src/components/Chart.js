import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';


class Chart extends Component{
	constructor(props){
		super(props);
		this.state = {
			ChartData:props.ChartData
		}
	}

	static defaultProps = {
		displayTitle:true,
		displayLegend:true,
		legendPosition:"right"
	}

	render(){
		return(
			<div className="chart">
				<Line
					data={this.state.ChartData}
					width={1000}
					//heigth={500}
					options={{
						title:{
							display:this.props.displayTitle,
							//text:"Population",
							fontSize:25,
							fontFamily:"Source Sans Pro"
						},
						legend:{
							display:this.props.displayLegend,
							position:this.props.legendPosition
						}
					}}

				/>
			</div>
		)
	}	
}

export default Chart;