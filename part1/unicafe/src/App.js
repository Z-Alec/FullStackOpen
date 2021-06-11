import React, { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Type = ({ text, count }) => {
  return (
    <p>{text} {count}</p>
  )
}

const Average = ({ total }) => {
  return (
    <p>Average {total / 3}</p>
  )
}

const All = ({ total }) => {
  return (
    <p>All {total}</p>
  )
}

const Positive = ({ good, total }) => {
  return (
    <p>Positive {good * 100 / total}%</p>
  )
}

const Statistic = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({ good, neutral, bad, total }) => {
  if (total === 0) {
    return (
      <div>No Feedback Given</div>
    )
  }
  return (
    <table>
      <tbody>
        <Statistic text='Good' value={good} />
        <Statistic text='Neutral' value={neutral} />
        <Statistic text='Bad' value={bad} />
        <Statistic text='All' value={total} />
        <Statistic text='Average' value={total / 3} />
        <Statistic text='Positive' value={<>{good * 100 / total}%</>} />
      </tbody>
    </table>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const total = good + neutral + bad

  const addGood = () => { setGood(good + 1) }
  const addNeutral = () => { setNeutral(neutral + 1) }
  const addBad = () => { setBad(bad + 1) }

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={addGood} text='Good' />
      <Button handleClick={addNeutral} text='Neutral' />
      <Button handleClick={addBad} text='Bad' />
      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} total={total} />
    </div>
  )
}

export default App