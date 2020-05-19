import React from 'react';
import Part from './Part'

const Content = ({parts}) => {
    return (
    <div>
        {parts.map((part) => (
        <p>{part.part}{part.exercises}</p>
        ))}
        {parts
        ? parts.map(({name, exercise}, index) => 
        <Part key={index} name={name} exercise={exercise}/>
        ) : null }
    </div>)
}

export default Content;