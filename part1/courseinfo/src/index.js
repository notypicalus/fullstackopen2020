import React from 'react';
import ReactDOM from 'react-dom';

// Refactor the code so it consists of three new components: Header, Content, Total

const Header = (props) => {
  return (<div><h1>{props.course}</h1></div>)
}

const Content = (props) => {
return (<div><h1>{props.number}</h1></div>)
}

const App = () => {
  
  const course = {
  part1: 'Fundamentals of React',
  part2: 'Using props to pass data',
  part3: 'State of a component'
  }
  
  const number = {
  exercises1: 10,
  exercises2: 7,
  exercises3: 14
}

  return (
    <div>
    <Header course = {props.course}/>
    <Content parts= {props.parts} />
    <Total number = {exercises1 + exercises2 + exercises3}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
