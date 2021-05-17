import React from 'react'
import { withRouter } from 'react-router-dom'

import './searchbar.scss'

function SearchBar({ history }) {
  const [filter, setFilter] = React.useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    history.push({
      pathname: '/listings',
      state: filter,
    })
  }

  return (
    <div className="searchbar__main_container">
      <input
        className="searchbar__search_input"
        type="text"
        placeholder="neighborhood, city, zip or type or property"
        name="search"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <input onClick={(e) => handleSubmit(e)} className="searchbar__main_button" type="submit" value="Find property" />
    </div>
  )
}

export default withRouter(SearchBar)
