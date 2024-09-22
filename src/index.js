import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import datas from './';

// {const elemr = <span>HELLO</span>;
// const elema = <span>WORLD</span>;

// const jsxElement = (
//   <div className="react">
//     {elemr}
//     {elema}
//   </div>
// );
// console.log(jsxElement);

// ReactDOM.createRoot(document.querySelector('#root')).render(jsxElement);
// }

const data = {
  id: 1,
  name: 'Смартфон Apple iPhone 13',
  description:
    'Потужний процесор A15 Bionic і чудова камера для фото та відео.',
  price: 999.99,
  image: 'https://via.placeholder.com/200x150?text=iPhone+13',
};

const painting = (
  <div className="product-card">
    <img src={data.image} alt={data.name} className="product-image" />
    <div className="product-info">
      <h3 className="product-name">{data.name}</h3>
      <p className="product-description">{data.description}</p>
      <p className="product-price">Price: {data.price}</p>
      <button className="add-to-cart-btn">Додати в кошик</button>
    </div>
  </div>
);

console.log(painting);
ReactDOM.createRoot(document.querySelector('#root')).render(painting);
