import React, { Component } from 'react';
import './List.scss'

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      testData: {}
    }
  }

  getTestData = () => {
    fetch('http://localhost:5000/api/getTestData')
      .then(res => console.log(res.json()))
      .then(testData => this.setState({ testData }))
  }

  render() {
    const { testData } = this.state;

    return (
      <div className="List">
        <h1>Data</h1>
        <button onClick={() => this.getTestData()}>GET TEST DATA</button>
        {/* <div className='items'>
          {Object.keys(testData).map((el, id) => {
            return <li key={testData[id]._value}>{testData[id]._value}</li>
          })}
        </div> */}

      </div>
    );
  }
}

export default List;