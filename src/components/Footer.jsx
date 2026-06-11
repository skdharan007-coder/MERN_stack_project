import "../styles/Footer.css"
import { Link } from "react-router-dom"
function Footer() {
    return (
        <>
            <footer>

                <div className="footer-logo">
                    <img src="Logo.jpg" alt="" />
                </div>

                <div className="quick-links">
                    <ul>

                        <li>
                            <h3>Quick Links</h3>
                        </li>

                        <li>
                            <Link to={"/"}>
                                Home
                            </Link>
                        </li>

                        <li>
                            <a href="#products">
                                Products
                            </a>
                        </li>

                        <li>
                            <Link to={"/account"}>
                                Account
                            </Link>
                        </li>

                        <li>
                            <Link to={"/cart"}>
                                Cart
                            </Link>
                        </li>

                    </ul>
                </div>

                <div className="collections">
                    <ul>
                        <li>
                            <h3>Collections</h3>
                        </li>

                        <li>New Arrival</li>
                        <li>Shirts</li>
                        <li>Tshirts</li>
                        <li>Pants</li>
                    </ul>
                </div>

                <div className="contact">

                    <ul>
                        <li>
                            <h3>Contact us</h3>
                        </li>

                        <li>
                            No.2/49/1, Sangothipalayam,
                            Kalkuli Thottam,
                            Karamathampatti Via,
                            Kaniyur Post – 641659
                        </li>
                    </ul>
                </div>

            </footer>

            <div className="copyright">
                <p>© 2026 Crocodile. – S.P. Retail Ventures Limited. All rights reserved.</p>
            </div>
        </>
    )
}
export default Footer