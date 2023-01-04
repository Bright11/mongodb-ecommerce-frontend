import React from "./productDetailspagedata.css";
import { useState } from 'react';
import { useAddToCartMutation } from "../services/appApi";
import Toastify from "./Toastify";

function ProductDetailspagedata({ _id, description, category, name, pictures, price,user }) {
  const [qtyp, setQtyp] = useState(1)
  const [addToCart, { isSuccess }] = useAddToCartMutation();
    const increas = () => {
        setQtyp(qtyp+1)
    }
    const decreas = () => {
        if (qtyp === 1) {
            
        } else {
             setQtyp(qtyp - 1);
       }
    };
    return (
      <div className="productDetailspagedata">
        {/* {isSuccess&& } */}
        <div className="productdetails-itemholder">
          <div className="productDetailspagedataimg">
            <img className="detailsimg" src={pictures[0].url} alt="product" />
          </div>
          <div className="productDetailspagedatainfo">
            <h1 className="detailsname">Category {category}</h1>
            <h1 className="detailsname">{name}</h1>
            <p className="detailsname">Price{price}</p>

            <div className="qtystyle">
              <button className="qtystylebtn" onClick={decreas}>
                -
              </button>
              <input
                className="qtystyleinput"
                type="number"
                readOnly
                value={qtyp}
              />
              <button className="qtystylebtn" onClick={increas}>
                +
              </button>
            </div>

            <button
              onClick={() =>
                addToCart({
                  userId: user._id,
                  productId: _id,
                  price,
                  image: pictures[0].url,
                })
              }
            >
              Add to Cart
            </button>
          </div>
        </div>
        <p className="detaildescript">{description}</p>
      </div>
    );
}

export default ProductDetailspagedata