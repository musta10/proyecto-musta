import Nav from './components/Nav'
// import Lista from './components/Lista'
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
