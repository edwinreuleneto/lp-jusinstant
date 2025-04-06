"use client";

import { motion } from "framer-motion";

export const Stats = () => {
  const stats = [
    { id: 1, name: "Análises realizadas", value: "+6.300" },
    { id: 2, name: "Indenização média por pessoa", value: "R$ 8,7 mil" },
    { id: 3, name: "Tempo médio de resposta", value: "2 minutos" },
    { id: 4, name: "Índice de satisfação", value: "97%" },
  ];

  return (
    <section className="py-14 pb-14 bg-[#F2F8F7] border-t border-b border-[#e1f1ee]">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mx-auto lg:max-w-none">
          <motion.dl
            className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 text-center"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.id}
                className="flex flex-col items-center"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.4 }}
              >
                <dd className="text-4xl font-extrabold font-montserrat tracking-tight text-[var(--color-primary-900)]">
                  {stat.value}
                </dd>
                <dt className="mt-2 text-sm font-semibold text-neutral-500">{stat.name}</dt>
              </motion.div>
            ))}
          </motion.dl>
        </div>
      </div>
    </section>
  );
};
