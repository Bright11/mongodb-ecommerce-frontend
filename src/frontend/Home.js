import axios from '../axios'
import React, { useState ,useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { updateproducts } from '../features/productSlice';
import HomeProduct from './HomeProduct';
import Loader from './Loader';
function Home({ setShownav, adminnav,user }) {
  setShownav(true);
  adminnav(false);
  //fetching products
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const lastproducts = products.slice(0, 8);
  const [checkitem, setCheckitem] = useState(false);
  useEffect(() => {
    axios.get("/products").then(({ data }) => dispatch(updateproducts(data)));
    setCheckitem(true);
  }, [dispatch]);

  //the end
  if (checkitem === false) {
    return <Loader />;
  }
  return (
    <div className="home">
      <div className="maincontent">
        <HomeProduct lastproducts={lastproducts} user={user} />
      </div>
    </div>
  );
}

export default Home