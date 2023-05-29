import { useEffect } from "react";
import "./App.css";
import Authetication from "./Components/Authentication/Authentication";
import HomePage from "./Components/HomePage/HomePage";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "./firebase";
import { loginUser, setLoading } from "./features/userSlice";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Gallery from "./Components/Gallery/Gallery";

function App() {
  const user = useSelector((state) => state.data.user.user); // info aboout logged user
  const isLoading = useSelector((state) => state.data.user.isLoading); // if user is logged
  const dispatch = useDispatch();
  console.log("user", user);
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          loginUser({
            uid: authUser.uid,
            userName: authUser.displayName,
            email: authUser.email,
          })
        );
        dispatch(setLoading(false));
        console.log("User is logged in");
      } else {
        console.log("User is not logged in");
      }
    });
  }, []);
  return (
    <div className="App">
      {/* Routing */}
      <Router>
        <div className="container">
          <Routes>
            <Route index path="/LogIn" element={<Authetication />} />
            <Route path="/" element={<HomePage />} />
            <Route
              index
              path="LogIn"
              element={
                 
                  <>{user ? <HomePage /> : <Navigate to="/LogIn" />}</>
                
              }
            />

            <Route path="/Explore" element={<Gallery />} />
            
          </Routes>
        </div>
      </Router>

      {/* {isLoading ? (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      ) : (
        <>{user ? <HomePage /> : <Authetication />}</>
      )} */}
    </div>
  );
}

export default App;
