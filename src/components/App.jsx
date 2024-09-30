import { PageTitle } from './PageTitle/PageTile';
import { EventBoard } from './EventBoard/EventBoard';
import upcomingEvents from '../upcoming-events.json';
import { FaBeer } from 'react-icons/fa';
import axios from 'axios';

export const App = () => {
  return (
    <>
      <FaBeer />
      <PageTitle text="24th core worlds coalition conference" />
      <EventBoard events={upcomingEvents} />
    </>
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
const proxy = `https://corsproxy.io/?`;
const url = `https://optovik22.net/ua/graphql`;

async function fecthRequest(params) {
  const request = await axios.get(`${url}`);
  return request;
}

// for (let i = 0; i < 1; i++) {
//   fecthRequest()
//     .then(data => console.log(data))
//     .catch(err => console.log(err));
// }
