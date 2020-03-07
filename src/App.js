import React from 'react';
import { DatePicker, Card } from 'antd'
import './App.scss';

function App() {

  const test = (date, dateString) => {
    console.log(date, dateString)
  }

  return (
    <div className="app">
      <h1>Web personal - Client</h1>
      <DatePicker onChange={test}></DatePicker>
      <Card title="Default size card" style={{ width: 300 }}>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
    </div>
  );
}

export default App;
