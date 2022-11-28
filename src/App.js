import CardsSection from "./Component/CardsSection";
import Features from "./Component/Features";
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import Home from "./Component/Home";
import Icons from "./Component/Icons";
import Nav from "./Component/Nav";



function App() {
  return (
    <div className="App">
      <Header/>
      <Nav/>
      <Home/>
      <Icons/>
      <CardsSection/>
      <Features/>
      <Footer/>
    </div>
  );
}

export default App;
