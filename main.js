import express from "express";
import movieRoutes from './routes/movies.jroute.js';
const app=express();
const PORT=6969;
app.get ("/",(req,res)=>{
    res.json({
        message: "Hello, World!"
    });  
})
//client->middleware->server
app.use('/movies',movieRoutes);


app.listen(PORT,()=>{
    console.log(`The server is running at http://localhost:${PORT}`);
});