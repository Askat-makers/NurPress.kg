import React, { Component, useContext, useEffect } from "react";
import './NewsSlider.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { productsContext } from "../../contexts/ProductsContext";
import { Container } from "react-bootstrap";

const NewsSlider = () => {
  const settings = {
    dots: true,
    arrows: true,
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: 0,
    slidesToShow: 3,
    speed: 500
  };
  const { getNews, news } = useContext(productsContext)
  useEffect(() => {
    getNews()
  }, [])

  let arr = ["https://www.youtube.com/embed/4ICHd3XgkEQ", "https://www.youtube.com/embed/9djkPVC9izo", "https://www.youtube.com/embed/rRMXeD1PSQE", "https://www.youtube.com/embed/BYdIunQNO-g", "https://www.youtube.com/embed/fqtSL09g8-c", "https://www.youtube.com/embed/wuUaLvTIbe4"]

  return (
    <div className="news-slider">
      <Container>
        <h2>Мультимедиа</h2>
        <Slider {...settings}>
          {arr.map(item => (
            <div>
              <iframe width="350" height="315" src={item} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
          ))}
        </Slider>
      </Container>
    </div>
  );
}
export default NewsSlider