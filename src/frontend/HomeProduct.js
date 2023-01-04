import React from "./HomeProduct.css";
import {useState} from 'react'
import { Visibility, Favorite, ShoppingCart } from "@material-ui/icons";
import { Link } from 'react-router-dom';
import { useAddToCartMutation } from "../services/appApi";
import Topslider from "./Topslider";
import HomeContent from "./HomeContent";


function HomeProduct({ lastproducts,user }) {
  // const [addToCart, { isSuccess }] = useAddToCartMutation();
const [addToCart] = useAddToCartMutation();
// const category1 = lastproducts.filter(
//   (product) => product.categoryid === "category1"
// );

  
  return (
    <div className="seecatproflex">
      <Topslider lastproducts={lastproducts} />
      <HomeContent/>
      <div className="homeProduct">
        <div className="homeproductcontent">
          {lastproducts.map((p) => (
            <>
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
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomeProduct