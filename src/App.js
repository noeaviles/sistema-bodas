import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import InterfazInvitado from "./routes/InterfazInvitado";
import InterfazNovia from "./routes/InterfazNovia";

function App() {
  return (
    <div className="App">
         <BrowserRouter>
            <Routes>
              <Route path="invitado" element={ <InterfazInvitado/> }/>
              <Route path="novia" element={<InterfazNovia/> }/>
              <Route path="/" element={ <Home/>} exact />
            </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
