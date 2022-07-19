import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import InterfazInvitado from "./routes/InterfazInvitado";
import InterfazNovia from "./routes/InterfazNovia";
import NotFound from "./routes/NotFound";
import NoviaDegustacion from "./routes/NoviaDegustacion";


function App() {
  return (
    <div className="App">
         <BrowserRouter>
            <Routes>
              <Route path="invitado" element={ <InterfazInvitado/> }/>
              <Route path="novia" element={<InterfazNovia/> }/>
              <Route path="novia-degustacion" element={ <NoviaDegustacion/> }/>
              <Route path="/" element={ <Home/>} exact />
              <Route path="*" element={ <NotFound/> }/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
