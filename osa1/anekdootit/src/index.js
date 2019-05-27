import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const App = (props) => {
  const [selected, setSelected] = useState(0)
  
  const nextAnecdote = () => {
    var min=0; 
    var max=5;  
    var random = Math.random() * (+max - +min) + +min; 

    
    setSelected(parseInt(random))
    
  }
  const voteAnectode = (sel) => {
    points[sel]++;
  }
  const getMostVoted = () => {
    
    var max_count = points[0];
    var max_votes = 0;
    for (var i = 0; i < anecdotes.length; i++) {
      if (points[i] > max_count) {
        max_count = points[i]
        max_votes = i;
      }
    }

    return max_votes
  }
  
  return (
    <div>
      <h2>Anectode of the day</h2>
      {props.anecdotes[selected]}<br></br>
      <button onClick={nextAnecdote} >Next</button>
      <button onClick={() => voteAnectode(selected)} >vote</button>
      <h2>Anectode with most votes</h2>
      {props.anecdotes[getMostVoted()]}
    </div>
    
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]
const points = new Array(anecdotes.length).fill(0);

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)