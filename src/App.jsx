// components
import { Branding } from "./components/Branding";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";

function App() {
  return (
    <div className="text-white">
      <Header />
      <Hero />
      <Branding />
    </div>
  );
}

export default App;
