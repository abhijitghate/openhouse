import React from 'react'

export default function SearchBox(props) {
  return (
    <div>
      <input onChange={props.updateSearchTerm} type="text"></input>
    </div>
  )
}
