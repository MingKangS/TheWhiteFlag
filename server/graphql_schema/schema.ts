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

const WhiteFlagType = new GraphQLObjectType({
    name: 'WhiteFlag',
    fields: ( ) => ({
				name: { type: GraphQLString },
        coordinates: { type: GraphQLID },
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
							console.log("1")
                return WhiteFlag.findById(args.name);
            }
        },
				allWhiteFlags: {
					type: new GraphQLList(WhiteFlagType),

					resolve(parent, args){
						console.log("2",WhiteFlag.find({}, (err, docs) =>{
							console.log(docs)
						}))
							return [
								   {
								     coordinates: { lat: -34.397, lng: 150.644 },

								    name: 'My Orphange',
								     contact: '0123456789',
								     description: 'Need food.',
								    priority: 3}
 ];
					}
			},
    }
});


const schema = new GraphQLSchema({
    query: RootQuery,
});

export default schema;
