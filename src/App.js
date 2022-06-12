import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import InfoSection from './components/InfoSection';
import Discover from './components/Discover';

function App() {
  return (
    <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" component={InfoSection} exact />
          <Route path="/discover" component={Discover} exact />
        </Switch>
    </BrowserRouter>
  );
}

export default App;
