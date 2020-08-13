import React from 'react'
import { useState } from 'react'

export default function ReasultsContainer(props) {
  const renderResults = () => {
    if (props.searchResults.length === 0) {
      return (
        <div>
          <span>No results found</span>
        </div>
      )
    }

    let resultRender = props.searchResults.map((e) => {
      return (
        <div>
          <a href={e.formattedUrl}>{e.formattedUrl}</a>
          <h1> {e.htmlTitle} </h1>
          {`${e.htmlSnippet}`}
        </div>
      )
    })
    return resultRender
  }
  return (
    <>
      <div>{renderResults()}</div>
      <div>
        <button onClick={() => props.updateStartIndex(false, true)}>
          Previous
        </button>
        <button onClick={() => props.updateStartIndex(true, false)}>
          Next
        </button>
      </div>
    </>
  )
}
