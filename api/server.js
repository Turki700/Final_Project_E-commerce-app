// Setup Requirments
const express = require("express")
const app = express()
const mongoose = require("mongoose")
const PORT = process.env.PORT || 5000
app.use(express.json())
require("dotenv").config()
// Imports Routes
const userRoute = require("./routes/user")

// MongoDB Connection
mongoose.connect(process.env.DB_URL).then(() => console.log("DB Connected")).catch((err) => console.log("DB Error"))


// Routes
app.use("/api/users", userRoute)



app.listen(PORT, () => console.log(`Server up to running with Pott ${PORT}`))