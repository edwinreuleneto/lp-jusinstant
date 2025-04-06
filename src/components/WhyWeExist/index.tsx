"use client";

import {
  Scale,
  BadgeCheck,
  Lock,
} from "lucide-react";

const incentives = [
  {
    name: "Identifique o que te devem",
    icon: Scale,
  },
  {
    name: "Sem advogado, sem termos difíceis",
    icon: BadgeCheck,
  },
  {
    name: "Segurança e privacidade total",
    icon: Lock,
  },
];

export const WhyWeExist = () => {
  return (
    <section className="bg-white py-12">
      <div className="mt-12 flex overflow-x-auto">
        <div className="mx-auto flex space-x-12 whitespace-nowrap px-4 py-3 sm:px-6 lg:space-x-24 lg:px-8">
          {incentives.map((incentive) => (
            <div
              key={incentive.name}
              className="flex items-center text-base font-medium text-[var(--color-primary-700)]"
            >
              <incentive.icon
                aria-hidden="true"
                className="mr-2 size-6 flex-none text-[var(--color-primary-600)]"
              />
              <span>{incentive.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
