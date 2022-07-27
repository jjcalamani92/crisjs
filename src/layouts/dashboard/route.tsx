import { DataNode } from "antd/lib/tree"
import { useRouter } from "next/router"
import { FC } from "react"
import { TreeAnt } from "../../components/ant/tree"
import { Heading, HeadingDashboard, Main } from "../../components/component"
import { GridSection } from "../../components/grid/gridPages"
import { ISite } from "../../interfaces/site"
import { getSiteChildren0 } from "../../utils/getSiteByUrl"

interface Route {
  tree: DataNode[]
  sites: ISite[]
}

export const Route: FC<Route> = ({ sites, tree }) => {
  const { asPath, pathname, query } = useRouter()
  
  return (
    <Main>
      <div className='grid grid-cols-5 gap-3'>
        <div className='col-span-1'>
          <Heading title='Rutas' />
          <TreeAnt tree={tree} />
        </div>
        <main className='col-span-4'>
          <HeadingDashboard title='Páginas' url={asPath} />
          <GridSection data={getSiteChildren0(sites, asPath)}/>
        </main>
      </div>
    </Main>
  )
}