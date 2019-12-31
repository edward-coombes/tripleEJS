const express = require('express')
const app = express()
const PORT = 3000

app.set("view engine", 'ejs')
app.use("/styles",express.static(__dirname + "/views/styles"))

app.get("/", (req, res) => {
	res.render("pages/index")
})

app.listen(process.env.LOCALPORT, () => {
	console.log(`process started on port ${process.env.LOCALPORT}!`)
})
