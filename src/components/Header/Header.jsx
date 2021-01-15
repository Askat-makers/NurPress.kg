import React, { useContext, useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { productsContext } from '../../contexts/ProductsContext';
import './Header.css'
import moment from 'moment'
import { Link } from 'react-router-dom';
// import 'moment/locale/'
const Header = () => {
  const { getNews, news } = useContext(productsContext)
  const [state, setState] = useState(moment().format('LLLL'))
  moment.updateLocale('ru', null)
  useEffect(() => {
    getNews()
  }, [])

  setInterval(() => {
    setState(moment().format('LLLL'))
  }, 1000)


  return (
    <Container>
      <div>
        <div className="time-area-block">
          <p>{state}</p>
        </div>
      </div>
      <div style={{display: "flex"}}>
        <div style={{width: "68.5%"}}>
          <div style={{width: "96%"}}>
            <img className="header-first-img" src="https://nurpress.kg/wp-content/uploads/2020/11/130918130526_%D0%A2%D0%9E%D0%9A%D0%A2%D0%9E%D0%A8%D0%95%D0%92.-760x490.jpg" alt="" />
            <p>Депутат из соцсетей узнал, что является одним из авторов проекта закона «О Конституции»</p>
          </div>
        </div>
        <div style={{width: "68.5%"}}>
          <div style={{width: "96%"}}>
            <img className="header-first-img" src="https://nurpress.kg/wp-content/uploads/2020/11/130918130526_%D0%A2%D0%9E%D0%9A%D0%A2%D0%9E%D0%A8%D0%95%D0%92.-760x490.jpg" alt="" />
            <p>Депутат из соцсетей узнал, что является одним из авторов проекта закона «О Конституции»</p>
          </div>
        </div>
      </div>
      <div>
        <h2>Последние новости дня</h2>
      </div>
      <div className="header-news-block">
        <div>
          <ul>
            {news.map(item => (
              <li className="list-of-news" key={item.id}><img className='list-of-news-img' src={item.img} alt="" /><Link to={`/details${item.id}`}><p>{item.todayNews}</p></Link></li>
            ))}
          </ul>
        </div>
        <div>
          <ul>
            {news.map(item => (
              <li className="list-of-news" key={item.id}><img className='list-of-news-img' src={item.img} alt="" /><p>{item.todayNews}</p></li>
            ))}
          </ul>
        </div>
        <div>
          <ul>
            {news.map(item => (
              <li className="list-of-news" key={item.id}><img className='list-of-news-img' src={item.img} alt="" /><p>{item.todayNews}</p></li>
            ))}
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default Header;