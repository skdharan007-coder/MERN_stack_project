import "../styles/Home.css"
import { Link } from "react-router-dom"
import product from "./Products"

function Home({added}) {

    let viewcart = (e) => { e.target.textContent="View Cart";
        added((add) => add + 1);
    }
    return (
        <>

            <div className="cover">
            </div>

            <h1 className="products-title">Products</h1>

            <div className="home-products" id="products">

                {product.map((item) => (

                    <div key={item.id} className="product-card">

                        <img src={item.image} alt={item.name} />

                        <h3>{item.name}</h3>

                        <p>₹{item.price}</p>

                        <button className="cart-btn" onClick={viewcart}>
                            Add to Cart
                        </button>

                    </div>
                ))}
            </div>
        </>
    )
}
export default Home