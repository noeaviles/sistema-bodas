import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import InterfazInvitado from "./routes/InterfazInvitado";
import InterfazNovia from "./routes/InterfazNovia";
import NotFound from "./routes/NotFound";
import NoviaBasicos from "./routes/NoviaBasicos";
import NoviaDegustacion from "./routes/NoviaDegustacion";
import {Provider} from 'react-redux';
import store from './redux/index';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
          <BrowserRouter>
              <Routes>
                <Route path="invitado" element={ <InterfazInvitado/> }/>
                <Route path="novia" element={<InterfazNovia/> }/>
                <Route path="novia-degustacion" element={ <NoviaDegustacion/> }/>
                <Route path="novia-basicos" element={ <NoviaBasicos/>}/>
                <Route path="/" element={ <Home/>} exact />
                <Route path="*" element={ <NotFound/> }/>
              </Routes>
          </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
