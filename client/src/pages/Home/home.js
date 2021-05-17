import React, { useContext } from 'react'
import AppContext from '../../context'
import SearchBar from '../../components/SearchBar'
import Title from '../../components/Title'
import './home.scss'

export const sortPropertiesBy = (sort, properties) => {
  return properties
    .slice()
    .sort((a, b) =>
      sort === 'lastVisited'
        ? new Date(b.visits[sort]).getTime() - new Date(a.visits[sort]).getTime()
        : b.visits[sort] - a.visits[sort]
    )
    .map((property, index) =>
      index < 5 ? (
        <div key={property.homeImage} className="cell">
          <img key={property.homeImage} className="main__image" src={`../../${property.homeImage}`} alt="property" />
          <div className="main__price">{`$ ${property.overview.price}`}</div>
          {sort !== 'lastVisited' ? (
            <div className="main__total_view">{`Total Views: ${property.visits.total}`}</div>
          ) : null}
        </div>
      ) : null
    )
}

export default function Home() {
  const { properties } = useContext(AppContext)

  return (
    <>
      <div className="main__search_bar">
        <div>
          <Title content="Search filtering by.." />
          <SearchBar properties={properties} />
        </div>
      </div>

      <div className="main_grid">
        <Title content="Most Visited" />
        <div className="grid">{sortPropertiesBy('total', properties)}</div>
      </div>

      <div className="main_grid">
        <Title content="Last Visited" />
        <div className="grid">{sortPropertiesBy('lastVisited', properties)}</div>
      </div>
    </>
  )
}
