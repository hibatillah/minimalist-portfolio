import React from 'react'

const Tag = ({ tag }) => {
  return (
    <div className="w-fit px-4 py-1.5 rounded-full border border-grey text-dark">
      {tag}
    </div>
  )
}

export default Tag