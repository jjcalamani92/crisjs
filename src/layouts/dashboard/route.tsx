import { DataNode } from "antd/lib/tree"
import { useRouter } from "next/router"
import { FC } from "react"
import { TreeAnt } from "../../components/ant/tree"
import { Heading, HeadingDashboard, Main } from "../../components/component"
import { GridSection } from "../../components/grid/gridPages"
import { ISite } from "../../interfaces/site"
import { getSite, getSiteDataForm, getSiteChildren0 } from "../../utils/functionV2"
// import { getSiteChildren0 } from "../../utils/getSiteByUrl"

interface Route {
  tree: DataNode[]
  sites: ISite[]
}

export const Route: FC<Route> = ({ sites, tree }) => {
  const { asPath, pathname, query } = useRouter()
  // console.log(getSite(sites, asPath));
  // console.log(getSiteDataForm(sites, asPath));
  // console.log(getSiteChildren0(sites, asPath));
  
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
          {/* <SWRConfig value={{ provider: () => new Map() }}>
            <GridSection data={data.site.route}/>
          </SWRConfig> */}
        </main>
      </div>
    </Main>
  )
}