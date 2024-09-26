import data from '../data';
import { Section } from './Section';
import { GaddjetsLists } from './GaddjetsList';
import { PageTitle } from './PageTitle/PageTile';
import { EventBoard } from './EventBoard/EventBoard';
import upcomingEvents from '../upcoming-events.json';

export const App = () => {
  return (
    <div>
      {/* <Section title="Якийсь заголовок">
        <GaddjetsLists items={data} />
      </Section>
      <Section /> */}

      <PageTitle text="24th core worlds coalition conference" />
      <EventBoard events={upcomingEvents} />
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
