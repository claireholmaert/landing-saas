import facebook from "../assets/facebook.svg";
import x from "../assets/x.svg";
import instagram from "../assets/instagram-icon.svg";
import linkedin from "../assets/linkedin-icon.svg";

// components
import { Container } from "./Container";

const social = [
    {
        id: 0,
        icon: facebook,
        alt: "Facebook",
        href: "#",
    },
    {
        id: 1,
        icon: x,
        alt: "X",
        href: "#",
    },
    {
        id: 2,
        icon: instagram,
        alt: "Instagram",
        href: "#",
    },
    {
        id: 3,
        icon: linkedin,
        alt: "LinkedIn",
        href: "#",
    },
]

export const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <div className="bg-violet-900 py-5 lg:py-12 mt-5 lg:mt-16">
      <Container className="flex flex-col gap-3 lg:flex-row lg:gap-1 items-center justify-between">
        <div className="flex items-center gap-4">
        {social.map((link) => (
            <a key={link.id} href={link.href} title={link.alt} target="_blank">
                <img src={link.icon} alt={link.alt} className="w-6 h-6" />
            </a>
        ))}
        </div>
        <div className="space-x-4">
        <a href="#" target="_blank" rel="noreferrer">Terms & Conditions</a>
        <a href="#" target="_blank" rel="noreferrer">Privacy Policy</a>
        </div>
        <div>&copy; {currentYear}. All right reserved{" "}-
            <a href="https://claireholmaert.fr/" target="_blank" rel="noreferrer"> Claire Holmaërt</a>
        </div>
      </Container>
    </div>
  );
};
