import React,{useEffect,useState} from 'react'
import { useSelector } from 'react-redux';
import axios from "../axios"
import Loader from './Loader';
function Orderspage() {
  const user = useSelector((state) => state.user);
  const products = useSelector((state) => state.products);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [orderToShow, setorderToShow] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios //orderspayment
      .get(`/orderspayment/${user._id}/orders`)
      // .get(`/users/${user._id}/orders`)
      .then(({ data }) => {
        setLoading(false);
        setOrders(data);
      })
      .catch((e) => {
        setLoading(false);
        console.log(e);
      });
  }, []);
  if (loading) {
    return <Loader />;
  }
  if (orders.length === 0) {
    return <div className="noorder">No orders</div>;
  }
  return (
    <div className="orders">
      {orders.map((order) => (
        <>
          <h1>{order._id}</h1>
          <h1
            className={`${
              order.status === "processing" ? "warning" : "success"
            }`}
          >
            {order._id}
          </h1>
          <h1>{order.total}</h1>
        </>
      ))}
      <h1>hi order</h1>
    </div>
  );
}

export default Orderspage;