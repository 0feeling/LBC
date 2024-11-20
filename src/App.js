//import packages
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Offers from "./containers/Offers";
import OneOffer from "./containers/OneOffer";
import Publish from "./containers/Publish";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SignUp from "./containers/SignUp";
import SearchIcon from '@mui/icons-material/Search';
import Pages from "./components/Pages";
import AddBoxIcon from "@mui/icons-material/AddBox";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { fakeDatas } from "./Data/FakeDatas";

const App = () => {
  const username = "User";

  return (
    <Router>
      {/* # # # # # # # HEADER # # # # # # # # # # # #  */}
      <Header user={username} />
      <main>
        <Routes>
          {/* # # # # # # # ROUTE FOR 1 Offer DISPLAY # # # # # # # # # # # #  */}
          <Route path="/oneoffer/:id" element={<OneOffer />} />

          {/* # # # # # # # ROUTE PUBLISH # # # # # # # # # # # #  */}
          <Route path="/publish" element={<Publish />} />

          {/* # # # # # # # ROUTE FOR SIGN UP # # # # # # # # # # # #  */}
          <Route path="/signup" element={<SignUp />} />

          {/* # # # # # # # DEFAULT ROUTE : ALL OFFERS  # # # # # # # # # # # #  */}
          <Route path="/offers" element={<Offers />} />


          <Route path="*" element={<h1>404 - Page Non trouvé</h1>} />

        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
