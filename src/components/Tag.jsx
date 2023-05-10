import React from 'react'

const Tag = ({ tag, custom }) => {
  return (
    <li className={`w-fit px-4 py-1.5 rounded-full border border-grey text-dark select-none ${custom}`}>
      {tag}
    </li>
  )
}

export default Tag