import { DataNode } from "antd/lib/tree"
import { useRouter } from "next/router"
import { FC } from "react"
import useSWR from "swr"
import { TreeAnt } from "../../components/ant/tree"
import { Heading, HeadingDashboard, Main } from "../../components/component"
import { GridSection } from "../../components/grid/gridPages"
import { CHILDREN_0 } from "../../graphql"
import { ISite } from "../../interfaces/site"
import { getSiteChildren0 } from "../../utils/getSiteByUrl"

interface Route {
  tree: DataNode[]
  sites: ISite[]
}

export const Route: FC<Route> = ({ sites, tree }) => {
  const { asPath, pathname, query } = useRouter()
  // console.log(getSiteChildren0(sites, asPath));
  const { data, error, isValidating } = useSWR([CHILDREN_0, {_id: process.env.API_SITE}])
  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  // console.log(data.site.route);
  
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
          <GridSection data={data.site.route}/>
        </main>
      </div>
    </Main>
  )
}