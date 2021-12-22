import React from "react";
import { Route, Routes } from "react-router-dom";
import OurBlog from "./Routes/OurBlog";
import OurBlog1 from "./Routes/OurBlog1";
import Partner from "./Routes/Partner";
import Events from "./Routes/Events";
import Offices from "./Routes/Offices";
import LC from "./Routes/LC";
import Main from "./Routes/Main"
function App() {
  return (
    <Routes>
      <Route path="/aiesecSite" element={<Main />} />
      <Route path="/blog" element={<OurBlog />} />
      <Route path="/blogw" element={<OurBlog1 />} />
      <Route path="/partner" element={<Partner />} />
      <Route path="/events" element={<Events />} />
      <Route path="/offices" element={<Offices />} />
      <Route path="/lc" element={<LC />} />
    </Routes>
  );
}

export default App;
