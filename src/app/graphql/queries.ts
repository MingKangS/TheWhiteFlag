import { gql } from 'apollo-angular'

export const getAllWhiteFlags = gql`query{
	allWhiteFlags{
		name
		
	}
}`