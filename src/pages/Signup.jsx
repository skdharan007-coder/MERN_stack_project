import { useState } from "react"
import "../styles/Signup.css"
import { Link } from "react-router-dom"
import axios from "axios"


function Signup() {

    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")

    const handleSubmit = async (e) => {

        e.preventDefault()

        try {

            const res = await axios.post(
                "http://localhost:8080/signup",
                {
                    email,
                    pass
                }
            )

            alert(res.data)

        } catch (err) {
            console.log(err)
        }
    }


    return (
        <div className="signup-form">
            <form onSubmit={handleSubmit}>

                <h1>Sign up here!</h1>

                <br />

                <input
                    type="email"
                    required
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)} />


                <br />

                <input
                    type="password"
                    required
                    placeholder="New Password"
                    onChange={(e) => setPass(e.target.value)}
                />

                <br />

                <button className="submit-btn" type="submit">
                    Submit
                </button>

            </form>
            <Link to="/account">
                Back to login
            </Link>

        </div>
    )
}
export default Signup