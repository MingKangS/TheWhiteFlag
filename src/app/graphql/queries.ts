import { gql } from 'apollo-angular'

export const getAllWhiteFlags = gql`query{
	allWhiteFlags{
		name,
		coordinates{
			lat,
			lng,
		},
		priority,
		
	}
}`