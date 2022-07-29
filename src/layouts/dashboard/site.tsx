import { DataNode } from "antd/lib/tree"
import { useRouter } from "next/router"
import { FC } from "react"
import { TreeAnt } from "../../components/ant/tree"
import { Heading, HeadingDashboard, Main } from "../../components/component"
import { FormSite } from "../../components/form/siteForm"
import { Grid } from "../../components/grid/grid"
import { ISite } from "../../interfaces/site"
import { getURL } from "../../utils/function"
import { getSiteDataForm, getSiteDS } from "../../utils/getSiteByUrl"

interface Site {
  sites: ISite[]
}
const data = [
  {
    title: 'pages',
    href: 'pages',
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
export const Site: FC<Site> = ({ sites }) => {
  const { asPath, pathname, query } = useRouter()
  const url = asPath.split('/')

  return (
    <>
      <HeadingDashboard title='Sitios' url={asPath} />
      {
        url[url.length - 1] === "new"
          ?
          null
          :
          <Grid data={data} url={asPath} />
      }
      <FormSite data={getSiteDataForm(sites, asPath)} />

    </>
  )
}