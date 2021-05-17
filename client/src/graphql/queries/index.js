import { gql } from '@apollo/client'

const GET_PROPERTIES = gql`
  query getProperties($filter: String) {
    getProperties(filter: $filter) {
      overview {
        price
        price
        beds
        baths
        neighborhood
        address
        city
        zipcode
        available
      }
      facts {
        type
        yearBuilt
        heating
        parking
        lot
        stories
      }
      other {
        anualTax
        hasGarage
        pool
        virtualTourLink
        parcelNumber
        lastSold
      }
      visits {
        total
        lastVisited
      }
      homeImage
      images
    }
  }
`

export default GET_PROPERTIES
