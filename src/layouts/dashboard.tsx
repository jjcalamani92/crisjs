import { DataNode } from "antd/lib/tree"
import { useRouter } from "next/router"
import { FC } from "react"
import { TreeAnt } from "../components/ant/tree"
import { Heading, HeadingDashboard, Main } from "../components/component"
import { GridSite } from "../components/grid/gridSite"
import { ISite } from "../interfaces/site"

interface Dashboard {
  tree: DataNode[]
  sites: ISite[]
}

export const Dashboard:FC<Dashboard> = ({sites, tree}) => {
  const {asPath} = useRouter()
  return (
    <Main>
      <div className='grid grid-cols-5 gap-3'>
        <div className='col-span-1'>
          <Heading title='Rutas' />
          <TreeAnt tree={tree} />

        </div>
        <main className='col-span-4'>
          <HeadingDashboard title='Sitios' url={asPath} />
          <GridSite data={sites} />
        </main>
      </div>
    </Main>
  )
}