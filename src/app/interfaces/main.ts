export type WhiteFlag = {
	name: String,
  coordinates: {
		lat: Number,
		lng: Number
	},
  contact: String,
	description: String,
	priority: Number
}

export type Query = {
	WhiteFlagList: WhiteFlag[];
}