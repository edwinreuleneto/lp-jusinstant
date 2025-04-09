'use client'

import Image from 'next/image'
import { Button } from '../ui/Button'
import { ArrowRightIcon } from 'lucide-react'

const posts = [
  {
    id: 1,
    title: 'Você sabia que pode ter direito a horas extras não pagas?',
    href: '#',
    description:
      'Muitos trabalhadores acabam realizando horas extras sem o devido pagamento. Entenda como identificar e reivindicar seus direitos.',
    date: '04 Abr, 2025',
    datetime: '2025-04-04',
    category: { title: 'Direitos Trabalhistas', href: '#' },
    author: {
      name: 'JusInstant',
      role: 'Equipe Editorial',
      href: '#',
      imageUrl: '/images/avatar-robot.png',
    },
  },
  {
    id: 2,
    title: 'Demissão sem justa causa? Veja o que você pode receber',
    href: '#',
    description:
      'Indenização, aviso prévio, férias proporcionais e muito mais. Entenda o que está incluso na rescisão e como conferir tudo.',
    date: '29 Mar, 2025',
    datetime: '2025-03-29',
    category: { title: 'Rescisão', href: '#' },
    author: {
      name: 'JusInstant',
      role: 'Equipe Editorial',
      href: '#',
      imageUrl: '/images/avatar-robot.png',
    },
  },
  {
    id: 3,
    title: 'Fui registrado como PJ, mas trabalhava como CLT. E agora?',
    href: '#',
    description:
      'O famoso "pejotismo" pode esconder vínculos empregatícios disfarçados. Veja o que a lei diz e como buscar seus direitos.',
    date: '15 Mar, 2025',
    datetime: '2025-03-15',
    category: { title: 'Vínculo Empregatício', href: '#' },
    author: {
      name: 'JusInstant',
      role: 'Equipe Editorial',
      href: '#',
      imageUrl: '/images/avatar-robot.png',
    },
  },
]

export const BlogSection = () => {
  return (
    <section className="py-20 sm:py-20 bg-gradient-to-t to-white from-transparent">
      <div className="mx-auto max-w-[1380px] px-8">
        <div className="text-center mb-2 px-4">
          <h2 className="text-3xl sm:text-5xl font-bold text-[var(--color-primary-900)] relative inline-block">
            Conteúdo que{" "}
            <span className="relative inline-block before:absolute before:inset-x-0 before:bottom-1 before:h-2 before:bg-[var(--color-primary-500)] before:-z-0 before:-rotate-1">
              <span className="z-50 relative">ajuda você</span>
            </span>
          </h2>
          <p className="mt-2 text-neutral-600">
            Dicas práticas e informações legais explicadas de forma simples.
          </p>
        </div>

        <div className="mx-auto mt-12 grid grid-cols-1 gap-x-4 gap-y-16 pt-4 sm:pt-8 lg:mx-0 lg:grid-cols-2 xl:grid-cols-3 px-4">
          {posts.map((post) => (
            <article key={post.id} className="flex flex-col justify-between bg-white p-4 ring-1 ring-gray-200 rounded-lg">
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.datetime} className="text-neutral-500">
                  {post.date}
                </time>
                <a
                  href={post.category.href}
                  className="relative z-10 rounded-full bg-[var(--color-primary-50)] px-3 py-1.5 text-xs font-semibold text-[var(--color-primary-500)] hover:bg-[var(--color-primary-100)]"
                >
                  {post.category.title}
                </a>
              </div>
              <div className="group relative mt-3">
                <h3 className="text-lg font-semibold leading-6 text-gray-900 group-hover:text-[var(--color-primary-600)]">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-4 text-sm text-neutral-600 line-clamp-3">{post.description}</p>
              </div>
              <div className="mt-6 flex items-center gap-x-4">
                <Image
                  src={post.author.imageUrl}
                  alt={post.author.name}
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-full bg-neutral-100 object-cover"
                />
                <div className="text-sm">
                  <p className="font-semibold text-gray-900">{post.author.name}</p>
                  <p className="text-neutral-500">{post.author.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Botão abaixo dos cards */}
        <div className="mt-16 flex justify-center">
          <Button variant="outline" size="lg" icon={ArrowRightIcon} iconPosition='end'>
            Conheça nosso blog
          </Button>
        </div>
      </div>
    </section>
  )
}
