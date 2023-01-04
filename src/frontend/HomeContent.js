import {  HighQuality, Settings, ShopRounded } from '@material-ui/icons';
import "./HomeContent.css";

function HomeContent() {
    return (
      <div className="homeContent">
        <div className="content">
          <Settings className="home-icon" />
          <p className="content-text"> Safe Delivery</p>
          <p className="content-text">World wilde</p>
        </div>
        <div className="content">
          <ShopRounded className="home-icon" />
          <p className="content-text">Secure</p>
        </div>
        <div className="content">
          <HighQuality className="home-icon" />
          Quality Products
        </div>
      </div>
    );
}

export default HomeContent