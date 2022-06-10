import React, { Component } from "react";
import Bar from './components/Bar.js';

//css
import "./App.css";

class App extends Component {
    state = {
        array: [],
        arraySteps: [], //save copy of each array as it becomes sorted 
        colorKey: [],
        colorSteps: [],
        currentStep: 0,
        count: 10,
        delay: 100,
        algorithm: '', 
        timeouts: [], 

    };
    componentDidMount() {//runs after component mounted
        this.generateRandomArray();
    }
    generateRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min);
    }

    generateRandomArray = () => {
        const count = this.state.count;
        const temp = [];

        for (let i = 0; i < count; i++) {
            temp.push(this.generateRandomNumber(50, 200));
        }
        console.log(temp);

        this.setState({
            array: temp,
            arraySteps: [temp] 
        })
    };
    render() {
        let bars = this.state.array.map((value, index) => {
            return (
                <Bar 
                    key={index} 
                    index={index} 
                    length={value} 
                    color={0} 
                />
            );
        })
        return (
            <div className="App">
                <div className="frame">
                    <div className="barsDiv container card">
                        {bars}
                    </div>
                </div>
                <div className="control-panel"></div>
                <div className="panel"></div>
            </div>
        );
    }
}

export default App;
