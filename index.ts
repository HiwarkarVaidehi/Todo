import express, { Request, Response } from "express";
import dotenv from "dotenv";

// configures dotenv to work in your application
dotenv.config();
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (request: Request, response: Response) => { 
  response.status(200).send("Hello World");
}); 
app.get("/todo/{id}", (request: Request, response: Response)=>{
    response.status(200).send("this is a get req");
});
app.get("/todo/create", (request: Request, response: Response)=>{
    response.status(200).send("this is a post method");
});
app.get("/todo/delete", (request: Request, response: Response)=>{
    response.status(200).send("this is a DELETE method");
});
app.get("/todo/update", (request: Request, response: Response)=>{
    response.status(200).send("this is a patch method");
});


app.listen(PORT, () => { 
  console.log("Server running at PORT: ", PORT); 
});