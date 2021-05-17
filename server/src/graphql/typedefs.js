import { gql } from 'apollo-server-express'

export const typeDefs = gql`
    type Properties {
        overview: Overview
        facts: Facts
        other: Others
        visits: Visits
        homeImage: String
        images: [String]
    }

    type PropertyFilters{
        filter: String
    }

    type Overview {
        price: String
        beds: Int
        baths: Float
        neighborhood: String
        address: String
        city: String
        zipcode: Int
        available: Boolean
    }

    type Facts {
        type: String,
        yearBuilt: Int,
        heating: String,
        parking: String,
        lot: String,
        stories: Int
    }
    
    type Others {
        anualTax: Float
        hasGarage: Boolean
        pool: Boolean
        virtualTourLink: String
        parcelNumber: Int
        lastSold: String
    }

    type Visits {
        total: Int,
        lastVisited: String
    }
    

    type Query {
        getProperties(filter: String): [Properties]
    }
`;