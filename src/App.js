import './App.css';
import {Switch, Route} from 'react-router-dom';
import { ShopPage } from './webpages/shopPage/shopPage';
import LandingPage from './webpages/landingPage/landingPage';
import ModelXpage from './webpages/modelXpage/modelXpage';
import ModelSpage from './webpages/modelSpage/modelSpage';
import Model3page from './webpages/model3page/model3page';
import ModelYpage from './webpages/modelYpage/modelYpage';
import SolarRoofPage from './webpages/solarRoofPage/solarRoofPage';
import SolarPanelsPage from './webpages/solarPanelsPage/solarPanelsPage';





function App() {
  return (
    <div className="App">
      <Switch>
    <Route exact path="/">
      <LandingPage />
    </Route>

    <Route exact path="/models">
      <ModelSpage />
    </Route>
    <Route exact path="/model3">
      <Model3page />
    </Route>

    <Route exact path="/modelx">
      <ModelXpage />
    </Route>

    <Route exact path="/modely">
      <ModelYpage />
    </Route>

    <Route exact path="/solarroof">
      <SolarRoofPage />
    </Route>
    <Route exact path="/solarpanels">
      <SolarPanelsPage />
    </Route>    
    <Route exact path="/shop">
      <ShopPage />
    </Route>
      </Switch>
    </div>
  );
}

export default App;
