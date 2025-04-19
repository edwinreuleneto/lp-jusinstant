"use client";

import Image from "next/image";
import { Star } from "lucide-react";

const testimonials = [
  {
    title: "Descobri um direito que nem sabia que tinha",
    body: "Enviei minha história, e em 2 minutos já sabia que podia pedir indenização. O relatório me deu segurança pra agir.",
    author: {
      name: "Camila Nogueira",
      role: "Ex-gerente comercial",
      imageUrl: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    rating: 5,
  },
  {
    title: "Simples e direto",
    body: "Achei que fosse complicado, mas foi tudo fácil. A IA entendeu minha situação só com algumas respostas.",
    author: {
      name: "Eduardo Lima",
      role: "Ex-estoquista",
      imageUrl: "https://randomuser.me/api/portraits/men/75.jpg",
    },
    rating: 4,
  },
  {
    title: "Mais de R$ 10 mil identificados!",
    body: "Eu trabalhava sem carteira. O relatório mostrou que posso receber mais de R$ 10 mil em direitos.",
    author: {
      name: "Rafaela Costa",
      role: "Ex-assistente de vendas",
      imageUrl: "https://randomuser.me/api/portraits/women/23.jpg",
    },
    rating: 5,
  },
  {
    title: "Indiquei pro meu irmão também",
    body: "A resposta foi clara e até indicaram um advogado depois. Recomendo muito pra quem tá perdido.",
    author: {
      name: "Marcelo Vieira",
      role: "Ex-motorista de aplicativo",
      imageUrl: "https://randomuser.me/api/portraits/men/41.jpg",
    },
    rating: 4,
  },
  {
    title: "Foi melhor que falar com advogado",
    body: "Não precisei sair de casa e tive uma explicação melhor do que na consulta que paguei com advogado antes.",
    author: {
      name: "Juliana Alves",
      role: "Ex-atendente de telemarketing",
      imageUrl: "https://randomuser.me/api/portraits/women/60.jpg",
    },
    rating: 5,
  },
  {
    title: "Me senti mais seguro",
    body: "Eu estava em dúvida se valia a pena processar. Depois da análise da IA, consegui tomar minha decisão com mais clareza.",
    author: {
      name: "Carlos Mendes",
      role: "Ex-operador de produção",
      imageUrl: "https://randomuser.me/api/portraits/men/52.jpg",
    },
    rating: 4,
  },
];

export const Testimonials = () => {
  return (
  <section className="py-24 sm:py-20 pb-28 bg-gradient-to-b to-[#FBF8F5] from-[#FBF8F5] border-t border-[#f3ede7]">
      <div className="max-w-[1380px] mx-auto px-4 lg:px-8">
        <div className="mx-auto text-center">
          <h2 className="text-[var(--color-primary-900)] text-3xl sm:text-4xl font-bold font-montserrat max-w-[420px] md:max-w-[100%] mx-auto">
            Quem já usou, aprova!
          </h2>
          <p className="mt-4 text-lg text-neutral-700">
            Milhares de trabalhadores já descobriram seus direitos com o JusInstant.
          </p>
        </div>

        <div className="mx-auto mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <figure
              key={index}
              className="flex flex-col justify-between rounded-2xl bg-white p-6 ring ring-gray-100 transition-all h-full"
            >
              <div>
                <blockquote>
                  <h3 className="text-base font-semibold text-[var(--color-primary-900)]">
                    {testimonial.title}
                  </h3>
                  <p className="mt-2 text-sm text-neutral-700 leading-relaxed">
                    “{testimonial.body}”
                  </p>
                </blockquote>

                {/* Estrelas */}
                <div className="mt-4 flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) =>
                    i < testimonial.rating ? (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    ) : (
                      <Star key={i} className="w-4 h-4 text-yellow-200" />
                    )
                  )}
                </div>
              </div>

              <figcaption className="mt-6 flex items-center gap-x-4 pt-4 border-t border-neutral-100">
                <div className="relative w-10 h-10 rounded-full overflow-hidden bg-neutral-100">
                  <Image
                    src={testimonial.author.imageUrl}
                    alt={`Foto de ${testimonial.author.name}`}
                    fill
                    sizes="40px"
                    className="object-cover rounded-full"
                  />
                </div>
                <div>
                  <div className="font-medium text-neutral-900">{testimonial.author.name}</div>
                  <div className="text-sm text-neutral-500">{testimonial.author.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};
