import "./Alcategory.css";
import { useState, useEffect } from "react";
import { Link, useParams } from 'react-router-dom';
import axios from "../axios";
import Loader from "./Loader";
import { Favorite, ShoppingCart, Visibility } from "@material-ui/icons";
import { useAddToCartMutation } from "../services/appApi";
function Alcategory({ setShownav,user }) {
    setShownav(true)
  const [loadpage, setLoadpage] = useState(false);
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
const [addToCart] = useAddToCartMutation();

  const { producslug } = useParams();
  useEffect(() => {
    //setLoadpage(true);
    axios
      .get(`/products/category/${producslug}`)
      .then(({ data }) => {
        // if (data) {
        //   setLoadpage(false);
        //   setProducts(data);
        // } else {
        //   setLoadpage(true);
        // }
         setLoadpage(false);
         setProducts(data);
      })
      .catch((e) => {
        setLoadpage(false);
        console.log(e.message);
      });
  });
  console.log("product", products);
  if (!products) {
    return <Loader />;
  }
  const productsSearch = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="homeProduct">
      <div className="homeproductcontent">
        {products.length === 0 ? (
          <h1>No product to show</h1>
        ) : (
          // <div className="categoryallproduct">
          //   {productsSearch?.map((p) => (
          //     <h1>{p.name}</h1>
          //   ))}
          // </div>
          <>
            {products?.map((p) => (
              <div className="seecatproflex">
                {p.categoryid && (
                  <>
                    {/* <h1>{p.categoryid.name}</h1> */}
                    <div className="mainitems" key={p._id}>
                      <div className="mainitemimg">
                        <img src={p.pictures[0].url} alt={p.name} />
                        <div className="addtocartholder">
                          <div className="addtocarshow">
                            <Favorite className="carticon" />
                            <p
                              className="cartbtn"
                              onClick={() =>
                                addToCart({
                                  userId: user._id,
                                  productId: p._id,
                                  price: p.price,
                                  image: p.pictures[0].url,
                                })
                              }
                            >
                              <ShoppingCart />
                              Add to Cart
                            </p>
                            <Link to={`details/${p._id}`}>
                              <Visibility className="carticon" />
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="pricandname">
                        <div className="pricen">
                          <h1>{p.name}</h1>
                          <p>$&nbsp;{p.price}</p>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </>
        )}
      </div>
      <div className="alcategoryleft">
        {/* <h1>{producslug.charAt(0).toUpperCase() + producslug.slice(1)}</h1> */}
      </div>
    </div>
  );
}

export default Alcategory