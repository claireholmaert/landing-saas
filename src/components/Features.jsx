import { Squares2X2Icon, ChatBubbleOvalLeftIcon, RectangleGroupIcon, PresentationChartLineIcon, UsersIcon, FolderIcon } from "@heroicons/react/24/solid";
import { Container } from "./Container";

const features = [
  {
    id: 0,
    icon: Squares2X2Icon,
    alt: "descritpion",
    title: "Dashboard",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, velit quibusdam totam culpa aliquid eius aut perferendis assumenda harum ullam architecto deleniti id maxime dolores delectus doloribus, accusantium suscipit animi.",
  },
  {
    id: 1,
    icon: ChatBubbleOvalLeftIcon,
    alt: "descritpion",
    title: "Comment",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, velit quibusdam totam culpa aliquid eius aut perferendis assumenda harum ullam architecto deleniti id maxime dolores delectus doloribus, accusantium suscipit animi.",
  },
  {
    id: 2,
    icon: RectangleGroupIcon,
    alt: "descritpion",
    title: "Tailored Comments",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, velit quibusdam totam culpa aliquid eius aut perferendis assumenda harum ullam architecto deleniti id maxime dolores delectus doloribus, accusantium suscipit animi.",
  },
  {
    id: 3,
    icon: PresentationChartLineIcon,
    alt: "descritpion",
    title: "Statistic",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, velit quibusdam totam culpa aliquid eius aut perferendis assumenda harum ullam architecto deleniti id maxime dolores delectus doloribus, accusantium suscipit animi.",
  },
  {
    id: 4,
    icon: UsersIcon,
    alt: "descritpion",
    title: "Profiles",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, velit quibusdam totam culpa aliquid eius aut perferendis assumenda harum ullam architecto deleniti id maxime dolores delectus doloribus, accusantium suscipit animi.",
  },
  {
    id: 5,
    icon: FolderIcon,
    alt: "descritpion",
    title: "Folders",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, velit quibusdam totam culpa aliquid eius aut perferendis assumenda harum ullam architecto deleniti id maxime dolores delectus doloribus, accusantium suscipit animi.",
  },
];

export const Features = () => {
  return (
    <Container className="mt-10">
      <div className="py-5 lg:py-10">
        <div className="text-center space-y-4 mb-8 lg:text-start">
          <h2 className="text-4xl font-semibold">Features</h2>
          <p className="text-violet-300">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {features.map((feature) => (
            <div key={feature.id} className="space-y-8 border border-violet-500 transition-colors hover:bg-violet-600 cursor-pointer rounded-xl p-8 lg:rounded-2xl">
            <feature.icon
              className="w-12 h-12 text-yellow-600"
              aria-label={feature.alt}
            />
            <div className="space-y-4">
                <h3 className="text-xl font-medium text-yellow-600">{feature.title}</h3>
                <p className="text-violet-400">{feature.text}</p>
            </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};
