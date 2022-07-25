import { DataNode } from "antd/lib/tree"
import { useRouter } from "next/router"
import { FC } from "react"
import { TreeAnt } from "../../components/ant/tree"
import { Heading, HeadingDashboard, Main } from "../../components/component"
import { FormSite } from "../../components/form"
import { SiteForm } from "../../components/form/siteForm"
import { GridSite } from "../../components/grid/gridSite"
import { ISite } from "../../interfaces/site"
import { getURL } from "../../utils/function"
import { getDataSiteForm } from "../../utils/getDataSite"

interface Site {
  tree: DataNode[]
  sites: ISite[]
}
export const Site: FC<Site> = ({ sites, tree }) => {
  const { asPath, pathname } = useRouter()
  return (
    <Main>
      <div className='grid grid-cols-5 gap-3'>
        <div className='col-span-1'>
          <Heading title='Rutas' />
          <TreeAnt tree={tree} />

        </div>
        <main className='col-span-4'>
          <HeadingDashboard title='Sitios' url={asPath} />
          <SiteForm site={getDataSiteForm(sites, asPath)} />
          {/* <FormSite site={site} url={getURL(pathname)} /> */}
        </main>
      </div>
    </Main>
  )
}