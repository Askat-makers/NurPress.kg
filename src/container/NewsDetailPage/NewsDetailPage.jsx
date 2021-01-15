import React, { useContext, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer/Footer'
import Navibar from '../../components/Navibar/Navibar';
import SimplePaper from '../../components/Paper/Paper';
import { productsContext } from '../../contexts/ProductsContext';
import './NewsDetailPage.css'


const NewsDetailPage = (props) => {
  const { getDetailsOfNews, newsDetails, getNews, news } = useContext(productsContext)
  useEffect(() => {
    getDetailsOfNews(props.computedMatch.params.id)
    getNews()
  }, [])
  console.log(newsDetails)
  return (
    <>
      <Navibar />
      {newsDetails ?
        (
          <Container>
            <div style={{ paddingTop: 50 }}>
              <div style={{ display: "flex" }}>
                {news.map(item => (
                  <marquee className="run-string" behavior="scroll" direction="left">{item.todayNews}</marquee>
                ))}
              </div>
              <div style={{ display: "flex" }}>
                <div className="col-lg-8 only-news-detail">
                  <div >
                    <div>
                      <img className="details-page-img" src={newsDetails.img} alt="" />
                      <h3>{newsDetails.todayNews}</h3>
                    </div>
                    <div>
                      <h5>Комментарии</h5>
                      <SimplePaper />
                      <div className="d-flex justify-content-start">
                        <div className="w-100">
                          <input className="d-block w-100 mt-5 mb-3" type="text" placeholder="Ваше имя" />
                          <textarea className="w-100" placeholder="Ваш комментарий" name="" id="" cols="30" rows="5"></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 second-block-in-news-detail-page">
                  <div>
                    <h4>Популярные новости</h4>
                    {news.map(item => (
                      <div key={item.id}>
                        <img className="w-100" src={item.img} alt="" />
                        <Link><p>{item.todayNews}</p></Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Container>
        ) :
        (null)}
      <Footer />
    </>
  );
};

export default NewsDetailPage;