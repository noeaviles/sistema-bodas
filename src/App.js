import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import InterfazInvitado from "./routes/InterfazInvitado";
import InterfazNovia from "./routes/InterfazNovia";
import NotFound from "./routes/NotFound";
import NoviaBasicos from "./routes/NoviaBasicos";
import NoviaDegustacion from "./routes/NoviaDegustacion";
import {Provider} from 'react-redux';
import store from './redux/index';
import Dashboard from "./components/global/Dashboard";
import PrevioBoda from "./routes/PrevioBoda";
import Ceremonia from "./routes/Ceremonia";
import Coctel from "./routes/Coctel";
import Banquete from "./routes/Banquete";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
          <BrowserRouter>
              <Routes>
                <Route path="/" element={ <Home/>} exact />
                <Route path="*" element={ <NotFound/> }/>
                <Route path='dashboard' element={ <Dashboard /> }>
                  <Route path="invitado" element={ <InterfazInvitado/> }/>
                  <Route path="novia" element={ <InterfazNovia/> }/>
                  <Route path="novia-basicos" element={ <NoviaBasicos/>}/>
                  <Route path="novia-degustacion" element={ <NoviaDegustacion/> }/>  
                  <Route path="novia-previoBoda" element={ <PrevioBoda/> } />  
                  <Route path="novia-ceremonia" element={ <Ceremonia/> } />  
                  <Route path="novia-coctel" element={ <Coctel/> } />  
                  <Route path="novia-banquete" element={ <Banquete/> } />  
                  
                  
                </Route>
              </Routes>
          </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
