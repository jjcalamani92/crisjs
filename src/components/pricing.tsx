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
      <section className="max-w-7xl px-4 pt-24 pb-12 mx-auto">
        <div className="w-full mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center">
          <h1 className="block pb-2 mb-5 text-4xl font-extrabold leading-none tracking-normal text-transparent md:text-6xl md:tracking-tight bg-clip-text bg-gradient-to-r from-green-400 to-purple-500">
            Simple, transparent pricing.
          </h1>
          <p className="px-0 mb-10 text-lg text-gray-500 md:text-xl lg:px-24">Pricing that works for companies of any size.</p>
        </div>
        <div className="w-full mx-auto xl:w-4/5">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-3 sm:gap-8">
            <div className="border-0 rounded-none shadow-none card sm:rounded-lg md:border">
              <div className="flex flex-col justify-between p-6 border-b border-gray-200">
                <p className="mb-1 text-lg font-semibold text-yellow-600">Take Flight</p>
                <p className="pb-0 my-2 font-mono text-4xl font-extrabold text-gray-900">$25</p>
                <p className="text-sm text-gray-500">Organization / month</p>
                <a href="#" className="w-full mt-6 btn btn-warning btn-lg">Get started for free →</a>
              </div>
              <ul className="flex flex-col flex-grow p-6 space-y-3">
                <li className="flex items-start">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="flex-none w-4 h-4 mt-1 mr-2 text-yellow-600">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700"> Unlimited feedback </span>
                </li>
                <li className="flex items-start">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="flex-none w-4 h-4 mt-1 mr-2 text-yellow-600">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-800 border-b-2 border-gray-500 border-dotted cursor-pointer" x-data="tooltip()" x-spread="tooltip" x-position="top" title="The person who manages the feedback for the product.">One manager</span>
                </li>
                <li className="flex items-start">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="flex-none w-4 h-4 mt-1 mr-2 text-yellow-600">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-800 border-b-2 border-gray-500 border-dotted cursor-pointer" x-data="tooltip()" x-spread="tooltip" x-position="top" title="User is the person who submits the feedback. We are not counting the people who are upvoting features.">1000 submitters</span>
                </li>
                <li className="flex items-start">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="flex-none w-4 h-4 mt-1 mr-2 text-yellow-600">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Unlimited Private Boards</span>
                </li>
                <li className="flex items-start">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="flex-none w-4 h-4 mt-1 mr-2 text-yellow-600">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-800 border-b-2 border-gray-500 border-dotted cursor-pointer" x-data="tooltip()" x-spread="tooltip" x-position="top" title="User is the person who submits the feedback. We are not counting the people who are upvoting features.">Custom domains support</span>
                </li>
                <li className="flex items-start">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="flex-none w-4 h-4 mt-1 mr-2 text-yellow-600">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-800 border-b-2 border-gray-500 border-dotted cursor-pointer" x-data="tooltip()" x-spread="tooltip" x-position="top" title="Support for German, French, Polish and more.">Multi-language Support</span>
                </li>
                <li className="flex items-start">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="flex-none w-4 h-4 mt-1 mr-2 text-yellow-600">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-800 border-b-2 border-gray-500 border-dotted cursor-pointer" x-data="tooltip()" x-spread="tooltip" x-position="top" title="Manage your customer feedback at the comfort of your phone. On iOS and Android.">Free iOS and Android apps</span>
                </li>
                <li className="flex items-start">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="flex-none w-4 h-4 mt-1 mr-2 text-yellow-600">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">3 Integrations</span>
                </li>
                <li className="flex items-start">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="flex-none w-4 h-4 mt-1 mr-2 text-yellow-600">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">New features every 14 days</span>
                </li>
              </ul>
            </div>
            <div className="border-0 rounded-none shadow-none card sm:rounded-lg md:border">
              <div className="flex flex-col justify-between p-6 border-b border-gray-200">
                <div>
                  <div className="flex items-center justify-between">
                    <p className="mb-1 text-lg font-semibold text-purple-700">Fly High</p>
                    <span className="badge bg-primary-light text-primary">Most popular</span>
                  </div>
                  <p className="my-2 font-mono text-4xl font-extrabold text-gray-900">$50</p>
                  <p className="text-sm text-gray-500">Organization / month</p>
                </div>
                <a href="#" className="w-full mt-6 btn btn-primary btn-lg">Get started for free →</a>
              </div>
              <ul className="flex flex-col flex-grow p-6 space-y-3">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-none w-4 h-4 mt-1 mr-2 text-purple-700">
                    <path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium text-purple-700">Everything in Take Flight</span>
                </li>
                <li className="flex items-start">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="flex-none w-4 h-4 mt-1 mr-2 text-purple-700">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Unlimited feedback
                </li>
                <li className="flex items-start">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="flex-none w-4 h-4 mt-1 mr-2 text-purple-700">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-800 border-b-2 border-gray-500 border-dotted cursor-pointer" x-data="tooltip()" x-spread="tooltip" x-position="top" title="The person who manages the feedback for the product.">10 manager</span>
                </li>
                <li className="flex items-start">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="flex-none w-4 h-4 mt-1 mr-2 text-purple-700">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-800 border-b-2 border-gray-500 border-dotted cursor-pointer" x-data="tooltip()" x-spread="tooltip" x-position="top" title="User is the person who submits the feedback. We are not counting the people who are upvoting features.">7500 submitters</span>
                </li>
                <li className="flex items-start">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="flex-none w-4 h-4 mt-1 mr-2 text-purple-700">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Unlimited Integrations</span>
                </li>
                <li className="flex items-start">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="flex-none w-4 h-4 mt-1 mr-2 text-purple-700">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Humane support
                </li>
              </ul>
            </div>
            <div className="border-0 rounded-none shadow-none card sm:rounded-lg md:border">
              <div className="flex flex-col justify-between p-6 border-b border-gray-200">
                <div>
                  <p className="mb-1 text-lg font-semibold text-pink-600">Enterprise</p>
                  <p className="my-2 text-4xl font-bold text-gray-900">Custom</p>
                  <p className="text-sm text-gray-500">Organization / month</p>
                </div>
                <a href="#" className="w-full mt-6 btn btn-light btn-lg">Initiate a chat →</a>
              </div>
              <ul className="flex flex-col flex-grow p-6 space-y-3">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-none w-4 h-4 mt-1 mr-2 text-pink-600">
                    <path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium text-pink-600">Everything in Fly High</span>
                </li>
                <li className="flex items-start">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="flex-none w-4 h-4 mt-1 mr-2 text-pink-700">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Unlimited feedback
                </li>
                <li className="flex items-start">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="flex-none w-4 h-4 mt-1 mr-2 text-pink-700">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-800 border-b-2 border-gray-500 border-dotted cursor-pointer" x-data="tooltip()" x-spread="tooltip" x-position="top" title="The person who manages the feedback for the product.">Unlimited manager</span>
                </li>
                <li className="flex items-start">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="flex-none w-4 h-4 mt-1 mr-2 text-pink-700">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-800 border-b-2 border-gray-500 border-dotted cursor-pointer" x-data="tooltip()" x-spread="tooltip" x-position="top" title="User is the person who submits the feedback. We are not counting the people who are upvoting features.">Unlimited submitters</span>
                </li>
                <li className="flex items-start">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="flex-none w-4 h-4 mt-1 mr-2 text-pink-700">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Unlimited Integrations</span>
                </li>
                <li className="flex items-start">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="flex-none w-4 h-4 mt-1 mr-2 text-pink-700">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-800 border-b-2 border-gray-500 border-dotted cursor-pointer" x-data="tooltip()" x-spread="tooltip" x-position="top" title="Access to developers to build custom features and changes for your enterprise.">Feature on-request</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
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


