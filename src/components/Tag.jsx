import React from 'react'

const Tag = ({ tag, custom, handle }) => {
  return (
    <li className={`w-fit px-4 py-1 rounded-full border border-grey text-dark select-none capitalize md:font-medium dark:text-white ${custom}`} onClick={handle}>
      {tag}
    </li>
  )
}

export default Tag