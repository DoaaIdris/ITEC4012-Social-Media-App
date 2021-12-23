import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Navbar } from './components/Navbar';
import { HomePage } from './components/pages/HomePage';
import { LoginPage } from './components/pages/LoginPage';
import { ProfilePage} from './components/pages/ProfilePage';
import { NewPostPage} from './components/pages/NewPostPage';


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/me">
          <ProfilePage />
        </Route>
        <Route exact path="/newPost">
          <NewPostPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;