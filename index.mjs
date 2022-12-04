import express from "express";

const app = express()
const port = process.env.PORT || 5000

app.get("/", (req, res, next) => {
    res.send({success: true, message: "Smart App Home"})
})

app.post("/auth/register", (req, res, next) => {
    res.send({success: true, message: "Registration Succussful"})
})

app.post("/auth/login", (req, res, next) => {
    res.send({success: true, message: "Login Successful"})
})

app.listen(port, console.log(`App open on port ${port}`))