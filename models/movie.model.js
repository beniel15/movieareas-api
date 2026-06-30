import {Schema,model} from 'mongoose';
const movieSchema=new Schema({
    title:String,
    desc:{ type: String },
    director:String,
});
//create your model
const Movie=model("Movie",movieSchema);
export default Movie;