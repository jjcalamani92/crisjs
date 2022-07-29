import { useRouter } from "next/router"
import { FC } from "react"
import { Heading, HeadingDashboard, Main } from "../../components/component"
import { GridSection } from "../../components/grid/gridPages"
import { ISite } from "../../interfaces/site"
import { getSite, getSiteDataForm, getSiteChildren0 } from "../../utils/functionV2"

interface Route {
  sites: ISite[]
}

export const Route: FC<Route> = ({ sites }) => {
  const { asPath, pathname, query } = useRouter()
  return (
    <>
      <HeadingDashboard title='Páginas' url={asPath} />
      <GridSection data={getSiteChildren0(sites, asPath)} />
    </>
  )
}