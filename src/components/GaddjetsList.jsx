import PropTypes from 'prop-types';
import Gaddjets from './Gaddjets';

export default function GaddjetsLists({ items }) {
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

GaddjetsLists.propsTypes = {};
