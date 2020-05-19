import React from 'react'

const Total = ({parts}) => {
    const part0 = parts[0].exercises
    const part1 = parts[1].exercises
    const part2 = parts[2].exercises

return (<p>Total number of exercises {part0 + part1 + part2} </p>)     
}

export default Total