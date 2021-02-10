import SliderCard from './components/SliderCard'
import Nav from './components/Nav'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Nav />
      </Switch>
      </BrowserRouter>
  );
}

export default App;
