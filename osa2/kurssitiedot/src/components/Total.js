import React from 'react'
const Total = ({parts}) => {
    const total = parts.reduce( (s, p) => {
        return s + p.exercises
      }, 0)

    return <p>yhteensä {total} tehtävää</p>
}
export default Total