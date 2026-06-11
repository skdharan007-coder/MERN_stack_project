const ex = require("express")
console.log("server started")
const app = ex()
const mdconnect = require("../Backend/db")
const modal = require("../Backend/model")
const cors = require("cors")
const pat = require("path")
app.use(ex.urlencoded({ extended: true }))
app.use(ex.json())
app.use(cors())

app.post("/signup", async (req, res) => {

    try {

        const check = await modal.findOne({
            email: req.body.email
        })

        if (check) {
            return res.send("Account already exists")
        }

        const detail = new modal({

            email: req.body.email,
            password: req.body.pass
        })

        await detail.save()

        res.send("Signup Success")

    } catch (err) {
        res.status(500).send(err.message)
    }

})

// Login
app.post("/login", async (req, res) => {

    try {

        const user = await modal.findOne({
            email: req.body.email
        })

        if (!user) {
            return res.send("You don't have an account")
        }

        if (user.password !== req.body.pass) {
            return res.send("Wrong Password")
        }

        res.send("Login Success")

    } catch (err) {
        res.status(500).send(err.message)
    }

})

app.listen(8080)
