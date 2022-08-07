import { useRouter } from "next/router"
import { FC } from "react"
import Link from 'next/link';
import { Children } from "../../interfaces/siteV1";

interface Props {
  children0: Children
}
export const Blogs: FC<Props> = ({ children0 }) => {
  const { title } = children0.body
  const {asPath} = useRouter()

  return (
    <section className="px-4 py-24 mx-auto max-w-7xl">
      <h2 className="pb-8 mb-12 text-2xl font-extrabold leading-tight text-gray-900 border-b border-gray-200 md:text-4xl">All Articles</h2>
      <div className="grid grid-cols-3 gap-3">
        <div className="w-full col-span-2">
          <div className="flex flex-col space-y-16">
             <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
                <img src="https://kutty.netlify.app/brand/og-white.png" className="object-cover w-full h-40 col-span-1 bg-center" alt="Kutty" loading="lazy" />
                <div className="col-span-1 md:col-span-3">
                  <p className="mb-2 -mt-1 text-sm font-normal text-gray-500">April 16, 2020</p>
                  <h2 className="mb-2 text-xl font-extrabold leading-snug text-gray-800">
                    <a href="#" className="text-gray-900 hover:text-orange-500">Implement Dark Mode in Your Android App</a>
                  </h2>
                  <p className="mb-3 text-sm font-normal text-gray-500">
                    Are you curious to implement the Dark Mode in Android Application? Here’s the perfect guideline to attain the Dark Mode in Android Application. Don’t waste your time; just implement and
                    enjoy Dark Mode.
                  </p>
                  <a href="#" className="btn btn-light btn-sm">Read More</a>
                </div>
              </div>
          </div>
          <div className="pt-10 mt-10 border-t border-gray-200">
            <a href="#" className="w-full btn btn-light btn-lg md:w-auto">Load More</a>
          </div>
        </div>
        <div className="col-span-1">
          <div className="hidden py-2 xl:col-span-3 lg:col-span-4 md:hidden lg:block">
            <div className="mb-8 space-x-5 border-b-2 border-opacity-10 border-orange-600">
              <button type="button" className="pb-5 text-xs font-bold uppercase border-b-2 border-orange-600">Latest</button>
              <button type="button" className="pb-5 text-xs font-bold uppercase border-b-2 border-transparent text-gray-600">Popular</button>
            </div>
            <div className="flex flex-col divide-y divide-gray-300">
              <div className="flex px-1 py-4">
                <img alt="" className="flex-shrink-0 object-cover w-20 h-20 mr-4 bg-gray-500" src="https://source.unsplash.com/random/244x324" />
                <div className="flex flex-col flex-grow">
                  <a rel="noopener noreferrer" href="#" className="font-serif hover:underline">Aenean ac tristique lorem, ut mollis dui.</a>
                  <p className="mt-auto text-xs text-gray-600">5 minutes ago
                    <a rel="noopener noreferrer" href="#" className="block text-blue-400 lg:ml-2 lg:inline hover:underline">Politics</a>
                  </p>
                </div>
              </div>
              <div className="flex px-1 py-4">
                <img alt="" className="flex-shrink-0 object-cover w-20 h-20 mr-4 bg-gray-500" src="https://source.unsplash.com/random/245x325" />
                <div className="flex flex-col flex-grow">
                  <a rel="noopener noreferrer" href="#" className="font-serif hover:underline">Nulla consectetur efficitur.</a>
                  <p className="mt-auto text-xs text-gray-600">14 minutes ago
                    <a rel="noopener noreferrer" href="#" className="block text-blue-400 lg:ml-2 lg:inline hover:underline">Sports</a>
                  </p>
                </div>
              </div>
              <div className="flex px-1 py-4">
                <img alt="" className="flex-shrink-0 object-cover w-20 h-20 mr-4 bg-gray-500" src="https://source.unsplash.com/random/246x326" />
                <div className="flex flex-col flex-grow">
                  <a rel="noopener noreferrer" href="#" className="font-serif hover:underline">Vitae semper augue purus tincidunt libero.</a>
                  <p className="mt-auto text-xs text-gray-600">22 minutes ago
                    <a rel="noopener noreferrer" href="#" className="block text-blue-400 lg:ml-2 lg:inline hover:underline">World</a>
                  </p>
                </div>
              </div>
              <div className="flex px-1 py-4">
                <img alt="" className="flex-shrink-0 object-cover w-20 h-20 mr-4 bg-gray-500" src="https://source.unsplash.com/random/247x327" />
                <div className="flex flex-col flex-grow">
                  <a rel="noopener noreferrer" href="#" className="font-serif hover:underline">Suspendisse potenti.</a>
                  <p className="mt-auto text-xs text-gray-600">37 minutes ago
                    <a rel="noopener noreferrer" href="#" className="block text-blue-400 lg:ml-2 lg:inline hover:underline">Business</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}