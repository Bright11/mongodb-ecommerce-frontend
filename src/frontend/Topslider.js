import "./Topslider.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
function Topslider({ lastproducts }) {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="topslider">
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={false}
        autoPlay={true}
        arrows={false}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        //autoPlay={this.props.deviceType !== "mobile" ? true : false}
        autoPlaySpeed={2000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        //deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {lastproducts?.map((slider) => (
          <div className="sliderimg">
            <img src={slider.pictures[0].url} alt={slider.name} />
          </div>
        ))}
      </Carousel>
    </div>
  );
  // return (
  //   <Carousel>
  //     <div>Item 1</div>
  //     <div>Item 2</div>
  //     <div>Item 3</div>
  //     <div>Item 4</div>
  //   </Carousel>
  // );
}

export default Topslider