import {
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Home from './components/Home';
import About from "./components/About";
import Products from "./components/Products";
import Contact from "./components/Contact";
import Order from "./components/Order";
import Order2 from "./components/Order2";
import Order3 from "./components/Order3";
import Support from "./components/Support";
import Events from "./components/Events";
import Blog from "./components/Blog";

function App() {
  return (
    <div className="App">
     

     <Routes>

<Route exact path="/" element={<Home />} />
<Route exact path="/about" element={<About />} />
<Route exact path="/products" element={<Products />} />
<Route exact path="/contact" element={<Contact />} />
<Route exact path="/order" element={<Order />} />
<Route exact path="/order2" element={<Order2 />} />
<Route exact path="/order3" element={<Order3 />} />
<Route exact path="/support" element={<Support />} />
{/* <Route exact path="/event" element={<Events />} /> */}
<Route exact path="/blog" element={<Blog />} />













</Routes>
    </div>
  );
}

export default App;
