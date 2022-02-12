import express from "express"
import cors from "cors"
import restaurants from "./api/restaurants.route.js"

const app = express()

app.use(cors())
app.use(express.json()) // server will be able to accept/read json

app.use("/api/v1/restaurants", restaurants)


app.use("*", (req,res)=> res.status(404).json({error:"404 not found"}))

export default app