import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Root } from "./pages/Root";
import { Home } from "./pages/Home";
import { Contatos } from "./pages/Contatos";
import { Contato } from "./pages/Contato";
import ContatoAdd from "./pages/ContatoAdd";
import ContatoUpdate from "./pages/ContatoUpdate";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route path="/" element={<Home />} />
          <Route path="/contatos" element={<Contatos />} />
          <Route path="/contatos/new" element={<ContatoAdd />} />
          <Route path="/contatos/:id" element={<Contato />} />
          <Route path="/contatos/edit/:id" element={<ContatoUpdate />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
