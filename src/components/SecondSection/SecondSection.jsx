import React, { useContext, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { productsContext } from '../../contexts/ProductsContext';
import './SecondSection.css'

const SecondSection = () => {
  const { getSomeNews, someNews } = useContext(productsContext)
  useEffect(() => {
    getSomeNews()
  }, [])
  return (
    <Container>
      <h2>Политика</h2>
      <div className="second-section">
        {someNews.map((item) => (
          <div className="second-section-news">
            <img className="second-section-img" src={item.img} alt=""/>
            <p>{item.todayNews}</p>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default SecondSection;