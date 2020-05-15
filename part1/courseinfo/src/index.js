import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header'
import Content from './components/Content'
import Total from './components/Total'

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }


  const exercise1 = part1.exercises
  const exercise2 = part2.exercises
  const exercise3 = part3.exercises

  const exercises = [exercise1, exercise2, exercise3]


  return (
    <div>
      <Header name={part1.name + part2.name + part3.name} course={course}/>
      <Content exercises={exercises}/>
      <Total count={part1.exercises + part2.exercises + part3.exercises}/>
      </div>
  )
}

ReactDOM.render(<App />,document.getElementById('root'));
