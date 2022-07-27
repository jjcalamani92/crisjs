import { DataNode } from "antd/lib/tree"
import { useRouter } from "next/router"
import { FC } from "react"
import { TreeAnt } from "../../components/ant/tree"
import { Heading, HeadingDashboard, Main } from "../../components/component"
import { ISite } from "../../interfaces/site"

interface Pages {
  tree: DataNode[]
  sites: ISite[]
}
const data = [
  {
    title: 'pages',
    href: 'pages',
    imageSrc: "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1655217461/14.1_no-image.jpg_gkwtld.jpg"
  },
  {
    title: 'products',
    href: 'products',
    imageSrc: "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1655217461/14.1_no-image.jpg_gkwtld.jpg"
  },
  {
    title: 'marks',
    href: 'marks',
    imageSrc: "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1655217461/14.1_no-image.jpg_gkwtld.jpg"
  },

]
export const Pages: FC<Pages> = ({ sites, tree }) => {
  const { asPath, pathname } = useRouter()
  // console.log('site', getSite(sites, asPath));
  // console.log('route', getSiteChildren(sites, asPath));
  
  
  return (
    <Main>
      <div className='grid grid-cols-5 gap-3'>
        <div className='col-span-1'>
          <Heading title='Rutas' />
          <TreeAnt tree={tree} />

        </div>
        <main className='col-span-4'>
          <HeadingDashboard title='Sitios' url={asPath} />
          <h1>Hola</h1>
          {/* <FormSite site={site} url={getURL(pathname)} /> */}
        </main>
      </div>
    </Main>
  )
}