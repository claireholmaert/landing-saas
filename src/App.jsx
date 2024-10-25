// components
import { Branding } from "./components/Branding";
import { CallToAction } from "./components/CallToAction";
import { Features } from "./components/Features";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";

function App() {
  return (
    <div className="text-white">
      <Header />
      <Hero />
      <Branding />
      <Features />
      <CallToAction />
    </div>
  );
}

export default App;
