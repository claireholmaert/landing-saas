import bulletPoint3 from "../assets/happy.jpg";
import bulletPoint2 from "../assets/idea.jpg";
import bulletPoint1 from "../assets/message-typographique-isometrique.jpg";

// components
import { Container } from "./Container";

const bulletPoints = [
  {
    id: 0,
    image: bulletPoint1,
    alt: "description",
    title: "How does it work?",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, autem, adipisci omnis corrupti debitis porro quasi magnam quia necessitatibus velit tenetur reprehenderit? Eligendi quae dolorem et? Sed nam repudiandae optio?",
  },
  {
    id: 1,
    image: bulletPoint2,
    alt: "description",
    title: "How does it work?",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, autem, adipisci omnis corrupti debitis porro quasi magnam quia necessitatibus velit tenetur reprehenderit? Eligendi quae dolorem et? Sed nam repudiandae optio?",
  },
  {
    id: 2,
    image: bulletPoint3,
    alt: "description",
    title: "How does it work?",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, autem, adipisci omnis corrupti debitis porro quasi magnam quia necessitatibus velit tenetur reprehenderit? Eligendi quae dolorem et? Sed nam repudiandae optio?",
  },
];

export const BulletPoints = () => {
  return (
    <Container>
      <div className="py-5 space-y-8 lg:py-10">
        <div className="text-center space-y-4 mb-8">
          <h2 className="text-2xl text-violet-400">EDGE</h2>
          <p className="text-4xl font-semibold">How does it work ?</p>
        </div>
        <div className="py-5 space-y-10 lg:space-y-24 lg:py-10">
          {bulletPoints.map((bulletPoint) => (
            <div
              key={bulletPoint.id}
              className={`flex flex-col items-center justify-between gap-10 lg:gap-20 lg:flex-row ${
                bulletPoint.id % 2 === 0 ? "flex-row" : "lg:flex-row-reverse"
              }`}
            >
              <div className="flex justify-center lg:w-7/12">
                <img
                  src={bulletPoint.image}
                  className="w-80 rounded-2xl px-20 lg:px-0"
                  alt={bulletPoint.alt}
                />
              </div>
              <div className="w-full space-y-5 text-center lg:text-left lg:w-5/12">
                <h3 className="text-xl font-semibold">{bulletPoint.title}</h3>
                <p className="text-violet-300">{bulletPoint.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};
