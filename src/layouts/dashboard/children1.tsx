import { DataNode } from "antd/lib/tree"
import { useRouter } from "next/router"
import { FC } from "react"
import { TreeAnt } from "../../components/ant/tree"
import { Heading, HeadingDashboard, HeadingForm, Main } from "../../components/component"
import { FormChildren } from "../../components/form/childrenForm"
import { GridSection } from "../../components/grid/gridPages"
import { Children, ISite } from "../../interfaces/site"
import { getQuery, lastElement } from '../../utils/function';
import { getSiteChildrens2, getChildren1DataForm } from "../../utils/functionV2"

interface Pages {
  sites: ISite[]
}

export const Children1: FC<Pages> = ({ sites }) => {
  const { asPath } = useRouter()
  return (
    <>
    {
        ['new', 'home'].includes(lastElement(asPath))
        ?
        null
        :
        <>
        <HeadingDashboard title='Pages'/>
        <GridSection data={getSiteChildrens2(sites, asPath)} />
        </>
      }
      <HeadingForm title="Page" />
      <FormChildren data={getChildren1DataForm(sites, asPath)} />

    </>
  )
}