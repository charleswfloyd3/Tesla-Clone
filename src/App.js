import './App.css';
import {Switch, Route} from 'react-router-dom';
import { ShopPage } from './webpages/shopPage/shopPage';
import LandingPage from './webpages/landingPage/landingPage';





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
