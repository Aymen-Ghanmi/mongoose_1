
import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home/Home";
import Contacts from "./pages/Contacts/Contacts";
import Errorpage from "./pages/Errorpage/Errorpage";
import Navigation from "./Component/Navigation/Navigation";
import ContactDetails from "./pages/ContactDetails/ContactDetails";
import AddContact from "./pages/AddContact/AddContact";



function App() {
  return (
    <div className="App">
      <Navigation/>
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/contacts' element={<Contacts/>} />
    <Route path='/contactDetails/:id' element={<ContactDetails />} />
    <Route path='/addContact' element={< AddContact />} />
    <Route path='/*' element={<Errorpage/>} />
    </Routes>
    </div>
  );
}

export default App;
