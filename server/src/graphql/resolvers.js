import apiData from './../data.json'
import { ApolloError } from 'apollo-server-errors';
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');


export const resolvers = {

    Query: {
        
        // If we create a db and have our data there, we could use sequelize to create models and get data easily
        // we can also create raw queries to search by any filter, but its not recommended due to security of the DB.

        // Here we could create the model for our properties, and then search 
        // like this: await Property.find({filter})

        // In this case, we are using the JSON file data.json

        getProperties: async (_, {filter}) => {
            try{
                if(!filter) return apiData
                const filterProperty = apiData.filter((property) => {
                    if (property.facts.type.toLowerCase() === filter) return true
                    if (property.overview.neighborhood.toLowerCase() === filter) return true
                    if (property.overview.city.toLowerCase() === filter) return true
                    if (property.overview.zipcode === filter) return true
                return false
            })
                return filterProperty
                
            }catch(e){
                throw new ApolloError('Error', 'ERROR_GET_PROPERTIES_QUERY', e);
            }
        },
    },
};