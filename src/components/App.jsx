import Gaddjets from './Gaddjets';
import data from '../data';

export const App = () => {
  const isOnline = true; // рендер по умові
  return isOnline ? (
    <div>
      {data.map(gaddjet => (
        <Gaddjets
          key={gaddjet.id}
          url={gaddjet.image}
          title={gaddjet.name}
          description={gaddjet.description}
          price={gaddjet.price}
          quantity={gaddjet.quantity}
        />
      ))}
    </div>
  ) : (
    'ofline'
  );
};
