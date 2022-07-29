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
import { getSiteChildren1 } from "../../utils/functionV2"
import { getChildren0DataForm, getSiteChildren0 } from '../../utils/getSiteByUrl';

interface Pages {
  sites: ISite[]
}

// const fetcher = (query: RequestDocument) => request(`${process.env.APIS_URL}/graphql`, query)


export const Children0: FC<Pages> = ({ sites }) => {
  const { asPath, pathname, query } = useRouter()
  const slug = getQuery(asPath)

  return (
    <>
      <HeadingDashboard title='Sitios' url={asPath} />
      {
        slug[4] !== 'new' && getSiteChildren0(sites, asPath).length !== 0
          ?
          <GridSection data={getSiteChildren1(sites, asPath)} />
          :
          null
      }
      <FormChildren data={getChildren0DataForm(sites, asPath)} />

    </>
  )
}