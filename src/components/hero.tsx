/* This example requires Tailwind CSS v2.0+ */
import { FC, Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { Main } from './component'
import { Body } from '../interfaces/site'
import Image from 'next/image'


const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

interface Props {
  contain: Body
}

export const Hero: FC<Props> = ({ contain }) => {
  const { h1, span, p, imageSrc, imageAlt } = contain
  return (
    <Main>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 content-center'>
        <main className="mt-10  mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-12 lg:px-8 flex ">
          <div className="sm:text-center lg:text-left ">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl  flex-auto">
              <span className="block xl:inline texthel">{h1}</span>{' '}
              <span className="block text-orange-600 xl:inline">{span}</span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              {p}
            </p>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 md:py-4 md:text-lg md:px-10"
                >
                  Get started
                </a>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-orange-700 bg-orange-100 hover:bg-orange-200 md:py-4 md:text-lg md:px-10"
                >
                  Live demo
                </a>
              </div>
            </div>
          </div>
        </main>
        {/* <div className="relative">
          <Image
            className="absolute h-56 w-full sm:h-72 md:h-96 lg:w-full lg:h-full"
            src={imageSrc}
            alt={imageAlt}
            width={500}
            height={200}
            objectFit="cover"
          />
        </div> */}
      </div>
    </Main>
    // <div className="relative bg-white overflow-hidden">
    //   <div className="max-w-7xl mx-auto">
    //     <div className=" z-0 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
    //       <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
    //         <div className="sm:text-center lg:text-left">
    //           <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
    //             <span className="block xl:inline">Data to enrich your</span>{' '}
    //             <span className="block text-orange-600 xl:inline">online business</span>
    //           </h1>
    //           <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
    //             Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
    //             fugiat veniam occaecat fugiat aliqua.
    //           </p>
    //           <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
    //             <div className="rounded-md shadow">
    //               <a
    //                 href="#"
    //                 className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 md:py-4 md:text-lg md:px-10"
    //               >
    //                 Get started
    //               </a>
    //             </div>
    //             <div className="mt-3 sm:mt-0 sm:ml-3">
    //               <a
    //                 href="#"
    //                 className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-orange-700 bg-orange-100 hover:bg-orange-200 md:py-4 md:text-lg md:px-10"
    //               >
    //                 Live demo
    //               </a>
    //             </div>
    //           </div>
    //         </div>
    //       </main>
    //     </div>
    //   </div>
    //   <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
    //     <img
    //       className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
    //       src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
    //       alt=""
    //     />
    //   </div>
    // </div>
  )
}