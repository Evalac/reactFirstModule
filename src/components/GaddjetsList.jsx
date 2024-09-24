import PropTypes from 'prop-types';
import Gaddjets from './Gaddjets';

function GaddjetList({ items }) {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <Gaddjets
            url={item.image}
            title={item.name}
            description={item.description}
            price={item.price}
            quantity={item.quantity}
          />
        </li>
      ))}
    </ul>
  );
}
GaddjetList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};

export default GaddjetList;
