import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom/cjs/react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Friends from './components/Friends/Friends';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';
import FriendDetails from './components/FriendDetails/FriendDetails';
import initializationAuth from './Firebase/Firebase.init';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

initializationAuth();

const provider = new GoogleAuthProvider();

const handleGoogleSignIn = () => {
  const auth = getAuth();
  signInWithPopup(auth, provider)
    .then(result => {
      const user = result.user;
      console.log(user);
    })
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <button onClick={handleGoogleSignIn}>Sign in Google</button>
        <Header></Header>
        <Switch>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route path="/friends">
            <Friends></Friends>
          </Route>
          <Route path="/friend/:friendId">
            <FriendDetails></FriendDetails>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
