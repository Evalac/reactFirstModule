import Gaddjets from './Gaddjets';
import data from '../data';

export const App = () => {
  const isOnline = true; // рендер по умові
  return isOnline ? (
    <div>
      <Gaddjets
        url={data[0].image}
        title={data[0].name}
        description={data[0].description}
        price={data[0].price}
        quantity={data[0].quantity}
      />

      <Gaddjets
        url={data[1].image}
        title={data[1].name}
        description={data[1].description}
        price={data[1].price}
        quantity={data[1].quantity}
      />
      <Gaddjets
        url={data[2].image}
        title={data[2].name}
        description={data[2].description}
        price={data[2].price}
        quantity={data[2].quantity}
      />
      <Gaddjets
        url={data[3].image}
        title={data[3].name}
        description={data[3].description}
        price={data[3].price}
        quantity={data[3].quantity}
      />
      <Gaddjets
        url={data[4].image}
        title={data[4].name}
        description={data[4].description}
        price={data[4].price}
        quantity={data[4].quantity}
      />
      <Gaddjets
        url={data[5].image}
        title={data[5].name}
        description={data[5].description}
        price={data[5].price}
        quantity={data[5].quantity}
      />
      <Gaddjets
        url={data[6].image}
        title={data[6].name}
        description={data[6].description}
        price={data[6].price}
        quantity={data[6].quantity}
      />
    </div>
  ) : (
    'ofline'
  );
};
