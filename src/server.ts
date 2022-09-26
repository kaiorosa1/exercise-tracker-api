import express from 'express';

const app = express();

app.get("/", (request, response)=>{
    return response.json({ message: "Getting your data"});
});

app.post("/", (request, response)=>{
    return response.json({ message: "Saving your data"});
});

app.listen(3333,()=> console.log("Server is running!"));
