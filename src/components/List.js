import {React,} from "react";
import { Query } from "react-apollo"
import { gql } from "apollo-boost"

                                                               //criar um componente funcional simples, pois não requer um estado próprio.
const GET_ALL_COUNTRIES = gql`                        
	{
		countries {
			name
			code
			emoji
            currency
            native
		}
	}
`
const List = () => (                               //consulta para buscar a lista de todos os países com campos nome, code ,bandeira,moeda,natural
	<Query query={GET_ALL_COUNTRIES}>
		{({ loading, error, data }) => {
			if (loading) return <h1>Carregando</h1>
			if (error) return <h2>404. Parece que a API está OFF</h2>           //cliente Apollo rastreia automaticamente o carregamento e o estado de erro 

			return data.countries.map(({ name, code, emoji,currency,native, }) => (
				<div key={code}>
					<p>Nome: {name}</p>
					<p>Bandeira: {emoji}</p>
                    <p>Moeda: {currency}</p>
                    <p>Natural: {native}</p>
					<hr />
				</div>
			))
		}}
	</Query>
)

export default List


