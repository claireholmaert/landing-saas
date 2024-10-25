import logoGoogle from "../assets/google.svg";
import logoNetflix from "../assets/netflix.svg";
import logoNotion from "../assets/notion.svg";
import logoSlack from "../assets/slack.svg";
import logoZoom from "../assets/zoom.svg";

import { Container } from "./Container";

const branding = [
  {
    id: 0,
    image: logoGoogle,
    alt: "Logo Google",
  },
  {
    id: 1,
    image: logoNetflix,
    alt: "Logo Netflix",
  },
  {
    id: 2,
    image: logoZoom,
    alt: "Logo Zoom",
  },
  {
    id: 3,
    image: logoSlack,
    alt: "Logo Slack",
  },
  {
    id: 4,
    image: logoNotion,
    alt: "Logo Notion",
  },
];

export const Branding = () => {
  return (
    <Container>
      <div className="max-w-5xl w-full mx-auto grid grid-cols-3 gap-5 place-items-center py-5 lg:grid-cols-5 lg:py-10 lg:gap-1">
        {branding.map((brand) => (
          <img
            key={brand.id}
            src={brand.image}
            alt={brand.alt}
            className="w-20 sm:w-24 md:w-28 lg:w-32"
          />
        ))}
      </div>
    </Container>
  );
};
