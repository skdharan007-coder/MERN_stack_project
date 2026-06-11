import "../styles/Account.css"
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Account() {

    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    const navigate = useNavigate();

    const handleLogin = async (e) => {

        e.preventDefault();

        try {

            const res = await axios.post(
                "http://localhost:8080/login",
                {
                    email,
                    pass
                }
            );

            alert(res.data);

            if (res.data === "Login Success") {
                navigate("/");
            }

        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="login-form">

            <form onSubmit={handleLogin}>

                <h1>Sign in with email</h1>

                <input
                    type="email"
                    required
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                />

                <br />

                <input
                    type="password"
                    required
                    placeholder="Password"
                    onChange={(e) => setPass(e.target.value)}
                />

                <br />

                <button className="submit-btn" type="submit">
                    Login
                </button>

            </form>

            <Link to="/signup">
                Create Account
            </Link>

        </div>
    )
}

export default Account;