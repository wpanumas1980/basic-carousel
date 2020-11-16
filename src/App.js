import React, { Component } from 'react';
import './App.css';
import Button from './components/Button';
import Carousel from './components/Carousel';
import TextResult from './components/TextResult';

class App extends Component {
  state = {
    value: 0,
    index: 2,
    picList: [
      "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"]
  };

  plusValue = () => { this.setState({ value: this.state.value + 1 }) }
  recduceValue = () => { this.setState({ value: this.state.value - 1 }) }
  nextChange = () => {
    if (this.state.index > 2) {
      this.setState({ index: 1 })
    } else {
      this.setState({ index: this.state.index + 1 })
    }
  }
  prevChange = () => {
    if (this.state.index <= 0) {
      this.setState({ index: 2 })
    } else {
      this.setState({ index: this.state.index - 1 })
    }
  }
  render() {
    return (
      <div className="App">
        <TextResult
          result={this.state.value}
        />
        <Button
          changeState={this.plusValue}
          btnContent="+"
        />
        <Button
          changeState={this.recduceValue}
          btnContent="-"
        />
        <Carousel
          source={this.state.picList[this.state.index]}
        />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button
            changeState={this.prevChange}
            btnContent="<"
          />
          <Button
            changeState={this.nextChange}
            btnContent=">"
          />
        </div>
      </div>
    );
  }
}

export default App;
