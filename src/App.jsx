// components
import { Branding } from "./components/Branding";
import { CallToActionOne } from "./components/CallToActionOne";
import { Features } from "./components/Features";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { BulletPoints } from "./components/BulletPoints";
import { CallToActionTwo } from "./components/CallToActionTwo";
import { Pricing } from "./components/Pricing";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="text-white">
      <Header />
      <Hero />
      <Branding />
      <Features />
      <CallToActionOne />
      <BulletPoints />
      <Pricing />
      <CallToActionTwo />
      <Footer />
    </div>
  );
}

export default App;
