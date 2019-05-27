import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistic = (props) => {
  return (
    
      <tr>
      <td>{props.text}</td><td>{props.value}{props.pre}</td>
      </tr>
      
  )
}
const Statistics = (props) => {
  if (props.total > 0) {
    return (
     <div>
        <h1>Statistiikka</h1>
        <table>
          <tbody>
              <Statistic text="hyvä" value={props.good}/>
              <Statistic text="neutraali" value={props.neutral}/>
              <Statistic text="huono" value={props.bad}/>
              <Statistic text="yhteensä" value={props.total}/>
              <Statistic text="keskiarvo" value={props.avg}/>
              <Statistic text="positiivisia" value={props.positive} pre=" %"/>
          </tbody>
        </table>
        
        
       
      </div>
    )
  }
  return (
    <div>
      <h1>Statistiikka</h1>
      <p>Ei yhtään palautetta annettu</p>
    </div>
    )
  
}

const App = () => {
  
  const handleGoodClick = () => {
    setGood(good + 1);
    setTotal(total + 1);
   
  }
  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
    setTotal(total + 1);
    
  }
  const handleBadClick = () => {
    
    setBad(bad + 1);
    setTotal(total + 1);
    
  }
  const calcAvg = () => {
    setAvg( (good - bad) / total)
    
  }
  const calcPos = () => [
    setPositive(good / total * 100)
  ]
  const Button = ({ handleClick,text }) => {
    calcAvg()
    calcPos()
    return (
    <button onClick={handleClick}>
        {text}  
    </button>
  
  )}
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [avg, setAvg] = useState(0);
  const [positive, setPositive] = useState(0);
  return (
    <div>
        <h1>Anna palutetta</h1>
        <Button handleClick={handleGoodClick} text='hyvä' />
        <Button handleClick={handleNeutralClick}  text='neutraali' />
        <Button handleClick={handleBadClick} text='huono' />
      <Statistics good={good} neutral={neutral} bad={bad} total={total} avg={avg} positive={positive} />
      
      
      
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
