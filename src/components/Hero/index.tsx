// Dependencies
import Image from "next/image";

// Components
import { Button } from "../ui/Button";
import { BlurFade } from "../ui/magicui/blur-fade";
import { TextAnimate } from "../ui/magicui/text-animate";

const Hero = () => {
  return (
    <section className="items-center md:min-h-auto relative z-20 w-full bg-gradient-to-l from-[#D1D1D9] to-[#f8f9fb] overflow-hidden mt-16">
      <div className="relative z-10 xl:max-w-[1380px] mx-auto flex w-full flex-col-reverse items-center gap-12 px-4 md:px-6 sm:px-8 py-8 md:grid md:grid-cols-[1fr] lg:grid-cols-[1fr] xl:grid-cols-[1fr]">
        <div className="mx-auto lg:mx-0 lg:text-left py-12 md:py-20 gap-4 md:gap-0 grid">
          <h1 className="text-balance break-normal text-4xl font-bold leading-tight text-[var(--color-primary-900)] sm:text-4xl md:text-5xl md:max-w-2xl w-full">
            <TextAnimate
              by="word"
              once
              animation="blurInUp"
              as="span"
              className="inline"
            >
              Está em dúvida sobre seus
            </TextAnimate>{" "}
            <TextAnimate
              animation="blurIn"
              by="word"
              once
              delay={0.3}
              as="span"
              className="inline text-[var(--color-primary-500)]"
            >
              direitos trabalhistas
            </TextAnimate>
            <TextAnimate
              by="word"
              once
              delay={0.5}
              animation="blurInUp"
              as="span"
              className="inline"
            >
              ?
            </TextAnimate>
          </h1>

          <BlurFade direction="down" delay={0.6}>
            <p className="mx-auto mt-4 max-w-xl text-base text-neutral-700 sm:text-lg lg:mx-0">
              A IA do JusInstant analisa sua situação e revela, em minutos, o que você pode ou não ter direito a receber — com base na CLT e jurisprudências reais.
            </p>
          </BlurFade>

          <BlurFade
            direction="down"
            delay={0.6}
            className="hidden md:flex mt-4 relative flex-cols items-center justify-center gap-2 py-2 text-sm text-gray-600 lg:justify-start text-center"
          >
            <span className="font-semibold text-[var(--color-primary-500)]">🔒  100% seguro e protegido pela LGPD</span>
            <span aria-hidden="true" className="h-4 w-px bg-gray-900/10" />
            <a href="#" className="relative items-center gap-x-1 text-center grid">
              <span aria-hidden="true" className="absolute inset-0" />
              Sem espera, sem advogado, sem burocracia
            </a>
          </BlurFade>

          <BlurFade direction="up" delay={0.6} className="mt-10 sm:mt-12">
            <div className="grid grid-cols-[1fr] justify-center gap-4 md:grid-cols-[auto_auto] lg:justify-start">
              <Button variant="primary" size="lg" aria-label="Iniciar consulta jurídica">
                Analisar agora
              </Button>
            </div>
          </BlurFade>
        </div>
        <div className="absolute right-10 top-0 z-0 hidden h-full w-1/2 lg:block">
          <Image
            src="/images/hero/banner-model.png"
            alt="JusInstant, justiça trabalhista"
            layout="fill"
            objectFit="contain"
            objectPosition="right center"
            priority
            quality={100}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
