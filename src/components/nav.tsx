import { Popover, Transition } from "@headlessui/react"
import Link from "next/link"
import { FC, Fragment } from "react"
import { Children } from "../interfaces/site"
import { classNames } from "../utils/function"
import { Icon } from "./icon"

type Nav = {
  data: Children[]
}
const recentPosts = [
  { id: 1, name: 'Como crear rutas en mi sitio web', href: '#' },
  { id: 2, name: 'Como crear marcas de mis productos', href: '#' },
  { id: 3, name: 'Creando mi primer producto', href: '#' },
]
const callsToAction = [
  // { name: 'Watch Demo', href: '#', icon: PlayIcon },
  { name: 'Contactar con Ventas', href: '#', icon: "phone-icon" },
]

export const Nav:FC<Nav> = ({data}) => {
  const services = data.find((data: { href: string }) => data.href === 'services')
  const more = data.find((data: { href: string }) => data.href === 'mas')
  const pages = data.filter((data: { children: Children[] }) => data.children?.length === 0)
  return (
    <Popover.Group as="nav" className="hidden md:flex space-x-10  z-20">
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              className={classNames(
                open ? 'text-gray-900' : 'text-gray-500',
                'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500'
              )}
            >
              <span>{services!.name}</span>
              <Icon
                className={classNames(
                  open ? 'text-gray-600' : 'text-gray-400',
                  'ml-2 h-5 w-5 group-hover:text-gray-500'
                )}
                icon="chevron-down"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute z-20 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                    {services!.children.map((item: Children) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                      >
                        <Icon icon={`${item.icon}`} />
                        <div className="ml-4">
                          <p className="text-base font-medium text-gray-900">{item.name}</p>
                          <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                  <div className="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                    {callsToAction.map((item) => (
                      <div key={item.name} className="flow-root">
                        <a
                          href={item.href}
                          className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
                        >
                          <Icon className="flex-shrink-0 h-6 w-6 text-gray-400" icon="phone-icon"/>
                          <span className="ml-3">{item.name}</span>
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
      {
        pages.map((data, i: number) => (
          <Link href={data.href} key={i}>
            <a className="text-base font-medium text-gray-500 hover:text-gray-900">
              {data.name}
            </a>
          </Link>
        ))
      }



      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              className={classNames(
                open ? 'text-gray-900' : 'text-gray-500',
                'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500'
              )}
            >
              <span>Más</span>
              <Icon
                className={classNames(
                  open ? 'text-gray-600' : 'text-gray-400',
                  'ml-2 h-5 w-5 group-hover:text-gray-500'
                )}
                icon="chevron-down"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute z-20 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0 ">
                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                    {more!.children.map((data: Children, i: number) => (
                      <Link key={i}
                        href={data.href}>
                        <a
                          className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                        >
                          <Icon icon={`${data.icon}`} />
                          <div className="ml-4">
                            <p className="text-base font-medium text-gray-900">{data.name}</p>
                            <p className="mt-1 text-sm text-gray-500">{data.description}</p>
                          </div>
                        </a>
                      </Link>
                    ))}
                  </div>
                  <div className="px-5 py-5 bg-gray-50 sm:px-8 sm:py-8">
                    <div>
                      <h3 className="text-sm tracking-wide font-medium text-gray-500 uppercase">Publicaciones Recientes</h3>
                      <ul role="list" className="mt-4 space-y-4">
                        {recentPosts.map((post) => (
                          <li key={post.id} className="text-base truncate">
                            <a href={post.href} className="font-medium text-gray-900 hover:text-gray-700">
                              {post.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-5 text-sm">
                      <a href="#" className="font-medium text-orange-500 hover:text-orange-600">
                        {' '}
                        Ver todas las publicaciones <span aria-hidden="true">&rarr;</span>
                      </a>
                    </div>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </Popover.Group>
  )
}