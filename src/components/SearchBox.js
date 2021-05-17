import { useState } from 'react'

const SearchBox = ({ handleSearch }) => {
  const [value, setValue] = useState('')

  return (
    <>
      <input value={value} onChange={e => setValue(e.target.value)} placeholder="Enter a valid Id/Name"/>
      <button
        onClick={() => {
          handleSearch(value)
        }}
      >
        Search Location
      </button>
    </>
  )
}

export default SearchBox;