import React from 'react';
import { Link } from 'react-router-dom';
import './DropdownBlock.css'

const DropdownBlock = () => {

  let accItem = document.getElementsByClassName('accordionItemHeading');

  function toggleItem(e) {
    let itemClass = e.target.parentNode.className;
    accItem[0].parentNode.className = 'accordionItem close'
    accItem[1].parentNode.className = 'accordionItem close'
    accItem[2].parentNode.className = 'accordionItem close'
    if (itemClass == 'accordionItem close') {
      e.target.parentNode.className = 'accordionItem open';
    }
  }

  return (
    <div>
      <div className="accordionWrapper">
        <div className="accordionItem close">
          <h2 onClick={toggleItem} className="accordionItemHeading">Новости мира</h2>
          <div className="accordionItemContent">
            <ul>
              <li>
                <span>1</span>
                <Link to="/">
                  <p>Шайлоонун жыйынтыгы, Жапаровдун жеңиши</p>
                </Link>
              </li>
              <li>
                <span>2</span>
                <Link>
                  <p>Шайлоонун жыйынтыгы, Жапаровдун жеңиши</p>
                </Link>
              </li>
              <li>
                <span>3</span>
                <Link>
                  <p>Шайлоонун жыйынтыгы, Жапаровдун жеңиши</p>
                </Link>
              </li>
              <li>
                <span>4</span>
                <Link>
                  <p>Шайлоонун жыйынтыгы, Жапаровдун жеңиши</p>
                </Link>
              </li>
              <li>
                <span>5</span>
                <Link>
                  <p>Шайлоонун жыйынтыгы, Жапаровдун жеңиши</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="accordionItem close">
          <h2 onClick={toggleItem} className="accordionItemHeading">Технологии</h2>
          <div className="accordionItemContent">
            <ul>
              <li>
                <span>1</span>
                <Link to="/">
                  <p>Шайлоонун жыйынтыгы, Жапаровдун жеңиши</p>
                </Link>
              </li>
              <li>
                <span>2</span>
                <Link>
                  <p>Шайлоонун жыйынтыгы, Жапаровдун жеңиши</p>
                </Link>
              </li>
              <li>
                <span>3</span>
                <Link>
                  <p>Шайлоонун жыйынтыгы, Жапаровдун жеңиши</p>
                </Link>
              </li>
              <li>
                <span>4</span>
                <Link>
                  <p>Шайлоонун жыйынтыгы, Жапаровдун жеңиши</p>
                </Link>
              </li>
              <li>
                <span>5</span>
                <Link>
                  <p>Шайлоонун жыйынтыгы, Жапаровдун жеңиши</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="accordionItem close">
          <h2 onClick={toggleItem} className="accordionItemHeading">Самые обсуждаемые</h2>
          <div className="accordionItemContent">
            <ul>
              <li>
                <span>1</span>
                <Link to="/">
                  <p>Шайлоонун жыйынтыгы, Жапаровдун жеңиши</p>
                </Link>
              </li>
              <li>
                <span>2</span>
                <Link>
                  <p>Шайлоонун жыйынтыгы, Жапаровдун жеңиши</p>
                </Link>
              </li>
              <li>
                <span>3</span>
                <Link>
                  <p>Шайлоонун жыйынтыгы, Жапаровдун жеңиши</p>
                </Link>
              </li>
              <li>
                <span>4</span>
                <Link>
                  <p>Шайлоонун жыйынтыгы, Жапаровдун жеңиши</p>
                </Link>
              </li>
              <li>
                <span>5</span>
                <Link>
                  <p>Шайлоонун жыйынтыгы, Жапаровдун жеңиши</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropdownBlock;