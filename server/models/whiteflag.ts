import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const WhiteFlagSchema = new Schema({
	name: String,
  coordinates: {
		lat: Number,
		lng: Number
	},
  contact: String,
	description: String,
	priority: Number
});

const WhiteFlag = mongoose.model("whiteflag", WhiteFlagSchema);

export default WhiteFlag;