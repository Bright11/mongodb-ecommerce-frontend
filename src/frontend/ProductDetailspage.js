import "./ProductDetailspage.css";
import Loader from './Loader';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from '../axios'
//import axios from 'axios'
import { useParams } from "react-router-dom";
import ProductDetailspagedata from "./ProductDetailspagedata";
import ProductDetailspagesimilar from "./ProductDetailspagesimilar";
function ProductDetailspage({ setShownav,user }) {
   setShownav(true);
  const { id } = useParams();
 // const [product, setProduct] = useState(null);
  const [product, setProduct] = useState(null);
  const [similer, setSimiler] = useState(null);
  

  //const [pro, setPro] = useState(null);
  useEffect(() => {
    axios.get(`/products/${id}`).then(({ data }) => {
      setProduct(data.product);
      setSimiler(data.similer);
     
    });
  }, [id]);
  if (!product) {
    return <Loader />;
  }
 console.log("similar", similer);
  return (
    <div className="ProductDetailspage">
      <ProductDetailspagedata {...product} user={user} />
      {similer && <ProductDetailspagesimilar similer={similer} {...product} />}
    </div>
  );
}

export default ProductDetailspage;