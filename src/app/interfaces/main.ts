export type WhiteFlag = {
	name: string,
  coordinates: {
		lat: number,
		lng: number
	},
  contact: string,
	description: string,
	priority: number
}

export type Query = {
	WhiteFlagList: WhiteFlag[];
}