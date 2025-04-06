'use client'

import { CheckIcon } from 'lucide-react'
import clsx from 'clsx'

const plans = [
  {
    name: 'Consulta única',
    price: 'R$ 20',
    description: 'Ideal para quem quer entender se tem direito a algo.',
    benefits: [
      '1 pergunta sobre seu caso',
      'Envio de documentos e história',
      'Resposta em minutos com base na CLT',
    ],
    highlight: false,
  },
  {
    name: 'Consulta completa',
    price: 'R$ 29,90',
    description: 'Perfeito para aprofundar e garantir seus direitos.',
    benefits: [
      '1 pergunta principal com envio de documentos',
      'Mais 5 perguntas de acompanhamento',
      'PDF detalhado com análise jurídica',
      'Indicação de advogado especializado com cupom de desconto',
    ],
    highlight: true,
  },
]

export default function Pricing() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold tracking-tight text-[var(--color-primary-900)] sm:text-5xl">
            Qual é o melhor plano para você?
          </h2>
          <p className="mt-4 text-lg text-neutral-700">
            Escolha o tipo de consulta que faz mais sentido para sua situação.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 max-w-4xl mx-auto">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={clsx(
                'rounded-2xl border bg-white p-6 shadow-sm flex flex-col justify-between',
                plan.highlight
                  ? 'border-[var(--color-primary-600)] ring-2 ring-[var(--color-primary-100)]'
                  : 'border-neutral-200'
              )}
            >
              <div>
                <h3 className="text-xl font-semibold text-[var(--color-primary-900)]">{plan.name}</h3>
                <p className="mt-1 text-3xl font-bold text-[var(--color-primary-600)]">{plan.price}</p>
                <p className="mt-2 text-sm text-neutral-600">{plan.description}</p>

                <ul className="mt-6 space-y-2">
                  {plan.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-neutral-800">
                      <CheckIcon className="h-5 w-5 text-[var(--color-primary-600)]" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <button
                type="button"
                className="mt-8 w-full rounded-lg bg-[var(--color-primary-600)] px-4 py-2 text-white font-semibold hover:bg-[var(--color-primary-900)] transition-all"
              >
                Escolher plano
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
