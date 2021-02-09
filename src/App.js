import Header from './components/Header'
import SliderCard from './components/SliderCard'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Header />
      </Switch>
      </BrowserRouter>
  );
}

export default App;
