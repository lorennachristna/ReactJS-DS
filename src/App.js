import React, { Component } from 'react';
import './App.css';
import Chart from './components/Chart';
import datas from './Datas.js';

class App extends Component {

  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    
    this.state = {
      chartData:{},
      arrayData : [],
      "browser":"",
      "os":"",
      "minRespTime":"",
      "maxRespTime":"",
      broswer:[],
      os:[],
      minRespTime:[],
      maxRespTime:[]
    }
  }

  componentWillMount(){ //this function calls the function that fills the Chart
    
    this.getChartData();
  }

  handleClick(e, form){
    e.preventDefault();

    var json = {
      "browser": document.getElementById("browser").value,
      "os": document.getElementById("os").value,
      "minRespTime": document.getElementById("minRespTime").value,
      "maxRespTime": document.getElementById("maxRespTime").value
    }; //get datas from input and set into a var
    
    var html = (JSON.stringify(json)) //convert datas to JSON format
    
    arrayData: this.state.arrayData.push(html) //increment the arrayData with datas from form

    alert(this.state.arrayData) //alert shows all the inputs from form
    //here should update the div that contains datas in JSON format.
  }

  getChartData(){

    this.setState({
      chartData:{

        datasets:[{
          data:[datas[0].minRespTime, datas[4].minRespTime],
          backgroundColor:'purple',
          borderColor: 'purple',
          fill:false,
          label:"Linux Chrome min response time"
        },
        {
          data:[datas[1].minRespTime,datas[5].minRespTime],
          backgroundColor:'blue',
          borderColor: 'blue',
          fill:false,
          label:"MAC Chrome min response time"
        },
        {
          data:[datas[2].minRespTime,datas[6].minRespTime],
          backgroundColor:'yellow',
          borderColor: 'yellow',
          fill:false,
          label:"Linux Firefox min response time"
        },
        {
          data:[datas[3].minRespTime,datas[7].minRespTime],
          backgroundColor:'green',
          borderColor: 'green',
          fill:false,
          label:"MAC Firefox min response time"
        },
        {
          data:[datas[0].maxRespTime,datas[4].maxRespTime],
          backgroundColor:"#e8c3b9",
          borderColor: "#e8c3b9",
          fill:false,
          label:"Linux Chrome max response time"
        },
        {
          data:[datas[1].maxRespTime,datas[5].maxRespTime],
          backgroundColor:"#3e95cd",
          borderColor: "#3e95cd",
          fill:false,
          label:"MAC Chrome max response time"
        },
        {
          data:[datas[2].maxRespTime,datas[6].maxRespTime],
          backgroundColor:"#8e5ea2",
          borderColor: "#8e5ea2",
          fill:false,
          label:"Linux Firefox max response time"
        },
        {
          data:[datas[3].maxRespTime,datas[7].maxRespTime],
          backgroundColor:"#3cba9f",
          borderColor: "#3cba9f",
          fill:false,
          label:"MAC Firefox max response time"
        }
        ]
      },
    });
  }

  /*genChart(e){poss
    e.preventDefault();
  }*/

  render() {
    return (
      <div className="WrapAll">      
      <h2 id="myName">Lorennas Challenge</h2>

      <form className="myForm">
        <input type="radio" value="data" id="dataType" name="dataType" /> DATA
        <input type="radio" value="span" id="dataType" name="dataType" /> SPAN        
        <input type="radio" value="start" id="dataType" name="dataType" /> START
        <input type="radio" value="stop" id="dataType" name="dataType" /> STOP <br></br>
        Browser: <input type="text" className="browser" id="browser" /><br></br>
        OS: <input type="text" className="os" id="os" /><br></br>
        Min Response Time: <input type="text" className="minRespTime" id="minRespTime" /><br></br>
        Max Response Time: <input type="text" className="maxRespTime" id="maxRespTime" />
      </form>
      <button onClick={this.handleClick} className="btnSubmit">SUBMIT</button>
      <div className="App">
      <div className="Datas">{this.state.arrayData}</div>

      <header className="divChart">    
        <Chart ChartData={this.state.chartData} />
      </header>
        </div>
        <button className="btnGenChart">GENERATE CHART</button>
      </div>
    );
  }
}

export default App;