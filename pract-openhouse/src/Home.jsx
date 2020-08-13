import React from 'react'
import SearchBox from './SearchBox'
import { useState, useDebounce } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { SEARCH_ENGINE_ID, KEY } from './credentials'
import ReasultsContainer from './ResultsContainer'

export default function Home(props) {
  const [searchTerm, setSearchTerm] = useState()
  const PAGE_SIZE = 5

  const [startIndexOfSearch, setStartindexOfSearch] = useState(1)
  const updateStartIndex = (increment, decreament) => {
    let temp = startIndexOfSearch
    if (increment) {
      temp += 10
    }
    if (decreament) {
      temp -= 10
    }
    setStartindexOfSearch(temp)
  }

  const [searchResults, setSearchResults] = useState([])
  const [numberOfPages, setNumberOfPages] = useState(0)
  const updateSearchTerm = (e) => {
    setSearchTerm(e.target.value)
  }

  useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/customsearch/v1?key=${KEY}&cx=${SEARCH_ENGINE_ID}&q=${searchTerm}&start=${startIndexOfSearch}`
      )
      .then(({ data }) => {
        if (data.items) {
          setSearchResults(data.items)
          let numPages = data.items.length / PAGE_SIZE
          setNumberOfPages(numPages)
        }
      })
  }, [searchTerm, startIndexOfSearch])
  return (
    <div>
      <SearchBox updateSearchTerm={updateSearchTerm}></SearchBox>
      {searchResults.length > 0 ? (
        <ReasultsContainer
          updateStartIndex={updateStartIndex}
          startIndexOfSearch={startIndexOfSearch}
          searchResults={searchResults}
          numberOfPages={numberOfPages}
          pageSize={PAGE_SIZE}
        ></ReasultsContainer>
      ) : (
        ''
      )}
    </div>
  )
}
