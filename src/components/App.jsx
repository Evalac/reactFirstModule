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
      <Gaddjets
        url={data[2].image}
        title={data[2].name}
        description={data[2].description}
        price={data[2].price}
      />
      <Gaddjets
        url={data[3].image}
        title={data[3].name}
        description={data[3].description}
        price={data[3].price}
      />
    </div>
  );
};
