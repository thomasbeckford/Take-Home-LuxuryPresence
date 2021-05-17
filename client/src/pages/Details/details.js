import React from 'react'
import { Link } from 'react-router-dom'
import './details.scss'

export default function Details({ location, history }) {
  const property = location.state

  return (
    <>
      <Link to="/listings" onClick={() => history.goBack()} className="button_back">
        GO BACK
      </Link>
      <div className="main_grid detail_grid">
        <div className="detail_home">
          <img src={property.homeImage} alt="property" />
          <div className="detail_home_images">
            {property.images.map((image) => (
              <img src={image} alt="property" />
            ))}
          </div>
        </div>
        <div className="detail_aside">
          <p className="detail_aside_title">Property Information</p>
          <p className="detail_aside_subtitle">Overview</p>
          <hr className="divider" />
          <div className="detail_content">
            <div>Price: {property.overview.price}</div>
            <div>Neighborhood: {property.overview.neighborhood}</div>
            <div style={{ display: 'flex', margin: 0 }}>
              <div>Beds: {property.overview.beds}</div>
              <div>Baths: {property.overview.baths}</div>
            </div>
            <div>Address: {property.overview.address}</div>
            <div>City: {property.overview.city}</div>
            <div>Zipcode: {property.overview.zipcode}</div>
            <div className="available-blocks">
              {' '}
              Available:
              <div className="block red-block" />
              <div className="block green-block" />
            </div>
          </div>
          <p className="detail_aside_subtitle">Facts and features</p>
          <hr className="divider" />
          <div className="detail_content">
            <div>Type: {property.facts.type}</div>
            <div>Year Built: {property.facts.yearBuilt}</div>
            <div>Heating: {property.facts.heating}</div>
            <div>Lot: {property.facts.lot}</div>
            <div>Stories: {property.facts.stories}</div>
          </div>
          <div style={{ textAlign: 'center', margin: 0 }}>
            <Link to="/">click more</Link>
          </div>
        </div>
      </div>
    </>
  )
}
