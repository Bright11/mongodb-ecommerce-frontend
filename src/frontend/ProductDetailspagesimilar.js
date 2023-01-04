import "./ProductDetailspagesimilar.css";
import { ShoppingCart } from '@material-ui/icons';

function ProductDetailspagesimilar({ similer, category }) {
  return (
    <div className="productDetailspagesimilar">
          <h1>Similar Product  { category}</h1>
      <div className="similarpr">
        {similer?.map((s) => (
          <div className="similarproductflex" key={s._id}>
            <div className="datasimilar">
              <img
                className="datasimilarimg"
                src={s.pictures[0].url}
                alt="product"
              />
            </div>
            <h1 className="dpname">{s.name}</h1>
            <button className="detailscartbtn">
              <p className="dprice">Price {s.price}</p> Add to Cart
              <ShoppingCart />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductDetailspagesimilar;
