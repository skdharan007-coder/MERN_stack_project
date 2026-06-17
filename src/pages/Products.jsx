import products_set from "../components/Products_set"
import "../styles/Products.css"

function Products({ added }) {

    const viewcart = () => {
        added((prev) => prev + 1);
    };

    return (
        <>
            <div className="all-products">

                {products_set.map((item) => (

                    <div key={item.id} className="all-product-card">

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
    );
}
export default Products