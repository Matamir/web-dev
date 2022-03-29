import './App.css';
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/explore.css'

import {BrowserRouter, Route, Routes} from "react-router-dom";
import HelloWorld from "./components/hello-world";
import Labs from "./components/labs/index";
import Tuiter from "./components/tuiter/index";
import HomeScreen from "./components/tuiter/HomeScreen/index";
import ExploreScreen from "./components/tuiter/ExploreScreen/ExploreScreen";
// import NotificationScreen from "./components/tuiter/NotificationScreen";

function App() {
  return (

      <BrowserRouter>
        <div className="container">
          <Routes>
            <Route index
                   element={<Labs/>}/>
            <Route path="/">
              <Route path="labs"
                     element={<Labs/>}/>
              <Route path="hello"
                     element={<HelloWorld/>}/>
              <Route path="tuiter"
                     element={<Tuiter/>}>
                <Route index
                       element={<HomeScreen/>}/>
                <Route home
                       element={<HomeScreen/>}/>
                <Route path="explore"
                       element={<ExploreScreen/>}/>
              </Route>
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
  );
}



export default App;

