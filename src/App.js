// import React from 'react';
// import './App.css';
// import { Switch, Route } from 'react-router-dom';

// import HomePage from './pages/homepage/homepage.component';

// const HatsPage = () => (
//   <div>
//     <h1>HATS PAGE </h1>
//   </div>
// );

// function App() {
//   return (
//     <div>
//       {/* <HomePage /> */}

//       <Switch>
//         <Route exact path='/' component={HomePage} />
//         <Route path='/hats' component={HatsPage} />
//       </Switch>

//     </div>
//   );
// }

// export default App;

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE </h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/hats' component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
