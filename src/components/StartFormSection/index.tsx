'use client'

import { useForm } from 'react-hook-form'
import { Play, UploadCloud } from 'lucide-react'
import { Button } from '../ui/Button'

type FormValues = {
  nome: string
  estado: string
  email: string
  historia: string
  arquivo: FileList
}

export default function JusInstantForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>()

  const onSubmit = (data: FormValues) => {
    console.log('Dados enviados:', data)
    reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white py-24 sm:py-32 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-10 border-b border-gray-200 pb-12">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Envie seu caso</h2>
            <p className="mt-1 text-sm text-gray-600">
              Conte sua situação e envie um arquivo, se tiver. A análise é feita em minutos.
            </p>
          </div>

          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Nome</label>
              <input
                type="text"
                {...register('nome', { required: true })}
                className="mt-1 block w-full rounded-md border border-gray-300  px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-primary-600"
              />
              {errors.nome && <span className="text-sm text-red-500">Campo obrigatório</span>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Estado</label>
              <input
                type="text"
                {...register('estado', { required: true })}
                className="mt-1 block w-full rounded-md border border-gray-300  px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-primary-600"
              />
              {errors.estado && <span className="text-sm text-red-500">Campo obrigatório</span>}
            </div>

            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                {...register('email', { required: true })}
                className="mt-1 block w-full rounded-md border border-gray-300  px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-primary-600"
              />
              {errors.email && <span className="text-sm text-red-500">Campo obrigatório</span>}
            </div>

            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700">Conte sua história</label>
              <textarea
                rows={5}
                {...register('historia', { required: true })}
                className="mt-1 block w-full rounded-md border border-gray-300  px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-primary-600"
              />
              {errors.historia && <span className="text-sm text-red-500">Campo obrigatório</span>}
            </div>

            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700">Anexo (opcional)</label>
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-300 px-6 py-10">
                <div className="text-center">
                  <UploadCloud className="mx-auto h-8 w-8 text-gray-400" />
                  <div className="mt-4 flex text-sm text-gray-600">
                    <label className="relative cursor-pointer rounded-md font-medium text-primary-600 hover:text-primary-500">
                      <span>Upload de arquivo</span>
                      <input
                        type="file"
                        {...register('arquivo')}
                        className="sr-only"
                      />
                    </label>
                    <p className="pl-1">ou arraste para cá</p>
                  </div>
                  <p className="text-xs text-gray-500">PDF, DOC, PNG ou JPG até 10MB</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex justify-end">
          <Button
            type="submit"
            className="inline-flex items-center rounded-md bg-[var(--color-primary-600)] px-4 py-2 text-white text-sm font-medium  hover:bg-[var(--color-primary-500)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--color-primary-600)]"
            icon={Play}
            iconPosition='start'
          >
            Iniciar minha análise detalhada
          </Button>
        </div>
      </div>
    </form>
  )
}