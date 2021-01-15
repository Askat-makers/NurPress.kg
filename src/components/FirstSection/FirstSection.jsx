import React, { useContext, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { productsContext } from '../../contexts/ProductsContext';
import './FirstSection.css'

const FirstSection = () => {
  const { news, getNews } = useContext(productsContext)

  useEffect(() => {
    getNews()
  }, [])
  return (
    <Container>
      <h2>Спорт</h2>
      <div className="first-section">
        {news.map((item) => (
          <div>
            <img src={item.img} alt="" />
          </div>
        ))}
      </div>
    </Container>
  );
};

export default FirstSection;