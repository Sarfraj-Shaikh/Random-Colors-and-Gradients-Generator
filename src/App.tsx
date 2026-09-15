import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import ColorGenerator from "./components/Colors";
import GradientGenerator from "./components/Gradients";

function App() {


  return (
    <>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/color-generator" element={<ColorGenerator />} />
        <Route path="/gradient-generator" element={<GradientGenerator />} />
        <Route path="*" element={<NotFound />} />

      </Routes>
    </>
  )
}

export default App
