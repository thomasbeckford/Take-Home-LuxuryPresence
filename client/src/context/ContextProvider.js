import React, { useState, useEffect } from 'react'
import { useQuery } from '@apollo/client'
import AppContext from '.'
import GET_PROPERTIES from '../graphql/queries'

const ContextProvider = ({ children }) => {
  const [properties, setProperties] = useState([])

  const { data, loading, error } = useQuery(GET_PROPERTIES, {
    variables: { filter: '' },
  })

  useEffect(() => {
    if (data) {
      setProperties(data.getProperties)
    }
  }, [data])

  const context = {
    setProperties,
    properties,
  }

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>
}
export default ContextProvider
