import { DataNode } from "antd/lib/tree"
import { useRouter } from "next/router"
import { FC } from "react"
import { TreeAnt } from "../../components/ant/tree"
import { Heading, HeadingDashboard, Main } from "../../components/component"
import { FormSite } from "../../components/form/siteForm"
import { Grid } from "../../components/grid/grid"
import { GridSite } from "../../components/grid/gridSite"
import { ISite } from "../../interfaces/site"

interface Site {
  sites: ISite[]
}

export const Sites: FC<Site> = ({ sites }) => {
  const { asPath, pathname, query } = useRouter()
  const url = asPath.split('/')
  
  return (
    <>
      <HeadingDashboard title='Sitios'/>
      <GridSite data={sites} />
    </>
  )
}