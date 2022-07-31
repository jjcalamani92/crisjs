import { DataNode } from "antd/lib/tree"
import { useRouter } from "next/router"
import { FC } from "react"
import {  HeadingDashboard, HeadingForm } from "../../components/component"
import { FormChildren } from "../../components/form/childrenForm"
import { GridSection } from "../../components/grid/gridPages"
import { ISite } from "../../interfaces/site"
import { lastElement } from '../../utils/function';
import { getSiteChildrens3, getChildren2DataForm } from "../../utils/functionV2"
interface Pages {
  sites: ISite[]
}

export const Children2: FC<Pages> = ({ sites }) => {
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
        <GridSection data={getSiteChildrens3(sites, asPath)} />
        </>
      }
      <HeadingForm title="Page" />
      <FormChildren data={getChildren2DataForm(sites, asPath)} />

    </>
  )
}