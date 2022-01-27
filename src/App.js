import { useReducer, Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
// import Home from "./pages/Home";

const Home = lazy(() => import(/*webpackChunkName: "Home"*/ './pages/Home'));
const NewEvent = lazy(() => import(/*webpackChunkName: "New event"*/ './pages/NewEvent'));
const CreateGuest = lazy(() => import(/*webpackChunkName: "Create Guest"*/ './pages/CreateGuest'));

const INIT_STATE = {
  name: "ToDoList",
  nav: [
    { link: "/", label: "Home" },
    { link: "/new-event", label: "Crea nuovo evento" },
  ],
  ToDo: [
  ],
  fontFamily: "",
};

const reducer = (state, action) => {

  return state;
}
  ;

function App() {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  return (
    <div>
      <Header name={state.name} font={state.fontFamily} links={state.nav} />

      <Routes>
        <Route path="/" element={<Suspense fallback={<div>Loading...</div>}>
          <Home links={state.ToDo} />
        </Suspense>} />
        <Route path="/new-event" element={<Suspense fallback={<div>Loading...</div>}>
          <NewEvent />
        </Suspense>} />
        <Route path="/createguest" element={<Suspense fallback={<div>Loading...</div>}>
          <CreateGuest />
        </Suspense>} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
