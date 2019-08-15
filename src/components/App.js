import React from 'react';
// react-router-dom
import { BrowserRouter, Route, Link } from 'react-router-dom';

const PageOne = () => {
  return (
    <div>
      PageOne<br />
      <Link to="/pagetwo" >Nav to Page Two</Link>
    </div>
    );
};

const PageTwo = () => {
  return (
    <div>
      PageTwo<br />
      <Link to="/" >Nav to Page One</Link>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/" exact component={PageOne} />
          <Route path="/pagetwo" component={PageTwo} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;