import React from 'react';
import ReactDOM from 'react-dom';

// Refactor the code so it consists of three new components: Header, Content, Total

const Header = (props) => {
  return (<h1>{props.course}</h1>)

}

const Content = (props) => {
return (<div><p>{props.parts}</p></div>)
}

const Total = (props) => {
return (<div><p>{props.count}</p></div>)
}

const App = (props) => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    <div>
    <Header course = {course}/> 
    <Content parts= {part1 + part2 + part3}  />
    <Total count = {exercises1 + exercises2 + exercises3}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
