import "./App.css";
import { Fragment, useEffect } from "react";
import Landing from "./components/Layout/Landing";
import Navbar from "./components/Layout/Navbar";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Dashboard from "./components/Dashboard/Dashboard";
import CreateProfile from "./components/Profile-forms/CreateProfile";
import PrivateRoute from "./components/routing/PrivateRoute";
import EditProfile from "./components/Profile-forms/EditProfile";
import AddExperience from "./components/Profile-forms/AddExperience";
import AddEducation from "./components/Profile-forms/AddEducation";
import Alert from "./components/Layout/Alert";
import Profiles from "./components/profiles/Profiles";
import Profile from "./components/profile/Profile";
import Posts from "./components/posts/Posts";
import Post from "./components/Post/Post";
import NotFound from "./components/Layout/NotFound";
//react
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//redux
import { loadUser } from "./actions/auth";
import { setAuthToken } from "./utils/setAuthToken";
import { Provider } from "react-redux";
import store from "./store";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route
              path="/register"
              element={
                <section className="container">
                  <Alert />
                  <Register />
                </section>
              }
            />
            <Route
              path="/login"
              element={
                <section className="container">
                  <Alert />
                  <Login />
                </section>
              }
            />
            <Route
              path="/profiles"
              element={
                <section className="container">
                  <Profiles />
                </section>
              }
            />
            <Route
              path="/profiles"
              element={
                <section className="container">
                  <Profiles />
                </section>
              }
            />
            <Route
              path="/profile/:user_id"
              element={
                <section className="container">
                  <Alert />
                  <Profile />
                </section>
              }
            />
            <Route
              path="/dashboard"
              element={
                <section className="container">
                  <Alert />
                  <PrivateRoute>
                    <Dashboard />
                  </PrivateRoute>
                </section>
              }
            />
            <Route
              path="/create-profile"
              element={
                <section className="container">
                  <Alert />
                  <PrivateRoute>
                    <CreateProfile />
                  </PrivateRoute>
                </section>
              }
            />
            <Route
              path="/edit-profile"
              element={
                <section className="container">
                  <Alert />
                  <PrivateRoute>
                    <EditProfile />
                  </PrivateRoute>
                </section>
              }
            />
            <Route
              path="/add-experience"
              element={
                <section className="container">
                  <Alert />
                  <PrivateRoute>
                    <AddExperience />
                  </PrivateRoute>
                </section>
              }
            />
            <Route
              path="/add-education"
              element={
                <section className="container">
                  <Alert />
                  <PrivateRoute>
                    <AddEducation />
                  </PrivateRoute>
                </section>
              }
            />
             <Route
              path="/posts"
              element={
                <section className="container">
                  <Alert />
                  <PrivateRoute>
                    <Posts />
                  </PrivateRoute>
                </section>
              }
            />
            <Route
              path="/post/:postId"
              element={
                <section className="container">
                  <Alert />
                  <PrivateRoute>
                    <Post />
                  </PrivateRoute>
                </section>
              }
            />
            <Route path="*" element={<section className="container"><NotFound /> </section>} />
          </Routes>
        </Fragment>
      </Router>
    </Provider>
  );
};
export default App;
