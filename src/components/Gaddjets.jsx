import PropTypes from 'prop-types';
import defaultPic from './default-image.jpg';

export default function Gaddjets({
  url = defaultPic,
  title = 'не відомо',
  description,
  price,
  quantity,
}) {
  return (
    <div className="product-card">
      <img src={url} alt={title} className="product-image" loading="lazy" />
      <div className="product-info">
        <h3 className="product-name">{title}</h3>
        <p className="product-description">{description}</p>
        <p className="product-price">Price: {price}</p>
        <p className="product-price">
          Дуступність:
          {quantity < 15 ? `Товар закінчується` : `Є в наявності ${quantity}`}
        </p>
        <button className="add-to-cart-btn">Додати в кошик</button>
      </div>
    </div>
  );
}

Gaddjets.propTypes = {
  url: PropTypes.string.isRequired, //isRequired це означає що проп обовязковий, якщо його не буде десь в коді то буде помилдка
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};

// import PropTypes from 'prop-types';
// import Gaddjets from './Gaddjets';

// function GaddjetList({ items }) {
//   return (
//     <ul>
//       {items.map(item => (
//         <li key={item.id}>
//           <Gaddjets
//             url={item.image}
//             title={item.name}
//             description={item.description}
//             price={item.price}
//             quantity={item.quantity}
//           />
//         </li>
//       ))}
//     </ul>
//   );
// }
// GaddjetList.propTypes = {
//   items: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//     })
//   ),
// };

// export default GaddjetList;
