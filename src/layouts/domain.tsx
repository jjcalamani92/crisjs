import { DataNode } from "antd/lib/tree"
import { useRouter } from "next/router"
import { FC } from "react"
import { TreeAnt } from "../components/ant/tree"
import { Heading, HeadingDashboard, Main } from "../components/component"
import { GridSite } from "../components/grid/gridSite"
import { ISite } from "../interfaces/site"

interface Domain {
  tree: DataNode[]
  sites: ISite[]
}

export const Domain:FC<Domain> = ({sites, tree}) => {
  const {asPath} = useRouter()
  // console.log(asPath.split('/'));

  return (
    <Main>
      <div className='grid grid-cols-5 gap-3'>
        <div className='col-span-1'>
          <Heading title='Rutas' />
          <TreeAnt tree={tree} />

        </div>
        <main className='col-span-4'>
          <HeadingDashboard title='Sitio' url={asPath} />
          <GridSite data={sites} />
        </main>
      </div>
    </Main>
  )
}