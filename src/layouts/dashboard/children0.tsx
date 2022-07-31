import { useRouter } from "next/router"
import { FC } from "react"
import { Heading, HeadingDashboard, HeadingForm, Main } from "../../components/component"
import { FormChildren } from "../../components/form/childrenForm"
import { GridSection } from "../../components/grid/gridPages"
import { Children, ISite } from "../../interfaces/site"
import { lastElement } from '../../utils/function';
import { getSiteChildrens1, getChildren0DataForm } from "../../utils/functionV2"

interface Pages {
  sites: ISite[]
}


export const Children0: FC<Pages> = ({ sites }) => {
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
        <GridSection data={getSiteChildrens1(sites, asPath)} />
        </>
      }
      
      <HeadingForm title="Page" />
      <FormChildren data={getChildren0DataForm(sites, asPath)} />

    </>
  )
}