import './App.css';
import LandingPage from './webpages/landingPage';
import {Switch, Route} from 'react-router-dom';
import { ShopPage } from './webpages/shopPage';





function App() {
  return (
    <div className="App">
      <Switch>
    <Route exact path="/">
      <LandingPage />
    </Route>
    <Route exact path="/shop">
      <ShopPage />
    </Route>

      </Switch>
    </div>
  );
}

export default App;
