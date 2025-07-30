import React, { useState } from "react";
import { Button } from "@/components/ui/button";

const PricingSection = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "FREE",
      price: 0,
      yearlyPrice: 0,
      icon: "🆓",
      features: [
        "Limited email verification",
        "Basic link scanning",
        "Standard risk scoring",
        "Email alerts",
      ],
      current: true,
      type: "free",
    },
    {
      name: "STANDARD",
      price: 5,
      yearlyPrice: 50,
      icon: "⭐",
      popular: true,
      features: [
        "Unlimited email verification",
        "Advanced link & image scanning",
        "Detailed risk scoring",
        "Real-time pop-up warnings",
        "Daily security reports",
        "Priority email support",
      ],
      type: "standard",
    },
    {
      name: "PREMIUM",
      price: 15,
      yearlyPrice: 150,
      icon: "💎",
      features: [
        "All Standard features",
        "Advanced threat intelligence",
        "Customizable risk scoring",
        "API access",
        "Dedicated account manager",
        "24/7 phone & chat support",
      ],
      type: "premium",
    },
  ];

  return (
    <section className="bg-[#081325] text-white py-12 px-6">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
        Choose the plan that best fits your needs
      </h2>

      {/* Toggle Switch */}
      <div className="flex justify-center mb-10">
        <div className="inline-flex bg-gray-800 rounded-full p-1">
          <button
            onClick={() => setIsYearly(false)}
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              !isYearly
                ? "bg-orange-400 text-black"
                : "text-gray-300 hover:text-white"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setIsYearly(true)}
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              isYearly
                ? "bg-orange-400 text-black"
                : "text-gray-300 hover:text-white"
            }`}
          >
            Yearly <span className="text-xs ml-1 text-green-400">save 17%</span>
          </button>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {plans.map((plan, index) => {
          const price = isYearly ? plan.yearlyPrice : plan.price;
          const duration = isYearly ? "/year" : "/month";

          return (
            <div
              key={index}
              className={`relative border rounded-lg p-6 shadow-md bg-[#0f223a] transition-all duration-200 ease-in-out hover:scale-105 hover:shadow-[0_0_20px_#3B82F6] ${
                plan.popular ? "border-orange-400" : "border-gray-700"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-orange-400 text-black text-xs font-bold px-3 py-1 rounded-bl-lg">
                  Most Popular
                </div>
              )}

              <div className="text-center">
                <div className="text-3xl mb-2">{plan.icon}</div>
                <h3 className="text-lg font-semibold mb-1">{plan.name}</h3>
                <div className="text-2xl font-bold">
                  ${price}
                  <span className="text-sm font-normal ml-1">{duration}</span>
                </div>
              </div>

              <div className="mt-4 text-center">
                {plan.current ? (
                  <Button
                    disabled
                    className="w-full bg-gray-700 text-gray-400 cursor-not-allowed"
                  >
                    Your Current Plan
                  </Button>
                ) : (
                  <Button className="w-full bg-orange-400 text-black hover:bg-orange-500">
                    Select Plan
                  </Button>
                )}
              </div>

              <ul className="mt-6 space-y-2 text-sm">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-green-400">✔</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default PricingSection;
