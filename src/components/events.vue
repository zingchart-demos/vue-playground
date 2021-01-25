import React, { Component } from 'react';
import 'zingchart/es6';
import ZingChart from 'zingchart-react';

class Methods extends Component {
  constructor(props) {
    super(props);
    this.state = {
      config: {
        type: 'bar',
        series: [{
          values: [4,5,3,4,5,3,5,4,11]
        }]
      }
    };
    this.chart = React.createRef();
    this.addPlot = this.addPlot.bind(this);

  }
  render() {
    return (
      <div>
        <ZingChart ref={this.chart} data={this.state.config}/>
        <button onClick={this.addPlot}>AddPlot</button>
      </div>
    );
  }
  addPlot() {
    this.chart.current.addplot({
      data: {
        values: randomData(10),
        text: "My new plot"
      }
    });
  }
}

// Random numbers from 0-100
function randomData(count) {
  return Array.from(new Array(count)).map(() => {
    return Math.floor(Math.random() * 10);
  });
}

export default Methods;

<template>
  <div>
    <zingchart
      ref="chart"
      :data="chartData"
      @complete="chartCompleted"
      @node_mouseover="chartMouseOver"
    ></zingchart>
    <h2>Output from events</h2>
    <h3>Events bound:</h3>
    <!-- <ul>{events}</ul> -->
    <pre>{{this.output}}</pre>
  </div>
</template>

<script>
import zingchartVue from "zingchart-vue";
export default {
  components: {
    zingchart: zingchartVue
  },
  data() {
    return {
      output: "",
      chartData: {
        type: "bar",
        title: {
          text: "Interact with chart and look below"
        },
        series: [
          {
            values: [4, 5, 3, 4, 5, 3, 5, 4, 11]
          }
        ]
      }
    };
  },
  methods: {
    chartCompleted(e) {
      let message = `The chart ${e.id} finished rendering\n`;
      this.output += message;
      console.log(message, e);
    },

    chartMouseOver(e) {
      let message = `Hovering Node ${e.id}\n`;
      this.output += message;
      console.log(message, e);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
