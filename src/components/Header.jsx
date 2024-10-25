import logo from "../assets/knowledge-svgrepo-com.svg";

// components
import { Button } from "./Button";
import { Container } from "./Container";
import { Elipse } from "./ui/Header";

export const Header = () => {
  return (
    <div className="border-b border-violet-500">
      <Container>
        <div className="relative z-10 flex items-center justify-between py-4 lg:py-6">
          <div className="flex items-center">
            <img
              src={logo}
              alt="logo de l'application web"
              width={75}
              height={75}
            />
            <h1 className="text-xl text-yellow-500 lg:text-4xl font-bold">EDGE</h1>
          </div>
          <Elipse />
          <Button theme="primary" href="/#">
            Login
          </Button>
        </div>
      </Container>
    </div>
  );
};
