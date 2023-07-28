import Cracker from "./components/Cracker";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Cracker />
      </main>
      <Footer />
    </>
  );
}

export default App;
