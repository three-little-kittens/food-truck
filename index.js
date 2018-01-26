// -----------------------------------------------------------------------------
// IMPORT MODULES

const express = require("express")
const bodyParser = require("body-parser")

// -----------------------------------------------------------------------------
// CONFIGURE

const app = express()
const HOST = "localhost"
const PORT = 3004

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}))
// parse application/json
app.use(bodyParser.json())


// -----------------------------------------------------------------------------


const routePartners = require("./route/index")


app.use("/partners", routePartners)

// -----------------------------------------------------------------------------
// RUN THE SERVER APP WITH EXPRESS

app.listen(PORT, HOST, () => {
  console.log("Server is listening on localhost:3004")
})
