/* This example requires Tailwind CSS v2.0+ */
import { FC, Fragment, useContext } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  BookmarkAltIcon,
  CalendarIcon,
  GlobeAltIcon,
  CursorClickIcon,
  MenuIcon,
  PhoneIcon,
  PlayIcon,
  RefreshIcon,
  ShieldCheckIcon,
  SupportIcon,
  ViewGridIcon,
  XIcon,
  ChartBarIcon,
  DesktopComputerIcon,
  CodeIcon,
  QuestionMarkCircleIcon
} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import Link from 'next/link'
import { Children } from '../interfaces/site';
import { Icon } from './icon'
import { Nav } from './nav'


const solutions = [
  {
    name: 'Diseño Web',
    description: 'Diseño, implementación y mantenimiento de sitios web. ',
    href: '#',
    icon: GlobeAltIcon,
  },
  {
    name: 'Seo Marketing',
    description: 'Mejoramos el posicionamiento de tu sitio web en la lista de resultados de Google, Bing, u otros buscadores de internet.',
    href: '#',
    icon: ChartBarIcon,
  },
  {
    name: 'Alojamiento Web',
    description: "La solución completa de Web Hosting en Bolivia. Dominio, SSL y Hosting, todo incluído. ",
    href: '#',
    icon: ShieldCheckIcon
  },
  {
    name: 'Publicidad Digital',
    description: "Trabajamos con tu marca, servicio o producto para que sea visible y genere rendimiento en internet.",
    href: '#',
    icon: ViewGridIcon,
  },
  {
    name: 'Diseño De Logos',
    description: 'Nuestros diseños de logotipos son únicos; cada logotipo se crea con IA para que se adapte perfectamente a su negocio e identidad de marca. ',
    href: '#',
    icon: DesktopComputerIcon,
  },
]

const resources = [
  {
    name: 'Centro de ayuda',
    description: 'Obtenga respuestas a todas sus preguntas en nuestros foros o comuniquese con soporte.',
    href: '#',
    icon: SupportIcon,
  },
  {
    name: 'Guias',
    description: 'Aprende a maximizar nuestra plataforma para sacarle el máximo partido.',
    href: '#',
    icon: BookmarkAltIcon,
  },
  {
    name: 'FAQs',
    description: 'Preguntas frecuentes.',
    href: '/FAQs',
    icon: QuestionMarkCircleIcon,
  },
  // { name: 'Security', description: 'Understand how we take your privacy seriously.', href: '#', icon: ShieldCheckIcon },
]



interface Header {
  data: Children[] | any
}
export const Header: FC<Header> = ({ data }) => {



  return (
    <Popover className="relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-2 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/">
              <a>
                <Icon
                  className="w-12 h-12 text-orange-500"
                  icon='code-icon'
                />
              </a>
            </Link>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Nav data={data} />
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <a href="#" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
              Sign in
            </a>
            <a
              href="#"
              className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-orange-500 hover:bg-orange-600"
            >
              Sign up
            </a>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel focus className="z-20 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden absolute">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <Link href="/">
                  <a>
                    <CodeIcon
                      className="w-12 h-12 text-orange-500"
                      aria-hidden="true"
                    />
                  </a>
                </Link>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {solutions.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                    >
                      <item.icon className="flex-shrink-0 h-6 w-6 text-orange-600" aria-hidden="true" />
                      <span className="ml-3 text-base font-medium text-gray-900">{item.name}</span>
                    </a>
                  ))}
                </nav>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                <Link href="/prices">
                  <a className="text-base font-medium text-gray-900 hover:text-gray-700">
                    Precios
                  </a>
                </Link>

                {/* <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                  Docs
                </a> */}
                {resources.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div>
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-orange-500 hover:bg-orange-600"
                >
                  Sign up
                </a>
                <p className="mt-6 text-center text-base font-medium text-gray-500">
                  Existing customer?{' '}
                  <a href="#" className="text-orange-600 hover:text-orange-500">
                    Sign in
                  </a>
                </p>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}
