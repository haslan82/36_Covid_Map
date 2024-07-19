import { BrowserRouter, Route, Routes } from "react-router-dom"
import Detail from "./pages/Detail";
import Main from "./pages/Main";
import Header from "./components/Header";
const App = () => {
  return <BrowserRouter>
  <div className="flex flex-col min-h-screen">
    <Header />
<div className="flex-1 bg-zinc-800">
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/detail" element={< Detail />} />
    </Routes>
    </div>
</div>
  </BrowserRouter>
}

export default App
