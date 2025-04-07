import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Import components for booking seats and viewing the menu
import BookSeatsPage from './components/BookSeatsPage';
import MenuPage from './components/MenuPage';

// Define routes
const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/book" component={BookSeatsPage} />
        <Route path="/menu" component={MenuPage} />
      </Switch>
    </Router>
  );
};
