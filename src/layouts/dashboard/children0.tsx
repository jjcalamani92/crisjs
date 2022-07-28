import { DataNode } from "antd/lib/tree"
import { useRouter } from "next/router"
import { FC } from "react"
import useSWR from "swr"
import { TreeAnt } from "../../components/ant/tree"
import { Heading, HeadingDashboard, Main } from "../../components/component"
import { FormChildren } from "../../components/form/childrenForm"
import { GridSection } from "../../components/grid/gridPages"
import { CHILDREN_1 } from "../../graphql"
import { ISite } from "../../interfaces/site"
import { getQuery } from '../../utils/function';
import { getChildren0DataForm, getSiteChildren1 } from "../../utils/getSiteByUrl"

interface Pages {
  tree: DataNode[]
  sites: ISite[]
}

export const Children0: FC<Pages> = ({ sites, tree }) => {
  const { asPath, pathname, query } = useRouter()
  const slug = getQuery(asPath)
  const { data, error, isValidating } = useSWR([CHILDREN_1, {_id: process.env.API_SITE}])
  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  console.log(getSiteChildren1(sites, asPath));
  console.log(data.site.route);
  
  return (
    <Main>
      <div className='grid grid-cols-5 gap-3'>
        <div className='col-span-1'>
          <Heading title='Rutas' />
          <TreeAnt tree={tree} />

        </div>
        <main className='col-span-4'>
          <HeadingDashboard title='Sitios' url={asPath} />
          {
            slug[4] !== 'new'
            ?
            <GridSection data={getSiteChildren1(sites, asPath)}/>
            :
            null
          }
          <FormChildren data={getChildren0DataForm(sites, asPath)} />
        </main>
      </div>
    </Main>
  )
}