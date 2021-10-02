import WhiteFlag from '../models/whiteflag'
import { graphql,
	GraphQLObjectType,
	GraphQLString,
	GraphQLSchema,
	GraphQLID,
	GraphQLInt,
	GraphQLFloat,
	GraphQLList,
	GraphQLNonNull } from 'graphql';

	const CoordinatesType = new GraphQLObjectType({
		name: 'coordinates',
		fields: () => ({
			lat: { type: GraphQLFloat },
			lng: { type: GraphQLFloat },
		})
	})

const WhiteFlagType = new GraphQLObjectType({
    name: 'WhiteFlag',
    fields: ( ) => ({
				name: { type: GraphQLString },
        coordinates: { type: CoordinatesType },
        contact: { type: GraphQLString },
        description: { type: GraphQLString },
				priority: { type: GraphQLInt },
    })
});


const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        whiteflag: {
            type: WhiteFlagType,
            args: { name: { type: GraphQLString } },
            resolve(parent, args){
                return WhiteFlag.findById(args.name);
            }
        },
				allWhiteFlags: {
					type: new GraphQLList(WhiteFlagType),

					resolve(parent, args){
							return WhiteFlag.find({});
					}
			},
    }
});


const schema = new GraphQLSchema({
    query: RootQuery,
});

export default schema;
