import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import ApolloClient from "apollo-boost"
import { ApolloProvider } from "react-apollo"


const client = new ApolloClient({                                               //especificar o URI do endpoint 
	uri: "https://countries.trevorblades.com/"
})

ReactDOM.render(
	<ApolloProvider client={client}>
		<App />
	</ApolloProvider>,
	document.getElementById("root")
)



