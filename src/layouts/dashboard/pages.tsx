import { useRouter } from "next/router"
import { FC, useState } from "react"
import { Heading, HeadingDashboard, Main } from "../../components/component"
import { GridSection } from "../../components/grid/gridPages"
import { ISite } from "../../interfaces/site"
import { getSiteChildrens0 } from "../../utils/functionV2"
interface Pages {
  sites: ISite[]
}

export const Pages: FC<Pages> = ({ sites }) => {
  const { asPath } = useRouter()
  
  return (
    <>
      <HeadingDashboard title='Pages'/>
      <GridSection data={getSiteChildrens0(sites, asPath)} />
    </>
  )
}