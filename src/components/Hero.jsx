import imgHero from "../assets/hologramme-technologique-interieur.jpg";

// components
import { Button } from "./Button";
import { Container } from "./Container";
import { Grid } from "./ui/Hero";

export const Hero = () => {
  return (
    <div className="relative pb-8 xl:pb-40">
      <Container className="relative z-10 pt-10 space-y-16 lg:py-16">
        <div className="max-w-2xl mx-auto px-16 text-center space-y-7 lg:px-0">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-semibold">
            Build{" "}
            <span className="bg-gradient-to-b from-yellow-600 to-yellow-300 bg-clip-text text-transparent">
              Modern
            </span>{" "}
            Saas for Startups
          </h2>
          <p className="text-violet-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            excepturi nesciunt minus optio minima? Commodi nihil provident,
            temporibus assumenda culpa esse ea iure labore reiciendis mollitia
            eaque ex unde aperiam!
          </p>
          <Button theme="primary" href="/pricing">
            Pricing & Plans
          </Button>
        </div>
        <img src={imgHero} alt="hologramme-technologique-interieur" className="rounded-lg md:block" />
      </Container>
      <Grid />
    </div>
  );
};
