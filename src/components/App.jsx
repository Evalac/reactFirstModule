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

// String.prototype.toAlternatingCase = function () {
//   console.log(
//     this.split('')
//       .map(letter =>
//         letter === letter.toLowerCase()
//           ? letter.toUpperCase()
//           : letter.toLowerCase()
//       )
//       .join('')
//   );
// };

// 'hello world'.toAlternatingCase();
