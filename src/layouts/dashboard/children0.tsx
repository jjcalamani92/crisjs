import { DataNode } from "antd/lib/tree"
import request, { RequestDocument } from "graphql-request"
import { useRouter } from "next/router"
import { FC } from "react"
import useSWR from "swr"
import { TreeAnt } from "../../components/ant/tree"
import { Heading, HeadingDashboard, Main } from "../../components/component"
import { FormChildren } from "../../components/form/childrenForm"
import { GridSection } from "../../components/grid/gridPages"
import { CHILDREN_1, SITES } from "../../graphql"
import { Children, ISite } from "../../interfaces/site"
import { getQuery } from '../../utils/function';
import { getChildren0DataForm, getSiteChildren1, getSiteChildren0 } from '../../utils/getSiteByUrl';

interface Pages {
  tree: DataNode[]
  sites: ISite[]
}

// const fetcher = (query: RequestDocument) => request(`${process.env.APIS_URL}/graphql`, query)


export const Children0: FC<Pages> = ({ sites, tree }) => {
  const { asPath, pathname, query } = useRouter()
  const slug = getQuery(asPath)
  // const { data, error, isValidating } = useSWR([CHILDREN_1, {_id: process.env.API_SITE}])
  // // const {data, error, isValidating} = useSWR(SITES, fetcher)
  // if (error) return <div>failed to load</div>
  // if (!data) return <div>loading...</div>
  // const c0 = data.site.route.map((data:Children) => data.children)
  // console.log(c0);
  // console.log(getSiteChildren1(sites, asPath));
  // console.log(getSiteChildren0(sites, asPath));
  
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
            slug[4] !== 'new' && getSiteChildren0(sites, asPath).length !== 0
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