import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainPage from "./pages/Main"
import HolidayPage from "./pages/Holiday"
import ModalWindow from "./pages/ModalWindow"

function App() {

  return (
    <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage></MainPage>} />
            <Route path="/holiday" element={<HolidayPage></HolidayPage>} />
            <Route path="/modal" element={<ModalWindow></ModalWindow>} />
          </Routes>   
    </BrowserRouter>
  )
}

export default App
