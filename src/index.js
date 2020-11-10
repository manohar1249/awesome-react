import React from 'react';
import ReactDOM from 'react-dom';

const Counter = ({count, increment, decrement}) => {
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => increment()}>Increment</button>
      <button onClick={() => decrement()}>Decrement</button>
    </div>
  )
}
const CounterApp = () => {
  const [counts, setCounts] = React.useState([0])

  const addCounter = () => {
    const newCounts = counts.concat([0])
    setCounts(newCounts)
  }

  const increment = (currentIndex) => {
    const newCounts = counts.map((value, index) => index === currentIndex ? value + 1 : value)
    setCounts(newCounts)
  }

  const decrement = (currentIndex) => {
    const newCounts = counts.map((value, index) => index === currentIndex ? value - 1 : value)
    setCounts(newCounts)
  }

  return (
    <div style={{textAlign: "center"}}>
      {counts.map((ele, idx) => <Counter count={ele} increment={() => increment(idx)} decrement={() => decrement(idx)}/> )}
      
      <br /><br />
      <button onClick={addCounter}>Add Counter</button>
    </div>
  )
}

ReactDOM.render(<CounterApp />, document.getElementById('root'))


