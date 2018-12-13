import React from 'react';
import { Line } from 'react-chartjs-2';

class Chart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: [],
        datasets: {

        }
      }
    };
  }

  render(){
    return(
      <Line
        data={data}
        options={{
          maintainAspectRatio: false
        }}
      />
    );
  }
}

export default Chart;
