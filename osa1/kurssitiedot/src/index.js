import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
    return (
        <h1>{props.nimi}</h1>
    )
}

const Content = (props) => {
    return (
        <div>
        <Part part={props.part1} ex={props.ex1} />
        <Part part={props.part2} ex={props.ex2} />
        <Part part={props.part3} ex={props.ex3} />
        </div>
    )
}

const Part = (props) => {
    return (
        <p>{props.part} {props.ex}</p>
    )
}

const Total = (props) => {
    return (
        <p>yhteensä {props.yht} tehtävää</p> 
    )
}
const App = () => {
  const course = 'Half Stack -sovelluskehitys'
  const part1 = 'Reactin perusteet'
  const exercises1 = 10
  const part2 = 'Tiedonvälitys propseilla'
  const exercises2 = 7
  const part3 = 'Komponenttien tila'
  const exercises3 = 14

  return (
    <div>
      <Header nimi={course} />
      <Content part1={part1} ex1={exercises1} part2={part2} ex2={exercises2} part3={part3} ex3={exercises3} />
      <Total yht={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))