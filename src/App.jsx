import { Routes, Route } from "react-router-dom";
import AllMeetups from "./Pages/AllMeetups";
import Favorites from "./Pages/Favorites";
import NewMeetup from "./Pages/NewMeetup";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<AllMeetups />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/new-meetup" element={<NewMeetup />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
