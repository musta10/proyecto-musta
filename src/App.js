import Header from './components/Header'
import SliderCard from './components/SliderCard'
import Nav from './components/Nav'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Nav />
      {/* <Header /> */}
      </Switch>
      </BrowserRouter>
  );
}

export default App;
