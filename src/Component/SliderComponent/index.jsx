
import Slider from "react-slick";
import SliderItem from "../SliderItem";
import './index.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderComponent = (props) =>{
  const {data} = props
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {data.map((each)=><SliderItem key={each.id} each={each}/>)}
      </Slider>
    </div>
  );
}

export default SliderComponent;
