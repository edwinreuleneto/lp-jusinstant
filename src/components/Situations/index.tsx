"use client";

import {
  FileWarning,
  Clock,
  BriefcaseBusiness,
  Baby,
  CalendarX,
  Banknote,
  AlertTriangle,
  HandCoins,
  BadgeAlert,
  BadgeInfo,
  HelpCircle,
} from "lucide-react";
import { motion } from "framer-motion";

const items = [
  {
    title: "Demissão sem aviso",
    description: "Foi mandado embora e não teve tempo de se preparar?",
    icon: FileWarning,
  },
  {
    title: "Horas extras não pagas",
    description: "Trabalhou além do horário e não recebeu por isso?",
    icon: Clock,
  },
  {
    title: "Contrato informal",
    description: "Trabalhou sem registro em carteira por meses?",
    icon: BriefcaseBusiness,
  },
  {
    title: "Gravidez e demissão",
    description: "Foi demitida grávida ou durante a estabilidade?",
    icon: Baby,
  },
  {
    title: "Férias vencidas",
    description: "Passou do prazo legal sem tirar férias?",
    icon: CalendarX,
  },
  {
    title: "FGTS não depositado",
    description: "Descobriu que seu empregador não pagou o FGTS corretamente?",
    icon: Banknote,
  },
  {
    title: "Atraso de salário",
    description: "Seu pagamento está atrasando com frequência?",
    icon: HandCoins,
  },
  {
    title: "Desvio de função",
    description: "Exerce tarefas diferentes das do seu cargo sem receber por isso?",
    icon: BadgeInfo,
  },
  {
    title: "Assédio ou abuso moral",
    description: "Sofre humilhações ou pressões constantes no trabalho?",
    icon: AlertTriangle,
  },
  {
    title: "Justa causa injusta",
    description: "Recebeu uma demissão por justa causa e quer recorrer?",
    icon: BadgeAlert,
  },
  {
    title: "+300 tipos de casos trabalhistas",
    description:
      "De vínculos não reconhecidos até adicionais não pagos. Analisamos centenas de situações com base na lei.",
    icon: HelpCircle,
  },
];

export const Situations = () => {
  return (
    <section className="w-full py-20 pb-32 bg-gradient-to-t from-[#F8FAFC] to-transparent ">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Cabeçalho */}
        <motion.div
          className="text-center mx-auto max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-800 font-montserrat">
            Situações que analisamos com nossa IA
          </h2>
          <p className="mt-2 text-md text-neutral-700">
            A JusInstant foi treinada para identificar os principais problemas nas relações de trabalho no Brasil.
          </p>
        </motion.div>

        {/* Grid com blocos */}
        <motion.div
          className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-20"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              className="flex items-start gap-4 ring ring-[#f2f2f2] rounded-lg p-5 bg-white transition-all"
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.4 }}
            >
              <item.icon
                className="w-6 h-6 flex-none text-[var(--color-primary-500)] mt-1"
                aria-hidden="true"
              />
              <div>
                <h3 className="font-semibold text-[var(--color-primary-900)] text-base">
                  {item.title}
                </h3>
                <p className="text-sm text-neutral-700 mt-1">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
