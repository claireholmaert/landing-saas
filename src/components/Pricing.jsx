import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { Button } from "./Button";
import { Container } from "./Container";

const pricing = [
  {
    id: 0,
    plan: "Free",
    amount: 0,
    featured: false,
    features: [
      "7,000,000 + Events",
      "4 Custom Domains",
      "Dedicated Support Agent",
      "12 Months Data History",
      "1 Dedicated SSL",
    ],
  },
  {
    id: 1,
    plan: "Basic",
    amount: 23,
    featured: true,
    features: [
      "7,000,000 + Events",
      "4 Custom Domains",
      "Dedicated Support Agent",
      "12 Months Data History",
      "1 Dedicated SSL",
    ],
  },
  {
    id: 2,
    plan: "Premium",
    amount: 59,
    featured: false,
    features: [
      "7,000,000 + Events",
      "4 Custom Domains",
      "Dedicated Support Agent",
      "12 Months Data History",
      "1 Dedicated SSL",
    ],
  },
];

export const Pricing = () => {
  return (
    <div id="pricing">
      <Container>
        <div className="py-5 space-y-8 lg:py-10">
          <div className="text-center space-y-4 mb-8">
            <h2 className="text-2xl text-violet-400">EDGE</h2>
            <p className="text-4xl font-semibold">Pricing</p>
          </div>
          <div className="grid gap-5 lg:grid-cols-3 lg:gap-10 lg:mb-16">
            {pricing.map((item) => (
              <div
                key={item.id}
                className={`${item.featured ? "" : "lg:mt-14"}`}
              >
                <div
                  className={`${
                    item.featured ? "bg-violet-500" : "bg-violet-800"
                  } rounded-xl lg:rounded-2xl p-6 lg:p-12 text-center lg:text-start`}
                >
                  <div className="uppercase">{item.plan}</div>
                  <div className="space-y-3">
                    <div
                      className={`border-b pb-8 ${
                        item.featured
                          ? "border-violet-600"
                          : "border-violet-500"
                      }`}
                    >
                      <span className="text-3xl font-semibold">
                        {item.amount}
                      </span>
                      <span className="text-3xl font-semibold text-yellow-500">
                        €
                      </span>
                    </div>
                    <div className="space-y-4 pb-8">
                      {item.features.map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-2"
                        >
                          <CheckCircleIcon className="w-6 h-6" />
                          <div className="text-sm">{feature}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <Button
                      theme={item.featured ? "primary" : "secondary"}
                    >
                        {item.amount > 0 ? "Buy this plan" : "Get started for free"}
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};
