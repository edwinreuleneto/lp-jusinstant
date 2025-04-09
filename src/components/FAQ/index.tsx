'use client'

const faqs = [
  {
    id: 1,
    question: 'Preciso de um advogado para usar o JusInstant?',
    answer:
      'Não. Nosso sistema foi feito para funcionar sem a necessidade de advogado. Você envia sua história, documentos e recebe uma análise jurídica completa feita por IA.',
  },
  {
    id: 2,
    question: 'Recebo um PDF com minha análise?',
    answer:
      'Sim, no plano completo você recebe um relatório em PDF com todos os seus direitos, valores estimados e próximos passos.',
  },
  {
    id: 3,
    question: 'A IA é realmente segura?',
    answer:
      'Sim. Seus dados são protegidos com criptografia e não são compartilhados com terceiros. A análise é privada e feita exclusivamente para você.',
  },
  {
    id: 4,
    question: 'E se eu tiver mais dúvidas depois da análise?',
    answer:
      'No plano completo você pode enviar até 5 perguntas adicionais sobre seu caso, tudo dentro da mesma consulta.',
  },
  {
    id: 5,
    question: 'Em quanto tempo recebo a análise?',
    answer:
      'Após enviar suas informações, a análise fica pronta em poucos minutos. Você é avisado por e-mail ou WhatsApp assim que estiver disponível.',
  },
]

export const FaqSection = () => {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-[1380px] px-8 py-12 sm:py-20 lg:px-8 lg:py-20">
        <h2 className="text-4xl font-bold tracking-tight text-[var(--color-primary-900)] sm:text-5xl">
          Perguntas frequentes
        </h2>
        <dl className="mt-20 divide-y divide-gray-200">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="py-8 first:pt-0 last:pb-0 lg:grid lg:grid-cols-12 lg:gap-8"
            >
              <dt className="text-base font-semibold text-neutral-900 lg:col-span-5">{faq.question}</dt>
              <dd className="mt-4 text-base text-neutral-600 lg:col-span-7 lg:mt-0">
                {faq.answer}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
