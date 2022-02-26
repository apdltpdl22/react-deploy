import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './routes/Home'
import Detail from './routes/Detail'

function App() {
  return (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie/:id" element={<Detail />} />
      <Route path="/hello"
      element={<h1>Hello</h1>} />
    </Routes>
  </BrowserRouter>  
  );
}

export default App;
