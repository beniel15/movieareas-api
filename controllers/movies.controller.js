import Movie from '../models/movie.model.js';
export const MovieIndex=(req,res)=>{
    try{
        const movies=Movie.find();
        return res.status(200).json(movies);
        
    }catch(error){
        return res.status(500).json({message:error.message});
    }
}
export const MovieCreate=async (req,res)=>{

    const newMovie=new Movie({
        title:req.body.title,
        desc:req.body.desc,
        director:req.body.director,
    })
    try{
        const savedMovie=await newMovie.save();
        return res.status(201).json(savedMovie);
    }
    catch(error){
        return res.status(400).json({message:error.message});
    
    }
    return res.json(req.body);
}
export const MovieUpdate=async(req,res)=>{
    try{
        const updatedmovie=await Movie.findByIdAndUpdate(req.params.id,req.body,{new:true});
        return res.status(200).json(updatedmovie);
    }catch(error){
        return res.status(500).json({message:error.message});
    }
}
export const MovieDelete=async(req,res)=>{
    try{
        const deletedMovie=await Movie.findByIdAndDelete(req.params.id);
        return res.status(200).json(deletedMovie);
    }catch(error){
        return res.status(500).json({message:error.message});
    }
}

