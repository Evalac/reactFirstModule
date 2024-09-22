import Gaddjets from './Gaddjets';
import data from '../data';

export const App = () => {
  return (
    <div>
      <Gaddjets
        url={data[0].image}
        title={data[0].name}
        description={data[0].description}
        price={data[0].price}
      />

      <Gaddjets
        url={data[1].image}
        title={data[1].name}
        description={data[1].description}
        price={data[1].price}
      />
    </div>
  );
};
