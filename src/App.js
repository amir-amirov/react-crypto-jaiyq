import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home/Home";
import Coin from "./pages/Coin/Coin";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import SignUpForm from './pages/SignUpForm/SignUpForm';
import Blog from './pages/Blog/Blog';
import Pricing from './pages/Pricing/Pricing';
import JaiyqCoin from './pages/JaiyqCoin/JaiyqCoin';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home /> }/>
        <Route path="/coin/:coinId" element={ <Coin /> }/>
        <Route path="/sign-up" element={ <SignUpForm />} />
        <Route path="/blog" element={ <Blog /> } />
        <Route path="/pricing" element={ <Pricing /> } />
        <Route path="/jaiyq-coin" element={ <JaiyqCoin /> } />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
