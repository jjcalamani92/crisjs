import { ChevronDownIcon } from "@heroicons/react/outline";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/solid";
import React, { useState } from "react";
import { Button, Main } from "./component";
const prices = [
  {
    http: "HTTPS/SSL automático",
    bandwidth: "Hasta 512 MB de ancho de banda",
    admin: "Panel de Administración",
    db: "Hasta 1000 productos en base de datos",
    img: "2 imagenes por producto",
  },
  {
    http: "HTTPS/SSL automático",
    bandwidth: "Hasta 1 TB de ancho de banda",
    admin: "Panel de Administración",
    db: "Hasta 3000 productos en base de datos",
    img: "4 imagenes por producto",
  },

]
export const Pricing = () => {
  const [show, setShow] = useState(false);
  return (
    <Main>
    <section className="bg-white ">
      <div className="px-6 py-8 mx-auto">
        <div className="max-w-2xl p-1.5 mx-auto rounded-lg ">
          <div className="grid gap-3 grid-cols-2 z-0">
            <button className="px-3 py-2 font-medium text-gray-800 uppercase transition-colors duration-200 bg-transparent rounded-lg focus:outline-none">Mensual</button>
            <button className="flex items-center justify-center px-3 py-2 font-medium text-gray-800 uppercase transition-colors duration-200  rounded-lg focus:outline-none">
              <span className="mx-1">Anual</span>
              <span className="text-xs mx-1 font-normal text-white bg-orange-500 rounded-full py-0.5 px-1.5">AHORRAR 15%</span>
            </button>
          </div>
        </div>
        <div className=" grid grid-cols-1 gap-6 lg:grid-cols-3 justify-center mt-16 space-y-6 md:-mx-5 md:space-y-0 ">
          <div className="w-full px-6 py-4 transition-colors duration-200 rounded-lg md:mx-5 lg:w-96 bg-gray-50   shadow-lg">
            <div className="text-center">
              <p className="text-4xl font-semibold text-gray-800 dark:text-gray-100">Básico</p>
              <p className="mt-4 text-gray-500">Características esenciales</p>
              <h4 className="mt-2 text-gray-600 line-through">Bs 69.99</h4>
              <h4 className="mt-2 text-5xl font-semibold text-gray-800">Bs 49.99</h4>
              <p className="mt-4 text-gray-500">/antes del mes</p>
            </div>
            <div className="mt-8 space-y-8">
              <div className="flex items-center">
                <CheckCircleIcon
                  className="w-5 h-5 text-orange-500"
                  aria-hidden="true"
                />
                <span className="mx-4 text-gray-700">HTTPS/SSL automático</span>
              </div>
              <div className="flex items-center">
                <CheckCircleIcon
                  className="w-5 h-5 text-orange-500"
                  aria-hidden="true"
                />
                <span className="mx-4 text-gray-700">Hasta 10 GB de ancho de banda</span>
              </div>
              <div className="flex items-center">
                <CheckCircleIcon
                  className="w-5 h-5 text-orange-500"
                  aria-hidden="true"
                />
                <span className="mx-4 text-gray-700">Panel de Administración</span>
              </div>
              <div className="flex items-center">
                <CheckCircleIcon
                  className="w-5 h-5 text-orange-500"
                  aria-hidden="true"
                />
                <span className="mx-4 text-gray-700  ">Hasta 1000 productos en base de datos</span>
              </div>
              <div className="flex items-center">
                <CheckCircleIcon
                  className="w-5 h-5 text-orange-500"
                  aria-hidden="true"
                />
                <span className="mx-4 text-gray-700  ">2 imagenes por producto</span>
              </div>
              <div className="flex items-center">
                <XCircleIcon
                  className="w-5 h-5 text-orange-500"
                  aria-hidden="true"
                />
                <span className="mx-4 text-gray-700  ">Chat de soporte</span>
              </div>
              <div className="flex items-center">
                <XCircleIcon
                  className="w-5 h-5 text-orange-500"
                  aria-hidden="true"
                />
                <span className="mx-4 text-gray-700  ">Carrito de compras</span>
              </div>
            </div>

            {/* <Button content="Elige Básico" /> */}
          </div>
          <div className="w-full transition-colors duration-200 rounded-lg md:mx-5 lg:w-96 bg-gray-50   shadow-lg">
            {/* <p className="py-2 text-sm text-center text-white uppercase bg-orange-500">Recomendado por expertos</p> */}
            <div className="px-6 py-4">
              <div className="text-center">
                <p className="text-4xl font-semibold text-gray-800 dark:text-gray-100">Pro</p>
                <p className="mt-4 text-gray-500  ">Funciones avanzadas</p>
                <h4 className="mt-2 text-gray-600 line-through dark:text-gray-400">Bs 139.99</h4>
                <h4 className="mt-2 text-5xl font-semibold text-gray-800 dark:text-gray-100">Bs 99.99</h4>
                <p className="mt-4 text-gray-500  ">/antes del mes</p>
                {/* <p className="mt-4 text-gray-500  ">Bill all 6 months</p> */}
              </div>
              <div className="mt-8 space-y-8">
                <div className="flex items-center">
                  <CheckCircleIcon
                    className="w-5 h-5 text-orange-500"
                    aria-hidden="true"
                  />
                  <span className="mx-4 text-gray-700  ">HTTPS/SSL automático</span>
                </div>
                <div className="flex items-center">
                  <CheckCircleIcon
                    className="w-5 h-5 text-orange-500"
                    aria-hidden="true"
                  />
                  <span className="mx-4 text-gray-700  ">Hasta 200 GB de ancho de banda</span>
                </div>
                <div className="flex items-center">
                  <CheckCircleIcon
                    className="w-5 h-5 text-orange-500"
                    aria-hidden="true"
                  />
                  <span className="mx-4 text-gray-700  ">Panel de Administración</span>
                </div>
                <div className="flex items-center">
                  <CheckCircleIcon
                    className="w-5 h-5 text-orange-500"
                    aria-hidden="true"
                  />
                  <span className="mx-4 text-gray-700  ">Hasta 3000 productos en base de datos</span>
                </div>
                <div className="flex items-center">
                  <CheckCircleIcon
                    className="w-5 h-5 text-orange-500"
                    aria-hidden="true"
                  />
                  <span className="mx-4 text-gray-700  ">4 imagenes por producto</span>
                </div>

                <div className="flex items-center">
                  <CheckCircleIcon
                    className="w-5 h-5 text-orange-500"
                    aria-hidden="true"
                  />
                  <span className="mx-4 text-gray-700  ">Chat de soporte</span>
                </div>
                <div className="flex items-center">
                  <CheckCircleIcon
                    className="w-5 h-5 text-orange-500"
                    aria-hidden="true"
                  />
                  <span className="mx-4 text-gray-700  ">Carrito de compras</span>
                </div>
              </div>
              {/* <Button name="Elige Profesional" /> */}

            </div>
          </div>
          <div className="w-full overflow-hidden transition-colors duration-200 rounded-lg md:mx-5 lg:w-96 bg-gray-50   shadow-lg">
            {/* <p className="py-2 text-sm text-center text-white uppercase bg-orange-500">Recomendado por expertos</p> */}
            <div className="px-6 py-4">
              <div className="text-center">
                <p className="text-4xl font-semibold text-gray-800 dark:text-gray-100">Enterprice</p>
                <p className="mt-4 text-gray-500  ">Funciones avanzadas</p>
                <h4 className="mt-2 text-gray-600 line-through dark:text-gray-400">Bs 299.99</h4>
                <h4 className="mt-2 text-5xl font-semibold text-gray-800 dark:text-gray-100">Bs 199.99</h4>
                <p className="mt-4 text-gray-500  ">/antes del mes</p>
                {/* <p className="mt-4 text-gray-500  ">Bill all 6 months</p> */}
              </div>
              <div className="mt-8 space-y-8">
                <div className="flex items-center">
                  <CheckCircleIcon
                    className="w-5 h-5 text-orange-500"
                    aria-hidden="true"
                  />
                  <span className="mx-4 text-gray-700  ">HTTPS/SSL automático</span>
                </div>
                <div className="flex items-center">
                  <CheckCircleIcon
                    className="w-5 h-5 text-orange-500"
                    aria-hidden="true"
                  />
                  <span className="mx-4 text-gray-700  ">Hasta 1 TB de ancho de banda</span>
                </div>
                <div className="flex items-center">
                  <CheckCircleIcon
                    className="w-5 h-5 text-orange-500"
                    aria-hidden="true"
                  />
                  <span className="mx-4 text-gray-700  ">Panel de Administración</span>
                </div>
                <div className="flex items-center">
                  <CheckCircleIcon
                    className="w-5 h-5 text-orange-500"
                    aria-hidden="true"
                  />
                  <span className="mx-4 text-gray-700  ">Hasta 6000 productos en base de datos</span>
                </div>
                <div className="flex items-center">
                  <CheckCircleIcon
                    className="w-5 h-5 text-orange-500"
                    aria-hidden="true"
                  />
                  <span className="mx-4 text-gray-700  ">10 imagenes por producto</span>
                </div>

                <div className="flex items-center">
                  <CheckCircleIcon
                    className="w-5 h-5 text-orange-500"
                    aria-hidden="true"
                  />
                  <span className="mx-4 text-gray-700  ">Chat de soporte</span>
                </div>
                <div className="flex items-center">
                  <CheckCircleIcon
                    className="w-5 h-5 text-orange-500"
                    aria-hidden="true"
                  />
                  <span className="mx-4 text-gray-700  ">Carrito de compras</span>
                </div>
              </div>
              {/* <Button name="Elige Profesional" /> */}

            </div>
          </div>
        </div>
      </div>
    </section>
    </Main>
  );
}


