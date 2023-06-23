import NavBar from "./components/NavBar";
import ApartmentsList from "./components/ApartmentsList";
import ApartmentDetails from "./components/ApartmentDetails";
import CreateApartment from "./components/CreateApartment";

import './App.css';
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/apartments' element={<ApartmentsList />} />
        <Route path='/apartments/:apartmentId' element={<ApartmentDetails />} />
        <Route path='/create' element={<CreateApartment />} />
      </Routes>
    </div>
  );
}

export default App;
