import { Route, Routes } from "react-router-dom";
import Event from "./Pages/Event";
import Home from "./Pages/Home";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/event" element={<Event />} />
    </Routes>
  );
};

export default Router;
