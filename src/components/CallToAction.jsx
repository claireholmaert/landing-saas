import { ArrowRightIcon } from "@heroicons/react/24/solid";

// components
import { Button } from "./Button";
import { Container } from "./Container";

export const CallToAction = () => {
  return (
    <Container>
      <div className="py-5 lg:py-10">
        <div className="hidden flex-col items-center space-y-6 rounded-xl bg-gradient-to-tl from-yellow-600 to-yellow-700 p-6 lg:flex">
          <div className="space-y-4 text-center">
            <h2 className="text-lg">Ready To Start ?</h2>
            <h3 className="text-3xl font-medium">
              Start your free trial today
            </h3>
          </div>
          <Button
            theme="primary"
            className="flex items-center justify-center gap-4"
          >
            Get Started
            <ArrowRightIcon className="w-8 h-8" />
          </Button>
        </div>
        <div className="flex items-center justify-between space-y-6 rounded-xl bg-gradient-to-tl from-yellow-600 to-yellow-700 p-6 lg:hidden">
          <div className="space-y-4 text-center">
            <h2 className="text-lg">Ready To Start ?</h2>
            <h3 className="text-3xl font-medium">
              Start your free trial today
            </h3>
          </div>
          <Button
            theme="primary"
            className="flex items-center justify-center gap-4"
          >
            Get Started
            <ArrowRightIcon className="w-8 h-8" />
          </Button>
        </div>
      </div>
    </Container>
  );
};
