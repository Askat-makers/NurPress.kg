import React from 'react';
import './Footer.css'
import { Container } from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons'
import nurpressLogo from '../../img/nurpress-logo.png'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <div>
          <Link to="/">
            <img className="nurpress-icon-footer" src={nurpressLogo} alt="" />
          </Link>
        </div>
        <div className="footer-block">
          <div>
            <ul>
              <li>О нас</li>
              <li>Правовая информация</li>
              <li>Контакты</li>
              <li>Вакансии</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Телефон: <a href="tel:+996312625652">0312 62 56 52</a></li>
              <li>Почта: <a href="mailto:nurpress@gmail.com">nurpress@gmail.com</a></li>
              <li>Адрес: <a target="_blank" href="https://goo.gl/maps/fYSMD2MceM6XTNGE9">г. Бишкек проспект Чуй 207</a> </li>
            </ul>
          </div>
          <div>
            <SocialIcon className="social-icons-footer" url="http://twitter.com/" />
            <SocialIcon className="social-icons-footer" url="https://www.instagram.com/nur.press/" />
            <SocialIcon className="social-icons-footer" url="https://www.facebook.com/public/Nur-Press?page=3" />
            <SocialIcon className="social-icons-footer" url="http://web.telegram.org" />
            <SocialIcon className="social-icons-footer" url="http://youtube.com" />
            <SocialIcon className="social-icons-footer" url="http://whatsapp.com" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;