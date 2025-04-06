// Dependencies
import Image from "next/image";

// Components
import { Button } from "../ui/Button";
import { BlurFade } from "../ui/magicui/blur-fade";
import { TextAnimate } from "../ui/magicui/text-animate";

const Hero = () => {
  return (
    <section className="relative z-20 w-full bg-gradient-to-b from-[#F7F9FA] to-white py-20 pt-32 md:pt-52 md:py-20 lg:pt-52 lg:py-40 xl:pt-40 xl:py-24">
      <div className="xl:max-w-[1380px] mx-auto flex w-screen flex-col-reverse items-center gap-12 px-6 sm:px-8 md:grid md:grid-cols-[1fr] lg:grid-cols-[2fr_0.5fr] xl:grid-cols-[2fr_auto]">
        {/* Texto */}
        <div className="mx-auto max-w-2xl text-center md:-mt-20 lg:mx-0 lg:text-left">
          <BlurFade
            direction="down"
            delay={0.6}
            className="relative flex items-center justify-center gap-2 py-2 text-sm text-gray-600 lg:justify-start"
          >
            <span className="font-semibold text-[var(--color-primary-500)]">Você tem direitos</span>
            <span aria-hidden="true" className="h-4 w-px bg-gray-900/10" />
            <a href="#" className="relative flex items-center gap-x-1">
              <span aria-hidden="true" className="absolute inset-0" />
              E posso falar quais são, em dois minutos.
            </a>
          </BlurFade>

          <h1 className="mt-2 text-balance break-normal text-3xl font-bold leading-tight text-[var(--color-primary-900)] sm:text-4xl md:text-5xl">
            <TextAnimate
              by="word"
              once
              animation="blurInUp"
              as="span"
              className="inline"
            >
              Você pode ter dinheiro a receber e
            </TextAnimate>{" "}
            <TextAnimate
              animation="blurIn"
              by="word"
              once
              delay={0.3}
              as="span"
              className="inline text-[var(--color-primary-500)]"
            >
              nem sabe disso.
            </TextAnimate>
          </h1>

          <BlurFade direction="down" delay={0.6}>
            <p className="mx-auto mt-4 max-w-xl text-base text-neutral-700 sm:text-lg lg:mx-0">
              Descubra em minutos se tem direito a indenização, férias, FGTS ou outros valores trabalhistas — sem falar com ninguém.
            </p>
          </BlurFade>

          <BlurFade direction="up" delay={0.6} className="mt-10 sm:mt-12">
            <div className="grid grid-cols-[1fr] justify-center gap-4 md:grid-cols-[auto_auto] lg:justify-start">
              <Button variant="primary" size="lg" aria-label="Iniciar consulta jurídica">
                Quero minha análise por R$ 29,90
              </Button>
              <Button variant="outline" size="lg" iconPosition="end" aria-label="Conhecer">
                Conhecer
              </Button>
            </div>
          </BlurFade>
        </div>

        {/* Imagem */}
        <BlurFade
          direction="left"
          delay={0.4}
          className="relative -mb-12 hidden w-full max-w-lg scale-100 md:mr-10 md:scale-100 lg:-mr-10 lg:mb-20 lg:flex lg:scale-200 xl:mx-0 xl:-mb-2 xl:max-w-none xl:scale-125 2xl:mr-0"
        >
          <Image
            src="/images/hero/banner-2.png"
            alt="JusInstant, justiça trabalhista"
            width={500}
            height={400}
            className="h-auto w-full scale-100 md:-mb-20 lg:scale-125 lg:md:scale-150 xl:scale-100"
            priority
            quality={100}
          />
        </BlurFade>
      </div>
    </section>
  );
};

export default Hero;
