'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, UploadCloud, X } from 'lucide-react'
import { Button } from '../ui/Button'

type FormValues = {
  nome: string
  estado: string
  email: string
  historia: string
  arquivo: FileList
}

export default function JusInstantFormModal() {
  const [open, setOpen] = useState(false)
  const [step, setStep] = useState(1)

  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
    reset,
  } = useForm<FormValues>()

  const getStepFields = (currentStep: number): (keyof FormValues)[] => {
    if (currentStep === 1) return ['historia']
    if (currentStep === 2) return []
    return ['nome', 'email', 'estado']
  }

  const nextStep = async () => {
    const valid = await trigger(getStepFields(step))
    if (valid) setStep(step + 1)
  }

  const prevStep = () => setStep(step - 1)

  const onSubmit = (data: FormValues) => {
    console.log('Dados enviados:', data)
    reset()
    setStep(1)
    setOpen(false)
  }

  return (
    <>
      {/* Botão externo que abre o modal */}
      <div className="flex justify-center m-3 py-12">
        <Button
          type="button"
          icon={Play}
          iconPosition="start"
          variant="primary"
          size="md"
          className="w-full max-w-xs"
          onClick={() => setOpen(true)}
        >
          Analisa agora
        </Button>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative w-full max-w-4xl mx-auto bg-white rounded-2xl p-8 shadow-xl"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              {/* Fechar modal */}
              <button
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Título + instrução */}
              <div className="mb-4 space-y-1">
                <h2 className="text-2xl font-semibold text-left text-[var(--color-primary-900)] tracking-tight">
                  {step === 1 && 'Nos conte o que aconteceu...'}
                  {step === 2 && 'Você tem alguma evidência?'}
                  {step === 3 && 'Como podemos entrar em contato?'}
                </h2>
                <span className="block text-sm text-neutral-500 leading-snug -mt-0.5">
                  {step === 1 && 'Conte com o máximo de detalhes possíveis. Quanto mais claro, melhor para você.'}
                  {step === 2 && 'Você pode enviar provas como prints, contratos ou documentos relacionados.'}
                  {step === 3 && 'Precisamos desses dados para te manter informado sobre sua análise.'}
                </span>
              </div>

              {/* Formulário */}
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-0">
                <AnimatePresence mode="wait">
                  {/* Etapa 1 */}
                  {step === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-2"
                    >
                      <textarea
                        rows={8}
                        {...register('historia', { required: true })}
                        className="w-full rounded-md bg-[#f9f9f9] border border-neutral-200 px-4 py-3 text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-500)] transition-all"
                      />
                      {errors.historia && (
                        <span className="text-sm text-red-500">Campo obrigatório</span>
                      )}
                    </motion.div>
                  )}

                  {/* Etapa 2 */}
                  {step === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-4"
                    >
                      <div className="rounded-xl border border-dashed border-neutral-300 bg-[#f9f9f9] px-6 py-10 text-center">
                        <UploadCloud className="mx-auto h-8 w-8 text-neutral-400" />
                        <div className="mt-4 text-sm text-neutral-500">
                          <label className="relative cursor-pointer text-black font-medium hover:underline">
                            <span>Selecionar arquivo</span>
                            <input
                              type="file"
                              {...register('arquivo')}
                              className="sr-only"
                            />
                          </label>
                          <p className="text-xs text-neutral-400 mt-1">PDF, DOC, PNG ou JPG até 10MB</p>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Etapa 3 */}
                  {step === 3 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ duration: 0.3 }}
                      className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                    >
                      <div className="col-span-1 space-y-2">
                        <label className="block text-sm text-neutral-600 font-medium">Nome</label>
                        <input
                          type="text"
                          {...register('nome', { required: true })}
                          className="w-full rounded-md bg-[#f9f9f9] border border-neutral-200 px-4 py-2.5 text-sm text-neutral-800 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-500)] transition"
                        />
                        {errors.nome && <span className="text-sm text-red-500">Campo obrigatório</span>}
                      </div>

                      <div className="col-span-1 space-y-2">
                        <label className="block text-sm text-neutral-600 font-medium">Estado</label>
                        <input
                          type="text"
                          {...register('estado', { required: true })}
                          className="w-full rounded-md bg-[#f9f9f9] border border-neutral-200 px-4 py-2.5 text-sm text-neutral-800 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-500)] transition"
                        />
                        {errors.estado && <span className="text-sm text-red-500">Campo obrigatório</span>}
                      </div>

                      <div className="sm:col-span-2 space-y-2">
                        <label className="block text-sm text-neutral-600 font-medium">Email</label>
                        <input
                          type="email"
                          {...register('email', { required: true })}
                          className="w-full rounded-md bg-[#f9f9f9] border border-neutral-200 px-4 py-2.5 text-sm text-neutral-800 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-500)] transition"
                        />
                        {errors.email && <span className="text-sm text-red-500">Campo obrigatório</span>}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Botões etapas 1 e 2 */}
                {step <= 3 && (
                  <div className="pt-4 flex justify-end items-center gap-8">
                    {step > 1 && (
                      <Button
                        onClick={prevStep}
                        type="button"
                        variant="secondary"
                        size="md"
                        className="text-gray-800 bg-transparent font-medium"
                      >
                        Voltar
                      </Button>
                    )}
                    <Button
                      onClick={nextStep}
                      type="button"
                      variant="primary"
                      size="md"
                    >
                      Próximo
                    </Button>
                  </div>
                )}
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
