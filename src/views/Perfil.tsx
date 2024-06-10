import { Button } from "@nextui-org/react"
import { IoLockClosed } from "react-icons/io5";

export const Perfil = () => {
  return (
    <section className="p-7">
      <div className="bg-white overflow-hidden shadow rounded-lg border pt-7">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Emprendedor
          </h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            Usuario registrado desde 10 / 02 / 2024
          </p>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
          <dl className="sm:divide-y sm:divide-gray-200">
            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Nombre
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                Emprendedor
              </dd>
            </div>
            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Email
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                usuario@example.com
              </dd>
            </div>
            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Número de teléfono
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                (123) 456-7890
              </dd>
            </div>
            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Dirección
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                123 Av. Libertador<br />
                San Juan, Argentina
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <div className="flex flex-col gap-3 mt-4">
        <Button color="primary" endContent={<IoLockClosed />} className="text-lg justify-between pl-7 font-semibold">Crear Ruta Personalizada</Button>
        <Button color="primary" endContent={<IoLockClosed />} className="text-lg justify-between pl-7 font-semibold">¿Estas Perdido?</Button>
        <Button color="primary" endContent={<IoLockClosed />} className="text-lg justify-between pl-7 font-semibold">Contactate con Nosotros</Button>
        <Button color="primary" endContent={<IoLockClosed />} className="text-lg justify-between pl-7 font-semibold">Cambiar idioma</Button>
      </div>
    </section>

  )
}