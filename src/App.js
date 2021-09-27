import React from "react";
import "./App.css";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
// import { auth, provider } from './firebase'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login"
import { useStateValue } from "./StateProvider"


function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    //BEM naming convention
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <Router>
            <Sidebar />
            <Switch>
              <Route path="/rooms/:roomId">
                <Chat />
              </Route>
              <Route path="/">
                <Chat />
              </Route>
            </Switch>
          </Router>
        </div>
      )}
    </div>
  );
}

export default App;



//Project Console: https://console.firebase.google.com/project/whatsapp-clon3/overview                                                        ed Zaid Khan\AppData\Roa
//Hosting URL: https://whatsapp-clon3.web.app