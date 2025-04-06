// Dependencies
import Image from "next/image";

// Components
import { Button } from "../ui/Button";
import { BlurFade } from "../ui/magicui/blur-fade";
import { TextAnimate } from "../ui/magicui/text-animate";

// Icons
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="w-full bg-gradient-to-b from-[#F7F9FA] to-white py-20 pb-0 z-20 relative">
      <div className="container mx-auto flex flex-col-reverse lg:grid lg:grid-cols-2 items-center gap-12 px-6 sm:px-8">
        {/* Texto */}
        <div className="text-center lg:text-left -mt-20">
          <BlurFade direction="down" delay={0.6} className="relative flex items-center gap-2 gap-x-4px-4 py-2 text-sm/6 text-gray-600">
            <span className="font-semibold text-[var(--color-primary-500)]">Você tem direitos</span>
            <span aria-hidden="true" className="h-4 w-px bg-gray-900/10" />
            <a href="#" className="flex items-center gap-x-1">
              <span aria-hidden="true" className="absolute inset-0" />
              E posso falar quais são, em dois minutos.
            </a>
          </BlurFade>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-[var(--color-primary-900)]">
            <TextAnimate
              by="character"
              once
              animation="blurInUp"
              as="span"
              className="inline"
            >
              Você pode ter dinheiro a receber e
            </TextAnimate>{" "}
            <TextAnimate
              animation="blurIn"
              by="character"
              once
              as="span"
              delay={0.3}
              className="inline text-[var(--color-primary-500)]"
            >
              nem sabe disso.
            </TextAnimate>
          </h1>

          <BlurFade direction="down" delay={0.6}>
            <p className="mt-4 text-base sm:text-lg text-neutral-700 max-w-xl mx-auto lg:mx-0">
              Descubra em minutos se tem direito a indenização, férias, FGTS ou outros valores trabalhistas — sem falar com ninguém.
            </p>
          </BlurFade>

          <BlurFade className="mt-10 sm:mt-12" direction="up" delay={0.6}>
            <div className="flex justify-center lg:justify-start gap-4">
              <Button
                variant="primary"
                aria-label="Iniciar consulta jurídica"
                size="lg"
              >
                Quero minha análise por R$ 29,90
              </Button>
              <Button
                variant="outline"
                aria-label="Conhecer"
                size="lg"
                icon={ArrowRight}
                iconPosition="end"
              >
                Conhecer
              </Button>
            </div>
          </BlurFade>
        </div>

        {/* Imagem */}
        <BlurFade direction="left" delay={0.4} className="w-full -mb-12">
          <Image
            src="/images/hero/banner-2.png"
            alt="JusInstant, justiça trabalhista"
            width={500}
            height={400}
            className="w-full h-auto"
            priority
            quality={100}
          />
        </BlurFade>
      </div>
    </section>
  );
};

export default Hero;
