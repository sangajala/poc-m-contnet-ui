import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/nav/Nav";
import AddVideo from "./components/pages/AddVideo";
import Dashboard from "./components/pages/Dashboard";
import UpdateVideo from "./components/pages/UpdateVideo";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Nav />
          <Routes>
            <Route exact path="/admin" element={<Dashboard />} />
            <Route exact path="/addvideo" element={<AddVideo />} />
            <Route exact path="/videos/:id" element={<UpdateVideo />} />
          </Routes>
        </Router>
      </Provider>
    </>
  );
}

export default App;
