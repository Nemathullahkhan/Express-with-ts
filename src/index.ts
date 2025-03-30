import express, { Request, Response } from "express"

const app = express();
import userRouters from "./routes/users"

const PORT:number = 4000; 

 
/**
 * 
// What we did? Added type annotation of Request and Response from express server.. 
// Doubt: Before that what is type annotation? 
// Clarification: Type annotation is a way to tell the typescript compiler that a variable is of a certain type. For example, let x: number; tells the compiler that x is a number. 

// app.get("/someurl",(request: Request, response: Response)=>{
//     response.send("you got this! Keep it coming~")
// })
 */

app.use('/api/users',userRouters); // userRouters act as controller? Am i correct? 



app.get("/api/user",async(request: Request, response: Response)=>{
    const users = await fetch('https://dummyjson.com/todos')
    const data = await users.json();
    response.send(data);
})
app.get("")
app.listen(PORT,()=>{
    console.log(`Server running at ${PORT}`)
})