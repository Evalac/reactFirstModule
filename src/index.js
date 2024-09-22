import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';

// {
//   const elemr = <span>HELLO</span>;
//   const elema = <span>WORLD</span>;

//   const jsxElement = (
//     <div className="react">
//       {elemr}
//       {elema}
//     </div>
//   );
//   console.log(jsxElement);

//   ReactDOM.createRoot(document.querySelector('#root')).render(jsxElement);
// }

ReactDOM.createRoot(document.querySelector('#root')).render(<App />);
