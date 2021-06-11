import React, { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <p>
    <button onClick={handleClick}>{text}</button>
  </p>
)

const Votes = ({ count }) => {
  return (
    <p>
      has {count} votes
    </p>
  )
}

const Highest = ({ anec, votes }) => {
  console.log(votes)
  return (
    <div>
      <h1>Anecdote with most Votes</h1>
      {anec}
      <Votes count={votes} />
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blod tests when dianosing patients'
  ]

  const [votes, setVotes] = useState([0, 0, 0, 0, 0, 0, 0])
  const [selected, setSelected] = useState(0)

  const vote = () => {
    const newvotes = [...votes]
    newvotes[selected] += 1
    setVotes(newvotes)
  }

  const next = () => {
    const randint = Math.floor(Math.random() * 7)
    setSelected(randint)
  }

  const findmax = () => {
    const index = votes.indexOf(Math.max(...votes))
    return ([index, anecdotes[index]])
  }

  return (
    <div>
      <h1>Anecdote of the Day</h1>
      {anecdotes[selected]}
      <Votes count={votes[selected]} />
      <Button handleClick={vote} text='Vote' />
      <Button handleClick={next} text='Next Anecdote' />
      <Highest anec={findmax()[1]} votes={votes[findmax()[0]]} />
    </div>
  )
}

export default App