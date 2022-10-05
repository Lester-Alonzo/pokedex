import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql
} from "@apollo/client"
import PockemonProvider from "./context/pockemoncontext"
import "./index.css"

const client = new ApolloClient({
  uri: "https://graphql-pokeapi.graphcdn.app/",
  cache: new InMemoryCache()
})

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <PockemonProvider>
        <App />
      </PockemonProvider>
    </ApolloProvider>
  </React.StrictMode>
)
