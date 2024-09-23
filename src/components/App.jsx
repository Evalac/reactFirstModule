import GaddjetList from './GaddjetsList';
import data from '../data';

export const App = () => {
  return (
    <div>
      <GaddjetList items={data} />
    </div>
  );
};
