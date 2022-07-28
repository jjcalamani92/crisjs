import { DataNode } from "antd/lib/tree"
import { useRouter } from "next/router"
import { FC } from "react"
import { TreeAnt } from "../../components/ant/tree"
import { Heading, HeadingDashboard, Main } from "../../components/component"
import { FormChildren } from "../../components/form/childrenForm"
import { GridSection } from "../../components/grid/gridPages"
import { Children, ISite } from "../../interfaces/site"
import { getQuery } from '../../utils/function';
import { getSiteChildren2 } from "../../utils/functionV2"
import { getChildren1DataForm, getSite, getSiteChildren0, getSiteChildren1 } from "../../utils/getSiteByUrl"

interface Pages {
  tree: DataNode[]
  sites: ISite[]
}

export const Children1: FC<Pages> = ({ sites, tree }) => {
  const { asPath, pathname, query } = useRouter()
  const slug = getQuery(asPath)
  // console.log(getSiteChildren2(sites, asPath));
  
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
            slug[5] !== 'new'
            ?
            <GridSection data={getSiteChildren2(sites, asPath)}/>
            :
            null
          }
          <FormChildren data={getChildren1DataForm(sites, asPath)} />
        </main>
      </div>
    </Main>
  )
}