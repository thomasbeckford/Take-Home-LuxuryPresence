import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { hot } from 'react-hot-loader/root'
import ContextProvider from './context/ContextProvider'
// import TodoList from "./todos/TodoList";
import Home from './pages/Home'
import Listings from './pages/Listings'
import Details from './pages/Details'
import Main from './layouts/main'

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
})

const App = () => (
  <ApolloProvider client={client}>
    <ContextProvider>
      <Router>
        <Main>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/listings" component={Listings} />
            <Route path="/details" component={Details} />
          </Switch>
        </Main>
      </Router>
    </ContextProvider>
  </ApolloProvider>
)

export default hot(App)
