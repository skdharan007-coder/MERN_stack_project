import { Link } from "react-router-dom"
import "../styles/Navbar.css"
function Navbar({ start }) {
    return (
        <>
            <nav>

                <div className="search">
                    <ul>
                        <li><i
                            className="fa-solid fa-magnifying-glass"
                            style={{ color: "rgb(0, 0, 0)" }}>
                        </i></li>

                        <li><p style={{ margin: 0 }}>SEARCH</p></li>
                    </ul>
                </div>

                <div className="logo">
                    <Link to={"/"}>

                        <img src="Logo.jpg" alt="logo" />

                    </Link>
                </div>


                <div className="account">
                    <Link to={"/account"}>

                        <ul>

                            <li className="home"><Link to={"/"}>Home</Link>
                            </li>

                            <li>Account</li>
                            <li>
                                <i className="fa-regular fa-circle-user" style={{ color: "rgb(0, 0, 0)" }}></i>
                            </li>
                        </ul>

                    </Link>
                </div>

                <div className="cart">

                    <ul>
                        <li>Cart({start})</li>
                    </ul>

                </div>

            </nav>
        </>
    )
}
export default Navbar