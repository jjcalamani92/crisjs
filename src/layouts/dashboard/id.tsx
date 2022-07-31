import { DataNode } from "antd/lib/tree"
import { useRouter } from "next/router"
import { FC, useState } from "react"
import { Heading, HeadingDashboard, HeadingForm, Main } from "../../components/component"

import { FormSite } from "../../components/form/siteForm"
import { Grid } from "../../components/grid/grid"
import { ISite } from "../../interfaces/site"
import { lastElement } from "../../utils/function"
import { getSiteDataForm } from "../../utils/functionV2"

interface Id {
  sites: ISite[]
}
const data = [
  {
    title: 'pages',
    href: 'pages',
    imageSrc: "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1655217461/14.1_no-image.jpg_gkwtld.jpg"
  },
  {
    title: 'blogs',
    href: 'blogs',
    imageSrc: "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1655217461/14.1_no-image.jpg_gkwtld.jpg"
  },
  {
    title: 'products',
    href: 'products',
    imageSrc: "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1655217461/14.1_no-image.jpg_gkwtld.jpg"
  },
  {
    title: 'marks',
    href: 'marks',
    imageSrc: "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1655217461/14.1_no-image.jpg_gkwtld.jpg"
  },
]
export const Id: FC<Id> = ({ sites }) => {
  const { asPath } = useRouter()

  return (
    <>
    {
        ['new', 'home'].includes(lastElement(asPath))
        ?
        null
        :
        <>
        <HeadingDashboard title='Site'/>
        <Grid data={data} />
        </>
      }
     
      <HeadingForm title="Site" />
      <FormSite data={getSiteDataForm(sites, asPath)} />


    </>
  )
}