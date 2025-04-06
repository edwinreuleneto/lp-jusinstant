export const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Conte o que aconteceu",
      description:
        "Trabalhou, foi demitido, sentiu que algo tá errado? Escreve aqui do seu jeito.",
    },
    {
      number: "02",
      title: "Envie documentos (se tiver)",
      description:
        "Pode anexar holerite, print do WhatsApp, aviso de demissão... o que tiver.",
    },
    {
      number: "03",
      title: "Receba sua análise completa",
      description:
        "Você vai descobrir se a empresa te deve algo, o que, e por quê. Tudo com embasamento real.",
    },
  ];

  return (
    <section className="w-full bg-white py-12 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título e descrição */}
        <div className="text-center mb-16 px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-primary-900)]">
            Como funciona
          </h2>
          <p className="mt-2 text-neutral-600">
            Um processo simples e eficiente para descobrir seus direitos.
          </p>
        </div>

        <div className="relative px-20 mx-auto">
          <div className="hidden sm:block absolute top-5 left-0 right-0 h-px bg-neutral-200 z-0 mx-auto max-w-[50%]" />

          <div className="relative flex flex-col sm:flex-row sm:justify-between items-start gap-16 sm:gap-0">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative z-10 flex flex-col items-center text-center sm:w-1/3 px-4"
              >
                {/* Círculo do número */}
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[var(--color-primary-500)] text-white font-semibold shadow-md">
                  {step.number}
                </div>

                {/* Conteúdo */}
                <div className="mt-4 max-w-xs">
                  <h3 className="text-base font-semibold text-[var(--color-primary-900)]">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-neutral-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
