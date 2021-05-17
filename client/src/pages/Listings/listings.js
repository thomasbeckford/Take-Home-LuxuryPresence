import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import Title from '../../components/Title'
import AppContext from '../../context'
import { sortPropertiesBy } from '../Home/home'
import GET_PROPERTIES from '../../graphql/queries'

import './listings.scss'

export default function Listings(props) {
  const { location, history } = props
  const { properties } = useContext(AppContext)
  const lowSearch = typeof location.state === 'string' ? location.state.toLowerCase() : location.state

  const { data, loading, error } = useQuery(GET_PROPERTIES, {
    variables: { filter: lowSearch },
  })

  const handlePropertyClick = (value) => {
    history.push({
      pathname: '/details',
      state: value,
    })
  }

  if (loading) return 'Loading..'

  return (
    <div>
      <Link to="/" onClick={() => history.goBack()} className="button_back">
        GO BACK
      </Link>
      <div className="main_grid">
        <Title content="Your favorite homes" />
        <div className="grid">{sortPropertiesBy('lastVisited', properties)}</div>
      </div>
      {!data.getProperties.length ? (
        <div className="listings_not_found">No results found, please try again..</div>
      ) : (
        data.getProperties.map((property) => (
          <div className="main_grid">
            <Title content="List of Homes" />

            <div aria-hidden onClick={() => handlePropertyClick(property)} className="list_of_homes">
              <div>
                <img className="listings_primary_image" src={property.homeImage} alt="property" />
                <div className="listings_price">Price: ${property.overview.price}</div>
              </div>

              <div className="listings_home_details">
                <p>neighborhood: {property.overview.neighborhood}</p>
                <p>beds: {property.overview.beds}</p>
                <p>address: {property.overview.address}</p>
                <p>city: {property.overview.city}</p>
                <p>zipcode: {property.overview.zipcode}</p>
                <div className="available-blocks">
                  {' '}
                  Available:
                  <div className="block red-block" />
                  <div className="block green-block" />
                </div>
              </div>

              <div className="listings_images_container">
                {property.images.map((image, index) =>
                  index < 4 ? <img className="listings_secondary_images" src={image} alt="property" /> : null
                )}
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  )
}
