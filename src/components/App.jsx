import GaddjetList from './GaddjetsList';
import data from '../data';
import Section from './Section';

export const App = () => {
  return (
    <div>
      <Section title="Якийсь заголовок">
        <GaddjetList items={data} />
      </Section>
      <Section />
    </div>
  );
};
