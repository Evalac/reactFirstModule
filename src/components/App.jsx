import data from '../data';
import { Section } from './Section';
import { GaddjetsLists } from './GaddjetsList';

export const App = () => {
  return (
    <div>
      <Section title="Якийсь заголовок">
        <GaddjetsLists items={data} />
      </Section>
      <Section />
    </div>
  );
};
