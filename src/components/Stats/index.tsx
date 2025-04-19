'use client'

import { motion } from 'framer-motion'

export const Stats = () => {
  const stats = [
    { id: 1, name: 'Análises realizadas', value: '+1.240' },
    { id: 2, name: 'Indenização média por pessoa', value: 'R$ 8,7 mil' },
    { id: 3, name: 'Tempo médio de resposta', value: '3 minutos' },
    { id: 4, name: 'Índice de satisfação', value: '94%' },
  ]

  return (
    <section className="z-20 relative">
      <div className="xl:max-w-[1380px] mx-auto w-screen px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <motion.dl
            className="-mt-8 bg-white grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4 shadow-lg border-white border shadow-gray-100"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.id}
                className="flex flex-col bg-gray-400/5 p-8"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5 }}
              >
                <dt className="text-sm/6 font-medium text-gray-600 text-balance">
                  {stat.name}
                </dt>
                <dd className="order-first text-3xl font-extrabold tracking-tight text-[var(--color-primary-900)]">
                  {stat.value}
                </dd>
              </motion.div>
            ))}
          </motion.dl>
        </div>
      </div>
    </section>
  )
}
