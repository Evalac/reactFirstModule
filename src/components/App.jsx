import data from '../data';
import Section from './Section';
import GaddjetLists from './GaddjetsList';

export const App = () => {
  return (
    <div>
      <Section title="Якийсь заголовок">
        <GaddjetLists items={data} />
      </Section>
      <Section />
    </div>
  );
};
