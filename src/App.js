import { useReducer, Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
// import Home from "./pages/Home";

const Home = lazy(() => import(/*webpackChunkName: "Home"*/ './pages/Home'));
const CreateEvent = lazy(() => import(/*webpackChunkName: "New event"*/ './pages/CreateEvent'));
const Event = lazy(() => import(/*webpackChunkName: "New event"*/ './pages/Event'));

const INIT_STATE = {
  name: "ToDoList",
  nav: [
    { link: "/", label: "Home" },
    { link: "/create-event", label: "Crea nuovo evento" },
    { link: "/event", label: "Evento" },
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
  const [state] = useReducer(reducer, INIT_STATE);

  return (
    <div>
      <Header name={state.name} font={state.fontFamily} links={state.nav} />

      <Routes>
        <Route path="/" element={<Suspense fallback={<div>Loading...</div>}>
          <Home links={state.ToDo} />
        </Suspense>} />
        <Route path="/create-event" element={<Suspense fallback={<div>Loading...</div>}>
          <CreateEvent />
        </Suspense>} />
        <Route path="/event" element={<Suspense fallback={<div>Loading...</div>}>
          <Event />
        </Suspense>} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
