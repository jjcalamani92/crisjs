import { DataNode } from "antd/lib/tree"
import { useRouter } from "next/router"
import { FC } from "react"
import { TreeAnt } from "../../components/ant/tree"
import { Heading, HeadingDashboard, Main } from "../../components/component"
import { FormChildren } from "../../components/form/childrenForm"
import { GridSection } from "../../components/grid/gridPages"
import { Children, ISite } from "../../interfaces/site"
import { getQuery } from '../../utils/function';
import { getChildren1DataForm, getChildren2DataForm, getSite, getSiteChildren0, getSiteChildren1, getSiteChildren2, getSiteChildren3 } from "../../utils/getSiteByUrl"

interface Pages {
  sites: ISite[]
}

export const Children2: FC<Pages> = ({ sites }) => {
  const { asPath, pathname, query } = useRouter()
  const slug = getQuery(asPath)

  return (
    <>
      <HeadingDashboard title='Sitios'/>
      {
        slug[6] !== 'new' && getSiteChildren2(sites, asPath).length !== 0
          ?
          <GridSection data={getSiteChildren3(sites, asPath)} />
          :
          null
      }
      <FormChildren data={getChildren2DataForm(sites, asPath)} />

    </>
  )
}